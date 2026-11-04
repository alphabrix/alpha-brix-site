// All site content lives here. Edit this file, then run `npm run build`.

export const company = {
  name: 'Alpha Brix Company Limited',
  short: 'Alpha Brix',
  tagline: 'Engineered Solutions',
  city: 'Accra, Ghana',
  url: 'https://alpha-brix.com',
  email: 'alphabrixgh@gmail.com',
  phones: [
    { label: 'Primary', display: '+233 559 582 044', tel: '+233559582044', whatsapp: true },
    { label: 'Secondary', display: '+233 552 843 040', tel: '+233552843040' },
  ],
  whatsapp: '233559582044',
  hours: 'Monday to Sunday, 24 hours',
  socials: [
    { name: 'Instagram', key: 'instagram', handle: '@alphabrixltd', href: 'https://instagram.com/alphabrixltd' },
    { name: 'TikTok', key: 'tiktok', handle: '@alphabrixltd', href: 'https://tiktok.com/@alphabrixltd' },
    { name: 'Snapchat', key: 'snapchat', handle: '@alphabrixltd', href: 'https://snapchat.com/add/alphabrixltd' },
  ],
  credentials: [
    { code: 'EPA', text: 'Approved chemicals', icon: 'leaf' },
    { code: 'PPA', text: 'Certified supplier', icon: 'badge' },
    { code: '24/7', text: 'Phone & WhatsApp support', icon: 'headset' },
    { code: 'GMP', text: 'Good manufacturing practice', icon: 'factory' },
  ],
};

export const nav = [
  { label: 'Products', href: '/products/' },
  { label: 'Fumigation', href: '/fumigation/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const heroSlides = [
  { img: 'hero-distillation.png', label: 'Distillation' },
  { img: 'industrial-alcohol.png', label: 'Industrial Alcohol' },
  { img: 'hygiene-products.png', label: 'Hygiene Products' },
  { img: 'agrochemicals.png', label: 'AgroChemicals' },
];

export const products = [
  {
    code: 'AB-01', slug: 'industrial-alcohol', title: 'Industrial Alcohol', img: 'industrial-alcohol.png',
    summary: 'Alcohol supplied by grade, for fuel and industrial use or for food, beverage and pharmaceutical production.',
    items: ['Fuel and industrial grade alcohol', 'Food, beverage and pharmaceutical grade alcohol'],
  },
  {
    code: 'AB-02', slug: 'agrochemicals', title: 'AgroChemicals', img: 'agrochemicals.png',
    summary: 'We manufacture and trade agrochemicals for farms, plantations and agro-dealers.',
    items: ['Manufacturing of agrochemicals', 'Trading in agrochemicals'],
  },
  {
    code: 'AB-03', slug: 'hygiene-products', title: 'Hygiene Products', img: 'hygiene-products.png',
    summary: 'Everyday paper and personal-care products for homes, hotels, offices and retailers.',
    items: ['Toilet rolls', 'Sanitary wipes, wet and dry', 'Automobile tissue', 'Baby diapers and adult diapers', 'Sanitary pads'],
  },
  {
    code: 'AB-04', slug: 'wellington-boots', title: 'Wellington Boots', img: 'wellington-boots.png',
    summary: 'Durable Wellington boots for farm, factory and site work.',
    items: ['Trading in Wellington boots'],
  },
  {
    code: 'AB-05', slug: 'packaging', title: 'Packaging', img: 'packaging.png',
    summary: 'Packaging boxes for producers and distributors.',
    items: ['Packaging boxes'],
  },
  {
    code: 'AB-06', slug: 'fumigation', title: 'Fumigation & Disinfection', img: 'fumigation.png',
    summary: 'Targeted fumigation and disinfection using EPA approved chemicals, with lasting protection.',
    items: ['Targeted disinfection services', 'EPA approved chemicals', 'Lasting protection'],
    link: '/fumigation/',
  },
];

export const ppe = [
  { code: 'TR-01', title: 'Wellington Boots' },
  { code: 'TR-02', title: 'Safety Boots' },
  { code: 'TR-03', title: 'Safety Wellington Boots' },
  { code: 'TR-04', title: 'Overalls' },
  { code: 'TR-05', title: 'Safety Gloves' },
  { code: 'TR-06', title: 'Hard Hat Helmets' },
  { code: 'TR-07', title: 'Reflector Vests' },
  { code: 'TR-08', title: 'Reflector Jackets' },
];

export const fumigation = {
  spec: [
    ['Method', 'Chemical and non-chemical'],
    ['Coverage', 'Residential, commercial, industrial'],
    ['Chemicals', 'EPA approved'],
    ['Response time', 'Within 24 hours, Monday to Saturday'],
    ['Support', 'Always on, 24/7'],
    ['Outcome', 'Lasting protection'],
  ],
  types: [
    { title: 'Wood treatment', note: 'Includes Wood Destroying Insect Reports (WDIR)' },
    { title: 'Reptile treatment', note: 'Snakes and other reptiles cleared from homes and compounds' },
    { title: 'Flying insect treatment', note: 'Mosquitoes, flies and other flying pests' },
    { title: 'Crawling insects', note: 'Cockroaches, ants, bedbugs and termites' },
    { title: 'Tree fumigation', note: 'Compounds, farms and orchards' },
    { title: 'Tunnel and underground fumigation', note: 'Drains, ducts and enclosed spaces' },
  ],
  booking: [
    { title: 'On-the-spot treatment', note: 'A one-off visit, charged at a set rate.' },
    { title: 'Scheduled treatment', note: 'Regular visits on a timetable we agree with you.' },
  ],
};

export const pillars = [
  { title: 'Innovation', text: 'We use advanced chemical and non-chemical means to solve problems, crafting a custom solution for each job.' },
  { title: 'Eco-conscious', text: 'Our services are eco-conscious where needed, with a targeted approach that uses only what the job requires.' },
  { title: 'Skilled local experts', text: 'Our team understands the conditions people live and work in across every area we serve.' },
];

export const commitments = [
  { title: 'EPA approved chemicals', text: 'Every fumigation and disinfection job uses chemicals approved by the Environmental Protection Agency.' },
  { title: 'PPA certified', text: 'Alpha Brix is certified with the Public Procurement Authority and meets national procurement standards.' },
  { title: 'Safety and health', text: 'Safety and health are built into every procedure, giving lasting protection through solid follow-up.' },
];

export const testimonials = [
  { quote: 'A remarkable fumigation service provider who can be called on at any time.', name: 'Chef NY', role: 'CEO', company: 'Ten30 Chinese Cuisine, Osu & Amrahia' },
  { quote: 'Very professional and punctual.', name: 'Miss Julia', role: 'CEO', company: 'Trophy Tavern, Laboma Beach Resort' },
  { quote: 'Highly efficient service provider.', name: 'Mrs Stella', role: 'CEO', company: 'Nervana Lounge, Dzorwulu' },
  { quote: 'Reliable and innovative in managing our complex facility.', name: 'Mr Derrick', role: 'Safety Officer', company: 'Platon Oil and Gas, Tema' },
  { quote: 'Been a very reliable and certified fumigation company whose assistance keeps my business moving.', name: 'Madam Abena Gyamfuaa', role: 'CEO', company: "Roni's Kitchen" },
];

export const quoteTopics = [
  'Fumigation service', 'Disinfection', 'Industrial Alcohol', 'AgroChemicals', 'Hygiene Products',
  'Packaging Boxes', 'Wellington Boots', 'Safety & PPE', 'Something else',
];
