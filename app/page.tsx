import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ClientsSection } from "@/components/clients-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="clients">
          <ClientsSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
