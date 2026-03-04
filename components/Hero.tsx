'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg flex items-center justify-center px-6 md:px-12 lg:px-16 py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(201,169,110, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-gold text-xs font-semibold uppercase tracking-wider">
            ELITE MARKETING & GROWTH PARTNER
          </span>
        </div>
        
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-cream">Crafting brands that</span>
            <br />
            <span className="text-gold">stand above the noise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream-dim max-w-3xl mx-auto mb-12">
          We engineer scalable growth for brands that demand authority, not just visibility.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-gold text-bg px-8 py-4 font-semibold text-base rounded-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold-dim hover:-translate-y-1 active:scale-95"
          >
            GET STARTED
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-gold text-cream px-8 py-4 font-semibold text-base rounded-lg transition-all duration-300 hover:bg-gold hover:text-bg hover:scale-110 hover:shadow-2xl hover:shadow-gold-dim hover:-translate-y-1 active:scale-95"
          >
            OUR SERVICES
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cream"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
