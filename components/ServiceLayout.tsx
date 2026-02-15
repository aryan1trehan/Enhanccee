'use client'

import { ReactNode } from 'react'
import Header from '@/components/Header'

interface ServiceLayoutProps {
  title: string
  subtitle: string
  description: string
  badge?: string
  children?: ReactNode
}

export default function ServiceLayout({
  title,
  subtitle,
  description,
  badge,
  children,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-green">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="mb-8 animate-slide-down">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold bg-dark-green/50 backdrop-blur-sm">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  {badge}
                </span>
              </div>
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-white">{title}</span>
            <br />
            <span className="text-gold">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 px-6 md:px-12 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Enhanccee. All rights reserved.
          </p>
          <a
            href="/"
            className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
          >
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  )
}

