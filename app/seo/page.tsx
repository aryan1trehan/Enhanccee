'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'

export default function SEOPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const frameworkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Initialize with first card visible, then animate others
    setVisibleSteps([true, false, false, false, false])
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one (5 steps total)
          for (let index = 1; index < 5; index++) {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 300) // 300ms delay between each step
          }
          // Unobserve after triggering to prevent re-triggering
          if (frameworkRef.current) {
            observer.unobserve(frameworkRef.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (frameworkRef.current) {
      observer.observe(frameworkRef.current)
    }

    return () => {
      if (frameworkRef.current) {
        observer.unobserve(frameworkRef.current)
      }
    }
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly can we expect SEO results?",
      answer: "SEO is a long-term strategy, but you'll typically see initial improvements in 3-6 months. Significant organic growth and ranking improvements usually manifest within 6-12 months, depending on your industry competitiveness and current site authority. We focus on sustainable, scalable growth rather than quick wins that don't last.",
    },
    {
      question: "What makes Enhanccee different from other SEO companies?",
      answer: "We don't optimize for algorithms alone—we optimize for business impact. Our approach combines technical precision with strategic intelligence, focusing on relevance and authority rather than just rankings. We work exclusively with brands that value long-term growth and are recognized among emerging best SEO companies globally.",
    },
    {
      question: "Do you work with luxury and enterprise brands?",
      answer: "Yes, we specialize in working with luxury and enterprise brands. Our team has 10+ years of experience driving growth for high-end and large-scale businesses. We understand the unique challenges and opportunities that come with managing SEO for premium brands and enterprise-level organizations.",
    },
    {
      question: "What regions do you serve?",
      answer: "We deliver SEO services across India, UAE, Australia, and the US. Our team supports both local and global growth strategies, ensuring your brand achieves visibility and authority in your target markets, regardless of geographic location.",
    },
    {
      question: "Is your SEO approach future-ready?",
      answer: "Absolutely. We stay ahead of search evolution with AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) strategies. Our approach ensures your brand maintains visibility as search engines evolve toward AI-driven, conversational search experiences. We optimize for the future of search, not just current algorithms.",
    },
  ]

  const frameworkSteps = [
    {
      number: '01',
      title: 'Audit',
      description: 'Comprehensive technical and competitive analysis',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Data-driven roadmap aligned with business goals',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Precision implementation across all touchpoints',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous refinement based on performance data',
    },
    {
      number: '05',
      title: 'Scale',
      description: 'Sustained growth and expanded market presence',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-green">
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              SEARCH ENGINE OPTIMIZATION
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-white">Ranking is Vanity.</span>
            <br />
            <span className="text-gold">Relevance is Power.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            We engineer scalable organic growth for brands that demand authority, not just traffic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gold text-dark-green px-8 py-4 font-semibold text-base rounded-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 active:scale-95">
              GET YOUR STRATEGY
            </button>
            <button className="bg-transparent border-2 border-gold text-white px-8 py-4 font-semibold text-base rounded-lg transition-all duration-300 hover:bg-gold hover:text-dark-green hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 active:scale-95">
              VIEW CASE STUDIES
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white mx-auto"
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
        </div>
      </section>

      {/* The Enhanccee Standard Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-gold mb-4">
                The Enhanccee
                <br />
                Standard
              </h2>
              <div className="h-px w-24 bg-gold mb-8" />
              <div className="space-y-6 text-white/90">
                <p className="text-lg leading-relaxed">
                  The difference between ranking and relevance is{' '}
                  <span className="text-gold font-bold">intention</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't optimise for algorithms alone; we optimise for{' '}
                  <span className="text-gold font-bold">business impact</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  At Enhanccee, SEO isn't a service - it's a{' '}
                  <span className="text-gold font-bold">signature experience</span>.
                </p>
              </div>
            </div>

            {/* Right Column - Graphic Placeholder */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-fade via-gold-fade-light to-transparent rounded-lg border border-gold/30">
                <div className="absolute bottom-4 right-4 w-32 h-20 border border-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                WHAT WE DELIVER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
              Focused. Strategic. Built for Scale.
            </h2>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'TECHNICAL SEO FOUNDATION',
                description:
                  'Clean site architecture, crawlability, indexation, mobile-first optimisation, site speed, schema, and metadata — engineered for performance.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'AUTHORITY-DRIVEN CONTENT SEO',
                description:
                  'Intent-led content systems that build topical authority, strengthen trust, and guide users toward conversion – not keyword clutter.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: 'STRATEGIC KEYWORD INTELLIGENCE',
                description:
                  'High-impact keyword mapping aligned with business intent, search behaviour, and revenue potential.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-green/80 border border-gold/30 p-8 transition-all duration-300 hover:border-gold/50 hover:bg-dark-green/90"
              >
                <div className="text-gold mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">{item.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{item.description}</p>
                <a href="#" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                  + More
                </a>
              </div>
            ))}
          </div>

          {/* Second Row of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'ON-PAGE SEO OPTIMIZATION',
                description:
                  'Precision optimisation across structure, internal linking, headings, and UX signals to improve relevance and rankings.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'OFF-PAGE & AUTHORITY SIGNALS',
                description:
                  'Quality backlinks, brand mentions, and digital credibility that strengthen search authority and long-term trust.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'AEO & GEO READINESS',
                description:
                  'Optimisation for Answer Engines and Generative Search, ensuring visibility beyond traditional search results.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-green/80 border border-gold/30 p-8 transition-all duration-300 hover:border-gold/50 hover:bg-dark-green/90"
              >
                <div className="text-gold mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white uppercase mb-4">{item.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{item.description}</p>
                <a href="#" className="text-gold text-sm font-semibold hover:text-gold-light transition-colors">
                  + More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Framework Section */}
      <section ref={frameworkRef} className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                STRATEGIC FRAMEWORK
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              The Path to Dominance
            </h2>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gold/30 hidden md:block" />

            {/* Steps */}
            <div className="space-y-12 md:space-y-16">
              {frameworkSteps.map((step, index) => {
                const isVisible = visibleSteps[index] ?? false
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } ${
                      isVisible
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    } transition-all duration-700`}
                    style={{
                      transitionDelay: isVisible ? `${index * 300}ms` : '0ms',
                    }}
                  >
                    {/* Gold Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full z-10 hidden md:block" />

                    {/* Content Card */}
                    <div
                      className={`flex-1 bg-dark-green/90 border-2 border-gold/50 p-8 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                      } max-w-md shadow-lg`}
                    >
                      <div className="text-gold text-5xl md:text-6xl font-bold mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif text-gold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/90 text-lg">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Enhanccee Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Why Brands Choose Enhanccee
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              The difference between ranking and relevance is intention. Brands partner with Enhanccee
              because they want more than traffic — they want positioning, trust, and scalable organic
              growth.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { value: '100×', label: 'TRAFFIC SCALE' },
              { value: '60%', label: 'REVENUE GROWTH' },
              { value: '10+', label: 'YEARS EXPERIENCE' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-dark-green/80 border border-light-green/20 p-12 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-gold mb-4">{stat.value}</div>
                <div className="text-white text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div className="bg-dark-green/80 border border-light-green/20 p-12 text-center max-w-4xl mx-auto">
            <p className="text-white text-xl md:text-2xl italic mb-4">
              "We don't optimise for algorithms alone"
            </p>
            <p className="text-gold text-xl md:text-2xl font-semibold">
              We optimise for business impact
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-2">
                What Makes Us
              </h2>
              <h2 className="text-5xl md:text-6xl font-serif text-gold mb-8">Different</h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Strategic Intelligence',
                    description:
                      'SEO veterans with 10+ years driving enterprise and luxury brand growth',
                  },
                  {
                    title: 'Technical Precision',
                    description: 'Clean, engineered implementation across every touchpoint',
                  },
                  {
                    title: 'Future-Ready',
                    description:
                      'AEO/GEO optimization ensuring visibility in AI-driven search',
                  },
                  {
                    title: 'ROI-Focused',
                    description:
                      'Transparent reporting on organic growth, conversions, and revenue impact',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Recognition Box */}
            <div className="border border-gold p-8">
              <div className="mb-4">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                  RECOGNITION
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Recognised among emerging best SEO companies
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Delivering SEO services across India, UAE, Australia, and the US – supporting both
                local and global growth.
              </p>
              <button className="bg-gold text-dark-green px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gold-light hover:scale-105 active:scale-95">
                START YOUR GROWTH
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gold/30 bg-dark-green/60 transition-all duration-300 hover:border-gold/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white text-lg md:text-xl font-serif pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-gradient-to-b from-dark-green to-dark-green/95">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-6">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              READY TO SCALE?
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
            Let's Engineer Your{' '}
            <span className="text-gold">SEO</span>
            <br />
            <span className="text-gold ml-8">Strategy</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Partner with Enhanccee for SEO that drives authority, trust, and scalable organic
            growth.
          </p>

          {/* CTA Button */}
          <button className="bg-gold text-dark-green px-10 py-5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold/60 hover:-translate-y-1 active:scale-95">
            BOOK YOUR STRATEGY SESSION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 px-6 md:px-12 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2026 Enhanccee. All rights reserved.</p>
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
