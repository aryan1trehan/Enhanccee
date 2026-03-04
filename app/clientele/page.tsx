import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Fabcurate from '@/components/IMG/images (1).png'
import Superkicks from '@/components/IMG/images (2).png'
import Tichu from '@/components/IMG/images (4)_edited.png'
import RangatJaipur from '@/components/IMG/images (4)_edited_edited.jpg'
import Vako from '@/components/IMG/Untitled design (7).png'
import Outro from '@/components/IMG/Untitled design (8).png'

const clients = [
  { name: 'Fabcurate', logo: Fabcurate },
  { name: 'Superkicks', logo: Superkicks },
  { name: 'Tichu', logo: Tichu },
  { name: 'Rangat Jaipur', logo: RangatJaipur },
  { name: 'VAKO', logo: Vako },
  { name: 'OUTRO', logo: Outro },
]

export default function ClientelePage() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
              Our Collaborations
            </h1>
            <p className="text-lg md:text-xl text-cream font-serif italic max-w-3xl mx-auto leading-relaxed">
              Select brands that trust Enhanccee with their identity, digital presence, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center px-12 py-10 transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={520}
                  height={320}
                  className="object-contain h-full w-auto max-h-[260px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


