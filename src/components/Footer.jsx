import { Link } from 'react-router-dom'

const LOGO_URL = 'https://github.com/user-attachments/assets/fb4568b1-45ca-4d84-bb03-3ad76a815e56'

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={LOGO_URL} alt="Hellensteiner Bräu" className="h-20 w-auto mb-4" />
            <p className="text-sm text-cream/70 leading-relaxed">
              Seit 1850 brauen wir nach dem deutschen Reinheitsgebot in bester bayerischer Tradition.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-cream/60 hover:text-gold transition-colors text-xl">📘</a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors text-xl">📷</a>
              <a href="#" className="text-cream/60 hover:text-gold transition-colors text-xl">🐦</a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-gold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Startseite' },
                { to: '/biere', label: 'Unsere Biere' },
                { to: '/shop', label: 'Shop' },
                { to: '/brauerei', label: 'Brauerei' },
                { to: '/veranstaltungen', label: 'Veranstaltungen' },
                { to: '/aktuelles', label: 'Aktuelles' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-gold mb-4">Unsere Biere</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>Hellensteiner Helles</li>
              <li>Hellensteiner Weizen</li>
              <li>Hellensteiner Dunkel</li>
              <li>Hellensteiner Märzen</li>
              <li>Hellensteiner Bock</li>
              <li>Hellensteiner Radler</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-gold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/kontakt', label: 'Impressum' },
                { to: '/kontakt', label: 'Datenschutz' },
                { to: '/kontakt', label: 'AGB' },
                { to: '/kontakt', label: 'Kontakt' },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-cream/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 border border-gold/30 rounded text-xs text-cream/60">
              📍 Brauereigasse 1, 84503 Altötting<br />
              📞 +49 (0) 8671 / 12345<br />
              ✉️ info@hellensteiner.de
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-cream/50">© 2024 Hellensteiner Bräu. Alle Rechte vorbehalten.</p>
          <p className="text-sm font-semibold text-amber">🔞 Nur für Personen ab 18 Jahren. Alkohol in Maßen genießen.</p>
        </div>
      </div>
    </footer>
  )
}
