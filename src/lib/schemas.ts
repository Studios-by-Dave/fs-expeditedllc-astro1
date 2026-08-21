// JSON-LD schema builders (ported from original seo-schemas.ts)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fs-expeditedllc.com#organization",
  name: "F&S Expedited LLC",
  description:
    "Expedited dump truck hauling, gravel delivery, debris removal & expedited services within 1-hour of Shelby, NC. Serving Charlotte, Gastonia, Hickory, Spartanburg, Greenville and 50+ cities. Licensed & insured.",
  url: "https://www.fs-expeditedllc.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.fs-expeditedllc.com/apple-touch-icon.png",
    width: 180,
    height: 180,
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+18653649011", contactType: "Customer Service", availableLanguage: ["English"] },
    { "@type": "ContactPoint", telephone: "+17047518141", contactType: "Customer Service", availableLanguage: ["English"] },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shelby",
    addressRegion: "NC",
    postalCode: "28152",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.2924, longitude: -81.5356 },
  openingHours: "Mo-Fr 06:00-18:00",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 35.2924, longitude: -81.5356 },
    geoRadius: "160934",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fs-expeditedllc.com#localbusiness",
  name: "F&S Expedited LLC",
  description:
    "Expedited dump truck hauling, gravel delivery, debris removal & expedited services within 1-hour of Shelby, NC. Serving Charlotte, Gastonia, Hickory, Spartanburg, Greenville and 50+ cities. Licensed & insured.",
  url: "https://www.fs-expeditedllc.com",
  telephone: ["+18653649011", "+17047518141"],
  email: "Aldrich2577@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shelby",
    addressRegion: "NC",
    postalCode: "28152",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.2924, longitude: -81.5356 },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 35.2924, longitude: -81.5356 },
    geoRadius: "160934",
  },
  openingHours: "Mo-Fr 06:00-18:00",
  priceRange: "$$",
  paymentAccepted: ["Cash", "Check", "Credit Card"],
  currenciesAccepted: "USD",
};

export const serviceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: "F&S Expedited LLC",
    telephone: "+1-865-364-9011",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shelby",
      addressRegion: "NC",
      postalCode: "28152",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 35.2924, longitude: -81.5356 },
    geoRadius: 160934,
  },
});

export const breadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
