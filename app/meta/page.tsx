'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'

export default function MetaPage() {
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

  const frameworkSteps = [
    {
      number: '01',
      title: 'Audit',
      description: 'Comprehensive analysis of current campaigns and competitive landscape',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Data-driven campaign architecture aligned with business objectives',
    },
    {
      number: '03',
      title: 'Execution',
      description: 'Precision campaign launch across Facebook, Instagram, and Meta platforms',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous A/B testing and performance refinement for maximum ROI',
    },
    {
      number: '05',
      title: 'Scale',
      description: 'Sustained growth and expanded reach across target audiences',
    },
  ]

  const faqs = [
    {
      question: "How quickly can we expect to see results from Meta advertising?",
      answer: "Meta advertising typically shows initial results within 1-2 weeks as campaigns optimize. Significant performance improvements and scaling usually occur within 4-8 weeks, depending on your budget, audience targeting, and campaign objectives. We focus on sustainable, scalable growth with consistent optimization.",
    },
    {
      question: "What makes Enhanccee different from other Meta advertising agencies?",
      answer: "We don't just run ads—we engineer campaigns for business impact. Our approach combines creative excellence with data-driven optimization, focusing on conversions and revenue rather than just impressions. We work exclusively with brands that value long-term growth and measurable ROI.",
    },
    {
      question: "Do you work with luxury and enterprise brands?",
      answer: "Yes, we specialize in working with luxury and enterprise brands. Our team has extensive experience managing high-value campaigns for premium brands and large-scale organizations. We understand the unique challenges of maintaining brand integrity while driving performance on Meta platforms.",
    },
    {
      question: "What regions do you serve?",
      answer: "We deliver Meta advertising services across India, UAE, Australia, and the US. Our team supports both local and global campaigns, ensuring your brand achieves optimal reach and performance in your target markets, regardless of geographic location.",
    },
    {
      question: "Is your Meta advertising approach future-ready?",
      answer: "Absolutely. We stay ahead of Meta's evolving platform with advanced targeting, creative optimization, and AI-driven campaign management. Our approach ensures your brand maintains performance as Meta continues to evolve its advertising ecosystem and introduce new features.",
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
              META ADVERTISING
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="text-white">Traffic is Vanity.</span>
            <br />
            <span className="text-gold">Conversions are Power.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            We engineer high-performance Meta campaigns that drive measurable business results, not just clicks.
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
                  The difference between clicks and conversions is{' '}
                  <span className="text-gold font-bold">strategy</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  We don't just run ads; we engineer campaigns for{' '}
                  <span className="text-gold font-bold">business impact</span>.
                </p>
                <p className="text-lg leading-relaxed">
                  At Enhanccee, Meta advertising isn't a service - it's a{' '}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'CAMPAIGN STRATEGY & ARCHITECTURE',
                description:
                  'Data-driven campaign structure, audience segmentation, budget allocation, and conversion optimization — engineered for performance.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'CREATIVE OPTIMIZATION',
                description:
                  'A/B testing, creative refinement, and visual storytelling that builds trust and guides users toward conversion – not just engagement.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'AUDIENCE TARGETING & RETARGETING',
                description:
                  'Advanced audience segmentation aligned with business intent, customer behavior, and revenue potential.',
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: 'PERFORMANCE ANALYTICS',
                description:
                  'Real-time tracking, conversion attribution, and ROI analysis to optimize campaigns and maximize business impact.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'BUDGET OPTIMIZATION',
                description:
                  'Strategic budget allocation and bid management that maximizes ROI while scaling profitable campaigns.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'CONVERSION TRACKING & ATTRIBUTION',
                description:
                  'Advanced tracking setup and multi-touch attribution to understand the full customer journey and optimize for conversions.',
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
              The difference between clicks and conversions is strategy. Brands partner with Enhanccee
              because they want more than traffic — they want measurable ROI, scalable growth, and
              campaigns that drive business impact.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { value: '3×', label: 'ROI INCREASE' },
              { value: '85%', label: 'CONVERSION RATE' },
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
              "We don't optimize for impressions alone"
            </p>
            <p className="text-gold text-xl md:text-2xl font-semibold">
              We optimize for business impact
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
                      'Meta advertising veterans with 10+ years driving enterprise and luxury brand growth',
                  },
                  {
                    title: 'Creative Excellence',
                    description: 'Data-driven creative optimization across every campaign touchpoint',
                  },
                  {
                    title: 'Future-Ready',
                    description:
                      'Advanced targeting and AI-driven optimization ensuring performance in evolving Meta ecosystem',
                  },
                  {
                    title: 'ROI-Focused',
                    description:
                      'Transparent reporting on conversions, revenue impact, and campaign performance',
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
                Recognised among emerging best Meta advertising agencies
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Delivering Meta advertising services across India, UAE, Australia, and the US – supporting both
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
            <span className="text-gold">Meta</span>
            <br />
            <span className="text-gold ml-8">Strategy</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Partner with Enhanccee for Meta advertising that drives conversions, trust, and scalable business growth.
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
