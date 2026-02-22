'use client'

import { useEffect, useRef, useState } from 'react'

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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
      id="about"
      className="relative min-h-screen bg-white flex items-center justify-center px-6 md:px-12 lg:px-16 py-20"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Opening Quotation Marks */}
        <div
          className={`absolute -top-8 -left-4 md:-left-8 text-black text-6xl md:text-8xl font-serif opacity-60 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          "
        </div>

        {/* Main Text */}
        <div className="relative z-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-relaxed">
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              Enhanccee builds brands with
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              presence, precision, and authority.
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              Through strategy, design, and
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              performance, we help ambitious
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.1s' }}
            >
              brands{' '}
            </span>
            <span
              className={`text-black relative inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.3s' }}
            >
              define
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-black/30 transform -skew-x-12" />
            </span>{' '}
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.5s' }}
            >
              their legacy — not
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.7s' }}
            >
              chase trends.
            </span>
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div
          className={`mt-12 mx-auto w-24 h-0.5 bg-black transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 scale-x-100'
              : 'opacity-0 scale-x-0'
          }`}
          style={{ animationDelay: '1.9s' }}
        />
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  )
}

