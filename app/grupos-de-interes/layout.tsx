import { GroupsInterestSidebar } from "@/components/GroupsInterestSidebar/GroupsInterestSidebar"

export default function GroupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa]"> {/* Fondo sutil para resaltar el sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar con el nuevo estilo visual verde */}
          <GroupsInterestSidebar />
          
          {/* Contenido principal */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}