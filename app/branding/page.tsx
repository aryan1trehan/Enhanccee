'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BrandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<boolean[]>([])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Initial fade-in
    setIsVisible(true)
    
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleSections((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-section-index]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(201,169,110, 0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110, 0.10) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Top Header */}
        <div className="absolute top-12 left-6 md:left-12 lg:left-20 flex items-center gap-3 z-10">
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <span className="text-cream-dim text-[11px] uppercase tracking-[0.2em] font-light">
            ENHANCCEE — BRANDING & IDENTITY
          </span>
        </div>

        {/* Main Content */}
        <div className={`relative z-10 max-w-6xl mx-auto text-center pt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-8 leading-[1.08] tracking-tight">
            <span className="text-cream block">Crafting Brands</span>
            <span className="text-cream block">That</span>
            <span className="text-gold-light italic block">Rise Above</span>
            <span className="text-cream block">the Noise</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-cream-dim max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Branding isn't a service — it's an art form shaped by strategy, emotion, and intention. We design brands for people who <em className="text-cream not-italic font-normal">experience</em> them, not just see them.
          </p>
          
          <button className="group border border-gold bg-bg px-10 py-7 transition-all duration-300 hover:bg-gold hover:border-gold">
            <div className="text-cream text-[10px] uppercase tracking-[0.3em] mb-2 group-hover:text-bg transition-colors font-light">
              EXPLORE
            </div>
            <div className="text-cream text-base uppercase tracking-[0.15em] font-medium group-hover:text-bg transition-colors">
              BEGIN YOUR IDENTITY
            </div>
          </button>
        </div>
      </section>

      {/* Brand Universes Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-14 leading-[1.08] tracking-tight">
            <span className="text-cream">We build </span>
            <span className="text-gold">brand universes</span>
            <span className="text-cream">.</span>
          </h2>

          {/* Four Grid Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
            {[
              {
                number: '01',
                title: 'Identity ecosystems aligned with your vision.',
                description:
                  'Complete brand universes that hold your values, your narrative, and your ambition — built to last across time and markets.',
              },
              {
                number: '02',
                title: 'Emotion comes before conviction.',
                description:
                  'Identities that feel human, memorable, and emotionally powerful — because connection is the bridge between attention and loyalty.',
              },
              {
                number: '03',
                title: 'No templates. No shortcuts.',
                description:
                  'Only intentional branding built with the precision of craft and the clarity of strategy — designed with permanence in mind.',
              },
              {
                number: '04',
                title: 'Every element designed to work together.',
                description:
                  'Strategically, visually, and emotionally — so your brand speaks with one coherent, inevitable voice.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-all duration-700"
              >
                <div className="text-6xl md:text-7xl lg:text-8xl text-cream-dim/20 leading-none mb-2">
                  {item.number}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-cream mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-cream-dim text-sm md:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative">
        {/* Top Gold Line with Diamond */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
          <div className="h-px bg-gold w-full max-w-7xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-[3px] w-[6px] h-[6px] bg-gold rotate-45"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-20">
          <div className="text-center mb-20">
            <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 block">
              WHAT WE DELIVER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight">
              <span className="text-cream block">Your Complete</span>
              <span className="text-gold italic block">Branding Ecosystem</span>
            </h2>
          </div>

          {/* Four Quadrants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold-dim">
            {/* Section I - Brand Strategy & Foundation */}
            <div className="bg-bg p-10 md:p-14 relative group cursor-pointer transition-all duration-500">
              <div className="relative">
                <div className="text-[60px] md:text-[80px] lg:text-[100px] text-cream-dim/20 font-normal leading-none mb-4 group-hover:text-cream-dim/30 transition-all duration-500">
                  I
                </div>
                <span className="text-cream-dim text-[11px] uppercase tracking-[0.25em] mb-5 block font-light">
                  FOUNDATION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-cream mb-6 leading-[1.1] tracking-tight group-hover:text-gold transition-colors duration-300">
                  Brand Strategy & Foundation
                </h3>
                <p className="text-cream-dim text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-light">
                  The architecture beneath every iconic brand. Purpose, values, positioning, archetype, and audience clarity — all aligned.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['PURPOSE', 'POSITIONING', 'ARCHETYPE', 'PERSONALITY', 'AUDIENCE CLARITY'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 border border-gold-dim text-gold text-xs uppercase tracking-[0.15em] bg-bg group-hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section II - Visual Identity System */}
            <div className="bg-bg p-10 md:p-14 relative group cursor-pointer transition-all duration-500">
              <div className="relative">
                <div className="text-[60px] md:text-[80px] lg:text-[100px] text-cream-dim/20 font-normal leading-none mb-4 group-hover:text-cream-dim/30 transition-all duration-500">
                  II
                </div>
                <span className="text-cream-dim text-[11px] uppercase tracking-[0.25em] mb-5 block font-light">
                  VISUAL
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-cream mb-6 leading-[1.1] tracking-tight group-hover:text-gold transition-colors duration-300">
                  Visual Identity System
                </h3>
                <p className="text-cream-dim text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-light">
                  Where strategy becomes sensation. Logos, brand marks, color palettes, typography, and visual language — all intentional.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['LOGOMARKS', 'COLOUR PALETTES', 'TYPOGRAPHY', 'VISUAL DIRECTION'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 border border-gold-dim text-gold text-xs uppercase tracking-[0.15em] bg-bg group-hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section III - Communication & Voice */}
            <div className="bg-bg p-10 md:p-14 relative group cursor-pointer transition-all duration-500">
              <div className="relative">
                <div className="text-[60px] md:text-[80px] lg:text-[100px] text-cream-dim/20 font-normal leading-none mb-4 group-hover:text-cream-dim/30 transition-all duration-500">
                  III
                </div>
                <span className="text-cream-dim text-[11px] uppercase tracking-[0.25em] mb-5 block font-light">
                  EXPRESSION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-cream mb-6 leading-[1.1] tracking-tight group-hover:text-gold transition-colors duration-300">
                  Communication & Voice
                </h3>
                <p className="text-cream-dim text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-light">
                  How your brand speaks. Voice, tone, messaging frameworks, and campaign direction — all designed to resonate and connect.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['BRAND VOICE', 'TONE FRAMEWORKS', 'MESSAGING', 'CAMPAIGN DIRECTION'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 border border-gold-dim text-gold text-xs uppercase tracking-[0.15em] bg-bg group-hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section IV - Brand in Action */}
            <div className="bg-bg p-10 md:p-14 relative group cursor-pointer transition-all duration-500">
              <div className="relative">
                <div className="text-[60px] md:text-[80px] lg:text-[100px] text-cream-dim/20 font-normal leading-none mb-4 group-hover:text-cream-dim/30 transition-all duration-500">
                  IV
                </div>
                <span className="text-cream-dim text-[11px] uppercase tracking-[0.25em] mb-5 block font-light">
                  ACTIVATION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-cream mb-6 leading-[1.1] tracking-tight group-hover:text-gold transition-colors duration-300">
                  Brand in Action
                </h3>
                <p className="text-cream-dim text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-light">
                  Identity in motion. Guidelines, collateral, internal branding, merchandise, sound identity, and rebranding — all executed with precision.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['BRAND GUIDELINES', 'COLLATERAL', 'SOUND IDENTITY', 'REBRANDING'].map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 border border-gold-dim text-gold text-xs uppercase tracking-[0.15em] bg-bg group-hover:border-gold transition-all duration-300 hover:scale-105 cursor-pointer font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-cream leading-[1.1] tracking-tight mb-10">
              <span className="text-cream block">Every element designed to work together — </span>
              <span className="text-gold italic block">strategically, visually, and emotionally.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Placeholder */}
            <div className="relative h-[450px] md:h-[550px] bg-bg rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-dim/20 to-transparent group-hover:from-gold-dim/30 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-28 h-28 border-2 border-gold rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-14 h-14 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <p className="text-cream-dim text-sm uppercase tracking-[0.2em] font-light">Process Visualization</p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div>
              <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 block">
                THE ENHANCCEE PROCESS
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[1.1] tracking-tight">
                <span className="text-cream block">Intention</span>
                <span className="text-gold italic block">at every stage</span>
              </h3>
              <p className="text-cream-dim text-base md:text-lg lg:text-xl leading-relaxed font-light">
                We begin where most agencies end — with deep discovery. Understanding your world, your audience, and the emotional territory your brand needs to own. From there, every decision is deliberate. Every pixel purposeful. Every word earned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Enhanccee Section */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-bg">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-[11px] uppercase tracking-[0.25em] font-semibold mb-6 block">
            WHY ENHANCCEE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-cream leading-[1.1] tracking-tight">
            Luxury Begins
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  )
}
