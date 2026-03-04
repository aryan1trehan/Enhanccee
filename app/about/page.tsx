import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Hero / Intro */}
          <div className="mb-14 text-center">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.35em] mb-4 block">
              About Enhanccee
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Engineering Growth Through <span className="text-gold">Intelligent Craft</span>
            </h1>
            <p className="text-cream-dim text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Enhanccee is a strategy, design, and growth studio for brands that refuse to be
              average. We combine rigorous thinking, sharp creative, and performance discipline to
              build brands that compound in value over time.
            </p>
          </div>

          {/* Two-column story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl text-gold">What We Stand For</h2>
              <p className="text-cream-dim leading-relaxed">
                We believe durable brands are engineered, not improvised. Every engagement starts
                with clarity—on your market, your customer, and the outcomes that actually matter.
                From there, we design systems: of identity, of experience, of acquisition and
                retention.
              </p>
              <p className="text-cream-dim leading-relaxed">
                Our work blends editorial-level storytelling, product-level craft, and performance
                marketing rigour. Strategy lives in every layout, every word, and every campaign
                decision.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl text-gold">How We Work</h2>
              <p className="text-cream-dim leading-relaxed">
                Enhanccee operates as an embedded partner, not a rotating vendor. We work with a
                limited number of brands at a time so senior talent stays on the work, from first
                principles through execution.
              </p>
              <p className="text-cream-dim leading-relaxed">
                Our team is intentionally small, multidisciplinary, and remote-first—bringing
                together strategists, designers, engineers, and performance specialists around a
                single, shared architecture for your brand.
              </p>
            </div>
          </div>

          {/* Signature principles */}
          <div className="border border-gold-dim bg-emerald/40 px-8 md:px-10 lg:px-12 py-10 rounded-xl mb-16">
            <h3 className="text-cream text-xl md:text-2xl mb-6">The Enhanccee Standard</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Precision
                </h4>
                <p className="text-cream-dim text-sm leading-relaxed">
                  We sweat the structure—of messaging, of funnels, of interfaces—because small
                  details shift big outcomes.
                </p>
              </div>
              <div>
                <h4 className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Partnership
                </h4>
                <p className="text-cream-dim text-sm leading-relaxed">
                  We work with founders and teams who value long-term brand building over short
                  spikes in attention.
                </p>
              </div>
              <div>
                <h4 className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Performance
                </h4>
                <p className="text-cream-dim text-sm leading-relaxed">
                  Every idea is held to a simple standard: does it move the metrics that matter for
                  your business?
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-cream-dim text-sm uppercase tracking-[0.25em] mb-4">
              Ready to build something enduring?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-bg px-10 py-4 rounded-lg font-semibold text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold-dim hover:-translate-y-1 active:scale-95"
            >
              Speak to Enhanccee
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


