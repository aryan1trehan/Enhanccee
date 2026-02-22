'use client'

import RippleEffect from '@/components/RippleEffect'

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      {/* Top Section */}
      <div className="max-w-[95%] lg:max-w-[98%] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Brand Name */}
          <div className="text-2xl md:text-3xl font-bold text-white">
            Enhanccee
          </div>

          {/* Center: Text */}
          <div className="text-base md:text-lg text-white/80 text-center">
            Let's work together
          </div>

          {/* Right: Get in touch Button */}
          <RippleEffect className="inline-block">
            <a
              href="/contact"
              className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:bg-gray-200 hover:scale-105 hover:shadow-xl hover:shadow-white/30 hover:-translate-y-0.5 active:scale-95 relative z-10"
            >
              Get in touch
            </a>
          </RippleEffect>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="border-t border-white/20" />

      {/* Bottom Section */}
      <div className="max-w-[95%] lg:max-w-[98%] mx-auto px-6 md:px-12 lg:px-20 xl:px-24 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Copyright */}
          <p className="text-white/60 text-sm">
            © 2025 Enhanccee. All rights reserved.
          </p>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <RippleEffect className="inline-block">
              <a
                href="#privacy"
                className="text-white/60 text-sm transition-colors duration-300 hover:text-white relative z-10"
              >
                Privacy Policy
              </a>
            </RippleEffect>
            <RippleEffect className="inline-block">
              <a
                href="#terms"
                className="text-white/60 text-sm transition-colors duration-300 hover:text-white relative z-10"
              >
                Terms of Service
              </a>
            </RippleEffect>
            <RippleEffect className="inline-block">
              <a
                href="#cookies"
                className="text-white/60 text-sm transition-colors duration-300 hover:text-white relative z-10"
              >
                Cookie Policy
              </a>
            </RippleEffect>
          </div>
        </div>
      </div>
    </footer>
  )
}

