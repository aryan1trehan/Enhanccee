import ServiceLayout from '@/components/ServiceLayout'

export default function BrandingPage() {
  return (
    <ServiceLayout
      title="Branding"
      subtitle="Services"
      description="Complete brand identity systems that command attention and create lasting market presence. We craft brands that stand above the noise."
      badge="BRANDING SERVICES"
    >
      <div className="space-y-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-dark-green/60 border border-light-green/20 p-8">
            <div className="w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Identity</h3>
            <p className="text-white/70 leading-relaxed">
              Comprehensive brand identity design including logos, color palettes, typography, and visual guidelines that define your brand's unique personality.
            </p>
          </div>
          <div className="bg-dark-green/60 border border-light-green/20 p-8">
            <div className="w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Strategy</h3>
            <p className="text-white/70 leading-relaxed">
              Strategic brand positioning and messaging that resonates with your target audience and differentiates you in the marketplace.
            </p>
          </div>
          <div className="bg-dark-green/60 border border-light-green/20 p-8">
            <div className="w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visual Design</h3>
            <p className="text-white/70 leading-relaxed">
              Stunning visual design across all touchpoints including print, digital, and environmental applications.
            </p>
          </div>
          <div className="bg-dark-green/60 border border-light-green/20 p-8">
            <div className="w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Guidelines</h3>
            <p className="text-white/70 leading-relaxed">
              Comprehensive brand guidelines and style guides that ensure consistent brand expression across all channels.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <a
            href="/#contact"
            className="bg-gold text-dark-green px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 inline-block active:scale-95"
          >
            Build Your Brand
          </a>
        </div>
      </div>
    </ServiceLayout>
  )
}

