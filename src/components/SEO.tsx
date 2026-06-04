import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/Bedramake Main Logo.webp',
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Setup refined full page title
    const fullTitle = `${title} | Bedramake Network`;
    document.title = fullTitle;

    // Helper to safely manipulate head meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Helper to edit or create standard link elements
    const setLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', relValue);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefValue);
    };

    // 2. Core Search Engine Meta tags
    setMetaTag('name', 'description', description);
    
    const defaultKeywords = [
      'bedramake', 'academic publishing', 'scientific sandbox', 'open access repository', 
      'cope compliance', 'peer-reviewed', 'digital object identifier', 'doi registration', 
      'scholarly papers', 'academic writing help', 'journal database', 'free research tools'
    ];
    const mergedKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;
    setMetaTag('name', 'keywords', Array.from(new Set(mergedKeywords)).join(', '));
    
    // Default robots configuration
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph (Social Networks)
    const currentUrl = window.location.href;
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', 'Bedramake Network');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Canonical link
    const canonicalHref = canonical || currentUrl;
    setLinkTag('canonical', canonicalHref);

    // 6. JSON-LD structured schema.org data injection
    const scriptId = 'bedramake-schema-jsonld';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Bedramake Network",
      "url": window.location.origin,
      "description": "State-of-the-art open access cooperative database, indexing registers, and scientific sandbox bypass pipeline.",
      "publisher": {
        "@type": "Organization",
        "name": "Bedramake Network",
        "logo": "/Bedramake Main Logo.webp"
      }
    };

    const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;
    scriptElement.textContent = JSON.stringify(finalSchema);

    // Dynamic cleaning upon unmount prevents leftovers but stays for next router transitions
    return () => {
      // Keep basic metadata elements in head to avoid flicker, let successive mounts overwrite
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);

  return null; // Side-effect component, renders absolutely no visible HTML
}
