"use client"

import { Footer } from "@/components/footer"
import { ScheduleSection } from "@/components/schedule-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

export default function HorairesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection showVideoButton={false} />

      <div className="pt-4">
        <ScheduleSection />
      </div>
      <Footer />
    </div>
  )
}
