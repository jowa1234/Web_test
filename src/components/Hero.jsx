export default function Hero({ title, subtitle, bgGradient, children, fullHeight = false }) {
  return (
    <section
      className={`relative flex items-center justify-center ${fullHeight ? 'min-h-screen' : 'min-h-[50vh]'} overflow-hidden`}
      style={{ background: bgGradient || 'linear-gradient(135deg, #1C1410 0%, #2D2315 50%, #1C1410 100%)' }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4B483\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {title && <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4 leading-tight">{title}</h1>}
        {subtitle && <p className="text-gold text-xl md:text-2xl mb-8 font-light">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
