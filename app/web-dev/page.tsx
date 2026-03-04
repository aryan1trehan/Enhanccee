import ServiceLayout from '@/components/ServiceLayout'

export default function WebDevPage() {
  return (
    <ServiceLayout
      title="Web"
      subtitle="Development"
      description="High-performance websites engineered for conversion, speed and seamless user experience. We build digital experiences that drive results."
      badge="WEB DEVELOPMENT"
    >
      <div className="space-y-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What We Build</h2>
            <div className="space-y-4">
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Custom Websites</h3>
                <p className="text-white/70">
                  Bespoke web solutions tailored to your business needs
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platforms</h3>
                <p className="text-white/70">
                  Scalable online stores that convert visitors into customers
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Web Applications</h3>
                <p className="text-white/70">
                  Powerful web apps that streamline your operations
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
            <div className="space-y-4">
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Performance First</h3>
                <p className="text-white/70">
                  Lightning-fast load times and optimized user experience
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Mobile Responsive</h3>
                <p className="text-white/70">
                  Perfect experience across all devices and screen sizes
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
                <p className="text-white/70">
                  Built with search engine visibility in mind
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <a
            href="/#contact"
            className="bg-gold text-dark-green px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 inline-block active:scale-95"
          >
            Start Your Web Project
          </a>
        </div>
      </div>
    </ServiceLayout>
  )
}






