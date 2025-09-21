import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export default function HorairesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="bg-background border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground">Nos Horaires</h1>
              <Button asChild variant="outline" size="sm">
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ScheduleSection />
      </div>
      <Footer />
    </main>
  )
}
