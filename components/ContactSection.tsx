'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-20 bg-bg" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
              Let's Build Something
              <br />
              <span className="text-gold">Extraordinary</span>
            </h2>
            <p className="text-lg text-cream-dim max-w-2xl mx-auto">
              Ready to elevate your brand? Let's discuss how we can drive your growth.
            </p>
          </div>

            <div className="bg-emerald border border-gold-dim p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-teal border border-gold-dim text-cream placeholder-cream-dim rounded-lg focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-teal border border-gold-dim text-cream placeholder-cream-dim rounded-lg focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-teal border border-gold-dim text-cream placeholder-cream-dim rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gold text-bg px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gold-light hover:scale-110 hover:shadow-2xl hover:shadow-gold-dim hover:-translate-y-1 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
