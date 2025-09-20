import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"

export default function HorariosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ScheduleSection />
      </div>
      <Footer />
    </main>
  )
}
