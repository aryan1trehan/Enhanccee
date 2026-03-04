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
    <section id="blog" className="py-20 bg-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              RESULTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
            Measurable Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-bg border border-gold-dim p-8 text-center transition-all duration-300 hover:border-gold"
            >
              <div className="text-5xl md:text-6xl font-bold text-gold mb-4">
                {result.number}
              </div>
              <h3 className="text-xl font-bold text-cream mb-2">{result.label}</h3>
              <p className="text-cream-dim">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
