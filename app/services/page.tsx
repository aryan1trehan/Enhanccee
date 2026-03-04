import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    title: 'SEO',
    slug: '/seo',
    description: 'Scalable organic growth for brands that demand authority.',
    tag: 'Search Visibility',
  },
  {
    title: 'Meta Advertising',
    slug: '/meta',
    description: 'High-performance campaigns engineered to convert attention into revenue.',
    tag: 'Paid Social',
  },
  {
    title: 'Web Development',
    slug: '/web-dev',
    description: 'High-performance websites built for speed, stability, and conversion.',
    tag: 'Experience Layer',
  },
  {
    title: 'UI/UX Design',
    slug: '/ui-ux',
    description: 'User-centered product design that feels effortless to use.',
    tag: 'Product Experience',
  },
  {
    title: 'Branding',
    slug: '/branding',
    description: 'Distinctive brand systems that are instantly recognisable and memorable.',
    tag: 'Identity',
  },
  {
    title: 'SaaS Development',
    slug: '/saas',
    description: 'Scalable SaaS platforms architected for long-term growth.',
    tag: 'Software',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg pt-24">
      <Header />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.35em] mb-4 block">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
              Focused. Strategic. Built for Scale.
            </h1>
            <p className="text-cream-dim text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Six specialist disciplines, one integrated team. Every engagement is designed to move
              the metrics that actually matter for your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.slug}
                className="group bg-emerald border border-gold-dim rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-gold hover:bg-teal hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold mb-3">
                    {service.tag}
                  </p>
                  <h2 className="text-2xl font-semibold text-cream mb-4 group-hover:text-gold">
                    {service.title}
                  </h2>
                  <p className="text-cream-dim leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center text-gold text-sm font-semibold group-hover:text-gold-light transition-colors">
                  Explore service
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


