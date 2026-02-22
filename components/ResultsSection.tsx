'use client'

import { useEffect, useRef, useState } from 'react'
import RippleEffect from '@/components/RippleEffect'

interface Statistic {
  value: string
  label: string
}

interface Testimonial {
  quote: string
  initials: string
  name: string
  title: string
  company: string
}

const statistics: Statistic[] = [
  {
    value: '127%',
    label: 'Average Revenue Growth',
  },
  {
    value: '$2.4B',
    label: 'Portfolio Market Value',
  },
  {
    value: '94%',
    label: 'Client Retention Rate',
  },
  {
    value: '12+',
    label: 'Years of Excellence',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      "Enhanccee didn't just grow our business —they elevated our entire market position. We went from competing on price to commanding premium rates.",
    initials: 'SC',
    name: 'Sarah Chen',
    title: 'CEO',
    company: 'Quantum Dynamics',
  },
  {
    quote:
      'Finally, a marketing partner that thinks like a strategist, not a vendor. They see five moves ahead.',
    initials: 'MR',
    name: 'Marcus Rodriguez',
    title: 'Founder',
    company: 'Apex Ventures',
  },
  {
    quote:
      'Working with Enhanccee was the inflection point. They helped us transition from startup to industry authority.',
    initials: 'DAF',
    name: 'Dr. Amelia Foster',
    title: 'Chief Strategy Officer',
    company: 'Neurofftech',
  },
]

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  )
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
      id="results"
      className="relative bg-white px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Part 1: Numbers That Speak Louder Than Words */}
        <div className="mb-24">
          {/* Header */}
          <div className="text-center mb-12">
            {/* PROVEN RESULTS Badge */}
            <div
              className={`inline-block mb-6 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <div className="px-4 py-2 bg-black">
                <span className="text-white text-xs font-semibold tracking-wider uppercase">
                  PROVEN RESULTS
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <span className="text-black">Numbers That Speak</span>
              <br />
              <span className="text-black">Louder Than Words</span>
            </h2>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {statistics.map((stat, index) => (
              <RippleEffect key={index} className="block" color="black">
                <div
                  className={`group relative bg-black/5 border border-black/30 p-6 md:p-8 text-center transition-all duration-500 cursor-pointer relative z-10 ${
                    isVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  } ${
                    hoveredStat === index
                      ? 'border-black/80 bg-black/10 shadow-2xl shadow-black/30 scale-110 -translate-y-2 animate-glow'
                      : 'hover:border-black/60 hover:bg-black/8 hover:shadow-xl hover:shadow-black/10 hover:scale-105 hover:-translate-y-1'
                  }`}
                  style={{
                    transitionDelay: `${0.4 + index * 0.15}s`,
                  }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-black">
                    {stat.value}
                  </div>
                  <p className="text-black/70 text-sm md:text-base transition-colors duration-300 group-hover:text-black/90">
                    {stat.label}
                  </p>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 ${
                      hoveredStat === index ? 'opacity-100' : ''
                    }`}
                  />
                </div>
              </RippleEffect>
            ))}
          </div>
        </div>

        {/* Part 2: What Our Partners Say */}
        <div>
          {/* Header */}
          <h2
            className={`text-4xl md:text-5xl font-bold text-black text-center mb-12 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            What Our Partners Say
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <RippleEffect key={index} className="block" color="black">
                <div
                  className={`group relative bg-black/5 border border-black/30 p-6 md:p-8 transition-all duration-700 cursor-pointer relative z-10 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  } ${
                    hoveredTestimonial === index
                      ? 'border-black/80 bg-black/10 shadow-2xl shadow-black/30 scale-105 -translate-y-2 animate-glow'
                      : 'hover:border-black/60 hover:bg-black/8 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1'
                  }`}
                  style={{
                    transitionDelay: `${1 + index * 0.2}s`,
                  }}
                  onMouseEnter={() => setHoveredTestimonial(index)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                >
                {/* Quote */}
                <p className="text-black text-base md:text-lg leading-relaxed mb-6 relative z-10 transition-colors duration-300 group-hover:text-black/95">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Initials Circle */}
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                    {testimonial.initials}
                  </div>

                  {/* Name and Title */}
                  <div>
                    <p className="text-black font-bold text-sm md:text-base transition-colors duration-300 group-hover:text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-black/70 text-xs md:text-sm transition-colors duration-300 group-hover:text-black/90">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 ${
                    hoveredTestimonial === index ? 'opacity-100' : ''
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

