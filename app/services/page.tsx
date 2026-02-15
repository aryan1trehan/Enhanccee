'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  features: string[]
}

const allServices: Service[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Search Engine Optimization',
    description: 'Strategic SEO that drives organic visibility and positions your brand at the top of search results.',
    href: '/seo',
    features: [
      'Keyword Research & Analysis',
      'On-Page Optimization',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
      'Performance Tracking',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Meta Advertising',
    description: 'Data-driven Meta advertising campaigns that maximize ROI and accelerate sustainable growth.',
    href: '/meta',
    features: [
      'Campaign Strategy',
      'Creative Optimization',
      'Audience Targeting',
      'A/B Testing',
      'Performance Analytics',
      'Budget Optimization',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    description: 'High-performance websites engineered for conversion, speed and seamless user experience.',
    href: '/web-dev',
    features: [
      'Custom Website Development',
      'E-Commerce Solutions',
      'Web Applications',
      'Mobile Responsive Design',
      'Performance Optimization',
      'SEO Integration',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'SaaS Development',
    description: 'Scalable SaaS solutions that grow with your business and deliver exceptional value to your users.',
    href: '/saas',
    features: [
      'SaaS Platform Development',
      'API Development',
      'Cloud Infrastructure',
      'Subscription Management',
      'Security & Compliance',
      'Scalability Solutions',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Branding Services',
    description: 'Complete brand identity systems that command attention and create lasting market presence.',
    href: '/branding',
    features: [
      'Brand Identity Design',
      'Brand Strategy',
      'Visual Design',
      'Brand Guidelines',
      'Logo Design',
      'Brand Positioning',
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI & UX Design',
    description: 'User-centered design that creates intuitive, beautiful, and conversion-focused digital experiences.',
    href: '/ui-ux',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
      'Conversion Optimization',
    ],
  },
]

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-dark-green">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold bg-dark-green/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span className="text-white text-xs font-semibold tracking-wider uppercase">
                OUR SERVICES
              </span>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="text-white">Strategic Excellence</span>
            <br />
            <span className="text-gold">Across Every Dimension</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Comprehensive solutions designed to elevate your brand and accelerate sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group relative bg-dark-green/60 backdrop-blur-sm border border-light-green/20 p-8 transition-all duration-700 cursor-pointer block ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${
                  hoveredService === index
                    ? 'border-gold/50 bg-dark-green/80 shadow-2xl shadow-gold/30 scale-105 -translate-y-2'
                    : 'hover:border-gold/30 hover:bg-dark-green/70 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1'
                }`}
                style={{
                  transitionDelay: `${0.6 + index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gold flex items-center justify-center text-dark-green mb-6 transition-all duration-500 ${
                    hoveredService === index
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
                <p className="text-white/70 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/90">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/60 text-sm transition-colors duration-300 group-hover:text-white/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-gold text-sm font-semibold transition-all duration-300 group-hover:gap-3">
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gold/5 opacity-0 transition-opacity duration-500 ${
                    hoveredService === index ? 'opacity-100' : ''
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <a
            href="/contact"
            className="bg-gold text-dark-green px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 inline-block active:scale-95"
          >
            Get Started
          </a>
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

