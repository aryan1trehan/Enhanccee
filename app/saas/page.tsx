import ServiceLayout from '@/components/ServiceLayout'

export default function SaaSPage() {
  return (
    <ServiceLayout
      title="SaaS"
      subtitle="Development"
      description="Scalable SaaS solutions that grow with your business. We build powerful software-as-a-service platforms that deliver exceptional value to your users."
      badge="SAAS SERVICES"
    >
      <div className="space-y-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">What We Build</h2>
            <div className="space-y-4">
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">SaaS Platforms</h3>
                <p className="text-white/70">
                  Complete software solutions with subscription management
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">API Development</h3>
                <p className="text-white/70">
                  Robust APIs that power your SaaS ecosystem
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-white/70">
                  Scalable cloud architecture for growth
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
            <div className="space-y-4">
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
                <p className="text-white/70">
                  Built to handle growth from startup to enterprise
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                <p className="text-white/70">
                  Enterprise-grade security and compliance
                </p>
              </div>
              <div className="bg-dark-green/60 border border-light-green/20 p-6">
                <h3 className="text-xl font-bold text-white mb-2">User Experience</h3>
                <p className="text-white/70">
                  Intuitive interfaces that users love
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
            Build Your SaaS Platform
          </a>
        </div>
      </div>
    </ServiceLayout>
  )
}



