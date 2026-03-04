import Image from 'next/image'
import MetaVisual from './IMG/Untitled design (7).png'

export default function PhilosophySection() {
  return (
    <section id="why-choose-us" className="py-20 bg-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-5xl md:text-6xl text-gold mb-4">
                The Enhanccee
                <br />
                Standard
              </h2>
              <div className="h-px w-24 bg-gold mb-8" />
              <div className="space-y-6 text-cream-dim">
                <p className="text-lg leading-relaxed">
                  The difference between ranking and relevance is{' '}
                  <span className="text-gold font-bold">intention</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't optimise for algorithms alone; we optimise for{' '}
                  <span className="text-gold font-bold">business impact</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  At Enhanccee, excellence isn't a service - it's a{' '}
                  <span className="text-gold font-bold">signature experience</span>.
                </p>
              </div>
            </div>

            {/* Right Column - Graphic */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-dim via-gold-dim/50 to-transparent rounded-lg border border-gold-dim">
                <div className="absolute bottom-6 right-6 w-40 h-28 md:w-48 md:h-32 border border-gold overflow-hidden rounded-md">
                  <Image
                    src={MetaVisual}
                    alt="Meta advertising dashboard visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
