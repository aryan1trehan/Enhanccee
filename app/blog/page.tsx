import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── COMING SOON SECTION ── */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-6 md:px-12 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-black/40 text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">
            Blog
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight text-black">
            Coming Soon
          </h1>
          <div className="h-px w-16 bg-black/20 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">
            We're crafting insightful content about branding, design, growth, and digital strategy. 
            Check back soon for articles that will help elevate your brand.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

