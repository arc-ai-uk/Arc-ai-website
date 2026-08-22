// Centralized copy — sourced from CLAUDE.md Sections 2 & 3.
// Swap placeholder fields (marked TODO) for real content when available.

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Contact', to: '/contact' },
]

export const brand = {
  name: 'Arc-I',
  tagline: "Build What's Next",
}

export const whoWeAre = `Arc-I is an AI-powered company built on three core strengths: Web & App development, AI engineering, and Marketing. We exist to bring modern, model-AI technology within reach of small businesses that are often left behind by digital transformation — from independent off-license shops to local service providers — helping them compete and grow in a market that increasingly runs on data, automation, and online presence.`

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
    name: 'Web & Apps Team',
    summary:
      'Builds the websites, online stores, and apps that bring your marketing strategy to life — fast, functional, and built to turn visitors into customers.',
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


// Case studies — real Arc-I clients. Copy is drafted from client outcomes;
// TODO: swap in direct client quotes/sign-off once available, and real photos.
export const caseStudies = [
  {
    key: 'ms-catering',
    icon: 'ChefHat',
    name: 'MS Catering Service',
    location: 'Chennai',
    industry: 'Catering & Events',
    stat: '+40%',
    statLabel: 'Revenue Growth',
    challenge:
      'MS Catering Service had strong word-of-mouth in Chennai but no real online presence — every new booking depended on someone already knowing them.',
    approach:
      'Arc-I took over their marketing, built them a professional website, and ran ongoing promotion to put the business in front of customers actively searching for catering services.',
    result:
      'The combined website and marketing push drove a 40% increase in revenue, turning an offline reputation into a steady stream of new bookings.',
  },
  {
    key: 'nagas-kitchen',
    icon: 'CookingPot',
    name: "Naga's Kitchen",
    location: 'Local Area',
    industry: 'Home & Event Catering',
    stat: '3x',
    statLabel: 'More Clients',
    challenge:
      "Naga's Kitchen cooks and supplies food for weddings and local functions, with a loyal but small customer base limited to word-of-mouth in their immediate area.",
    approach:
      'We ran a targeted social media campaign alongside grassroots local marketing — pamphlets and posters — to put Naga\'s Kitchen in front of a much wider audience across the area.',
    result:
      'New client enquiries grew dramatically, turning a neighborhood favorite into a name booked for functions well beyond their original reach.',
  },
  {
    key: 'kls-supermarket',
    icon: 'ShoppingCart',
    name: 'KLS Super Market',
    location: 'Bangalore',
    industry: 'Retail — General Store → Supermarket',
    stat: '2',
    statLabel: 'Branches Now Open',
    challenge:
      'KLS was a small general store in Bangalore looking to grow beyond its existing local footfall.',
    approach:
      'Arc-I led the marketing and promotion — including offers and lucky draws — to bring in new customers and keep them coming back.',
    result:
      'Revenue grew enough for KLS to convert from a general store into a full supermarket, and open a second branch — which Arc-I is now promoting as well.',
  },
]

// TODO: replace with direct client quotes once confirmed with each business
export const testimonials = [
  {
    quote:
      'Arc-I took over our marketing and built our website from scratch. Within months our revenue was up 40% — bookings we simply never had before.',
    name: 'Owner',
    role: 'MS Catering Service, Chennai',
  },
  {
    quote:
      "The social media push and local posters and pamphlets Arc-I ran made a huge difference. We're getting far more clients for our functions now than ever before.",
    name: 'Owner',
    role: "Naga's Kitchen",
  },
  {
    quote:
      'Arc-I\'s promotions and offers brought in so many new customers that we grew from a small general store into a supermarket — and now they\'re helping us promote our second branch too.',
    name: 'Owner',
    role: 'KLS Super Market, Bangalore',
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
      'Marketing, web & apps, and data & AI teams work together from day one, so every deliverable supports the same growth goal.',
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

// Web3Forms access key — safe to expose client-side (it's a public site
// key tied to the receiving inbox, not a secret) per Web3Forms docs.
export const web3FormsAccessKey = '2ea29fb5-1c14-4383-b59d-b58b3745af18'

export const contactInfo = {
  // TODO: replace with real contact details
  email: 'arc.ai.co.uk@gmail.com',
  phone: '+00 000 000 000',
  address: 'Address — TBD',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

export const countryCodes = [
  { code: '+91', label: 'India (+91)' },
  { code: '+44', label: 'UK (+44)' },
  { code: '+1', label: 'US / Canada (+1)' },
  { code: '+971', label: 'UAE (+971)' },
  { code: '+61', label: 'Australia (+61)' },
  { code: '+65', label: 'Singapore (+65)' },
]

export const businessTypes = [
  'Retail / Off-License',
  'Local Service Provider',
  'Small Enterprise',
  'Other',
]
