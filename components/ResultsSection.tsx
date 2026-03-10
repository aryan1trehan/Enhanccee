export default function ResultsSection() {
  const results = [
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Delivering excellence that exceeds expectations',
    },
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful campaigns across industries',
    },
    {
      number: '50+',
      label: 'Happy Clients',
      description: 'Building lasting partnerships',
    },
  ]

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-black/40 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Results
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-serif font-light">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white border border-black/10 p-10 text-center transition-all duration-300 hover:border-black hover:shadow-xl group"
            >
              <div className="text-6xl md:text-7xl font-bold text-black mb-4 group-hover:scale-105 transition-transform">
                {result.number}
              </div>
              <h3 className="text-lg font-semibold text-black uppercase tracking-wider mb-3">
                {result.label}
              </h3>
              <div className="h-px w-10 bg-black/20 mx-auto mb-3" />
              <p className="text-black/60 text-sm leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
