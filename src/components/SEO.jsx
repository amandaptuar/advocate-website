import { useEffect } from 'react'

const BASE_URL = 'https://www.legalhomesolutions.com'

/**
 * SEO Component for dynamic meta tags, canonical link, Open Graph,
 * Twitter Cards, and Schema.org JSON-LD injection.
 * Completely invisible to users; ensures 100% compliant technical SEO.
 */
export default function SEO({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  ogImage = `${BASE_URL}/hero-banner.jpg`,
  structuredData,
  noIndex = false,
}) {
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title
    }

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attrName, attrValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content || '')
    }

    // Standard metadata
    if (description) {
      setMetaTag('name', 'description', description)
    }
    if (keywords) {
      setMetaTag('name', 'keywords', keywords)
    }
    setMetaTag('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')

    // Canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', canonicalUrl)

    // Open Graph
    setMetaTag('property', 'og:title', title)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:site_name', 'Advocate Vivek Wankhade - Legal Practice')
    setMetaTag('property', 'og:locale', 'en_IN')

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', title)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)
    setMetaTag('name', 'twitter:url', canonicalUrl)

    // Dynamic JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-page-schema')
    if (structuredData) {
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.id = 'dynamic-page-schema'
        schemaScript.type = 'application/ld+json'
        document.head.appendChild(schemaScript)
      }
      schemaScript.text = JSON.stringify(structuredData)
    } else if (schemaScript) {
      schemaScript.remove()
    }

    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, structuredData, noIndex])

  return null
}
