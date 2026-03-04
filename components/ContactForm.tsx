'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    phone: '',
    email: '',
    projectCategory: '',
    projectTimeline: '',
    vision: '',
    suitableTime: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitMessage('Thank you — your inquiry has been submitted.')
      setFormData({
        fullName: '',
        brandName: '',
        phone: '',
        email: '',
        projectCategory: '',
        projectTimeline: '',
        vision: '',
        suitableTime: '',
      })
    } catch (err) {
      console.error(err)
      setSubmitMessage('Something went wrong. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-6xl xl:max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-6rem)] bg-bg px-6 md:px-8 lg:px-0">
      {/* Left Column - Contact Information */}
      <div className="w-full lg:w-[38%] px-2 md:px-4 lg:pr-10 py-12 lg:py-20 flex flex-col justify-center">
        <div className="mb-8">
          <h3 className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">
            Contact Enhanccee
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream font-sans font-light mb-6">
            Speak to Enhanccee
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-cream italic font-serif text-lg leading-relaxed">
            Where brands come to evolve, transform, and become unforgettable.
          </p>
          <p className="text-cream italic font-serif text-lg leading-relaxed">
            We only work with people who value design, clarity, and long-term brand building. If your vision aligns with excellence, we would love to collaborate.
          </p>
        </div>

        <div className="h-px w-16 bg-gold-dim mb-8"></div>

        <div className="space-y-8">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Office</p>
            <p className="text-cream font-serif text-lg">Enhanccee Studio</p>
            <p className="text-cream font-serif text-lg">Jaipur, India</p>
          </div>

          <div className="space-y-4">
            <a 
              href="tel:+917891368868" 
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-serif text-lg">+91 7891368868</span>
            </a>

            <a 
              href="mailto:info@enhanccee.com" 
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-serif text-lg">info@enhanccee.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Inquiry Form */}
      <div className="w-full lg:w-[62%] flex items-center justify-end py-12 lg:py-20">
        <div className="w-full max-w-3xl bg-[#e8e4d4] px-6 md:px-10 lg:px-12 py-10 lg:py-12 rounded-lg shadow-lg border border-[rgba(0,0,0,0.12)]">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a2623] mb-4">
              INQUIRY FORM
            </h2>
            <p className="text-[#1a2623] font-serif text-lg">
              Share a few details so we can dive into your world before we speak.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Brand in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="brandName" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                  Brand/Company Name *
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40"
                  placeholder="Enter your brand or company name"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Project Category */}
            <div>
              <label htmlFor="projectCategory" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                Project Category
              </label>
              <div className="relative">
                <select
                  id="projectCategory"
                  name="projectCategory"
                  value={formData.projectCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40 appearance-none cursor-pointer"
                >
                  <option value="">Select a category</option>
                  <option value="seo">SEO</option>
                  <option value="meta">Meta Advertising</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="branding">Branding</option>
                  <option value="saas">SaaS Development</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-[#1a2623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Timeline */}
            <div>
              <label htmlFor="projectTimeline" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                Project Timeline
              </label>
              <div className="relative">
                <select
                  id="projectTimeline"
                  name="projectTimeline"
                  value={formData.projectTimeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40 appearance-none cursor-pointer"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-plus-months">6+ months</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-[#1a2623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div>
              <label htmlFor="vision" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                Tell us about your vision *
              </label>
              <textarea
                id="vision"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40 resize-none"
                placeholder="Describe your project vision and goals..."
              />
            </div>

            {/* Suitable Time */}
            <div>
              <label htmlFor="suitableTime" className="block text-[#1a2623] font-serif text-sm font-semibold mb-2">
                Suitable Time to Connect *
              </label>
              <input
                type="text"
                id="suitableTime"
                name="suitableTime"
                value={formData.suitableTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-[#1a2623]/20 rounded-lg text-[#1a2623] font-serif focus:outline-none focus:border-[#1a2623] focus:ring-2 focus:ring-[#1a2623]/20 transition-all hover:border-[#1a2623]/40"
                placeholder="e.g., Weekdays 10 AM - 6 PM IST"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0f3535] text-white px-8 py-4 rounded-lg font-serif font-semibold text-lg hover:bg-[#1a2623] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
              {submitMessage && (
                <p className="text-sm text-[#1a2623] font-serif text-center">{submitMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

