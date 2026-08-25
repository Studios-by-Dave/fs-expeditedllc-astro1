// Site-wide constants
import { serviceCategories, services } from "./services";
import { serviceAreas } from "./serviceAreas";

export const site = {
  name: "F&S Expedited LLC",
  phoneJoe: { tel: "8653649011", display: "(865) 364-9011", label: "Joe" },
  phoneLuke: { tel: "7047518141", display: "(704) 751-8141", label: "Luke" },
  email: "Aldrich2577@gmail.com",
  facebook: "https://www.facebook.com/share/17MKXS5wLS/",
  address: "Shelby, NC 28152",
  serviceRadius: "100-Mile Radius of Shelby, NC",
};

export const mainNav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Promos", href: "/promos" },
];

// Grouped header navigation (drives Header dropdowns).
export type NavNode = { label: string; href: string; divider?: boolean; featured?: boolean };
export type NavItem = { label: string; href: string; dropdown?: NavNode[]; cta?: boolean };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      ...serviceCategories.map((c) => ({ label: c.title, href: `/services/${c.slug}` })),
      { label: "", href: "", divider: true },
      { label: "Gravel Delivery", href: "/services/material-delivery/gravel-delivery", featured: true },
      { label: "Dump Truck Services", href: "/services/dump-trucks-hauling-services/dump-truck-hauling", featured: true },
      { label: "Debris Removal", href: "/services/site-services/debris-removal", featured: true },
      { label: "All Services", href: "/services", featured: true },
    ],
  },
  {
    label: "Service Area",
    href: "/service-area",
    dropdown: [
      ...serviceAreas.map((a) => ({ label: `${a.city}, ${a.state}`, href: `/service-area/${a.slug}` })),
      { label: "All Service Areas", href: "/service-area", featured: true },
    ],
  },
  {
    label: "Company",
    href: "/about",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Reviews", href: "/reviews" },
      { label: "Gallery", href: "/gallery" },
      { label: "Specials & Promos", href: "/promos" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Free Quote", href: "/contact", cta: true },
];
