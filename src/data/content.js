// Centralized copy — sourced from CLAUDE.md Sections 2 & 3.
// Swap placeholder fields (marked TODO) for real content when available.

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Contact', to: '/contact' },
]

export const brand = {
  name: 'Arc-I',
  // TODO: replace with real logo asset
  tagline: 'AI, Web & Marketing — built for small business.',
}

export const whoWeAre = `Arc-I is an AI-powered company built on three core strengths: full stack development, AI engineering, and marketing. We exist to bring modern, model-AI technology within reach of small businesses that are often left behind by digital transformation — from independent off-license shops to local service providers — helping them compete and grow in a market that increasingly runs on data, automation, and online presence.`

export const whatWeDoIntro = `We combine three specialist teams under one roof, so our clients get a single, connected solution instead of juggling separate agencies and freelancers.`

export const ourGoal = `To make enterprise-grade AI, web, and marketing technology accessible and practical for small businesses — not just to build tools, but to translate them into real outcomes: more customers, more sales, and sustainable growth.`

export const whoWeWorkWith = `We work with small and local businesses — the kind that are often underserved by big agencies — such as independent retail shops (e.g. off-license stores), local service providers, and small enterprises looking to modernize their customer reach without enterprise-sized budgets or complexity.`

// icon keys map to lucide-react components in components/ui or sections
export const teams = [
  {
    key: 'marketing',
    icon: 'Megaphone',
    name: 'Marketing Team',
    summary:
      'Crafts promotional strategies across Facebook, Instagram, WhatsApp, Email, and influencer collaborations, designed to drive real customer growth and measurable sales gains.',
    skills: [
      'Facebook Ads & Organic',
      'Instagram Marketing',
      'WhatsApp Business Marketing',
      'Email Marketing',
      'Influencer Collaborations',
    ],
  },
  {
    key: 'fullstack',
    icon: 'Code2',
    name: 'Full Stack Team',
    summary:
      'Designs and builds websites and web applications (including e-commerce and mobile) tailored to support what the marketing strategy needs to succeed — fast, functional, and built to convert visitors into customers.',
    skills: [
      'Website Development',
      'React / Next.js',
      'Shopify / E-commerce',
      'Mobile Apps',
      'API / Backend Integrations',
    ],
  },
  {
    key: 'data-ai',
    icon: 'BrainCircuit',
    name: 'Data & AI Team',
    summary:
      'Tracks business performance, customer behavior, and sales trends through advanced dashboards (Power BI, Microsoft Fabric), and where it adds value, builds and deploys AI chatbots directly into client websites and WhatsApp — powered by predictive analytics, automation (Power Automate, Power Apps), and custom AI model integration.',
    skills: [
      'Power BI / Advanced Dashboards',
      'Chatbots (Website & WhatsApp)',
      'Predictive Analytics',
      'Custom AI Model Integration (e.g. OpenAI, Claude)',
      'Power Automate',
      'Power Apps',
      'Microsoft Fabric',
      'Database Development',
    ],
  },
]

// TODO: replace with real leadership bio, name, title, and photo
export const companyHead = {
  isPlaceholder: true,
  name: 'Company Head Name',
  title: 'Founder & Company Head',
  initials: 'CH',
  bio: [
    'Placeholder bio line one — background and experience pending final copy.',
    'Placeholder bio line two — leadership philosophy and focus areas pending final copy.',
  ],
}

// Practice-area breakdown for the Home page grid — derived from team skills (Section 3)
export const practiceAreas = [
  {
    icon: 'Megaphone',
    title: 'Social & Influencer Marketing',
    description: 'Facebook, Instagram, WhatsApp, and influencer campaigns built for real sales gains.',
  },
  {
    icon: 'Mail',
    title: 'Email & WhatsApp Campaigns',
    description: 'Direct channels that keep customers coming back, not just clicking once.',
  },
  {
    icon: 'Globe',
    title: 'Websites & E-commerce',
    description: 'Fast, conversion-focused sites and online stores built with React / Next.js and Shopify.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile & API Integrations',
    description: 'Mobile apps and backend integrations that connect your tools together.',
  },
  {
    icon: 'BarChart3',
    title: 'Dashboards & Predictive Analytics',
    description: 'Power BI and Microsoft Fabric dashboards that turn raw data into decisions.',
  },
  {
    icon: 'Bot',
    title: 'AI Chatbots & Automation',
    description: 'Custom AI chatbots on your website and WhatsApp, backed by Power Automate.',
  },
]

// TODO: replace with real, verified performance stats once available
export const credibilityStats = [
  { value: '3', label: 'Specialist Teams Under One Roof' },
  { value: '40%+', label: 'Avg. Sales Uplift in Sample Case Studies' },
  { value: '5', label: 'Marketing Channels Covered' },
  { value: '100%', label: 'Focused on Small & Local Business' },
]

// TODO: replace gray placeholder badges with real client logos
export const credibilityLogos = ['Client A', 'Client B', 'Client C', 'Client D', 'Client E']

// TODO: replace with real, verified case studies
export const caseStudies = [
  {
    slug: 'off-license-whatsapp-bot',
    client: 'Local Off-License Store',
    tag: 'Marketing + AI',
    problem:
      'A neighborhood off-license was losing repeat customers to delivery apps and had no direct online ordering channel.',
    solution:
      'Arc-I built a WhatsApp ordering chatbot integrated with a lightweight product catalog, paired with targeted Instagram and WhatsApp broadcast campaigns.',
    result: 'Sample result: 40% increase in repeat-customer sales within the first quarter.',
  },
  {
    slug: 'service-provider-booking-site',
    client: 'Local Service Provider',
    tag: 'Full Stack',
    problem:
      'A local service business relied entirely on phone bookings and word of mouth, capping how many customers they could reach.',
    solution:
      'Arc-I designed and built a fast, mobile-first booking website with integrated enquiry forms and local SEO fundamentals.',
    result: 'Sample result: 3x increase in inbound enquiries within two months of launch.',
  },
  {
    slug: 'retail-dashboard-rollout',
    client: 'Small Retail Enterprise',
    tag: 'Data & AI',
    problem:
      'Ownership had no consolidated view of sales trends across locations and made restocking decisions on gut feel.',
    solution:
      'Arc-I deployed a Power BI dashboard connected to point-of-sale data, with predictive restocking alerts.',
    result: 'Sample result: Reduced stockouts and freed up hours of manual reporting per week.',
  },
]

// TODO: replace with real testimonials and named contacts
export const testimonials = [
  {
    quote:
      'Arc-I brought our shop online in a way we never thought we could afford — and the results spoke for themselves.',
    name: 'Placeholder Name',
    role: 'Owner, Local Retail Shop',
  },
  {
    quote:
      'Having marketing, web, and data all handled by one team saved us so much time and confusion.',
    name: 'Placeholder Name',
    role: 'Founder, Local Service Business',
  },
]

export const howWeWork = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We start by learning your business, customers, and goals — no generic templates, no one-size-fits-all pitch.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'Marketing, full stack, and data & AI teams work together from day one, so every deliverable supports the same growth goal.',
  },
  {
    step: '03',
    title: 'Launch',
    description:
      'We ship fast, functional work — websites, campaigns, dashboards, and chatbots — built to convert from day one.',
  },
  {
    step: '04',
    title: 'Grow & Optimize',
    description:
      'We track performance and iterate, using real data to keep improving results instead of guessing.',
  },
]

export const contactInfo = {
  // TODO: replace with real contact details
  email: 'hello@arc-i.com',
  phone: '+00 000 000 000',
  address: 'Address — TBD',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

export const businessTypes = [
  'Retail / Off-License',
  'Local Service Provider',
  'Small Enterprise',
  'Other',
]
