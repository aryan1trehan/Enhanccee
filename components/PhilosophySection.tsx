'use client'

import { useEffect, useRef, useState } from 'react'
import RippleEffect from '@/components/RippleEffect'

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
      className="relative min-h-screen bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-20"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-black bg-white/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-black text-xs font-semibold tracking-wider uppercase">
                  OUR PHILOSOPHY
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight transition-all duration-1000 ${
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
              className={`text-xl md:text-2xl text-black font-medium transition-all duration-1000 ${
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
              className={`text-lg text-black/80 leading-relaxed transition-all duration-1000 ${
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
              <RippleEffect className="inline-block" color="black">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1 flex items-center justify-center gap-2 group active:scale-95 relative z-10">
                  Explore Our Methodology
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
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
              </RippleEffect>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <RippleEffect key={index} className="block" color="black">
                <div
                  className={`group relative bg-white/60 backdrop-blur-sm border border-black/20 p-6 transition-all duration-500 cursor-pointer relative z-10 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  } ${
                    hoveredCard === index
                      ? 'border-black/50 bg-white/80 shadow-2xl shadow-black/30 scale-105 -translate-y-2 animate-glow'
                      : 'hover:border-black/30 hover:bg-white/70 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1'
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
                    className={`w-12 h-12 bg-black flex items-center justify-center text-white transition-all duration-500 ${
                      hoveredCard === index
                        ? 'scale-125 rotate-6 shadow-xl shadow-black/60 animate-pulse-slow'
                        : 'group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-black/40'
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-black">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-black/70 leading-relaxed transition-colors duration-300 group-hover:text-black/90 ml-16">
                  {feature.description}
                </p>

                {/* Hover Effect - Black Glow */}
                <div
                  className={`absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : ''
                  }`}
                />
                </div>
              </RippleEffect>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}

