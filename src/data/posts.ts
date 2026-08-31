// Blog post data model for the F&S Expedited LLC Astro rebuild.
// URLs are derived: /blog/[slug]

export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string; // ISO date (YYYY-MM-DD)
  author: string;
  category: string;
  excerpt: string;
  image?: string;
  body: PostSection[];
}

export const posts: BlogPost[] = [
  {
    slug: "dump-trucks-expedited-local-hauling-shelby-charlotte-nc",
    title: "Expedited Dump Truck Hauling: Local Shelby & Charlotte, NC",
    metaTitle: "Expedited Dump Truck Hauling in Shelby & Charlotte NC | F&S",
    metaDescription:
      "Local expedited dump truck hauling serving Shelby and Charlotte, NC. Fast, licensed, and insured hauling for contractors, landscapers, and homeowners.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Hauling",
    excerpt:
      "Why a Shelby-based hauling partner beats out-of-town carriers for Charlotte and Cleveland County job sites — and how our expedited model keeps projects moving.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "When your project is on the line, the last thing you need is a hauler that's an hour out and billing you for the drive. F&S Expedited LLC is based right in Shelby, NC, which puts us within easy reach of both Cleveland County and the greater Charlotte metro. That local position translates directly into faster dispatch, lower travel surcharges, and crews who already know the roads, the job-site access points, and the permitting expectations.",
          "From gravel driveways in Gastonia to commercial site prep in Charlotte, our dump truck fleet moves dirt, stone, sand, and demolition debris with the speed and reliability that only a home-based operation can deliver.",
        ],
      },
      {
        heading: "Why Local Hauling Wins",
        paragraphs: [
          "Out-of-town carriers build travel time into every quote. Because we're headquartered in Shelby, more of your dollar goes toward actual hauling — not mileage. It also means we can typically respond to a job site in under an hour and offer true same-day and next-day dispatch when the schedule is tight.",
          "Choosing a local, licensed-and-insured hauler also means accountability. We're your neighbors, and our reputation in Shelby, Charlotte, Gastonia, and Forest City depends on every load arriving on time and intact.",
        ],
      },
      {
        heading: "Ready When You Are",
        paragraphs: [
          "Whether you're a contractor on a commercial build or a homeowner improving a driveway, F&S Expedited is ready to roll. Call Joe or Luke for a fast, free quote and see why Western North Carolina calls us when the job can't wait.",
        ],
      },
    ],
  },
  {
    slug: "why-manufacturers-choose-fs-expedited-trucking-emergency-freight",
    title: "Why Manufacturers Choose F&S Expedited for Emergency Freight",
    metaTitle: "Emergency Freight & Expedited Trucking for Manufacturers | F&S",
    metaDescription:
      "Manufacturers across the Carolinas rely on F&S Expedited for emergency freight and just-in-time hauling that keeps production lines running.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Commercial",
    excerpt:
      "Downtime costs manufacturers more than a late load. Here's how our expedited dispatch model protects production schedules.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "In manufacturing, a stalled line is a bleeding line. When a shipment misses its window, the cost isn't just the freight — it's idle crews, missed commitments, and angry customers downstream. That's why plants across Gaston, Cleveland, and Mecklenburg counties call F&S Expedited first.",
          "Our emergency expedited service is built around one promise: when you need material moved today, we move it today. Priority dispatch puts your load ahead of standard orders, and direct communication with dispatch means you always know where your freight is.",
        ],
      },
      {
        heading: "Built for Just-In-Time",
        paragraphs: [
          "We coordinate with your production timeline rather than against it. Whether it's a replenishment run of aggregate, a debris clear-out between shifts, or a rapid haul to keep a line fed, our fleet is positioned for fast turnaround and flexible scheduling.",
          "Licensed, insured, and experienced with industrial clients, F&S Expedited treats your uptime as our bottom line.",
        ],
      },
    ],
  },
  {
    slug: "expedited-dump-truck-services-prevent-costly-project-delays-north-carolina",
    title: "How Expedited Dump Truck Services Prevent Costly Project Delays",
    metaTitle: "Expedited Dump Truck Services Prevent Project Delays | F&S NC",
    metaDescription:
      "Delays cascade fast on a job site. Learn how expedited dump truck hauling keeps North Carolina construction and landscaping projects on schedule.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Hauling",
    excerpt:
      "A late load doesn't just slow one task — it backs up your whole crew. Expedited hauling is the cheapest insurance against cascade delays.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "Construction timelines are a chain: grading depends on fill dirt, paving depends on grading, and inspections depend on paving. Break one link with a late haul and the entire crew waits — often at full labor cost. Expedited dump truck service is the simplest way to protect that chain.",
          "At F&S Expedited, same-day and next-day dispatch means the material you need shows up when the schedule calls for it, not when a distant carrier finds an opening.",
        ],
      },
      {
        heading: "The Real Cost of Waiting",
        paragraphs: [
          "Every hour a crew sits idle is money spent with nothing built. Add rental equipment still ticking, inspection windows missed, and subcontractors rescheduled, and a single delayed haul can cost thousands. Reliable, local expedited hauling turns that risk into a non-event.",
          "That's why contractors across the Charlotte region build F&S Expedited into their plan from day one — not just when something goes wrong.",
        ],
      },
    ],
  },
  {
    slug: "why-fs-expedited-reliable-dump-truck-services-shelby-nc",
    title: "Why F&S Expedited Is Shelby, NC's Reliable Dump Truck Choice",
    metaTitle: "Reliable Dump Truck Services in Shelby NC | F&S Expedited",
    metaDescription:
      "Owner-operated, licensed, and insured — discover why Shelby, NC trusts F&S Expedited for dependable dump truck hauling and site services.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Company",
    excerpt:
      "No call centers, no excuses — just Joe, Luke, and a well-maintained fleet. A look at why Shelby keeps coming back to F&S Expedited.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "F&S Expedited LLC was built on a simple idea: show up on time, haul safely, and treat every job like it's our own property. Owners Joe Alrich and Luke Tutterow are hands-on with every load, and that ownership shows in the work.",
          "Based in Shelby, we serve a 100-mile radius with the kind of local know-how you can't get from a national broker. We know the roads, the regulations, and the right way to get your material exactly where it needs to be.",
        ],
      },
      {
        heading: "Dependable by Design",
        paragraphs: [
          "Our fleet is modern and well-maintained, our operators are licensed and experienced, and our pricing is transparent — no surprise fees, ever. That combination is why homeowners, landscapers, and contractors across Cleveland County trust us with their most time-sensitive hauls.",
        ],
      },
    ],
  },
  {
    slug: "material-delivery-guide-shelby-nc-construction-projects",
    title: "The Material Delivery Guide for Shelby, NC Construction Projects",
    metaTitle: "Material Delivery Guide for Shelby NC Construction | F&S",
    metaDescription:
      "Gravel, sand, soil, or aggregate — our Shelby, NC material delivery guide helps you order the right product, in the right amount, at the right time.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Material Delivery",
    excerpt:
      "Ordering the wrong aggregate wastes money and time. Use this quick guide to spec the right material for your Shelby job site.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "Not all base material is created equal. #57 stone, crusher run, pea gravel, and river rock each behave differently under load and drainage. Ordering the wrong one means rework; ordering the right one means a job that lasts.",
          "At F&S Expedited, we don't just drop and go — we help you spec the correct gravel, sand, or soil for your application, sourced from trusted regional suppliers.",
        ],
      },
      {
        heading: "Matching Material to the Job",
        paragraphs: [
          "Driveways and road base do best with crusher run or #57 stone for compaction and drainage. Landscaping and playgrounds call for cleaner, rounded pea gravel or play sand. Fill dirt and topsoil handle grading and planting. Tell us your goal and we'll deliver exactly what your site needs.",
          "Bulk delivery, spread or dumped to specification, and volume discounts for repeat customers keep your project both correct and cost-effective.",
        ],
      },
    ],
  },
  {
    slug: "why-north-carolina-calls-us-when-the-job-cant-wait",
    title: "Why North Carolina Calls Us When the Job Can't Wait",
    metaTitle: "Emergency Hauling When the Job Can't Wait | F&S Expedited NC",
    metaDescription:
      "Storm damage, surprise inspections, broken equipment — when the job can't wait, Western NC calls F&S Expedited for 24/7 emergency hauling.",
    date: "2026-07-12",
    author: "F&S Expedited LLC",
    category: "Emergency",
    excerpt:
      "Emergencies don't keep business hours. Our 24/7 dispatch exists for the moments your project simply cannot pause.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "Some hauls can wait. Others — a washout before an inspection, a debris pile blocking access, a material shortage stalling a pour — absolutely cannot. For those moments, F&S Expedited keeps a fleet ready around the clock.",
          "We've answered calls from Charlotte to Asheville at hours most carriers are closed, because we know a delay tonight becomes a failed milestone tomorrow.",
        ],
      },
      {
        heading: "24/7, No Surprise Fees",
        paragraphs: [
          "Emergency service shouldn't come with emergency-sized invoices. Our pricing stays transparent even on rush jobs, and priority dispatch means your load jumps the queue. When the job can't wait, call F&S.",
        ],
      },
    ],
  },
  {
    slug: "why-topsoil-secret-healthier-greener-yard",
    title: "Why Topsoil Is the Secret to a Healthier, Greener Yard",
    metaTitle: "Topsoil Delivery for a Healthier Greener Yard | F&S Shelby NC",
    metaDescription:
      "Great lawns start below the surface. Learn why quality topsoil delivery from F&S Expedited is the foundation of a greener Western NC yard.",
    date: "2026-07-12",
    author: "F&S Expedited LLC",
    category: "Material Delivery",
    excerpt:
      "Seed and sod get the credit, but topsoil does the work. Here's how the right soil turns a patchy lawn into a showpiece.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "Homeowners spend fortunes on seed, sod, and fertilizer, then wonder why the lawn still struggles. More often than not, the problem is underneath: compacted, nutrient-poor ground that simply can't support healthy growth.",
          "Quality screened topsoil changes everything. It holds moisture, feeds roots, and gives new grass the medium it needs to establish fast.",
        ],
      },
      {
        heading: "Delivery Done Right",
        paragraphs: [
          "F&S Expedited delivers premium screened topsoil and custom blends across Shelby and the surrounding counties, in quantities from a single garden bed to a full acre. We place it where you need it so your landscaping crew can get straight to work.",
        ],
      },
    ],
  },
  {
    slug: "soil-delivery-vs-gravel-delivery-which-material-does-your-project-need",
    title: "Soil Delivery vs. Gravel Delivery: Which Material Does Your Project Need?",
    metaTitle: "Soil vs Gravel Delivery — Which Do You Need? | F&S NC",
    metaDescription:
      "Unsure whether your Shelby, NC project needs soil or gravel delivery? Our side-by-side breakdown helps you choose the right base material.",
    date: "2026-06-18",
    author: "F&S Expedited LLC",
    category: "Material Delivery",
    excerpt:
      "Whether you're building a new driveway, preparing a construction site, or transforming your landscape, choosing the right materials can make or break your project.",
    image: "/assets/hero-truck.jpg",
    body: [
      {
        paragraphs: [
          "Whether you're building a new driveway, preparing a construction site, or transforming your landscape, choosing the right materials can make or break your project. Two of the most commonly delivered materials are soil and gravel—but many property owners aren't always sure which one they need.",
          "At F&S Expedited LLC, we provide fast, reliable soil delivery and gravel delivery services throughout Shelby, NC and surrounding areas. Understanding the differences between these materials can help you save time, money, and frustration while ensuring your project gets off to the right start.",
        ],
      },
      {
        heading: "Understanding Soil Delivery",
        paragraphs: [
          "Soil is the foundation of nearly every landscaping and construction project. Different types of soil serve different purposes, making it important to select the right material before scheduling a delivery.",
        ],
      },
      {
        heading: "Common Uses for Delivered Soil",
        paragraphs: [
          "Lawn installation and repair, garden bed preparation, tree and shrub planting, grading and leveling yards, filling low spots and erosion areas, and site preparation for landscaping projects.",
          "Quality soil helps improve drainage, supports healthy plant growth, and creates a stable foundation for outdoor improvements. Having bulk soil delivered directly to your property eliminates the hassle of multiple trips to a garden center and ensures you get the volume you need.",
        ],
      },
      {
        heading: "Signs You Need Soil Delivery",
        paragraphs: [
          "You may benefit from soil delivery if your yard has uneven or sunken areas, you're installing new grass or landscaping, construction has left bare or damaged ground, you need fill dirt for grading or leveling, or you're creating raised garden beds.",
          "Professional soil delivery ensures the material arrives where you need it, when you need it, helping your project stay on schedule.",
        ],
      },
      {
        heading: "When Gravel Delivery Is the Better Choice",
        paragraphs: [
          "While soil supports growth and landscaping, gravel provides strength, drainage, and durability. Gravel is one of the most versatile materials used in residential and commercial projects.",
        ],
      },
      {
        heading: "Popular Uses for Gravel Delivery",
        paragraphs: [
          "Driveway installation and repair, parking areas, construction site access roads, drainage systems, foundation support, walkways and pathways, and decorative landscaping.",
          "Gravel offers excellent drainage characteristics and long-lasting performance, making it ideal for high-traffic areas and projects requiring a stable base.",
        ],
      },
      {
        heading: "Benefits of Gravel Delivery",
        paragraphs: [
          "Many property owners choose gravel because it reduces mud and standing water, creates durable surfaces, requires minimal maintenance, improves site accessibility, and supports heavy equipment and vehicles.",
          "With professional gravel delivery, large quantities can be transported directly to your property without the need for expensive equipment rentals or multiple pickup trips.",
        ],
      },
      {
        heading: "Projects That Need Both Soil and Gravel",
        paragraphs: [
          "Some of the most successful property improvements actually require both materials.",
        ],
      },
      {
        heading: "New Driveways",
        paragraphs: [
          "Gravel provides the base and driving surface, while soil is often needed to grade surrounding areas and improve drainage.",
        ],
      },
      {
        heading: "New Home Construction",
        paragraphs: [
          "Gravel helps create stable foundations and access roads, while soil is used for final grading and landscaping.",
        ],
      },
      {
        heading: "Drainage Improvements",
        paragraphs: [
          "Gravel allows water to flow properly, while soil helps shape and direct runoff around the property.",
        ],
      },
      {
        heading: "Commercial Site Development",
        paragraphs: [
          "Many commercial projects require bulk deliveries of both materials throughout different phases of construction.",
          "Coordinating soil delivery and gravel delivery through one trusted hauling company simplifies logistics and helps keep projects moving efficiently.",
        ],
      },
      {
        heading: "Why Professional Material Delivery Matters",
        paragraphs: [
          "Ordering materials is only half the battle. Timely delivery can significantly impact project timelines and costs.",
          "Professional material delivery services help by eliminating transportation headaches, delivering bulk quantities efficiently, reducing labor costs, keeping projects on schedule, and ensuring materials are placed in the proper location.",
          "At F&S Expedited LLC, we understand that every hour matters on a job site. That's why we focus on fast turnaround times, reliable scheduling, and dependable service for homeowners, contractors, and businesses throughout the Shelby area. Our experienced team delivers materials safely and efficiently so you can focus on completing your project.",
        ],
      },
      {
        heading: "Choosing the Right Delivery Partner",
        paragraphs: [
          "When searching for soil delivery or gravel delivery, look for a company that offers fast response times, competitive pricing, reliable scheduling, experienced operators, licensed and insured services, and flexible delivery options.",
          "The right hauling partner can save you valuable time while ensuring your materials arrive exactly when and where they're needed.",
        ],
      },
      {
        heading: "Schedule Your Soil or Gravel Delivery Today",
        paragraphs: [
          "Whether you're tackling a landscaping project, building a driveway, or preparing a construction site, F&S Expedited LLC is ready to help. We provide dependable soil delivery and gravel delivery services throughout Shelby, NC and surrounding communities with the speed and reliability your project deserves.",
          "Contact us today for a free quote and let our team deliver the materials you need—on time, every time.",
        ],
      },
    ],
  },
  {
    slug: "best-dump-truck-services-asheville-nc",
    title: "Best Dump Truck Services in Asheville, NC",
    metaTitle: "Best Dump Truck Services in Asheville NC | F&S Expedited",
    metaDescription:
      "Asheville's mountain terrain demands specialized hauling. See why F&S Expedited is a top choice for dump truck services across Buncombe County.",
    date: "2026-08-06",
    author: "F&S Expedited LLC",
    category: "Hauling",
    excerpt:
      "Steep grades, winding roads, and fickle weather make Asheville hauling a specialty. Here's how we handle mountain terrain safely.",
    image: "/assets/Asheville nc_header1.jpg",
    body: [
      {
        paragraphs: [
          "Asheville isn't flat, and it isn't forgiving. Hauling on steep grades, switchbacks, and weather-prone mountain roads takes equipment and experience most standard carriers don't have. F&S Expedited brings both.",
          "From residential mountain-home builds to large commercial development, our crews plan routes for safety and efficiency across Buncombe County — Weaverville to Black Mountain, Leicester to Fairview.",
        ],
      },
      {
        heading: "Mountain-Ready Hauling",
        paragraphs: [
          "We specialize in challenging terrain: proper load distribution on grades, route optimization around narrow roads, and adaptive scheduling around mountain weather. When your Asheville job can't wait for a flatlander hauler, call F&S Expedited.",
        ],
      },
    ],
  },
  {
    slug: "dump-truck-hauling-services-forest-city-nc",
    title: "Dump Truck Hauling Services in Forest City, NC",
    metaTitle: "Dump Truck Hauling Services in Forest City NC | F&S Expedited",
    metaDescription:
      "Dependable dump truck hauling and material delivery for Forest City and Rutherford County, NC. Fast quotes, flexible scheduling, licensed & insured.",
    date: "2026-08-16",
    author: "F&S Expedited LLC",
    category: "Hauling",
    excerpt:
      "Forest City and Rutherford County rely on F&S Expedited for residential and commercial hauling, gravel delivery, and site prep that stays on schedule.",
    image: "/assets/forest city nc_1.jpeg",
    body: [
      {
        paragraphs: [
          "Forest City and the surrounding Rutherford County communities count on F&S Expedited for material delivery, gravel and sand drops, land clearing, and debris removal that keep projects moving.",
          "Our crews know the local roads, job-site access, and permitting expectations across Forest City, Rutherfordton, Spindale, and beyond — so your load arrives where and when you need it without surprises.",
        ],
      },
      {
        heading: "Local, Flexible, Accountable",
        paragraphs: [
          "Whether you're a homeowner improving a driveway or a contractor on a tight build schedule, we offer flexible scheduling, rapid response, and 24/7 emergency hauling. Call F&S Expedited for a fast, free Forest City quote.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category);
}
