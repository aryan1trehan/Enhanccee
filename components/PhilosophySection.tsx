export default function PhilosophySection() {
  return (
    <section id="why-choose-us" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column – Text */}
            <div>
              <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-5xl md:text-6xl text-white font-serif font-light mb-4 leading-tight">
                The Enhanccee
                <br />
                Standard
              </h2>
              <div className="h-px w-24 bg-white mb-8" />
              <div className="space-y-5 text-white/70">
                <p className="text-lg leading-relaxed">
                  The difference between ranking and relevance is{' '}
                  <span className="text-white font-semibold">intention</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  We don&apos;t optimise for algorithms alone; we optimise for{' '}
                  <span className="text-white font-semibold">business impact</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  At Enhanccee, excellence isn&apos;t a service — it&apos;s a{' '}
                  <span className="text-white font-semibold">signature experience</span>.
                </p>
              </div>
            </div>

            {/* Right Column – Marketing Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&fit=crop"
                alt="Growth marketing strategy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.92) contrast(1.05)' }}
              />
              {/* Subtle dark overlay at bottom */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)' }} />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-4 shadow-2xl">
                <div className="text-3xl font-serif font-light leading-none mb-1">3.4×</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Avg. conversion uplift</div>
              </div>
              {/* Corner accent */}
              <div className="absolute top-6 right-6 w-16 h-16 border border-white/30" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
