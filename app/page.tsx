import Hero from '@/components/Hero'
import QuoteSection from '@/components/QuoteSection'
import ServicesSection from '@/components/ServicesSection'
import PhilosophySection from '@/components/PhilosophySection'
import ClienteleSection from '@/components/ClienteleSection'
import ResultsSection from '@/components/ResultsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <QuoteSection />
      <ServicesSection />
      <PhilosophySection />
      <ClienteleSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

