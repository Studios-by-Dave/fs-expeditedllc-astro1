// Clean, flat service data model for the Astro rebuild.
// URLs are derived: /services/[category]/[service]

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroImage: string;
  intro?: string;
  order?: number;
}

export interface Service {
  slug: string;
  title: string;
  category: string; // references ServiceCategory.slug
  description: string;
  features: string[];
  longDescription: string;
  benefits: string[];
  icon: string;
  heroImage: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "dump-trucks-hauling-services",
    title: "Dump Trucks — All Expedited Services",
    description: "Complete dump truck hauling and comprehensive site services.",
    icon: "truck",
    heroImage: "/assets/hero-truck.jpg",
    intro:
      "Our dump truck fleet is the backbone of every job we run — from bulk material transport to emergency site hauling across the Carolinas.",
    order: 1,
  },
  {
    slug: "material-delivery",
    title: "Material Delivery",
    description: "Quality materials delivered directly to your job site.",
    icon: "package",
    heroImage: "/assets/material-delivery.png",
    intro:
      "Gravel, sand, soil, and aggregate delivered exactly where you need it, when you need it — sourced from trusted regional suppliers.",
    order: 2,
  },
  {
    slug: "site-services",
    title: "Site Services",
    description: "Professional site preparation and land management.",
    icon: "construction",
    heroImage: "/assets/site-services.png",
    intro:
      "Land clearing, grading, debris removal, and structural work that gets your site build-ready and code-compliant.",
    order: 3,
  },
  {
    slug: "emergency-expedited",
    title: "Emergency Expedited",
    description: "Fast-response hauling and emergency services.",
    icon: "zap",
    heroImage: "/assets/emergency-services.png",
    intro:
      "Same-day and next-day dispatch for the moments when your project simply cannot wait.",
    order: 4,
  },
];

export const services: Service[] = [
  {
    slug: "dump-truck-hauling",
    title: "Dump Truck Hauling",
    category: "emergency-expedited",
    description:
      "Heavy-duty dump truck services for construction sites, commercial projects, and residential needs. On-time, every time.",
    features: ["Bulk Material Transport", "Site-to-Site Hauling", "Flexible Scheduling"],
    longDescription:
      "At F&S Expedited, dump truck hauling isn't just a service—it's our foundation. We've built our reputation on moving dirt, gravel, sand, and demolition debris with precision and reliability. Our fleet of heavy-duty dump trucks handles everything from small residential loads to large commercial projects. As your local Shelby hauling partner, we serve Charlotte, Gastonia, Hickory, and all communities within a 1-hour radius of Shelby, NC. We understand the urgency of construction timelines and the importance of having materials exactly where you need them, exactly when you need them. When you call F&S, you're not just getting a truck—you're getting a dedicated partner committed to keeping your project moving forward.",
    benefits: [
      "Modern, well-maintained fleet of dump trucks",
      "Experienced and licensed operators",
      "On-time delivery guaranteed",
      "Competitive per-load and hourly rates",
      "Same-day dispatch available",
      "Fully licensed and insured",
    ],
    icon: "truck",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "gravel-delivery",
    title: "Gravel Delivery",
    category: "material-delivery",
    description:
      "Premium gravel for driveways, foundations, drainage, and landscaping projects delivered directly to your job site.",
    features: ["Crushed Stone", "Road Base", "Decorative Gravel", "Fill Gravel"],
    longDescription:
      "At F&S Expedited, we understand that quality gravel is the foundation of every successful construction and landscaping project. That's why we've spent years building relationships with trusted local suppliers to bring you the finest gravel directly to your job site throughout the Charlotte metro area and Shelby region. Whether you're laying a driveway in Gastonia, building a foundation in Hickory, creating proper drainage in Lincolnton, or landscaping in Statesville, we deliver exactly what you need, when you need it. Our team knows the difference between #57 stone and crusher run, between pea gravel and river rock—and we make sure you get the right material for your specific application. We're not just delivery drivers; we're material specialists committed to your project's success.",
    benefits: [
      "Multiple grades and types available",
      "Bulk delivery for large projects",
      "Sourced from quality local suppliers",
      "Spread or dumped to your specifications",
      "Volume discounts for repeat customers",
      "Fast turnaround on orders",
    ],
    icon: "mountain",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "debris-removal",
    title: "Debris Removal",
    category: "site-services",
    description:
      "Construction debris removal and site cleanup services. We handle the mess so you can focus on building.",
    features: ["Construction Waste", "Demolition Debris", "Yard Waste"],
    longDescription:
      "At F&S Expedited, we believe a clean job site is a safe and productive job site. That's why we've made debris removal one of our core services. Our team handles everything from construction waste and demolition materials to concrete, wood, drywall, and yard waste. We understand that debris doesn't just look bad—it creates safety hazards, slows down work, and can cause costly delays. That's why we work quickly and efficiently to clear your site, sorting materials for responsible disposal and recycling when possible. When you choose F&S for debris removal, you're choosing a partner who understands that cleanup isn't an afterthought—it's essential to keeping your project on schedule and your team safe.",
    benefits: [
      "Fast site cleanup and clearing",
      "Responsible disposal and recycling",
      "Handles all types of construction debris",
      "Reduces safety hazards on-site",
      "Flexible scheduling around your project",
      "Competitive flat-rate and per-load pricing",
    ],
    icon: "trash",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "aggregate-transport",
    title: "Aggregate Transport",
    category: "site-services",
    description:
      "Reliable aggregate transport for large-scale construction and infrastructure projects across the region.",
    features: ["Limestone", "Recycled Concrete", "Base Materials"],
    longDescription:
      "At F&S Expedited, we understand that large-scale construction and infrastructure projects can't afford delays in material delivery. That's why we've specialized our aggregate transport service to handle the critical materials that form backbone of roads, foundations, and commercial builds. Whether you need limestone, recycled concrete, asphalt millings, or other base materials, our fleet ensures they arrive safely and on time. We've spent years building relationships with quarries and suppliers across our 100-mile service area, giving us the knowledge and coordination capabilities to keep your project moving. When you choose F&S for aggregate transport, you're choosing a partner who understands that your timeline depends on our reliability.",
    benefits: [
      "Large-capacity hauling for big projects",
      "Reliable scheduling for ongoing contracts",
      "100-mile service radius from Shelby, NC",
      "Coordination with quarries and suppliers",
      "DOT-compliant transport",
      "Dedicated project management support",
    ],
    icon: "package",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "emergency-expedited",
    title: "Emergency Expedited",
    category: "emergency-expedited",
    description:
      "Need materials hauled TODAY? Our expedited service gets your load where it needs to be — fast.",
    features: ["Same-Day Service", "Priority Dispatch", "24/7 Available"],
    longDescription:
      "At F&S Expedited, we know that in construction and hauling, 'emergency' means 'right now.' When your project hits an unexpected roadblock—whether it's a material shortage in Charlotte, a sudden debris removal need in Gastonia, or a last-minute project change in Hickory—we're the team you call. Our emergency expedited service isn't just about speed; it's about being the reliable partner who steps up when others can't. We've built our entire operation around being ready, with priority dispatch that puts your needs ahead of standard orders and a team that understands urgency throughout our 1-hour service radius. When you call F&S for emergency service, you're getting more than a truck—you're getting peace of mind that your critical material needs will be handled.",
    benefits: [
      "Same-day and next-day hauling",
      "Priority dispatch over standard orders",
      "24/7 availability for emergencies",
      "Rapid response time",
      "Direct communication with dispatch",
      "No surprise fees — transparent pricing",
    ],
    icon: "zap",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "commercial-hauling",
    title: "Commercial Hauling",
    category: "emergency-expedited",
    description:
      "Full-scale hauling solutions for contractors, developers, and commercial construction projects.",
    features: ["Contract Rates", "Fleet Availability", "Project Management"],
    longDescription:
      "At F&S Expedited, we understand that commercial construction projects run on tight schedules and even tighter budgets. That's why we've built our commercial hauling service around being more than just a trucking company—we're your project partner. We offer contract rates that help you forecast costs, dedicated fleet availability so you never have to worry about equipment access, and project management support that integrates seamlessly with your construction timeline. We've earned trust of contractors and developers across Charlotte, Gastonia, Shelby, and surrounding areas by understanding that commercial success depends on reliability, consistency, and having a hauling partner who shows up ready to work. When you choose F&S for commercial hauling, you're choosing a team that speaks your language and understands your business needs.",
    benefits: [
      "Dedicated account management",
      "Volume and contract-based pricing",
      "Multiple trucks available simultaneously",
      "Flexible long-term scheduling",
      "Coordination with your project timeline",
      "Proven track record with commercial clients",
    ],
    icon: "hardhat",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "site-prep",
    title: "Site Prep",
    category: "site-services",
    description:
      "Professional site preparation services including grading, excavation, and ground preparation for construction projects.",
    features: ["Land Grading", "Excavation", "Ground Preparation"],
    longDescription:
      "At F&S Expedited, we know that every successful construction project starts long before first foundation is poured—it starts with proper site preparation. That's why we've made site prep one of our core specialties. Our team handles everything from basic land grading to complex excavation and ground preparation, using modern equipment and decades of experience to ensure your site is ready for construction. We understand that proper drainage, stable ground preparation, and precise grading aren't just nice-to-haves—they're essential to preventing costly problems down the road. When you choose F&S for site preparation, you're choosing a partner who understands that getting ground right first saves time, money, and headaches throughout your entire project.",
    benefits: [
      "Professional grading and excavation",
      "Proper drainage planning",
      "Site preparation to your specifications",
      "Experienced operators",
      "Modern equipment fleet",
      "Coordination with your construction timeline",
    ],
    icon: "construction",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    category: "site-services",
    description:
      "Complete land clearing services including tree removal, brush clearing, and vegetation management for development projects.",
    features: ["Tree Removal", "Brush Clearing", "Vegetation Management"],
    longDescription:
      "At F&S Expedited, we understand that land clearing is often the first critical step in transforming property for development. That's why we approach every clearing project with both efficiency and respect for the land. Our team handles everything from selective tree removal to large-scale brush clearing and vegetation management, turning overgrown or wooded areas into development-ready sites. We believe in doing the job right the first time—clearing efficiently while minimizing environmental impact and ensuring your land is properly prepared for whatever comes next, whether it's construction, landscaping, or further development. When you choose F&S for land clearing, you're choosing a partner who sees the potential in your property and knows how to unlock it safely and effectively.",
    benefits: [
      "Complete land clearing solutions",
      "Selective tree removal or full clearing",
      "Brush and vegetation management",
      "Environmentally responsible practices",
      "Debris removal and cleanup included",
      "Preparation for construction or landscaping",
    ],
    icon: "trees",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    category: "site-services",
    description:
      "Professional retaining wall construction for erosion control, landscape design, and structural support projects.",
    features: ["Segmental Walls", "Natural Stone", "Concrete Block", "Drainage Solutions"],
    longDescription:
      "At F&S Expedited, we know that retaining walls are more than just decorative—they're essential structures that protect your property from erosion, create usable space on sloped terrain, and add significant value to your landscape. Our team specializes in building durable, attractive retaining walls that stand the test of time while enhancing the functionality and beauty of your property. Whether you need a small garden wall or a large structural retaining system, we bring the same level of expertise and attention to detail to every project. We understand the engineering principles behind proper wall construction, including drainage, soil pressure management, and foundation requirements. When you choose F&S for retaining walls, you're choosing a partner who combines technical expertise with artistic vision to create walls that are both functional and beautiful.",
    benefits: [
      "Engineered for structural integrity",
      "Multiple material options available",
      "Proper drainage integration",
      "Erosion control and soil retention",
      "Enhanced property value and usability",
      "Warranty on workmanship",
    ],
    icon: "shield",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "underground-utilities",
    title: "Underground Utilities",
    category: "site-services",
    description:
      "Underground utility installation and trenching services for water, sewer, and electrical systems.",
    features: ["Water Lines", "Sewer Systems", "Electrical Conduits", "Trenching Services"],
    longDescription:
      "At F&S Expedited, we understand that underground utilities are the backbone of any development project. Our team provides comprehensive utility installation services, from water and sewer lines to electrical conduits and drainage systems. We work with precision and care to ensure that all underground installations meet local codes and industry standards while minimizing disruption to your property. Our experienced operators handle everything from precise trenching to careful pipe installation, ensuring that your utility systems are installed correctly the first time. We coordinate with utility companies and local authorities to ensure all work is properly permitted and inspected. When you choose F&S for underground utilities, you're choosing a partner who understands the critical importance of getting these foundational systems right.",
    benefits: [
      "Licensed and insured utility installation",
      "Coordination with local utility companies",
      "Precision trenching and excavation",
      "Code-compliant installations",
      "Minimal property disruption",
      "Complete project documentation",
    ],
    icon: "wrench",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "land-grading",
    title: "Land Grading",
    category: "site-services",
    description: "Precision land grading and slope management for proper drainage and site preparation.",
    features: ["Rough Grading", "Fine Grading", "Slope Management", "Drainage Planning"],
    longDescription:
      "At F&S Expedited, we know that proper land grading is essential for successful construction projects, effective drainage, and long-term site stability. Our grading services range from rough grading for large-scale site preparation to fine grading for precise surface preparation. We use advanced equipment and laser-guided technology to ensure accurate slopes and elevations that meet your exact specifications. Our team understands the complex relationship between grading, drainage, and site stability, and we work to create surfaces that not only look good but function perfectly for years to come. Whether you're preparing for a new building, creating proper drainage away from structures, or landscaping your property, we bring the same level of precision and expertise to every grading project. When you choose F&S for land grading, you're choosing a partner who understands that getting the ground right is the foundation of everything that follows.",
    benefits: [
      "Laser-guided precision grading",
      "Proper drainage slope creation",
      "Erosion prevention and control",
      "Site preparation to exact specifications",
      "Experienced grading operators",
      "Compliance with drainage requirements",
    ],
    icon: "layers",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "sand-delivery",
    title: "Sand Delivery",
    category: "material-delivery",
    description: "High-quality sand delivery for construction, landscaping, and specialized applications.",
    features: ["Fill Sand", "Masonry Sand", "Play Sand", "Concrete Sand"],
    longDescription:
      "At F&S Expedited, we understand that different projects require different types of sand, and getting the right sand can make the difference between a successful project and one that falls short. That's why we offer a comprehensive range of sand types, from coarse fill sand for construction to fine mason sand for brickwork, and even clean play sand for playgrounds and landscaping. Our team has spent years learning the specific properties and applications of each sand type, ensuring you get exactly what you need for your project. We deliver sand in quantities ranging from small residential loads to large commercial orders, always with the same attention to quality and timely delivery. When you choose F&S for sand delivery, you're choosing a partner who understands that sand isn't just sand—it's a critical material that needs to match your exact requirements.",
    benefits: [
      "Multiple sand types available",
      "Quality-sourced materials",
      "Bulk delivery capabilities",
      "Expert material recommendations",
      "Flexible scheduling",
      "Competitive pricing",
    ],
    icon: "mountain",
    heroImage: "/assets/hero-truck.jpg",
  },
  {
    slug: "soil-delivery",
    title: "Soil Delivery",
    category: "material-delivery",
    description: "Premium topsoil and fill dirt delivery for landscaping, gardening, and construction projects.",
    features: ["Topsoil", "Fill Dirt", "Garden Soil", "Compost Mix"],
    longDescription:
      "At F&S Expedited, we know that quality soil is the foundation of healthy landscapes and successful construction projects. That's why we've developed relationships with trusted suppliers to bring you the finest topsoil, fill dirt, and garden soil blends directly to your site. Whether you're establishing a new lawn, creating garden beds, filling low areas, or preparing for construction, we deliver exactly what you need. Our team understands the difference between screened topsoil for planting and compactable fill dirt for grading, and we make sure you get the right material for your specific application. We offer soil in various quantities and can even create custom blends for specialized applications. When you choose F&S for soil delivery, you're choosing a partner who understands that good soil isn't just dirt—it's the growing medium that determines the success of your project.",
    benefits: [
      "Premium quality topsoil available",
      "Screened and processed materials",
      "Custom soil blends available",
      "Bulk delivery for large projects",
      "Expert soil recommendations",
      "Timely delivery scheduling",
    ],
    icon: "mountain",
    heroImage: "/assets/hero-truck.jpg",
  },
];

export function getCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return services.filter((s) => s.category === categorySlug);
}

export function getService(categorySlug: string, serviceSlug: string): Service | undefined {
  return services.find((s) => s.slug === serviceSlug && s.category === categorySlug);
}
