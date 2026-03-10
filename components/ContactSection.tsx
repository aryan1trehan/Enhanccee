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
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-24 bg-black" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-light mb-6">
              Let&apos;s Build Something
              <br />
              <em className="not-italic font-normal">Extraordinary</em>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Ready to elevate your brand? Let&apos;s discuss how we can drive your growth.
            </p>
          </div>

          <div className="border border-white/15 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-200"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                required
              />
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-white text-black px-12 py-4 font-semibold text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
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
