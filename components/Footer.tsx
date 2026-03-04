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
              className="flex items-center justify-center gap-2 rounded-full bg-bg border border-gold-dim px-6 py-3 text-sm text-cream transition-all duration-300 hover:bg-bg"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold/10 text-gold text-xs">
                ●
              </span>
              <span className="uppercase tracking-[0.15em] text-[11px]">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom grid: brand left, nav + office grouped right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 mb-10">
          {/* Brand + description + email capture */}
          <div className="space-y-4 md:max-w-md">
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
                  className="flex items-center justify-center px-4 bg-bg transition-colors"
                  aria-label="Submit email"
                >
                  <span className="h-7 w-7 rounded-full bg-gold flex items-center justify-center text-bg text-xs">
                    ↑
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Main Pages + Office grouped on the right */}
          <div className="flex-1 flex flex-col md:flex-row md:justify-end gap-10 md:gap-16">
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
                  <Link href="/clientele" className="hover:text-gold transition-colors">
                    Clientele
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gold transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/#why-choose-us" className="hover:text-gold transition-colors">
                    Why Choose Us?
                  </Link>
                </li>
                <li>
                  <Link href="/#blog" className="hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gold transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Location / Contact */}
            <div>
              <h4 className="text-cream mb-4">Office</h4>
              <p className="text-cream-dim text-sm mb-4 leading-relaxed">
                Enhanccee Studio <br />
                Jaipur, India
              </p>

              <h4 className="text-cream mb-2 mt-4">Contact</h4>
              <p className="text-cream-dim text-sm space-y-1">
                <a href="tel:+917891368868" className="block hover:text-gold transition-colors">
                  +91 7891368868
                </a>
                <a href="mailto:info@enhanccee.com" className="block hover:text-gold transition-colors">
                  info@enhanccee.com
                </a>
              </p>
            </div>
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
