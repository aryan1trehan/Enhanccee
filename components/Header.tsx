'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-gold-dim">
      <nav className="w-full max-w-[1920px] mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl lg:text-2xl font-bold text-gold hover:text-gold-light transition-colors">
              ENHANCE
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10 xl:space-x-12 flex-1">
            <Link href="/" className="text-xs lg:text-sm text-cream hover:text-gold transition-colors whitespace-nowrap uppercase tracking-wider">HOME</Link>
            <Link href="/clientele" className="text-xs lg:text-sm text-cream hover:text-gold transition-colors whitespace-nowrap uppercase tracking-wider">CLIENTELE</Link>
            <Link href="/services" className="text-xs lg:text-sm text-cream hover:text-gold transition-colors whitespace-nowrap uppercase tracking-wider">OUR SERVICES</Link>
            <Link href="/#why-choose-us" className="text-xs lg:text-sm text-cream hover:text-gold transition-colors whitespace-nowrap uppercase tracking-wider">WHY CHOOSE US?</Link>
            <Link href="/#blog" className="text-xs lg:text-sm text-cream hover:text-gold transition-colors whitespace-nowrap uppercase tracking-wider">BLOG</Link>
          </div>

          {/* Inquiry Button - Right Side */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link 
              href="/contact" 
              className="bg-gold text-bg px-6 py-2 rounded-lg font-semibold text-xs lg:text-sm hover:bg-gold-light transition-all duration-300 hover:scale-105 uppercase tracking-wider whitespace-nowrap"
            >
              INQUIRY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-xs text-cream hover:text-gold transition-colors uppercase tracking-wider">HOME</Link>
            <Link href="/clientele" className="block text-xs text-cream hover:text-gold transition-colors uppercase tracking-wider">CLIENTELE</Link>
            <Link href="/services" className="block text-xs text-cream hover:text-gold transition-colors uppercase tracking-wider">OUR SERVICES</Link>
            <Link href="/#why-choose-us" className="block text-xs text-cream hover:text-gold transition-colors uppercase tracking-wider">WHY CHOOSE US?</Link>
            <Link href="/#blog" className="block text-xs text-cream hover:text-gold transition-colors uppercase tracking-wider">BLOG</Link>
            <Link href="/contact" className="block bg-gold text-bg px-6 py-2 rounded-lg font-semibold text-xs text-center uppercase tracking-wider mt-4">INQUIRY</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
