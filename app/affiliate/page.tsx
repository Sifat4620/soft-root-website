import { Navigation } from "@/components/navigation"
import { AffiliateSection } from "@/components/affiliate-section"
import { Footer } from "@/components/footer"

export default function AffiliatePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <AffiliateSection />
      </main>
      <Footer />
    </>
  )
}
