'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-gold-dim pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top CTA: PROJECT IN MIND? */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] uppercase">
            <span className="text-cream">PROJECT IN </span>
            <span className="text-gold">MIND?</span>
          </h2>
        </div>

        {/* Social buttons row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { label: 'Facebook', href: '#' },
            { label: 'Twitter', href: '#' },
            { label: 'Dribbble', href: '#' },
            { label: 'Instagram', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald/40 hover:bg-teal/60 border border-gold-dim px-6 py-3 text-sm text-cream transition-all duration-300"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold text-xs">
                ●
              </span>
              <span className="uppercase tracking-[0.15em] text-[11px]">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom grid: brand + menus + contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-14 mb-10">
          {/* Brand + description + email capture */}
          <div className="space-y-4">
            <h3 className="text-xl text-gold">Enhanccee</h3>
            <p className="text-cream-dim text-sm leading-relaxed">
              We combine strategy, creativity, and technology to help brands grow in today&apos;s
              digital landscape.
            </p>

            <div className="mt-6">
              <p className="text-cream text-sm mb-3">Stay in the loop</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-stretch rounded-full bg-bg border border-gold-dim overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-2 text-sm bg-transparent text-cream placeholder-cream-dim focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center px-4 bg-teal hover:bg-emerald transition-colors"
                  aria-label="Submit email"
                >
                  <span className="h-7 w-7 rounded-full bg-gold flex items-center justify-center text-bg text-xs">
                    ↑
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="text-cream mb-4">Main Pages</h4>
            <ul className="space-y-2 text-sm text-cream-dim">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-gold transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/meta" className="hover:text-gold transition-colors">
                  Meta
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-cream mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-sm text-cream-dim">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  404 Page
                </a>
              </li>
            </ul>
          </div>

          {/* Location / Contact */}
          <div>
            <h4 className="text-cream mb-4">Location</h4>
            <p className="text-cream-dim text-sm mb-4 leading-relaxed">
              4140 Parker Rd. <br />
              Allentown, New Mexico 31134
            </p>

            <h4 className="text-cream mb-2 mt-4">Contact</h4>
            <p className="text-cream-dim text-sm">
              <a href="mailto:hello@enhanccee.com" className="hover:text-gold transition-colors">
                hello@enhanccee.com
              </a>
              <br />
              <span className="block mt-1">+1 (302) 555-0127</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gold-dim pt-6 text-center">
          <p className="text-cream-dim text-xs">
            &copy; {new Date().getFullYear()} Enhanccee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
