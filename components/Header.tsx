'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-gold-dim">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1"></div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href="/" className="text-cream hover:text-gold transition-colors">Home</Link>
            <Link href="/services" className="text-cream hover:text-gold transition-colors">Services</Link>
            <Link href="/seo" className="text-cream hover:text-gold transition-colors">SEO</Link>
            <Link href="/meta" className="text-cream hover:text-gold transition-colors">Meta</Link>
          </div>

          {/* Right side spacer and Contact button */}
          <div className="hidden md:flex items-center flex-1 justify-end">
            <Link href="/contact" className="bg-gold text-bg px-6 py-2 rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 hover:scale-105">
              Contact
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
            <Link href="/" className="block text-cream hover:text-gold transition-colors">Home</Link>
            <Link href="/services" className="block text-cream hover:text-gold transition-colors">Services</Link>
            <Link href="/seo" className="block text-cream hover:text-gold transition-colors">SEO</Link>
            <Link href="/meta" className="block text-cream hover:text-gold transition-colors">Meta</Link>
            <Link href="/contact" className="block bg-gold text-bg px-6 py-2 rounded-lg font-semibold text-center">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
