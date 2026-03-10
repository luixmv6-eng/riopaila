/**
 * ============================================================================
 * UTILIDADES DE SEGURIDAD - CASTILLA AGRÍCOLA S.A.
 * ============================================================================
 * 
 * Funciones de seguridad para sanitización, validación, y protección.
 * TODO el código es nativo sin dependencias externas.
 * 
 * INCLUYE:
 * - Sanitización de inputs (XSS prevention)
 * - Validación de datos
 * - Generación de tokens seguros
 * - Logging de eventos de seguridad
 * - Rate limiting en memoria
 * ============================================================================
 */

/* ==========================================================================
   SANITIZACIÓN DE INPUTS
   --------------------------------------------------------------------------
   Previene ataques XSS limpiando inputs de código malicioso
   ========================================================================== */

/**
 * Mapa de caracteres HTML que deben escaparse
 */
const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
}

/**
 * Escapa caracteres HTML peligrosos
 * 
 * @param str - String a escapar
 * @returns String con caracteres HTML escapados
 */
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"'`=/]/g, char => HTML_ESCAPE_MAP[char] || char)
}

/**
 * Sanitiza un input de texto eliminando código potencialmente peligroso
 * 
 * @param input - Cualquier valor de entrada
 * @returns String sanitizado
 * 
 * @example
 * const clean = sanitizeInput('<script>alert("xss")</script>')
 * // Retorna: ''
 */
export function sanitizeInput(input: unknown): string {
  // Si no es string, convertir o retornar vacío
  if (input === null || input === undefined) return ''
  if (typeof input !== 'string') {
    input = String(input)
  }
  
  let sanitized = input as string
  
  // 1. Eliminar tags HTML/XML
  sanitized = sanitized.replace(/<[^>]*>/g, '')
  
  // 2. Eliminar atributos de eventos JavaScript
  sanitized = sanitized.replace(/on\w+\s*=/gi, '')
  
  // 3. Eliminar URLs de JavaScript
  sanitized = sanitized.replace(/javascript:/gi, '')
  
  // 4. Eliminar expresiones de datos
  sanitized = sanitized.replace(/data:/gi, '')
  
  // 5. Eliminar VBScript
  sanitized = sanitized.replace(/vbscript:/gi, '')
  
  // 6. Eliminar caracteres de control (excepto espacios y saltos de línea)
  sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
  
  // 7. Normalizar espacios múltiples
  sanitized = sanitized.replace(/\s+/g, ' ')
  
  // 8. Trim
  sanitized = sanitized.trim()
  
  return sanitized
}

/**
 * Sanitiza un objeto completo recursivamente
 * 
 * @param obj - Objeto a sanitizar
 * @returns Objeto con todos los strings sanitizados
 */
export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const sanitized: Record<string, unknown> = {}
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      sanitized[key] = sanitizeObject(value as Record<string, unknown>)
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item => 
        typeof item === 'string' ? sanitizeInput(item) : item
      )
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized as T
}

/* ==========================================================================
   VALIDACIÓN DE DATOS
   --------------------------------------------------------------------------
   Funciones para validar diferentes tipos de datos
   ========================================================================== */

/**
 * Valida formato de email
 * 
 * @param email - Email a validar
 * @returns true si el formato es válido
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  
  // RFC 5322 simplified pattern
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  return pattern.test(email) && email.length <= 254
}

/**
 * Valida número de teléfono (Colombia)
 * 
 * @param phone - Número a validar
 * @returns true si el formato es válido
 */
export function validatePhoneNumber(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false
  
  // Limpia caracteres no numéricos
  const cleaned = phone.replace(/\D/g, '')
  
  // Celular colombiano (10 dígitos, empieza con 3)
  if (/^3\d{9}$/.test(cleaned)) return true
  
  // Fijo colombiano con indicativo (10 dígitos, empieza con 60)
  if (/^60\d{8}$/.test(cleaned)) return true
  
  // Fijo sin indicativo (7-8 dígitos)
  if (/^\d{7,8}$/.test(cleaned)) return true
  
  return false
}

/**
 * Valida que un string solo contenga caracteres alfanuméricos
 */
export function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str)
}

/**
 * Valida que un string sea un UUID válido
 */
export function isValidUUID(str: string): boolean {
  const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return pattern.test(str)
}

/**
 * Valida URL
 */
export function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/* ==========================================================================
   GENERACIÓN DE TOKENS SEGUROS
   --------------------------------------------------------------------------
   Funciones para generar IDs y tokens únicos
   ========================================================================== */

/**
 * Genera un ID seguro usando crypto
 * 
 * @param length - Longitud del ID (por defecto 32 caracteres)
 * @returns ID hexadecimal seguro
 */
export function generateSecureId(length: number = 32): string {
  const bytes = new Uint8Array(Math.ceil(length / 2))
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, length)
}

/**
 * Genera un token CSRF
 * 
 * @returns Token CSRF único
 */
export function generateCSRFToken(): string {
  return generateSecureId(64)
}

/**
 * Genera un código de verificación numérico
 * 
 * @param digits - Número de dígitos (por defecto 6)
 * @returns Código numérico
 */
export function generateVerificationCode(digits: number = 6): string {
  const bytes = new Uint8Array(digits)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map(b => b % 10)
    .join('')
}

/* ==========================================================================
   HASHING Y COMPARACIÓN SEGURA
   --------------------------------------------------------------------------
   Funciones para hash y comparación de tiempo constante
   ========================================================================== */

/**
 * Genera un hash SHA-256 de un string
 * 
 * @param input - String a hashear
 * @returns Hash hexadecimal
 */
export async function hashString(input: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(input)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Compara dos strings en tiempo constante
 * Previene ataques de timing
 * 
 * @param a - Primer string
 * @param b - Segundo string
 * @returns true si son iguales
 */
export function secureCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  
  return result === 0
}

/* ==========================================================================
   RATE LIMITING EN MEMORIA
   --------------------------------------------------------------------------
   Implementación simple de rate limiting sin dependencias externas
   NOTA: En producción, usar Redis u otra solución distribuida
   ========================================================================== */

/**
 * Almacén de rate limiting en memoria
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

/**
 * Limpia entradas expiradas del store
 */
function cleanupRateLimitStore(): void {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) {
      rateLimitStore.delete(key)
    }
  }
}

// Limpiar cada 5 minutos
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimitStore, 5 * 60 * 1000)
}

/**
 * Verifica rate limit para una clave
 * 
 * @param key - Identificador único (ej: IP + endpoint)
 * @param maxRequests - Máximo de solicitudes permitidas
 * @param windowMs - Ventana de tiempo en milisegundos
 * @returns Objeto con información del rate limit
 */
export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): {
  allowed: boolean
  remaining: number
  resetTime: number
} {
  const now = Date.now()
  const record = rateLimitStore.get(key)
  
  // Si no existe o expiró, crear nuevo
  if (!record || record.resetTime < now) {
    const newRecord = { count: 1, resetTime: now + windowMs }
    rateLimitStore.set(key, newRecord)
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetTime: newRecord.resetTime,
    }
  }
  
  // Incrementar contador
  record.count++
  
  // Verificar si excede el límite
  const allowed = record.count <= maxRequests
  
  return {
    allowed,
    remaining: Math.max(0, maxRequests - record.count),
    resetTime: record.resetTime,
  }
}

/* ==========================================================================
   LOGGING DE SEGURIDAD
   --------------------------------------------------------------------------
   Sistema de logging para eventos de seguridad
   ========================================================================== */

/**
 * Tipos de eventos de seguridad
 */
export type SecurityEventType = 
  | 'INVALID_INPUT'
  | 'RATE_LIMIT_EXCEEDED'
  | 'SUSPICIOUS_REQUEST'
  | 'AUTH_FAILURE'
  | 'AUTH_SUCCESS'
  | 'CSRF_FAILURE'
  | 'FILE_UPLOAD_BLOCKED'
  | 'PERMISSION_DENIED'

/**
 * Registra un evento de seguridad
 * 
 * @param eventType - Tipo de evento
 * @param details - Detalles adicionales
 * 
 * @example
 * logSecurityEvent('AUTH_FAILURE', { 
 *   ip: request.ip, 
 *   email: attemptedEmail 
 * })
 */
export function logSecurityEvent(
  eventType: SecurityEventType,
  details: Record<string, unknown>
): void {
  const logEntry = {
    timestamp: new Date().toISOString(),
    type: eventType,
    details,
  }
  
  // En desarrollo, mostrar en consola
  if (process.env.NODE_ENV === 'development') {
    console.warn('[SECURITY]', JSON.stringify(logEntry, null, 2))
  } else {
    // En producción, aquí conectarías con tu sistema de logging
    // Opciones: escribir a archivo, enviar a servicio de monitoreo, etc.
    console.warn('[SECURITY]', JSON.stringify(logEntry))
  }
}

/* ==========================================================================
   VALIDACIÓN DE ARCHIVOS
   --------------------------------------------------------------------------
   Funciones para validar archivos subidos de forma segura
   ========================================================================== */

/**
 * Firmas de archivos (magic bytes)
 */
const FILE_SIGNATURES: Record<string, number[][]> = {
  'image/jpeg': [[0xFF, 0xD8, 0xFF]],
  'image/png': [[0x89, 0x50, 0x4E, 0x47]],
  'image/gif': [[0x47, 0x49, 0x46, 0x38]],
  'image/webp': [[0x52, 0x49, 0x46, 0x46]],
  'application/pdf': [[0x25, 0x50, 0x44, 0x46]],
}

/**
 * Valida un archivo por su firma (magic bytes)
 * Más seguro que validar solo por extensión
 * 
 * @param buffer - Primeros bytes del archivo
 * @param expectedType - Tipo MIME esperado
 * @returns true si la firma coincide
 */
export function validateFileSignature(
  buffer: Uint8Array,
  expectedType: string
): boolean {
  const signatures = FILE_SIGNATURES[expectedType]
  if (!signatures) return false
  
  return signatures.some(signature =>
    signature.every((byte, index) => buffer[index] === byte)
  )
}

/**
 * Obtiene el tipo real de un archivo por su firma
 * 
 * @param buffer - Primeros bytes del archivo
 * @returns Tipo MIME detectado o null
 */
export function detectFileType(buffer: Uint8Array): string | null {
  for (const [mimeType, signatures] of Object.entries(FILE_SIGNATURES)) {
    const matches = signatures.some(signature =>
      signature.every((byte, index) => buffer[index] === byte)
    )
    if (matches) return mimeType
  }
  return null
}

/* ==========================================================================
   PROTECCIÓN CSRF
   --------------------------------------------------------------------------
   Funciones para generar y validar tokens CSRF
   ========================================================================== */

/**
 * Almacén de tokens CSRF en memoria
 * NOTA: En producción, usar sesiones o cookies seguras
 */
const csrfTokens = new Map<string, number>()

/**
 * Crea un nuevo token CSRF
 * 
 * @param sessionId - ID de sesión del usuario
 * @returns Token CSRF
 */
export function createCSRFToken(sessionId: string): string {
  const token = generateSecureId(64)
  const key = `${sessionId}:${token}`
  csrfTokens.set(key, Date.now() + 60 * 60 * 1000) // Expira en 1 hora
  return token
}

/**
 * Valida un token CSRF
 * 
 * @param sessionId - ID de sesión del usuario
 * @param token - Token a validar
 * @returns true si el token es válido
 */
export function validateCSRFToken(sessionId: string, token: string): boolean {
  const key = `${sessionId}:${token}`
  const expiry = csrfTokens.get(key)
  
  if (!expiry) return false
  if (Date.now() > expiry) {
    csrfTokens.delete(key)
    return false
  }
  
  // Token válido, eliminarlo (uso único)
  csrfTokens.delete(key)
  return true
}
