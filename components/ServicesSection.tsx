'use client'

import { useEffect, useRef, useState } from 'react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href?: string
}

const services: Service[] = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Branding Services',
    description:
      'Complete brand identity systems that command attention and create lasting market presence',
    href: '/branding',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: 'Search Engine Optimization',
    description:
      'Strategic SEO that drives organic visibility and positions your brand at the top of search results',
    href: '/seo',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: 'Web Development',
    description:
      'High-performance websites engineered for conversion, speed and seamless user experience',
    href: '/web-dev',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Performance Marketing',
    description:
      'Data-driven campaigns that maximize ROI and accelerate sustainable growth',
    href: '/meta',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    title: 'SaaS Development',
    description:
      'Scalable SaaS solutions that grow with your business and deliver exceptional value',
    href: '/saas',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: 'UI & UX Design',
    description:
      'User-centered design that creates intuitive, beautiful, and conversion-focused experiences',
    href: '/ui-ux',
  },
]

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen bg-dark-green flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Area */}
        <div className="text-center mb-16">
          {/* OUR SERVICES Badge */}
          <div
            className={`inline-block mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="px-4 py-2 bg-dark-green/80 border border-light-green/30 backdrop-blur-sm">
              <span className="text-white text-xs font-semibold tracking-wider uppercase">
                OUR SERVICES
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-white">Strategic Excellence</span>
            <br />
            <span className="text-gold">Across Every Dimension</span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            Comprehensive solutions designed to elevate your brand and
            accelerate sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const CardContent = (
              <>
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6 transition-all duration-500 ${
                    hoveredCard === index
                      ? 'scale-125 rotate-6 shadow-xl shadow-gold/60 animate-pulse-slow'
                      : 'group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-gold/40'
                  }`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-gold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>

                {/* Hover Effect - Gold Glow */}
                <div
                  className={`absolute inset-0 bg-gold-fade-light opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : ''
                  }`}
                />

                {/* Decorative Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/0 transition-all duration-500 ${
                    hoveredCard === index ? 'border-gold/50' : ''
                  }`}
                />
              </>
            )

            return service.href ? (
              <a
                key={index}
                href={service.href}
                className={`group relative bg-dark-green/60 backdrop-blur-sm border border-light-green/20 p-8 transition-all duration-700 cursor-pointer block ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  hoveredCard === index
                    ? 'border-gold/50 bg-dark-green/80 shadow-2xl shadow-gold/30 scale-105 -translate-y-2'
                    : 'hover:border-gold/30 hover:bg-dark-green/70 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1'
                }`}
                style={{
                  transitionDelay: `${0.6 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className={`group relative bg-dark-green/60 backdrop-blur-sm border border-light-green/20 p-8 transition-all duration-700 cursor-pointer ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  hoveredCard === index
                    ? 'border-gold/50 bg-dark-green/80 shadow-2xl shadow-gold/30 scale-105 -translate-y-2'
                    : 'hover:border-gold/30 hover:bg-dark-green/70 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1'
                }`}
                style={{
                  transitionDelay: `${0.6 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-fade-light rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold-fade-light rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}

