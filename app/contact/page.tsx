'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectCategory: '',
    projectTimeline: '',
    vision: '',
    suitableTime: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-dark-green">
      {/* Header */}
      <Header />

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* Left Section - Contact Information */}
        <div className="bg-dark-teal px-6 md:px-12 lg:px-16 py-12 md:py-20 flex flex-col justify-center">
          <div className="max-w-lg">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-light text-gold mb-2">
              Contact Enhanccee
            </h1>
            <h2 className="text-5xl md:text-6xl font-serif text-gold mb-8 italic" style={{ fontFamily: 'serif' }}>
              Speak to Enhanccee
            </h2>

            {/* Introductory Text */}
            <div className="space-y-4 mb-12">
              <p className="text-gold/90 text-lg md:text-xl font-serif italic leading-relaxed" style={{ fontFamily: 'serif' }}>
                Where brands come to evolve, transform, and become unforgettable.
              </p>
              <p className="text-gold/90 text-lg md:text-xl font-serif italic leading-relaxed" style={{ fontFamily: 'serif' }}>
                We only work with people who value design, clarity, and long-term brand building. If your vision aligns with excellence, we would love to collaborate.
              </p>
            </div>

            {/* Separator */}
            <div className="h-px bg-gold/30 mb-12" />

            {/* Office Information */}
            <div className="mb-8">
              <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
                Office
              </h3>
              <p className="text-gold/90 text-base mb-1">Enhanccee Studio</p>
              <p className="text-gold/90 text-base">Jaipur, India</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+917891368868"
                  className="text-gold/90 text-base hover:text-gold transition-colors duration-300"
                >
                  +91 7891368868
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@enhanccee.com"
                  className="text-gold/90 text-base hover:text-gold transition-colors duration-300"
                >
                  info@enhanccee.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Inquiry Form */}
        <div className="bg-cream px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <div className="max-w-2xl mx-auto">
            {/* Form Header */}
            <h2 className="text-4xl md:text-5xl font-serif text-dark-green mb-3" style={{ fontFamily: 'serif' }}>
              INQUIRY FORM
            </h2>
            <p className="text-dark-green/80 text-base mb-8">
              Share a few details so we can dive into your world before we speak.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Brand/Company Name"
                    className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gold text-dark-green border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-dark-green/60">Select Category</option>
                    <option value="seo" className="text-dark-green">SEO</option>
                    <option value="meta" className="text-dark-green">Meta Advertising</option>
                    <option value="web-dev" className="text-dark-green">Web Development</option>
                    <option value="saas" className="text-dark-green">SaaS</option>
                    <option value="branding" className="text-dark-green">Branding</option>
                    <option value="ui-ux" className="text-dark-green">UI & UX</option>
                  </select>
                </div>
                <div>
                  <select
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gold text-dark-green border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-dark-green/60">Select Timeline</option>
                    <option value="asap" className="text-dark-green">ASAP</option>
                    <option value="1-3months" className="text-dark-green">1-3 Months</option>
                    <option value="3-6months" className="text-dark-green">3-6 Months</option>
                    <option value="6+months" className="text-dark-green">6+ Months</option>
                  </select>
                </div>
              </div>

              {/* Row 4 - Textarea */}
              <div className="relative">
                <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                <textarea
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your vision"
                  className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300 resize-none"
                />
              </div>

              {/* Row 5 */}
              <div className="relative">
                <span className="absolute -top-2 -left-1 text-red-500 text-lg font-bold z-10">*</span>
                <input
                  type="text"
                  name="suitableTime"
                  value={formData.suitableTime}
                  onChange={handleChange}
                  required
                  placeholder="Suitable Time to Connect"
                  className="w-full px-4 py-3 bg-gold text-dark-green placeholder-dark-green/60 border-0 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-dark-green text-gold px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-dark-teal hover:scale-105 hover:shadow-xl hover:shadow-gold/20 active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <section className="bg-dark-green px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 text-center" style={{ fontFamily: 'serif' }}>
            OUR PROCESS
          </h2>
          <p className="text-white text-lg text-center max-w-3xl mx-auto mb-12">
            We don't believe in quick chats — we believe in intentional conversations. After you submit the form, here's what happens next:
          </p>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: 'STEP ONE',
                description: 'We review your inquiry deeply.',
              },
              {
                step: 'STEP TWO',
                description: 'You receive a call within 24-48 hours.',
              },
              {
                step: 'STEP THREE',
                description:
                  'We share a clear direction & action plan. If aligned, we begin your brand transformation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-dark-green border border-gold p-8 transition-all duration-300 hover:border-gold/80 hover:shadow-lg hover:shadow-gold/20"
              >
                <h3 className="text-gold text-lg font-semibold mb-4">
                  {item.step}
                </h3>
                <p className="text-white text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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

