import Image from 'next/image'
import Fabcurate from './IMG/images (1).png'
import Superkicks from './IMG/images (2).png'
import Tichu from './IMG/images (4)_edited.png'
import RangatJaipur from './IMG/images (4)_edited_edited.jpg'
import Vako from './IMG/Untitled design (7).png'
import Outro from './IMG/Untitled design (8).png'

const clients = [
  { name: 'Fabcurate', logo: Fabcurate },
  { name: 'Superkicks', logo: Superkicks },
  { name: 'Tichu', logo: Tichu },
  { name: 'Rangat Jaipur', logo: RangatJaipur },
  { name: 'VAKO', logo: Vako },
  { name: 'OUTRO', logo: Outro },
]

export default function ClienteleSection() {

  return (
    <section id="clientele" className="py-20 bg-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10">
          <div className="mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              OUR CLIENTELE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-cream mb-4">Trusted by Leading Brands</h2>
          <p className="text-sm md:text-base text-cream-dim max-w-2xl mx-auto">
            A selection of partners across fashion, lifestyle, retail, and culture-driven brands.
          </p>
        </div>

        <div className="overflow-hidden py-6">
          <div className="clientele-track">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center h-20 md:h-24 min-w-[190px] md:min-w-[230px]"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={120}
                  className="object-contain h-full w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
