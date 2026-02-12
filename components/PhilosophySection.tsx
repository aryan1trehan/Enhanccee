'use client'

import { useEffect, useRef, useState } from 'react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: 'Strategic Foresight',
    description: 'We map market trajectories before they become obvious',
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'Behavioral Mastery',
    description: 'Psychology-driven campaigns that resonate at a deeper level',
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Legacy Building',
    description: 'Creating brands that compound in value over decades',
  },
]

export default function PhilosophySection() {
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
      id="philosophy"
      className="relative min-h-screen bg-dark-green flex items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold rounded-lg bg-dark-green/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  OUR PHILOSOPHY
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              Built for the Long
              <br />
              Game
            </h2>

            {/* Subheading */}
            <p
              className={`text-xl md:text-2xl text-gold font-medium transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              Through strategy, design, and performance
            </p>

            {/* Paragraph */}
            <p
              className={`text-lg text-white/80 leading-relaxed transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              We craft brands with presence, precision, and authority. Our
              methodology combines strategic foresight, behavioral psychology,
              and market dynamics to create brands that appreciate in value over
              time. We're not here to make noise—we're here to build empires.
            </p>

            {/* CTA Button */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              <button className="bg-gold text-dark-green px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-gold-light hover:scale-105 hover:shadow-xl hover:shadow-gold/50 flex items-center justify-center gap-2 group">
                Explore Our Methodology
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-dark-green/60 backdrop-blur-sm border border-light-green/20 rounded-xl p-6 transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                } ${
                  hoveredCard === index
                    ? 'border-gold/50 bg-dark-green/80 shadow-2xl shadow-gold/20 scale-105'
                    : 'hover:border-gold/30 hover:bg-dark-green/70 hover:shadow-xl hover:shadow-gold/10'
                }`}
                style={{
                  animationDelay: `${1 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon and Title Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gold rounded-lg flex items-center justify-center text-dark-green transition-all duration-300 ${
                      hoveredCard === index
                        ? 'scale-110 rotate-3 shadow-lg shadow-gold/50'
                        : 'group-hover:scale-105 group-hover:rotate-2'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-gold">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90 ml-16">
                  {feature.description}
                </p>

                {/* Hover Effect - Gold Glow */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gold/5 opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-light-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}

