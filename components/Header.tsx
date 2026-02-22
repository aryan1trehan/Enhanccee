'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RippleEffect from '@/components/RippleEffect'

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'CLIENTELE', href: '/#clientele' },
    { name: 'OUR SERVICES', href: '/services' },
    { name: 'WHY CHOOSE US?', href: '/#philosophy' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact', isActive: true },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  return (
    <header className="relative z-10 px-6 md:px-12 lg:px-16 py-6 flex items-center justify-between border-b border-black/20">
      {/* Logo */}
      <a
        href="/"
        className={`text-2xl font-bold text-black tracking-tight hover:text-black transition-all duration-500 cursor-pointer ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
        }`}
      >
        Enhanccee
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item, index) => {
          // Check if current page matches the nav item
          const isActive = 
            (pathname === '/contact' && item.name === 'CONTACT US') ||
            (pathname === '/services' && item.name === 'OUR SERVICES') ||
            (pathname === '/' && item.name === 'HOME') ||
            (pathname === '/blog' && item.name === 'BLOG')

          return (
            <RippleEffect key={item.name} className="inline-block" color="black">
              <a
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-all duration-500 relative group ${
                  isActive
                    ? 'text-black'
                    : 'text-black'
                } ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {item.name}
              </a>
            </RippleEffect>
          )
        })}
      </nav>

      {/* Enquiry Button */}
      <RippleEffect className="inline-block" color="black">
        <a
          href="/contact"
          className={`bg-black text-white px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-500 hover:bg-gray-800 hover:scale-110 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 active:scale-95 relative z-10 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          Enquiry
        </a>
      </RippleEffect>
    </header>
  )
}

