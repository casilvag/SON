import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"

export default function HorairesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="bg-background border-b border-border py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-foreground">Nos Horaires</h1>
          </div>
        </section>

        <ScheduleSection />
      </div>
      <Footer />
    </main>
  )
}
