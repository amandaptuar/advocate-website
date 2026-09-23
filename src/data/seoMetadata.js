/**
 * Keyword-mapped metadata and structured data configuration for all public pages.
 * Fully aligned with Google Search Quality Evaluator guidelines and Schema.org specifications.
 * Primary Entity: Advocate Viveak Wankhade / Legal Home Solutions
 */

const BASE_URL = 'https://www.legalhomesolutions.com'

export const homeSEO = {
  title: 'Advocate Viveak Wankhade | Legal Home Solutions | District & Session Court Pune',
  description: 'Advocate Viveak Wankhade (Legal Home Solutions) — Trusted Advocate at District & Session Court, Pune. Expert in Property Due Diligence, RERA Compliance, Civil Litigation, Criminal Defence, and Cyber Crime.',
  canonicalPath: '/',
  keywords: 'Advocate Viveak Wankhade, Adv Viveak Wankhade, Viveak Wankhade, Viveak Wankhade Advocate Pune, Legal Home Solutions, Legal Home Solutions Pune, Advocate Pune, Lawyer in Pune, Property Lawyer Pune, RERA Advocate Pune, MahaRERA Lawyer Maharashtra, Due Diligence India, District Court Pune, Session Court Pune, Criminal Lawyer Pune, Civil Litigation Advocate Pune',
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${BASE_URL}/#lawyer`,
        name: 'Advocate Viveak Wankhade',
        alternateName: [
          'Adv. Viveak Wankhade',
          'Viveak Wankhade',
          'Advocate Viveak Wankhade Pune',
          'Advocate Viveak Wankhade Legal Home Solutions'
        ],
        jobTitle: 'Advocate & Legal Counsel',
        telephone: '+91-7499768417',
        email: 'adv.viveakwankhade@gmail.com',
        image: `${BASE_URL}/image.png`,
        url: `${BASE_URL}/`,
        worksFor: {
          '@id': `${BASE_URL}/#attorney`
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'District and Session Court',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411005',
          addressCountry: 'IN'
        },
        knowsAbout: [
          'Property Law',
          'MahaRERA Compliance',
          'Title Due Diligence',
          'Criminal Defence',
          'Civil Litigation',
          'Cyber Crime Law',
          'Family Law',
          'Legal Documentation'
        ]
      },
      {
        '@type': ['LegalService', 'Attorney'],
        '@id': `${BASE_URL}/#attorney`,
        name: 'Legal Home Solutions - Advocate Viveak Wankhade',
        alternateName: [
          'Advocate Viveak Wankhade',
          'Adv. Viveak Wankhade Law Practice',
          'Legal Home Solutions Pune',
          'Advocate Viveak Wankhade Legal Practice'
        ],
        legalName: 'Advocate Viveak Wankhade',
        url: `${BASE_URL}/`,
        logo: `${BASE_URL}/logo.png`,
        image: `${BASE_URL}/image.png`,
        founder: {
          '@id': `${BASE_URL}/#lawyer`
        },
        telephone: '+91-7499768417',
        email: 'adv.viveakwankhade@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'District and Session Court',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411005',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 18.5204,
          longitude: 73.8567
        },
        areaServed: [
          { '@type': 'City', name: 'Pune' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'AdministrativeArea', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: 'Advocate Viveak Wankhade - Legal Home Solutions',
        alternateName: ['Legal Home Solutions', 'Advocate Viveak Wankhade'],
        publisher: {
          '@id': `${BASE_URL}/#attorney`
        },
        inLanguage: 'en-IN'
      }
    ]
  }
}

export const practiceSEO = {
  'property-verification': {
    title: 'Property Due Diligence & Verification | Adv. Viveak Wankhade | Legal Home Solutions',
    description: 'Advocate Viveak Wankhade provides comprehensive 30+ year property title search, encumbrance verification, 7/12 extract scrutiny, and due diligence reports in Pune and All India.',
    canonicalPath: '/practice/property-verification',
    keywords: 'Advocate Viveak Wankhade, Property Verification Lawyer Pune, Property Due Diligence India, Legal Home Solutions, Title Search Report Pune, 7/12 Extract Verification, Encumbrance Certificate Check',
    serviceName: 'Property Verification & Due Diligence',
  },
  'rera-compliance': {
    title: 'MahaRERA Lawyer Pune | Adv. Viveak Wankhade | Legal Home Solutions',
    description: 'Advocate Viveak Wankhade provides expert legal advisory for MahaRERA project registration, homebuyer complaints for delayed possession, refund compensation, and RERA tribunal cases.',
    canonicalPath: '/practice/rera-compliance',
    keywords: 'Advocate Viveak Wankhade, MahaRERA Lawyer Pune, RERA Compliance Advocate Maharashtra, Legal Home Solutions, Delayed Possession Compensation Lawyer, MahaRERA Complaint Filing',
    serviceName: 'RERA Compliance & Dispute Resolution',
  },
  'civil-litigation': {
    title: 'Civil Litigation Lawyer Pune | Adv. Viveak Wankhade | District Court Representation',
    description: 'Advocate Viveak Wankhade represents clients in civil disputes, property and land conflicts, breach of contract, recovery suits, and injunctions before District Court, Pune.',
    canonicalPath: '/practice/civil-litigation',
    keywords: 'Advocate Viveak Wankhade, Civil Lawyer Pune, Civil Litigation Advocate Pune, Property Dispute Lawyer Pune, Legal Home Solutions, District Court Pune Civil Advocate',
    serviceName: 'Civil Litigation',
  },
  'criminal-defence': {
    title: 'Criminal Defence Lawyer Pune | Adv. Viveak Wankhade | Bail & Session Court Advocacy',
    description: 'Advocate Viveak Wankhade offers vigorous criminal defence for regular and anticipatory bail, Section 138 cheque bounce matters, trial cross-examination, and FIR quashing at Session Court Pune.',
    canonicalPath: '/practice/criminal-defence',
    keywords: 'Advocate Viveak Wankhade, Criminal Lawyer Pune, Criminal Defence Advocate Session Court Pune, Bail Lawyer Pune, Legal Home Solutions, Anticipatory Bail Advocate Pune',
    serviceName: 'Criminal Defence',
  },
  'cyber-crime': {
    title: 'Cyber Crime & IT Law Lawyer Pune | Adv. Viveak Wankhade | Legal Home Solutions',
    description: 'Advocate Viveak Wankhade provides specialized legal counsel for online financial fraud, UPI scams, identity theft, cyberstalking, and IT Act compliance with Cyber Cell representation.',
    canonicalPath: '/practice/cyber-crime',
    keywords: 'Advocate Viveak Wankhade, Cyber Crime Lawyer Pune, IT Act Lawyer India, Online Banking Fraud Advocate, Legal Home Solutions, Cyber Cell Complaint Lawyer Pune',
    serviceName: 'Cyber Crime & IT Law',
  },
  'family-law': {
    title: 'Family Court & Divorce Lawyer Pune | Adv. Viveak Wankhade | Legal Home Solutions',
    description: 'Advocate Viveak Wankhade provides compassionate and firm legal counsel for mutual consent divorce, contested divorce, child custody, maintenance claims under Sec 125 CrPC.',
    canonicalPath: '/practice/family-law',
    keywords: 'Advocate Viveak Wankhade, Family Lawyer Pune, Divorce Advocate Pune, Mutual Consent Divorce Lawyer, Child Custody Attorney Pune, Legal Home Solutions',
    serviceName: 'Family Law & Domestic Relations',
  },
  'documentation': {
    title: 'Trusted Documentation & Drafting Experts | Registered Rent Agreement, Notary, Sale Deed Pune | Adv. Viveak Wankhade',
    description: 'Advocate Viveak Wankhade - Trusted Documentation & Drafting Experts in Pune. Registered Rent Agreements, Notary Agreements, Affidavits (All Types), Lease Agreements, Agreement to Sale, and Sale Deeds drafting & registration.',
    canonicalPath: '/practice/documentation',
    keywords: 'Advocate Viveak Wankhade, Trusted Documentation & Drafting Experts, Registered Rent Agreement Pune, Notary Agreement Pune, Affidavit Drafting Pune, Lease Agreement Pune, Agreement to Sale Pune, Sale Deed Lawyer Pune',
    serviceName: 'Trusted Documentation & Drafting Experts',
  },
  'company-society-formation': {
    title: 'Company & Society Formation Lawyer Pune | Adv. Viveak Wankhade | Legal Home Solutions',
    description: 'Advocate Viveak Wankhade provides expert legal services for Company Formation (Pvt Ltd, LLP, OPC), Co-operative Housing Society Registration, Trust & NGO Registration in Pune.',
    canonicalPath: '/practice/company-society-formation',
    keywords: 'Advocate Viveak Wankhade, Company Formation Lawyer Pune, Society Registration Advocate Pune, Housing Society Registration Pune, LLP Registration Pune, Legal Home Solutions, NGO Trust Registration',
    serviceName: 'Company & Society Formation',
  },
}

export function getPracticeStructuredData(practiceId, areaTitle, areaDesc) {
  const meta = practiceSEO[practiceId] || {}
  const pageUrl = `${BASE_URL}/practice/${practiceId}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: meta.serviceName || areaTitle,
        description: areaDesc,
        url: pageUrl,
        provider: {
          '@type': 'LegalService',
          '@id': `${BASE_URL}/#attorney`,
          name: 'Legal Home Solutions - Advocate Viveak Wankhade',
          telephone: '+91-7499768417',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'District and Session Court',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          { '@type': 'City', name: 'Pune' },
          { '@type': 'AdministrativeArea', name: 'Maharashtra' },
          { '@type': 'Country', name: 'India' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Practice Areas',
            item: `${BASE_URL}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: areaTitle,
            item: pageUrl,
          },
        ],
      },
    ],
  }
}
