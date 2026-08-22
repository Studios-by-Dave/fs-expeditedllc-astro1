// Clean service-area (city) data model.
// URLs are derived: /service-area/[city]

export interface CityService {
  name: string;
  desc: string;
}

export interface CityFAQ {
  q: string;
  a: string;
}

export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  county: string;
  heroImage: string;
  heroIcon: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  advantages: { title: string; desc: string }[];
  services: CityService[];
  prose: string[];
  faqs: CityFAQ[];
  responseTime: string;
  serviceRadius: string;
  gallery: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "shelby-nc",
    city: "Shelby",
    state: "NC",
    county: "Cleveland County",
    heroImage: "/assets/Shelby_4.jpg",
    heroIcon: "map-pin",
    metaTitle: "Dump Truck Hauling Services Shelby NC | F&S Expedited LLC | Local Experts",
    metaDescription:
      "Dump truck hauling services in Shelby NC from F&S Expedited LLC. Same-day gravel delivery, debris removal & site prep across Cleveland County. Call for a fast free quote!",
    intro:
      "Looking for a dump truck service in Shelby, NC? F&S Expedited LLC is the local, licensed-and-insured hauling company based right here in Cleveland County — not \"F&S Hauling,\" but the faster, local choice. Same-day gravel delivery, debris removal, and site prep throughout Shelby, NC.",
    neighborhoods: [
      "Downtown Shelby", "South Shelby", "West Shelby", "East Shelby", "North Shelby",
      "Shelby Heights", "Fallston", "Lawndale", "Waco", "Polkville",
    ],
    advantages: [
      { title: "Home Base Advantage", desc: "We're located right here in Shelby - fastest response times guaranteed" },
      { title: "Local Knowledge", desc: "Deep understanding of Shelby roads, regulations, and project requirements" },
      { title: "Cleveland County Expert", desc: "Most experienced dump truck service in Shelby and surrounding areas" },
      { title: "Immediate Availability", desc: "Fleet ready for dispatch - no travel time to reach your job site" },
    ],
    services: [
      { name: "Dump Truck Hauling", desc: "Same-day dump truck and dump truck delivery service for Shelby and Cleveland County projects" },
      { name: "Gravel & Stone Delivery", desc: "Local suppliers, fast gravel delivery to any Shelby location — road base, stone, and aggregate" },
      { name: "Construction Debris Removal", desc: "Quick cleanup and haul-away for Shelby construction sites and demolition projects" },
      { name: "Dirt & Material Delivery", desc: "Fill dirt, topsoil, sand, and material delivery for Shelby landscaping and grading" },
      { name: "Site Preparation", desc: "Land grading and site prep for Shelby development, drainage, and building projects" },
      { name: "Emergency Hauling", desc: "24/7 emergency trucking and hauling for urgent Shelby site issues" },
    ],
    prose: [
      "From supplying gravel and road base to Charlotte is a different drive than delivering to your Shelby job site — and that's exactly why being local matters. F&S Expedited keeps its dump trucks and crews right in Shelby, NC, so your gravel, fill dirt, sand, stone, and construction debris move fast, without out-of-town travel time or surcharges.",
      "Contractors, landscapers, farmers, and homeowners throughout Cleveland County rely on our dump truck delivery and expedited hauling to keep projects on schedule. Whether it's material delivery for a new driveway, fill dirt for a foundation, or same-day debris removal from a demolition, our local team handles it with the speed and reliability that only a home-based company can offer.",
      "Searching for \"dump truck service near me\" or \"material delivery service\" in Shelby? You've found the right local team. Call F&S Expedited today for a fast, free quote.",
    ],
    faqs: [
      {
        q: "Do you provide dump truck hauling in Shelby, NC and Cleveland County?",
        a: "Yes. F&S Expedited LLC is based right here in Shelby, so we provide dump truck hauling, gravel and material delivery, and construction debris removal across Shelby and all of Cleveland County — often with same-day response.",
      },
      {
        q: "What can you haul for my Shelby construction or landscaping project?",
        a: "We haul dirt, fill dirt, topsoil, gravel, sand, stone, and construction debris, and we provide site prep, land grading, and material delivery for contractors, landscapers, and homeowners throughout the Shelby area.",
      },
      {
        q: "How fast can F&S Expedited respond to a hauling job in Shelby?",
        a: "Because we're headquartered in Shelby, we can typically respond to any Shelby or Cleveland County job site in under an hour, and we offer 24/7 emergency hauling for urgent projects.",
      },
      {
        q: "Is F&S Expedited licensed and insured in North Carolina?",
        a: "Yes, F&S Expedited LLC is fully licensed and insured in North Carolina, and we're the local expedited hauling choice trusted by businesses across Shelby and surrounding counties.",
      },
    ],
    responseTime: "Under 1 hour to any Shelby location",
    serviceRadius: "Full Cleveland County coverage",
    gallery: [
      "/assets/Shelby_4.jpg",
      "/assets/service locations/shelby/shelby-cafe_2.jpg",
      "/assets/service locations/shelby/shelby_nc_drone_1.webp",
    ],
  },
  {
    slug: "forest-city-nc",
    city: "Forest City",
    state: "NC",
    county: "Rutherford County",
    heroImage: "/assets/forest city nc_1.jpeg",
    heroIcon: "map-pin",
    metaTitle: "Dump Truck Hauling Services Forest City NC | F&S Expedited LLC | Rutherford County",
    metaDescription:
      "Professional dump truck hauling services in Forest City, NC. Residential and commercial hauling, gravel delivery, site preparation for Rutherford County. Call for quote!",
    intro:
      "Need dependable dump truck hauling in Forest City, NC? F&S Expedited LLC brings the same local, licensed-and-insured reliability we're known for in Shelby to homeowners, contractors, and businesses across Rutherford County.",
    neighborhoods: [
      "Forest City", "Rutherfordton", "Spindale", "Ruth", "Ellenboro",
      "Bostic", "Cliffside", "Caroleen", "Mooresboro", "Sunset Beach",
      "Lake Lure", "Chimney Rock", "Gastonia", "Shelby", "Kings Mountain",
    ],
    advantages: [
      { title: "Local Presence", desc: "Serving Forest City and Rutherford County with quick response times" },
      { title: "Affordable Pricing", desc: "Competitive rates for Forest City residential and commercial projects" },
      { title: "Flexible Scheduling", desc: "Accommodating Forest City project timelines and deadlines" },
      { title: "Experienced Team", desc: "Knowledgeable about Forest City's local requirements and regulations" },
    ],
    services: [
      { name: "Residential Hauling", desc: "Home construction and renovation material transport for Forest City residents" },
      { name: "Commercial Projects", desc: "Small to medium commercial hauling for Forest City businesses" },
      { name: "Gravel & Sand Delivery", desc: "Driveway and landscaping material delivery for Forest City properties" },
      { name: "Site Preparation", desc: "Land clearing and site prep for Forest City construction projects" },
      { name: "Debris Removal", desc: "Construction and demolition debris hauling for Forest City sites" },
      { name: "Emergency Services", desc: "Rapid response hauling for urgent Forest City needs" },
    ],
    prose: [
      "Forest City and the surrounding Rutherford County communities count on F&S Expedited for material delivery, gravel and sand drops, land clearing, and debris removal that keep residential and commercial projects moving.",
      "Our crews know the local roads, job-site access, and permitting expectations across Forest City, Rutherfordton, Spindale, and beyond — so your load arrives where and when you need it without surprises.",
      "Whether you're a homeowner improving a driveway or a contractor on a tight build schedule, call F&S Expedited for a fast, free Forest City hauling quote.",
    ],
    faqs: [
      {
        q: "Do you provide dump truck hauling in Forest City, NC and Rutherford County?",
        a: "Yes. F&S Expedited LLC provides dump truck hauling, gravel and material delivery, and construction debris removal across Forest City and all of Rutherford County.",
      },
      {
        q: "What can you haul for my Forest City construction or landscaping project?",
        a: "We haul fill dirt, topsoil, gravel, sand, stone, and construction debris, and we provide site prep, land clearing, and material delivery for contractors, landscapers, and homeowners throughout the Forest City area.",
      },
      {
        q: "How fast can F&S Expedited respond to a hauling job in Forest City?",
        a: "We offer flexible scheduling and rapid response for Forest City projects, with 24/7 emergency hauling available for urgent needs.",
      },
      {
        q: "Is F&S Expedited licensed and insured in North Carolina?",
        a: "Yes, F&S Expedited LLC is fully licensed and insured in North Carolina and trusted by businesses across Rutherford County.",
      },
    ],
    responseTime: "Fast response across Rutherford County",
    serviceRadius: "Full Rutherford County coverage",
    gallery: [
      "/assets/forest city nc_1.jpeg",
      "/assets/service locations/forest city/forest city nc_9.jpeg",
      "/assets/service locations/forest city/forest city nc_10.jpg",
    ],
  },
  {
    slug: "gastonia-nc",
    city: "Gastonia",
    state: "NC",
    county: "Gaston County",
    heroImage: "/assets/gastonia nc_4.png",
    heroIcon: "map-pin",
    metaTitle: "Dump Truck Hauling Services Gastonia NC | F&S Expedited LLC | 30-Minute Response",
    metaDescription:
      "Fastest dump truck hauling services in Gastonia, NC. 30-minute response time, industrial projects, cost-effective hauling for Gaston County. Immediate service available!",
    intro:
      "Need fast dump truck hauling in Gastonia, NC? F&S Expedited LLC is only about 30 minutes from Shelby, giving Gastonia's industrial and commercial clients the fastest response times and lowest travel surcharges in Gaston County.",
    neighborhoods: [
      "Downtown Gastonia", "West Gastonia", "East Gastonia", "South Gastonia",
      "Highland", "Ranlo", "Cramerton", "Dallas", "Cherryville", "Bessemer City",
      "Mount Holly", "Belmont", "McAdenville", "Lowell", "Stanley",
    ],
    advantages: [
      { title: "Closest to You", desc: "Only 30 minutes from Shelby - fastest response time to Gastonia" },
      { title: "Industrial Expertise", desc: "Specialized experience with Gastonia's manufacturing and industrial clients" },
      { title: "Cost-Effective", desc: "Minimal travel time means lower costs for Gastonia projects" },
      { title: "Immediate Availability", desc: "Fleet positioned for rapid Gastonia dispatch" },
    ],
    services: [
      { name: "Industrial Hauling", desc: "Fast material transport for Gastonia industrial facilities" },
      { name: "Manufacturing Support", desc: "Just-in-time hauling for Gastonia manufacturing plants" },
      { name: "Construction Debris", desc: "Quick cleanup for Gastonia construction sites" },
      { name: "Site Preparation", desc: "Rapid land grading and prep for Gastonia developments" },
      { name: "Material Delivery", desc: "Fast gravel, sand, and dirt delivery to Gastonia" },
      { name: "Emergency Response", desc: "30-minute emergency hauling for Gastonia urgent needs" },
    ],
    prose: [
      "Gastonia's manufacturing and industrial economy moves on tight schedules, and F&S Expedited is built to keep up — with just-in-time material delivery, rapid site prep, and 30-minute emergency response for plants and job sites across Gaston County.",
      "Because we're only about half an hour from your Gastonia location, you pay less in travel time and get more truck on the ground. That's the F&S Expedited advantage for commercial and industrial hauling.",
      "From Belmont to Bessemer City, call F&S Expedited for a fast, free Gastonia hauling quote.",
    ],
    faqs: [
      {
        q: "Do you provide dump truck hauling in Gastonia, NC and Gaston County?",
        a: "Yes. F&S Expedited LLC provides dump truck hauling, gravel and material delivery, and construction debris removal across Gastonia and all of Gaston County, often with 30-minute response.",
      },
      {
        q: "What can you haul for my Gastonia construction or industrial project?",
        a: "We haul fill dirt, topsoil, gravel, sand, stone, and construction debris, and we provide site prep, land grading, and material delivery for contractors, manufacturers, and businesses throughout the Gastonia area.",
      },
      {
        q: "How fast can F&S Expedited respond to a hauling job in Gastonia?",
        a: "We're only about 30 minutes from Gastonia, so we can typically respond rapidly — with 24/7 emergency hauling available for urgent projects.",
      },
      {
        q: "Is F&S Expedited licensed and insured in North Carolina?",
        a: "Yes, F&S Expedited LLC is fully licensed and insured in North Carolina and trusted by industrial clients across Gaston County.",
      },
    ],
    responseTime: "About 30 minutes from Shelby",
    serviceRadius: "Full Gaston County coverage",
    gallery: [
      "/assets/gastonia nc_4.png",
      "/assets/service locations/gastonia/gastonia nc_3.jpg",
    ],
  },
  {
    slug: "asheville-nc",
    city: "Asheville",
    state: "NC",
    county: "Buncombe County",
    heroImage: "/assets/Asheville nc_header1.jpg",
    heroIcon: "map-pin",
    metaTitle: "Dump Truck Hauling Services Asheville NC | F&S Expedited LLC | Mountain Terrain Specialists",
    metaDescription:
      "Mountain terrain dump truck hauling specialists in Asheville, NC. Expert hauling for challenging terrain, weather considerations, and specialized Buncombe County projects. Call for mountain hauling quote!",
    intro:
      "Need expert dump truck hauling in Asheville, NC? F&S Expedited LLC specializes in challenging mountain terrain — steep grades, winding roads, and variable weather across Buncombe County.",
    neighborhoods: [
      "Downtown Asheville", "Biltmore Village", "West Asheville", "South Asheville",
      "North Asheville", "East Asheville", "Montford", "River Arts District",
      "Weaverville", "Black Mountain", "Woodfin", "Swannanoa", "Fairview", "Leicester",
    ],
    advantages: [
      { title: "Mountain Terrain Experts", desc: "Specialized equipment and experience for Asheville's challenging topography" },
      { title: "Weather Knowledge", desc: "Deep understanding of Asheville's seasonal weather patterns and their impact" },
      { title: "Route Optimization", desc: "Expert knowledge of Asheville mountain roads and optimal hauling routes" },
      { title: "Specialized Equipment", desc: "Right trucks and equipment for mountain-grade hauling challenges" },
    ],
    services: [
      { name: "Mountain Terrain Hauling", desc: "Specialized equipment for Asheville's challenging mountain terrain" },
      { name: "Weather-Adaptive Services", desc: "Experienced with Asheville's variable weather conditions" },
      { name: "Steep Grade Transport", desc: "Expert hauling on Asheville's steep grades and winding roads" },
      { name: "Residential Mountain Projects", desc: "Specialized services for Asheville mountain home construction" },
      { name: "Commercial Development", desc: "Large-scale hauling for Asheville commercial development" },
      { name: "Emergency Mountain Response", desc: "Rapid response for Asheville urgent mountain hauling needs" },
    ],
    prose: [
      "Asheville's mountain topography demands more than a standard hauling company. F&S Expedited brings specialized equipment and hard-won experience hauling on steep grades, winding roads, and through the region's variable weather.",
      "From residential mountain-home builds to large commercial development, our crews understand Buncombe County access challenges and plan routes for safety, efficiency, and on-time delivery.",
      "Building in or around Asheville? Call F&S Expedited for a fast, free mountain hauling quote.",
    ],
    faqs: [
      {
        q: "Do you provide dump truck hauling in Asheville, NC and Buncombe County?",
        a: "Yes. F&S Expedited LLC provides dump truck hauling, gravel and material delivery, and construction debris removal across Asheville and all of Buncombe County, including challenging mountain terrain.",
      },
      {
        q: "Can you haul on Asheville's steep grades and mountain roads?",
        a: "Yes. We specialize in mountain terrain hauling with equipment and experience suited to steep grades, winding roads, and variable weather across the Asheville area.",
      },
      {
        q: "How fast can F&S Expedited respond to a hauling job in Asheville?",
        a: "We offer flexible scheduling and rapid response for Asheville projects, with 24/7 emergency mountain hauling available for urgent needs.",
      },
      {
        q: "Is F&S Expedited licensed and insured in North Carolina?",
        a: "Yes, F&S Expedited LLC is fully licensed and insured in North Carolina and trusted by clients across Buncombe County.",
      },
    ],
    responseTime: "Rapid response across Buncombe County",
    serviceRadius: "Full Buncombe County coverage",
    gallery: [
      "/assets/Asheville nc_header1.jpg",
      "/assets/service locations/asheville/Asheville nc_2.jpeg",
      "/assets/service locations/asheville/asheville nc_6.jpeg",
    ],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
