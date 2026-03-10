/* ============================================================================
   PÁGINA PRINCIPAL (HOME) - Castilla Agrícola S.A.
   ============================================================================ */
import { HeroSection } from "@/components/home/HeroSection"
import { KPISection } from "@/components/home/KPISection"
import { SustainabilitySection } from "@/components/home/SustainabilitySection"
import { QuickLinksSection } from "@/components/home/QuickLinksSection"
import { ImageCarousel } from "@/components/home/ImageCarousel"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {}
      
      <HeroSection />
      
      <KPISection />
      
      <ImageCarousel />
      
      <SustainabilitySection />
      
      <QuickLinksSection />
      
      {}
    </main>
  )
}
