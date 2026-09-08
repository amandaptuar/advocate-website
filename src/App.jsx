import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import './index.css'

/* ===== SVG ICONS ===== */
const ScalesIcon = () => (
  <svg viewBox="0 0 512 512"><path d="M256 32v48H96l80 160c0 0-16 32-80 32s-80-32-80-32L96 80M256 80v368M176 448h160M256 80h160l-80 160c0 0 16 32 80 32s80-32 80-32L416 80" stroke="currentColor" strokeWidth="24" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const PhoneIcon = () => <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0122 16.92z"/></svg>
const MailIcon = () => <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6" fill="none" stroke="#060606" strokeWidth="2"/></svg>
const MapIcon = () => <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="#060606"/></svg>
const GavelIcon = () => <svg viewBox="0 0 24 24"><path d="M14.5 2.5L17.5 5.5L8 15L5 12L14.5 2.5ZM3 21H21V19H3V21ZM17 8L20 11L18.5 12.5L15.5 9.5L17 8ZM2 17L7 12L10 15L5 20L2 17Z"/></svg>
const ShieldIcon = () => <svg viewBox="0 0 24 24"><path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>
const DocIcon = () => <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6M16 13H8M16 17H8M10 9H8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
const BuildingIcon = () => <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
const PinIcon = () => <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
const ArrowR = () => <svg viewBox="0 0 24 24" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const ArrowL = () => <svg viewBox="0 0 24 24" width="14" height="14"><path d="M19 12H5M12 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
const WhatsAppIcon = ({ size = 20, fill = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={fill}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.002-1.055zm12.51-6.726c-.347-.174-2.052-1.012-2.369-1.128-.316-.115-.547-.174-.777.174-.23.348-.893 1.128-1.094 1.358-.202.231-.404.26-.75.087-.348-.174-1.467-.541-2.795-1.726-1.033-.922-1.73-2.062-1.932-2.41-.202-.347-.022-.535.152-.708.157-.156.348-.404.522-.607.174-.202.23-.347.347-.578.117-.231.059-.434-.028-.607-.087-.174-.777-1.872-1.066-2.564-.28-.673-.564-.582-.777-.593-.2-.01-.433-.012-.664-.012-.23 0-.606.087-.923.434-.318.348-1.213 1.186-1.213 2.894 0 1.708 1.242 3.358 1.416 3.59.174.231 2.445 3.733 5.923 5.234.827.357 1.473.57 1.976.73.83.264 1.585.227 2.182.138.667-.099 2.052-.839 2.34-1.649.288-.81.288-1.503.202-1.649-.087-.146-.317-.232-.664-.406z"/>
  </svg>
)

function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/917499768417?text=Hello%20Adv.%20Vivek%20Wankhade%2C%20I%20would%20like%20to%20inquire%20about%20legal%20consultation." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float-circle"
      title="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} fill="#ffffff" />
      <div className="whatsapp-pulse"></div>
    </a>
  )
}

/* ===== PRACTICE AREA DATA ===== */
const practiceAreas = [
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    tagline: 'Protecting your civil rights with strategic legal representation',
    desc: 'Our civil litigation practice covers a wide spectrum of disputes, providing strong courtroom advocacy and strategic counsel for individuals and businesses alike.',
    sections: [
      { heading: 'What We Handle', text: 'We represent clients in property disputes, breach of contract matters, recovery suits, injunction proceedings, declaratory suits, and partition cases. Our approach focuses on thorough case preparation and aggressive yet professional advocacy before the District Court, Pune.' },
      { heading: 'Our Approach', text: 'Every civil case begins with a detailed analysis of facts and applicable law. We believe in early case assessment to provide clients with a realistic outlook, helping them make informed decisions about litigation strategy, settlement options, and timeline expectations.' },
      { heading: 'Areas Covered', list: ['Property & Land Disputes', 'Contract Enforcement & Breach', 'Recovery & Money Suits', 'Injunction & Interim Relief', 'Declaratory & Title Suits', 'Specific Performance Actions', 'Partition & Co-ownership Disputes', 'Consumer Disputes'] }
    ]
  },
  {
    id: 'criminal-defence',
    title: 'Criminal Defence',
    tagline: 'Vigorous defence of your rights at every stage of criminal proceedings',
    desc: 'Our criminal defence practice is built on the fundamental principle that every accused person deserves competent and dedicated legal representation.',
    sections: [
      { heading: 'Defence Services', text: 'From the moment of arrest through trial and appeal, we provide comprehensive criminal defence services. This includes bail applications, anticipatory bail, quashing petitions, trial representation, and appeals before higher courts.' },
      { heading: 'Case Categories', list: ['Bail & Anticipatory Bail Applications', 'Cheque Bounce Cases (NI Act Sec. 138)', 'Criminal Complaints & FIR Matters', 'White Collar Crime Defence', 'Domestic Violence Cases', 'Trial & Cross-examination', 'Criminal Appeals & Revision Petitions', 'Quashing Petitions under Sec. 482 CrPC'] },
      { heading: 'Why Choose Us', text: 'Criminal cases demand swift action and meticulous preparation. We maintain constant communication with our clients, explain every step of the process, and build defence strategies grounded in evidence and law. Our experience at the Session Court, Pune gives us deep familiarity with local court procedures and judicial tendencies.' }
    ]
  },
  {
    id: 'family-law',
    title: 'Family Law',
    tagline: 'Sensitive handling of family matters with empathy and expertise',
    desc: 'Family disputes are deeply personal. We handle these matters with the discretion, sensitivity, and legal expertise they require.',
    sections: [
      { heading: 'Our Family Law Practice', text: 'We understand that family law cases are among the most emotionally challenging legal matters. Our approach balances compassionate client counselling with firm legal advocacy to achieve the best possible outcomes.' },
      { heading: 'Services', list: ['Divorce & Mutual Consent Divorce', 'Maintenance Claims (Sec. 125 CrPC)', 'Child Custody & Visitation Rights', 'Domestic Violence Protection', 'Hindu Succession & Inheritance', 'Muslim Personal Law Matters', 'Guardianship & Adoption', 'Dowry Harassment Cases'] },
      { heading: 'Mediation & Settlement', text: 'Where possible, we encourage amicable resolution through mediation and negotiation. However, when a negotiated settlement is not achievable, we provide strong courtroom representation to protect your interests and those of your children.' }
    ]
  },
  {
    id: 'rera-compliance',
    title: 'RERA Compliance',
    tagline: 'Complete advisory on Real Estate Regulation & Development Act compliance',
    desc: 'Navigate the complexities of MahaRERA with expert guidance. We assist both developers and homebuyers in understanding and complying with RERA provisions.',
    sections: [
      { heading: 'For Developers & Builders', text: 'We provide end-to-end RERA compliance advisory including project registration with MahaRERA, quarterly update filings, compliance with advertising guidelines, escrow account management, and handling of buyer complaints before the RERA Authority.' },
      { heading: 'For Homebuyers', text: 'If you are facing issues with delayed possession, structural defects, deviations from promised amenities, or unfair contract terms, we help you file and pursue complaints before MahaRERA. We also assist in recovery of compensation and interest for delayed projects.' },
      { heading: 'RERA Services', list: ['MahaRERA Project Registration', 'Compliance Advisory & Audit', 'Complaint Filing for Homebuyers', 'Defence for Developers', 'RERA Appellate Tribunal Matters', 'Agreement Vetting (RERA Compliant)', 'Quarterly Compliance Updates', 'Penalty & Compensation Proceedings'] }
    ]
  },
  {
    id: 'property-verification',
    title: 'Property Verification & Due Diligence',
    tagline: 'Comprehensive property title checks and due diligence across India',
    desc: 'Before you invest in any property, our thorough verification process ensures your investment is legally sound, free from encumbrances, and properly documented.',
    sections: [
      { heading: 'Our Due Diligence Process', text: 'We conduct multi-layered property verification covering title chain analysis, encumbrance search, revenue record verification, municipal approvals, litigation search, and physical site inspection coordination. Our reports are comprehensive and bank-accepted.' },
      { heading: 'What We Check', list: ['Complete Title Chain (30+ years)', 'Encumbrance Certificate Analysis', 'Revenue Records & 7/12 Extracts', 'Municipal / Corporation Approvals', 'Pending Litigation Search', 'RERA Registration Verification', 'Layout & Building Plan Sanctions', 'NA Order & Land Use Verification'] },
      { heading: 'Pan-India Coverage', text: 'Our due diligence services extend across major Indian cities including Pune, Mumbai, Chennai, Delhi, Bangalore, Noida, Hyderabad, Kolkata, and more. We work with a network of local legal associates to ensure accurate on-ground verification in every jurisdiction.' }
    ]
  },
  {
    id: 'cyber-crime',
    title: 'Cyber Crime & IT Law',
    tagline: 'Expert legal counsel for cyber offences, digital fraud, and IT Act matters',
    desc: 'In an increasingly digital world, cyber crimes are on the rise. We provide specialized legal assistance for both victims and accused in all cyber-related matters.',
    sections: [
      { heading: 'Cyber Crime Representation', text: 'Our cyber crime practice handles cases involving online financial fraud, identity theft, phishing scams, social media harassment, defamation through digital platforms, unauthorized data access, and hacking. We assist clients in filing cyber crime complaints with the Cyber Cell and represent them before courts and tribunals.' },
      { heading: 'Areas of Expertise', list: ['Online Banking & UPI Fraud', 'Identity Theft & Phishing', 'Social Media Harassment & Cyberstalking', 'Data Breach & Privacy Violations', 'Hacking & Unauthorized Access', 'Cyber Defamation', 'Online Cheating & E-commerce Fraud', 'IT Act Violations & Penalties', 'Digital Evidence & Forensics Advisory', 'Cryptocurrency & Fintech Disputes'] },
      { heading: 'IT Act Advisory', text: 'We provide advisory services on compliance with the Information Technology Act, 2000, data protection regulations, and digital privacy laws. For businesses, we offer guidance on IT policy framing, cyber security legal compliance, and incident response planning. Our understanding of both the technical and legal dimensions of cyber matters gives us a distinct advantage in these cases.' }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation & Drafting',
    tagline: 'Precise legal document drafting for all your transactional needs',
    desc: 'Properly drafted legal documents form the foundation of any secure transaction. We provide meticulous drafting services for a wide range of legal instruments.',
    sections: [
      { heading: 'Drafting Services', text: 'Our documentation practice covers drafting, vetting, and registration of all types of legal instruments. Every document we prepare is tailored to the specific requirements of the transaction while ensuring compliance with applicable laws and registration requirements.' },
      { heading: 'Documents We Draft', list: ['Sale Deeds & Conveyance Deeds', 'Lease & Rent Agreements', 'Partnership Deeds & MOUs', 'Wills & Testamentary Documents', 'Power of Attorney (GPA & SPA)', 'Gift Deeds & Settlement Deeds', 'Development Agreements', 'Joint Venture Agreements', 'Legal Notices & Replies'] },
      { heading: 'Registration Assistance', text: 'We provide end-to-end assistance for document registration at the Sub-Registrar office, including stamp duty calculation, e-filing, biometric registration scheduling, and post-registration formalities.' }
    ]
  }
]

/* ===== NAVBAR COMPONENT ===== */
function Navbar({ onNav }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const handleLink = (id) => {
    setMobileOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`nav ${scrolled ? 'stuck' : ''}`}>
      <div className="nav-brand" onClick={() => { navigate('/'); window.scrollTo(0, 0) }}>
        <div className="nb-icon"><ScalesIcon /></div>
        <div className="nb-txt">
          <span className="nb-name">Adv. Vivek Wankhade</span>
          <span className="nb-sub">District & Session Court, Pune</span>
        </div>
      </div>
      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); handleLink(l.id) }}>
            {l.label}
          </a>
        ))}
      </div>
      <div className={`mob-tog ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}

/* ===== FOOTER COMPONENT ===== */
function Footer() {
  const navigate = useNavigate()
  const goSection = (id) => {
    navigate('/')
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <footer className="ft">
      <div className="ft-inner">
        <div className="ft-brand">
          <div className="nb-icon" style={{ width: 48, height: 48 }}><ScalesIcon /></div>
          <h3>Adv. Vivek Wankhade</h3>
          <p>Practising Advocate at the District and Session Court, Pune. Specialising in property law, RERA compliance, cyber crime, and due diligence services across India.</p>
        </div>
        <div className="ft-col">
          <h4>Quick Links</h4>
          <ul>
            {['home', 'about', 'services', 'why-us', 'blog', 'contact'].map(s => (
              <li key={s}><a href="#" onClick={(e) => { e.preventDefault(); goSection(s) }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h4>Practice Areas</h4>
          <ul>
            {practiceAreas.slice(0, 6).map(p => (
              <li key={p.id}><Link to={`/practice/${p.id}`}>{p.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="ft-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+917499768417">+91 74997 68417</a></li>
            <li><a href="mailto:adv.vivekwankhade@gmail.com">adv.vivekwankhade@gmail.com</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); goSection('contact') }}>District & Session Court, Pune</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-bar">
        <p>&copy; 2026 <span className="hi">Adv. Vivek Wankhade</span> &mdash; All Rights Reserved</p>
      </div>
    </footer>
  )
}

/* ===== SCROLL REVEAL HOOK ===== */
function useReveal() {
  useEffect(() => {
    const fn = () => {
      document.querySelectorAll('.rv').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('vis')
      })
    }
    window.addEventListener('scroll', fn)
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])
}

/* ===== HOME PAGE ===== */
function HomePage() {
  const [showDisc, setShowDisc] = useState(true)
  const navigate = useNavigate()
  useReveal()

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.elements.name?.value || ''
    const phone = form.elements.phone?.value || ''
    const email = form.elements.email?.value || ''
    const service = form.elements.service?.value || ''
    const message = form.elements.message?.value || ''

    const text = `🏛️ *NEW LEGAL CONSULTATION INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${name || 'Not specified'}
📱 *Phone Number:* ${phone || 'Not specified'}
📧 *Email Address:* ${email || 'Not specified'}
⚖️ *Service Required:* ${service || 'General Legal Consultation'}
📝 *Legal Query Details:*
${message || 'No additional message details provided.'}
━━━━━━━━━━━━━━━━━━━━━━
🌐 *Sent via Adv. Vivek Wankhade Legal Portal*`

    const url = `https://wa.me/917499768417?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {showDisc && (
        <div className="disc-overlay">
          <div className="disc-box">
            <div className="d-logo"><ScalesIcon /></div>
            <h2>Disclaimer</h2>
            <div className="d-body">
              <p style={{ marginBottom: 10 }}>As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By clicking "I Agree", the user acknowledges:</p>
              <ol>
                <li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from Adv. Vivek Wankhade to solicit any work.</li>
                <li>The user wishes to gain more information about the advocate for his/her own use.</li>
                <li>The information is provided to the user only on his/her specific request.</li>
                <li>This website is solely for informational purposes and should not be interpreted as soliciting or advertisement.</li>
              </ol>
            </div>
            <button className="d-btn" onClick={() => setShowDisc(false)}>I Agree</button>
          </div>
        </div>
      )}

      {/* HERO (CLEAN LAW BACKGROUND & HEADING + BUTTONS) */}
      <section className="hero" id="home">
        <div className="hero-bg"><img src="/indian-judiciary.png" alt="Indian Judiciary Building" /></div>
        <div className="hero-inner-centered">
          <div className="hero-eyebrow-centered">HIGH COURT & DISTRICT COURT ADVOCATE</div>
          <div className="hero-name-pre-centered">Advocate</div>
          <h1 className="hero-title-centered"><span className="hi">Vivek Wankhade</span></h1>
          <p className="hero-tag-centered">
            Strategic Defense &bull; Property Due Diligence &bull; Cyber Crime &bull; Commercial Litigation &bull; Civil & Criminal Representation
          </p>
          <div className="hero-btns-centered">
            <a href="#contact" className="b-gold" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Book Consultation</a>
            <a href="#services" className="b-line" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}>Practice Areas</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        {[
          ['500+', 'Cases Handled'],
          ['10+', 'Years Experience'],
          ['300+', 'Satisfied Clients'],
          ['7+', 'Cities Covered'],
        ].map(([n, l], i) => (
          <div className="st-cell" key={i}>
            <div className="st-num">{n}</div>
            <div className="st-lbl">{l}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section className="sec sec-alt" id="about">
        <div className="txt-c rv">
          <div className="s-label">About</div>
          <h2 className="s-title">Meet <span className="hi">Adv. Vivek Wankhade</span></h2>
          <p className="s-desc">A trusted name in legal practice at the District and Session Court, Pune</p>
        </div>
        <div className="abt-grid">
          <div className="abt-img rv">
            <img src="/image.png" alt="Adv. Vivek Wankhade" />
            <div className="yr">
              <div className="yr-n">10+</div>
              <div className="yr-t">Years</div>
            </div>
          </div>
          <div className="abt-body rv">
            <div className="s-label">About</div>
            <h2 className="s-title" style={{ marginBottom: 6 }}>Adv. <span className="hi">Vivek Wankhade</span></h2>
            <div className="abt-role">Advocate &mdash; District & Session Court, Pune</div>
            <p>Adv. Vivek Wankhade is a distinguished legal practitioner based in Pune, specializing in property law, civil litigation, criminal defence, and cyber crime matters. With years of dedicated service at the District and Session Court, Pune, he has built a reputation for meticulous case preparation and unwavering commitment to his clients.</p>
            <p>His practice encompasses comprehensive legal services with particular expertise in RERA compliance, property verification, due diligence, and cyber security law. Adv. Wankhade combines deep legal knowledge with practical understanding of property and IT law across major Indian cities.</p>
            <div className="abt-chips">
              {['Property Law', 'RERA Compliance', 'Cyber Crime', 'Criminal Defence', 'Civil Litigation', 'Due Diligence'].map(c => (
                <span className="abt-chip" key={c}>
                  <ShieldIcon />{c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="txt-c rv">
          <div className="s-label">Practice Areas</div>
          <h2 className="s-title">Our <span className="hi">Legal Services</span></h2>
          <p className="s-desc">Expert legal solutions tailored to protect your rights and interests</p>
        </div>
        <div className="svc-grid">
          {practiceAreas.map((pa, i) => (
            <div className="svc rv" key={pa.id} onClick={() => navigate(`/practice/${pa.id}`)}>
              <div className="svc-n">0{i + 1}</div>
              <h3>{pa.title}</h3>
              <p>{pa.tagline}</p>
              <span className="svc-link">Learn More <ArrowR /></span>
            </div>
          ))}
        </div>
      </section>

      {/* PROPERTY / RERA */}
      <section className="sec sec-alt" id="property">
        <div className="txt-c rv">
          <div className="s-label">Specialisation</div>
          <h2 className="s-title">Property Law & <span className="hi">Due Diligence</span></h2>
          <p className="s-desc">All-India property verification and RERA compliance services</p>
        </div>
        <div className="prop-row">
          <div className="prop-text rv">
            <h3 className="s-title" style={{ fontSize: '1.4rem' }}>Protecting Your <span className="hi">Property Rights</span></h3>
            <p>Our property law practice is built on thorough research and meticulous verification. Whether you are purchasing residential or commercial property, we ensure every transaction is legally sound and free from encumbrances.</p>
            <p>With expertise spanning major Indian cities, we offer comprehensive due diligence that gives you complete peace of mind before any property investment.</p>
          </div>
          <div className="prop-cards rv">
            {[
              ['RERA Compliance', 'MahaRERA registration, compliance advisory, and complaint resolution.'],
              ['Title Verification', 'Title chain analysis, ownership verification, and encumbrance checks.'],
              ['Due Diligence Reports', 'Comprehensive legal reports for property transactions.'],
              ['Agreement Drafting', 'Sale agreements, lease deeds, and property documentation.']
            ].map(([t, d]) => (
              <div className="pc" key={t}>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="loc-wrap rv">
          <h3>Due Diligence &mdash; <span className="hi">All India</span></h3>
          <div className="lc-chips">
            {['Pune', 'Mumbai', 'Chennai', 'Delhi', 'Bangalore', 'Noida', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Other Cities'].map(c => (
              <div className="lc" key={c}><PinIcon />{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS BAR */}
      <div className="highlights" id="gallery">
        <div className="hl-grid">
          {[
            ['38+', 'Years of Judiciary', 'Exposed to decades of judicial experience and deep understanding of Indian legal system.'],
            ['99.9%', 'Solved Legal Matters', 'An outstanding track record of successfully resolved cases across multiple practice areas.'],
            ['24/7', 'Client Support', 'Round-the-clock availability for urgent legal matters, bail applications, and emergency consultations.'],
            ['100%', 'Client Dedication', 'Every case receives our complete attention, with personalised strategies and transparent communication.'],
          ].map(([n, t, d], i) => (
            <div className="hl-item rv" key={i}>
              <div className="hl-num">{n}</div>
              <div className="hl-title">{t}</div>
              <div className="hl-desc">{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="sec" id="why-us">
        <div className="txt-c rv">
          <div className="s-label">Why Choose Us</div>
          <h2 className="s-title">Trusted Legal <span className="hi">Excellence</span></h2>
          <p className="s-desc">What sets Adv. Vivek Wankhade's practice apart from the rest</p>
        </div>
        <div className="prop-cards rv" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {[
            ['Proven Track Record', 'With hundreds of successfully resolved cases across civil, criminal, and property law — our results speak for themselves.'],
            ['All-India Presence', 'Due diligence and property verification services across Pune, Mumbai, Delhi, Bangalore, Chennai, Noida, and more.'],
            ['Specialised Expertise', 'Deep knowledge in niche areas like RERA compliance, cyber crime, property verification, and IT Act matters.'],
            ['Client-First Approach', 'Transparent fees, regular case updates, and personalised legal strategies tailored to each client\'s unique situation.'],
          ].map(([t, d]) => (
            <div className="pc" key={t}>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="sec sec-alt" id="blog">
        <div className="txt-c rv">
          <div className="s-label">Insights</div>
          <h2 className="s-title">Legal <span className="hi">Articles</span></h2>
          <p className="s-desc">Stay informed with our legal insights and updates</p>
        </div>
        <div className="blog-grid">
          {[
            ['/gallery-courthouse.jpg', 'August 2026', 'Understanding RERA: A Guide for Homebuyers in Maharashtra', 'Learn about your rights under the Real Estate Regulation Act and how MahaRERA protects your investment.'],
            ['/gallery-contract.jpg', 'July 2026', 'Why Property Due Diligence is Essential Before Purchase', 'A comprehensive overview of the due diligence process and how verification saves you from legal disputes.'],
            ['/gallery-lawbooks.jpg', 'June 2026', 'Cyber Crime Laws in India: What You Need to Know', 'Understanding the IT Act, reporting cyber crimes, and legal remedies available to victims of online fraud.'],
          ].map(([img, dt, t, d], i) => (
            <div className="bl rv" key={i}>
              <div className="bl-img"><img src={img} alt={t} /></div>
              <div className="bl-body">
                <div className="bl-dt">{dt}</div>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="bl-lk">Read More <ArrowR /></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact">
        <div className="txt-c rv">
          <div className="s-label">Contact</div>
          <h2 className="s-title">Get in <span className="hi">Touch</span></h2>
          <p className="s-desc">Schedule a consultation or reach out for any legal query</p>
        </div>
        <div className="ct-grid">
          <div className="ct-left rv">
            <h3>Let's <span className="hi">Connect</span></h3>
            <p>Whether you need advice on property matters, RERA compliance, cyber crime, or any other legal issue, Adv. Vivek Wankhade is here to help.</p>
            {[
              [<PhoneIcon />, 'Phone', '+91 74997 68417'],
              [<MailIcon />, 'Email', 'adv.vivekwankhade@gmail.com'],
              [<MapIcon />, 'Office', 'District and Session Court,\nPune, Maharashtra'],
              [<GavelIcon />, 'Courts', 'District Court · Session Court · MahaRERA'],
            ].map(([icon, h, p], i) => (
              <div className="ct-row" key={i}>
                <div className="ct-ic">{icon}</div>
                <div className="ct-tx">
                  <h4>{h}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ct-right rv">
            <h3>Send a Consultation Inquiry</h3>
            <form onSubmit={handleWhatsAppSubmit}>
              <div className="fg-row">
                <div className="fg">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="fg">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" placeholder="+91 00000 00000" required />
                </div>
              </div>
              <div className="fg">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="your.email@example.com" />
              </div>
              <div className="fg">
                <label>Legal Service Area</label>
                <select name="service">
                  <option value="">Select practice area</option>
                  {practiceAreas.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>Describe Your Query</label>
                <textarea name="message" placeholder="Provide details about your legal query or case..." rows="4" required />
              </div>
              <button type="submit" className="f-sub-whatsapp">
                <WhatsAppIcon /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

/* ===== PRACTICE AREA PAGE ===== */
function PracticePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const area = practiceAreas.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!area) {
    return (
      <div style={{ padding: '200px 48px 100px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: 16 }}>Page Not Found</h2>
        <p style={{ color: 'var(--gray)', marginBottom: 24 }}>The practice area you're looking for doesn't exist.</p>
        <Link to="/" className="b-gold" onClick={() => window.scrollTo(0, 0)}>Go Home</Link>
      </div>
    )
  }

  return (
    <>
      <div className="prac-hero">
        <Link to="/" className="ph-back" onClick={() => window.scrollTo(0, 0)}>
          <ArrowL /> Back to Home
        </Link>
        <h1>{area.title.split(' ').slice(0, -1).join(' ')} <span className="hi">{area.title.split(' ').slice(-1)}</span></h1>
        <p className="ph-desc">{area.desc}</p>
      </div>
      <div className="prac-body">
        {area.sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2>{s.heading}</h2>
            {s.text && <p>{s.text}</p>}
            {s.list && (
              <ul>
                {s.list.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
        <div className="prac-cta">
          <h3>Need Legal Assistance?</h3>
          <p>Contact Adv. Vivek Wankhade for expert consultation on {area.title.toLowerCase()} matters.</p>
          <a href="tel:+917499768417" className="b-gold">Call +91 74997 68417</a>
        </div>
      </div>
    </>
  )
}

/* ===== APP ROOT ===== */
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/practice/:id" element={<PracticePage />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  )
}

export default App
