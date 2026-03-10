import ServiceLayout from '@/components/ServiceLayout'

export default function UIUXPage() {
  const cards = [
    {
      title: 'User Research',
      description: 'Deep user research and analysis to understand your audience\'s needs, behaviors, and pain points.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Wireframing & Prototyping',
      description: 'Interactive wireframes and prototypes that validate concepts before development begins.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Visual Design',
      description: 'Beautiful, modern interface designs that balance aesthetics with functionality and conversion optimization.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Usability Testing',
      description: 'Comprehensive usability testing to ensure your designs are intuitive and effective before launch.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  return (
    <ServiceLayout
      title="UI & UX"
      subtitle="Design"
      description="User-centered design that creates intuitive, beautiful, and conversion-focused digital experiences. We design interfaces that users love and businesses profit from."
      badge="UI/UX SERVICES"
    >
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white border border-black/10 p-8 group hover:border-black/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-black flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">{card.title}</h3>
              <div className="h-px w-8 bg-black/20 mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="text-black/60 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-12 py-5 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            Design Your Experience
          </a>
        </div>
      </div>
    </ServiceLayout>
  )
}

