'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-green overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 md:px-12 lg:px-16">
        {/* Badge */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold bg-dark-green/50 backdrop-blur-sm">
            <svg
              className="w-4 h-4 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white text-sm font-medium">
              Elite Marketing & Growth Partner
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          Crafting Brands That
          <br />
          Stand Above{' '}
          <span className="text-gold relative inline-block animate-pulse-slow">
            the
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gold-fade transform -skew-x-12 animate-glow" />
          </span>{' '}
          Noise
        </h1>

        {/* Description */}
        <p
          className={`text-lg md:text-xl text-white/90 text-center max-w-2xl mb-12 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          Crafted with intention. Built with ambition. We help ambitious brands
          define their legacy — not chase trends.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1.2s' }}
        >
          <button className="bg-gold text-dark-green px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 flex items-center justify-center gap-2 group active:scale-95">
            View Portfolio
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
          <a
            href="/services"
            className="bg-transparent border-2 border-gold text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-gold hover:text-dark-green hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 active:scale-95 inline-block text-center"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-fade-light rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-fade-light rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )
}

