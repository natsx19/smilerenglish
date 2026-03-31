import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: SmilerEnglish,
})

function SmilerEnglish() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '', 'bot-field': '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contatti', ...formData }).toString(),
      })
      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '', 'bot-field': '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="smiler-root">
      {/* HEADER */}
      <header className="smiler-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-smile">😊</span>
            <span className="logo-text">Smiler <strong>English</strong></span>
          </div>
          <nav className="header-nav">
            <a href="#come-lavoro">Come Lavoro</a>
            <a href="#materie">Materie & Livelli</a>
            <a href="#contatti" className="nav-cta">Contattami</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-eyebrow">Smiler English</p>
            <h1 className="hero-title">
              Tutor certificata<br />
              <span className="accent">di lingua inglese</span>
            </h1>
            <p className="hero-sub">
              Impara l'inglese con metodo, non memorizzando. Lezioni online, costruite sui tuoi obiettivi, dal livello principiante all'avanzato.
            </p>
            <div className="hero-actions">
              <a href="#contatti" className="btn btn-primary">Prenota una lezione di prova</a>
              <a href="#come-lavoro" className="btn btn-outline">Scopri il metodo</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <div className="hero-card-icon">🎓</div>
              <div className="hero-card-text">
                <strong>Laurea magistrale in Lingue</strong>
                <span>Insegnante qualificata</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">🌍</div>
              <div className="hero-card-text">
                <strong>100% Online</strong>
                <span>Dove vuoi, quando vuoi</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">⭐</div>
              <div className="hero-card-text">
                <strong>Esperienza nel privato e in ambito universitario</strong>
                <span>Risultati concreti</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true" />
      </section>

      {/* COME LAVORO */}
      <section id="come-lavoro" className="section section-beige">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Il mio approccio</span>
            <h2>Come Lavoro</h2>
            <p className="section-lead">
              Ogni studente è unico. Il mio metodo si adatta ai tuoi obiettivi, al tuo ritmo e al tuo stile di apprendimento.
            </p>
          </div>
          <div className="steps">
            {[
              {
                icon: '🔍',
                title: 'Call conoscitiva',
                desc: 'Prima di iniziare, discutiamo insieme del tuo livello attuale e definiamo gli obiettivi didattici.',
              },
              {
                icon: '🗺️',
                title: 'Piano personalizzato',
                desc: 'Creo un percorso su misura per te: non lezioni standardizzate, ma un programma costruito attorno alle tue esigenze.',
              },
              {
                icon: '🗣️',
                title: 'Pratica attiva',
                desc: 'Speaking practice in contesti reali: migliorerai la produzione orale a partire da esempi concreti di vita quotidiana. Ben oltre la grammatica.',
              },
              {
                icon: '📈',
                title: 'Monitoraggio continuo',
                desc: 'Monitoro i tuoi progressi costantemente e adatto il percorso in base ai tuoi obiettivi: certificazione linguistica, esame universitario, consolidamento delle competenze, conversazione e molto altro.',
              },
            ].map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="method-quote">
            <blockquote>
              "Imparare una lingua è come costruire una nuova finestra sul mondo."
            </blockquote>
          </div>
        </div>
      </section>

      {/* MATERIE E LIVELLI */}
      <section id="materie" className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Per chi</span>
            <h2>Materie e Livelli</h2>
            <p className="section-lead">
              Lezioni per tutti i livelli: dal principiante all'avanzato (A1-C1)
            </p>
          </div>

          <div className="levels-grid">
            {[
              {
                badge: 'A1–A2',
                label: 'Principiante',
                color: 'blue-light',
                title: 'Inglese per Principianti',
                items: ['Vocabolario di base', 'Frasi essenziali', 'Basi di fonetica', 'Basi di grammatica'],
              },
              {
                badge: 'B1–B2',
                label: 'Intermedio',
                color: 'blue',
                title: 'Inglese Intermedio',
                items: ['Conversazione', 'Comprensione scritta e orale', 'Grammatica avanzata', 'Produzione scritta'],
              },
              {
                badge: 'C1–C2',
                label: 'Avanzato',
                color: 'blue-dark',
                title: 'Inglese Avanzato',
                items: ['Registro formale e informale', 'Testi complessi', 'Produzione avanzata', 'Pensiero critico'],
              },
            ].map((level, i) => (
              <div className={`level-card level-${level.color}`} key={i}>
                <div className="level-badge">{level.badge}</div>
                <span className="level-label">{level.label}</span>
                <h3>{level.title}</h3>
                <ul>
                  {level.items.map((item, j) => (
                    <li key={j}><span className="check">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="subjects-grid">
            {[
              { icon: '💼', title: 'Business English', desc: 'Impara a scrivere email professionali e a preparare presentazioni e meeting in inglese per il mondo del lavoro.' },
              { icon: '📋', title: 'Preparazione esami', desc: 'Preparazione mirata per IELTS, TOEFL, Cambridge (A2 Key, B1 Preliminary, B2 First, C1 Advanced).' },
              { icon: '✈️', title: 'Inglese per il turismo', desc: 'Lessico mirato per viaggiare con sicurezza: hotel, aeroporti, ristoranti e molto altro.' },
              { icon: '🎓', title: 'Aiuto compiti', desc: 'Aiuto per studenti di ogni età per grammatica, compiti e verifiche.' },
              { icon: '💬', title: 'Speaking club', desc: 'Sessioni dedicate esclusivamente alla produzione orale per superare la paura di parlare in inglese.' },
              { icon: '🔬', title: 'Inglese tecnico', desc: 'Linguaggio specialistico per settore tecnico-scientifico e informatico.' },
            ].map((subj, i) => (
              <div className="subject-card" key={i}>
                <div className="subject-icon">{subj.icon}</div>
                <h4>{subj.title}</h4>
                <p>{subj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* TESTIMONIALS */}
      <section className="section section-blue">
        <div className="container">
          <div className="section-header section-header-white">
            <h2>Cosa dicono i miei studenti</h2>
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem', marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
  Recensioni verificate su Superprof
            </p>
          </div>
          <div className="testimonials">
            {[
              {
                name: 'Enzo',
                role: 'Studente',
                text: 'Mi sono rivolto a Natascia per preparare il C1 cambridge. Avevo difficoltà nell&apos;orale, ma sono riuscito a sbloccarmi grazie alla sua pazienza.',
              },
              {
                name: 'Anna',
                role: 'Studentessa, principiante',
                text: 'Natascia è molto preparata e disponibile. Grazie a lei imparare l&apos;inglese anche per principianti come me non è più impossibile. Grazie!',
              },
              {
                name: 'Luca',
                role: 'Ingegnere',
                text: 'Lezioni sempre puntuali e ben strutturate. Sono migliorato molto nel parlato in poco tempo',
              },
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTATTI */}
      <section id="contatti" className="section section-beige">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Iniziamo!</span>
            <h2>Contatti</h2>
            <p className="section-lead">
              Hai domande o vuoi prenotare la tua prima lezione? Scrivimi qui o via mail/Telegram!
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <strong>Email</strong>
                  <span>smilerenglishlezioni@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <strong>Telegram</strong>
                  <span>t.me/smilereng</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div>
                  <strong>Disponibilità</strong>
                  <span>Lun–Sab, 9:30–17:30</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🎁</div>
                <div>
                  <strong>Pacchetti +lezioni disponibili</strong>
                  <span>A tariffa ridotta</span>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {formStatus === 'success' ? (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h3>Messaggio inviato!</h3>
                  <p>Grazie per avermi contattato. Ti risponderò al più presto.</p>
                  <button className="btn btn-primary" onClick={() => setFormStatus('idle')}>Invia un altro messaggio</button>
                </div>
              ) : (
                <form
                  name="contatti"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <input type="hidden" name="form-name" value="contatti" />
                  <p style={{ display: 'none' }}>
                    <label>Non compilare: <input name="bot-field" value={formData['bot-field']} onChange={handleChange} /></label>
                  </p>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Nome e Cognome *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Mario Rossi"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="mario@esempio.it"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Messaggio *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Ciao! Vorrei saperne di più sulle lezioni..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {formStatus === 'error' && (
                    <p className="form-error">Si è verificato un errore. Riprova o contattami direttamente via email.</p>
                  )}

                  <button type="submit" className="btn btn-primary btn-full" disabled={formStatus === 'sending'}>
                    {formStatus === 'sending' ? 'Invio in corso...' : 'Invia messaggio'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="logo logo-white">
            <span className="logo-smile">😊</span>
            <span className="logo-text">Smiler <strong>English</strong></span>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Smiler English – Tutti i diritti riservati</p>
        </div>
      </footer>
    </div>
  )
}
