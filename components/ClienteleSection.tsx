export default function ClienteleSection() {
  const clients = [
    'Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5', 'Client 6'
  ]

  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">
              OUR CLIENTELE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream mb-8">
            Trusted by Leading Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-emerald border border-gold-dim p-8 text-center flex items-center justify-center min-h-[120px] transition-all duration-300 hover:border-gold hover:bg-teal"
            >
              <span className="text-cream-dim text-sm font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
