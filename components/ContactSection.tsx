'use client'

import { useEffect, useRef, useState } from 'react'
import RippleEffect from '@/components/RippleEffect'

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const features = [
    'No Long-Term Contracts',
    'Strategic Discovery Call',
    'Custom Solutions Only',
  ]

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
      id="contact"
      className="relative bg-dark-green px-6 md:px-12 lg:px-16 py-20 md:py-24"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Badge */}
        <div
          className={`inline-block mb-8 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="px-6 py-2 border border-white bg-black flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Let's Build Your Legacy
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-white">Ready to Stand Above</span>
          <br />
          <span className="text-white">the Noise?</span>
        </h2>

        {/* Descriptive Text */}
        <p
          className={`text-lg md:text-xl text-white mb-12 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Let's craft your brand's legacy together
        </p>

        {/* CTA Button */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <RippleEffect className="inline-block">
            <a
              href="/contact"
              className="bg-gradient-to-r from-white to-gray-300 text-black px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-gray-200 hover:to-white hover:scale-110 hover:shadow-2xl hover:shadow-white/60 hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto group active:scale-95 animate-pulse-slow inline-block relative z-10"
            >
              Hire Us
              <svg
                className="w-5 h-5 text-black transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110"
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
            </a>
          </RippleEffect>
        </div>

        {/* Bottom Features */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
              <span className="text-white text-sm md:text-base">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}

