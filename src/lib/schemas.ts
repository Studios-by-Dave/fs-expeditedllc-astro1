// JSON-LD schema builders (ported from original seo-schemas.ts)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fs-expeditedllc.com#organization",
  name: "F&S Expedited LLC",
  description:
    "Dump truck hauling, gravel delivery, debris removal, and material delivery serving Shelby, NC and Cleveland County. Same-day dispatch available.",
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
    streetAddress: "137 Daly Rd",
    addressLocality: "Mooresboro",
    addressRegion: "NC",
    postalCode: "28114",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.2987, longitude: -81.699 },
  areaServed: {
    "@type": "Place",
    name: "Shelby, NC and Cleveland County",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fs-expeditedllc.com#localbusiness",
  name: "F&S Expedited LLC",
  description:
    "Dump truck hauling, gravel delivery, debris removal, and material delivery serving Shelby, NC and Cleveland County. Same-day dispatch available.",
  url: "https://www.fs-expeditedllc.com",
  telephone: ["+18653649011", "+17047518141"],
  email: "stormicpalmer@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "137 Daly Rd",
    addressLocality: "Mooresboro",
    addressRegion: "NC",
    postalCode: "28114",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.2987, longitude: -81.699 },
  areaServed: {
    "@type": "Place",
    name: "Shelby, NC and Cleveland County",
  },
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
      streetAddress: "137 Daly Rd",
      addressLocality: "Mooresboro",
      addressRegion: "NC",
      postalCode: "28114",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Shelby, NC and Cleveland County",
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
