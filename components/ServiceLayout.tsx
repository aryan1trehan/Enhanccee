import Header from './Header'
import Footer from './Footer'

interface ServiceLayoutProps {
  title: string
  subtitle: string
  description: string
  badge: string
  children: React.ReactNode
}

export default function ServiceLayout({ title, subtitle, description, badge, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              {badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-cream">{title}</span>
            <br />
            <span className="text-gold">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-cream-dim max-w-3xl mx-auto mb-12">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </section>

      <Footer />
    </div>
  )
}
