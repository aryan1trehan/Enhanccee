'use client'

import { useEffect, useRef, useState } from 'react'
import RippleEffect from '@/components/RippleEffect'

export default function ClienteleSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredClient, setHoveredClient] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const clients = [
    'Client 1',
    'Client 2',
    'Client 3',
    'Client 4',
    'Client 5',
    'Client 6',
    'Client 7',
    'Client 8',
  ]

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
      id="clientele"
      className="relative min-h-screen bg-dark-green flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Area */}
        <div className="text-center mb-16">
          {/* TRUSTED BY Badge */}
          <div
            className={`inline-block mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="px-6 py-2 border border-white bg-black flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-xs font-semibold tracking-wider uppercase">
                TRUSTED BY
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-white">Our </span>
            <span className="text-white">Clientele</span>
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
            Partnering with ambitious brands to create lasting market impact
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {clients.map((client, index) => (
            <RippleEffect key={index} className="block">
              <div
                className={`group relative bg-black border border-white p-8 md:p-12 flex items-center justify-center min-h-[120px] md:min-h-[150px] transition-all duration-700 cursor-pointer shadow-lg relative z-10 ${
                  isVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                  } ${
                    hoveredClient === index
                      ? 'border-white/80 bg-white/10 shadow-2xl shadow-white/30 scale-110 -translate-y-2 animate-glow'
                      : 'hover:border-white/60 hover:bg-white/5 hover:shadow-xl hover:shadow-white/10 hover:scale-105 hover:-translate-y-1'
                  }`}
                style={{
                  transitionDelay: `${0.6 + index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <p className="text-white font-medium text-sm md:text-base transition-colors duration-300 group-hover:text-white">
                  {client}
                </p>

                {/* Hover Effect - White Glow */}
                <div
                  className={`absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 ${
                    hoveredClient === index ? 'opacity-100' : ''
                  }`}
                />
              </div>
            </RippleEffect>
          ))}
        </div>

        {/* View All Clients Button */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '1.4s' }}
        >
          <RippleEffect className="inline-block">
            <button className="bg-black border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:shadow-2xl hover:shadow-white/60 hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto group active:scale-95 relative z-10">
              View All Clients
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

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}

