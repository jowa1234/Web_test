import Hero from '../components/Hero.jsx'

const timeline = [
  {
    year: '1850',
    title: 'Gründung',
    desc: 'Josef Hellensteiner gründet die Brauerei in Altötting. Mit einem kleinen Braukessel und großem Ehrgeiz beginnt die Geschichte einer Brautradition.',
  },
  {
    year: '1920',
    title: 'Wiederaufbau',
    desc: 'Nach dem Ersten Weltkrieg baut die Familie Hellensteiner die Brauerei wieder auf. Trotz wirtschaftlicher Schwierigkeiten bleibt die Qualität oberstes Gebot.',
  },
  {
    year: '1970',
    title: 'Expansion',
    desc: 'Investitionen in moderne Brauereitechnik ermöglichen eine Verdopplung der Produktion. Das Hellensteiner Bier wird in ganz Bayern bekannt.',
  },
  {
    year: '2000',
    title: 'Auszeichnung',
    desc: 'Erste internationale Goldmedaille beim European Beer Star. Das Dunkel überzeugt die Jury mit seinem unverwechselbaren Röstaroma.',
  },
  {
    year: '2024',
    title: 'Heute',
    desc: 'In vierter Generation leitet Familie Hellensteiner die Brauerei. Tradition trifft Innovation – mit nachhaltigen Methoden und dem besten Bier seit 175 Jahren.',
  },
]

const brewingSteps = [
  { step: '01', name: 'Mälzen', icon: '🌾', desc: 'Getreide wird eingeweicht, zum Keimen gebracht und anschließend gedarrt. Das Mälzen entwickelt die Enzyme und Aromen im Malz.' },
  { step: '02', name: 'Maischen', icon: '🪣', desc: 'Das geschrotete Malz wird mit heißem Wasser vermischt. Enzyme bauen Stärke zu vergärbarem Zucker ab.' },
  { step: '03', name: 'Läutern', icon: '🔍', desc: 'Die Würze wird vom Treber getrennt. Zurück bleibt eine klare, malzige Flüssigkeit – die Grundlage des Bieres.' },
  { step: '04', name: 'Hopfen', icon: '🌿', desc: 'Die Würze wird gekocht und Hopfen hinzugefügt. Hopfen gibt dem Bier seine charakteristische Bitterkeit und sein Aroma.' },
  { step: '05', name: 'Gären', icon: '🧪', desc: 'Hefe verwandelt den Zucker in Alkohol und Kohlensäure. Je nach Bierstil gärt das Bier bei verschiedenen Temperaturen.' },
  { step: '06', name: 'Lagern', icon: '❄️', desc: 'Das junge Bier reift bei tiefen Temperaturen. Während der Lagerung klären sich die Aromen und das Bier wird stabiler.' },
  { step: '07', name: 'Abfüllen', icon: '🍺', desc: 'Das fertige Bier wird gefiltert (oder naturtrüb belassen), karbonisiert und in Flaschen oder Fässer abgefüllt.' },
]

export default function Brauerei() {
  return (
    <div>
      <Hero
        title="Unsere Brauerei"
        subtitle="175 Jahre Leidenschaft, Tradition und handwerkliche Braukunst"
        fullHeight={false}
      />

      {/* History Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Geschichte</p>
            <h2 className="section-title">Unsere Geschichte seit 1850</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={`relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gold/20 hover:border-gold/40 transition-colors">
                      <span className="text-amber font-heading font-bold text-3xl">{item.year}</span>
                      <h3 className="font-heading font-bold text-text-dark text-xl mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-amber rounded-full border-4 border-cream items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reinheitsgebot */}
      <section className="py-20 bg-dark-brown text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber mb-8">
            <span className="text-5xl">🌾</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-cream mb-6">Das Reinheitsgebot von 1516</h2>
          <p className="text-cream/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Seit Herzog Wilhelm IV. im Jahr 1516 das Reinheitsgebot erließ, gilt in Bayern: Bier darf nur aus Wasser, Malz, Hopfen und Hefe hergestellt werden. Wir halten dieses Versprechen seit unserer Gründung 1850.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '💧', label: 'Wasser', desc: 'Weiches Quellwasser aus den bayerischen Alpen' },
              { icon: '🌾', label: 'Malz', desc: 'Gersten- und Weizenmalz aus heimischem Anbau' },
              { icon: '🌿', label: 'Hopfen', desc: 'Aromatischer Hallertauer Hopfen' },
              { icon: '🔬', label: 'Hefe', desc: 'Unsere hauseigene Hefestämme seit Generationen' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-bold text-gold mb-1">{item.label}</h3>
                <p className="text-cream/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Handwerk</p>
            <h2 className="section-title">Der Brauprozess</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vom Korn zur Flasche – jeder Schritt wird mit größter Sorgfalt durchgeführt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brewingSteps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gold/10 hover:border-gold/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-amber font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{step.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #2D2315, #1C1410)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Unser Team</p>
            <h2 className="font-heading text-4xl font-bold text-cream mb-4">Die Brauer hinter dem Bier</h2>
            <p className="text-cream/70 max-w-2xl mx-auto">
              Unser Team aus leidenschaftlichen Braumeistern und erfahrenen Fachleuten setzt tagtäglich alles daran, das beste Bier für Sie zu brauen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Johann Hellensteiner', role: 'Braumeister & Geschäftsführer', gen: '4. Generation' },
              { name: 'Maria Hellensteiner', role: 'Kellermeisterin', gen: 'Bierqualität & Lagerung' },
              { name: 'Thomas Bauer', role: 'Chefbrauer', gen: 'Rezeptur & Innovation' },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ background: 'linear-gradient(135deg, #D4B483, #C8872B)' }}>
                  👤
                </div>
                <h3 className="font-heading font-bold text-cream text-lg">{person.name}</h3>
                <p className="text-gold text-sm mb-1">{person.role}</p>
                <p className="text-cream/50 text-xs">{person.gen}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Nachhaltigkeit</p>
            <h2 className="section-title">Unsere Verantwortung</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☀️', title: 'Solarenergie', desc: 'Unsere Brauerei wird zu 60% mit eigener Solarenergie betrieben.' },
              { icon: '💧', title: 'Wasserrecycling', desc: 'Brauchwasser wird gereinigt und wiederverwendet – 30% weniger Verbrauch.' },
              { icon: '🌾', title: 'Regionale Zutaten', desc: 'Hopfen und Malz stammen aus einem Umkreis von 150 km.' },
              { icon: '♻️', title: 'Mehrweg', desc: '95% unserer Flaschen sind Mehrwegflaschen – Ressourcen schonen.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gold/10 hover:border-gold/30 transition-colors text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-text-dark text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
