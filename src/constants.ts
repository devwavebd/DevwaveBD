import { motion } from 'motion/react';
import { 
  Code, 
  ShoppingBag, 
  Paintbrush, 
  Zap, 
  Search, 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Smile,
  Clock,
  Headphones,
  Home,
  Layout,
  Users,
  Briefcase,
  Download,
  Sparkles,
  Layers
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    description: 'Custom WordPress websites built with modern design and powerful functionality tailored for your business.',
    icon: Code,
    link: '/services/wordpress-development',
    longDescription: 'We specialize in crafting high-performance, custom WordPress websites that are not just visually stunning but also built to convert. Whether you need a simple blog or a complex corporate portal, our development team ensures that your site is robust, secure, and fully manageable.',
    features: [
      'Custom Theme Development',
      'Pixel-Perfect Responsive Design',
      'Advanced Custom Fields (ACF)',
      'Custom Post Types & Taxonomies',
      'API Integrations',
      'Gutenberg Block Development'
    ],
    benefits: [
      'SEO Friendly Architecture',
      'Easy to Manage Dashboard',
      'Lightning-Fast Load Times',
      'Regular Security Patching'
    ],
    processSteps: [
      { title: 'Discovery', desc: 'Understanding your business goals and audience.' },
      { title: 'Wireframing', desc: 'Planning the user journey and site structure.' },
      { title: 'Development', desc: 'Building the site with clean, efficient code.' },
      { title: 'QA & Training', desc: 'Testing everything and showing you how to manage it.' }
    ],
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2342&auto=format&fit=crop'
  },
  {
    id: 'woocommerce-development',
    title: 'WooCommerce Solutions',
    description: 'Build, customize and scale your online store with our expert WooCommerce development services.',
    icon: ShoppingBag,
    link: '/services/woocommerce-development',
    longDescription: 'Turn your WordPress site into a powerhouse eCommerce machine. Our WooCommerce experts build scalable online stores that provide seamless shopping experiences. From complex product variations to diverse payment gateway integrations, we handle the technical heavy lifting.',
    features: [
      'Custom Product Page Layouts',
      'Subscription & Membership Sites',
      'Inventory Management Sync',
      'Payment Gateway Integration',
      'Advanced Shipping Rules',
      'AJAX Filtering & Search'
    ],
    benefits: [
      'Conversion Rate Optimization',
      'Secure Checkout Experience',
      'Scalable for High Traffic',
      'Detailed Sales Analytics'
    ],
    processSteps: [
      { title: 'Analysis', desc: 'Reviewing your product requirements and competitors.' },
      { title: 'Setup', desc: 'Configuring WooCommerce core and extensions.' },
      { title: 'Customization', desc: 'Designing the shop flow for maximum sales.' },
      { title: 'Launch', desc: 'Payment testing and live store deployment.' }
    ],
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'theme-customization',
    title: 'Theme Customization & Development',
    description: 'Looking to customize an existing theme or build a unique theme from scratch? We have you covered.',
    icon: Paintbrush,
    link: '/services/theme-customization',
    longDescription: 'Sometimes you don’t need a new site, just a transformation. We take existing WordPress themes and customize them to fit your brand perfectly. If you have a specific vision, we can also build a custom, lightweight theme from the ground up to ensure absolute originality.',
    features: [
      'Child Theme Implementation',
      'Layout Layout Transformations',
      'Branding & Color Matching',
      'Plugin Conflict Resolution',
      'Legacy Theme Modernization',
      'Shortcode Development'
    ],
    benefits: [
      'Brand Consistency',
      'Improved Performance',
      'Unique Visual Identity',
      'Responsive Compatibility'
    ],
    processSteps: [
      { title: 'Audit', desc: 'Reviewing current theme code and limitations.' },
      { title: 'Concept', desc: 'Defining the new visual direction.' },
      { title: 'Coding', desc: 'Implementing changes using best practices.' },
      { title: 'Review', desc: 'Fine-tuning details with your feedback.' }
    ],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd195d5fe2?q=80&w=2340&auto=format&fit=crop'
  },
  {
    id: 'speed-optimization',
    title: 'Website Speed Optimization',
    description: 'Is your website slow? We optimize WordPress performance to ensure lightning-fast loading speeds.',
    icon: Zap,
    link: '/services/speed-optimization',
    longDescription: 'A slow website is a conversion killer. We perform deep-level optimization on your WordPress site, targeting Core Web Vitals and PageSpeed Insights scores. Our goal is to make your site feel instantaneous for users across all devices and connections.',
    features: [
      'Database Optimization',
      'Advanced Caching Setup',
      'Image Compression & WebP',
      'Code Minification (JS/CSS)',
      'CDN Configuration',
      'Third-Party Script Auditing'
    ],
    benefits: [
      'Higher Google Rankings',
      'Reduced Bounce Rate',
      'Better User Experience',
      'Lower Server Resources'
    ],
    processSteps: [
      { title: 'Benchmark', desc: 'Running initial performance tests.' },
      { title: 'Deep Audit', desc: 'Identifying bottlenecks in plugins or code.' },
      { title: 'Optimization', desc: 'Applying various speed-up techniques.' },
      { title: 'Verification', desc: 'Final testing with updated metrics.' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Improve search rankings and drive more organic traffic with our focused SEO and marketing strategies.',
    icon: Search,
    link: '/services/seo-marketing',
    longDescription: 'Getting found is as important as being beautiful. Our SEO services focus on technical excellence and content strategy. We ensure Google loves your WordPress site as much as your visitors do, helping you climb rankings and capture high-intent leads.',
    features: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Schema Markup (JSON-LD)',
      'Content Marketing Planning',
      'GMB & Local SEO Setup'
    ],
    benefits: [
      'Sustainable Organic Traffic',
      'Better Click-Through Rates',
      'Dominate Niche Keywords',
      'Long-Term Growth'
    ],
    processSteps: [
      { title: 'Research', desc: 'Competitive analysis and keyword mapping.' },
      { title: 'Technical', desc: 'Fixing site structure and meta issues.' },
      { title: 'On-Page', desc: 'Optimizing existing content and tags.' },
      { title: 'Tracking', desc: 'Setting up analytics for reporting.' }
    ],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2348&auto=format&fit=crop'
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Expert WordPress maintenance and 24/7 technical support to keep your website secure and running smoothly.',
    icon: Wrench,
    link: '/services/maintenance-support',
    longDescription: 'A website is never truly "done". Our maintenance packages take the worry out of owning a WordPress site. We handle the updates, backups, and security monitoring so you can focus entirely on running your business while we ensure your digital storefront is always open.',
    features: [
      'Daily Off-Site Backups',
      'Core & Plugin Updates',
      'Security Monitoring & Firewall',
      'Priority Technical Support',
      'Uptime Monitoring (60s)',
      'Monthly Health Reports'
    ],
    benefits: [
      'Complete Peace of Mind',
      'Prevent Security Breaches',
      'Zero Downtime Strategy',
      'Instant Expert Access'
    ],
    processSteps: [
      { title: 'Onboarding', desc: 'Securing access and running initial audit.' },
      { title: 'Setup', desc: 'Implementing backup and security tools.' },
      { title: 'Cycle', desc: 'Performing weekly maintenance tasks.' },
      { title: 'Support', desc: '24/7 availability for any emergencies.' }
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-131ef24893bd?q=80&w=2340&auto=format&fit=crop'
  }
];

export const PORTFOLIO = [
  {
    title: 'Luxe Arabian Scents',
    category: 'WooCommerce',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Luxearabianscents-Best-Lattafa-Perfume-05-11-2026_01_58_AM-scaled.png',
    link: 'https://luxearabianscents.com/'
  },
  {
    title: 'The Nzone',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Home-Sports-Fitness-at-The-nZone-in-Chantilly-05-16-2026_08_30_PM-scaled.png',
    link: 'https://thenzone.com/'
  },
  {
    title: 'F45 Training',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/F45-Training-Life-Changing-Group-Fitness-Functional-Training-05-16-2026_08_31_PM-scaled.png',
    link: 'https://f45training.com/'
  },
  {
    title: 'Karuna For You',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Karuna-Wellness-Studio-Virtual-Non-Diet-Nutrition-Support-05-16-2026_08_33_PM-scaled.png',
    link: 'https://karunaforyou.com/'
  },
  {
    title: 'Asia Service',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Cleaning-shifting-Services-provider-in-Dhaka-Bangladesh-05-16-2026_08_34_PM-scaled.png',
    link: 'https://asiaservice.xyz/'
  },
  {
    title: 'Pearl Cares',
    category: 'Healthcare',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/A-Tailored-Dental-Care-Experience-Pearl-Dental-Family-Dentistry-05-16-2026_08_36_PM-scaled.png',
    link: 'https://pearlcares.com/'
  },
  {
    title: 'Union Dental Center',
    category: 'Healthcare',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Top-Rated-Los-Angele-CA-Dentists-Family-Emergency-Dentistry-Near-Me-Union-Dental-Center-05-16-2026_08_37_PM-scaled.png',
    link: 'https://uniondentalcenter.co/'
  },
  {
    title: 'Belle Parlour',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Front-Page-Belle-Beauty-Parlour-05-16-2026_08_39_PM-scaled.png',
    link: 'https://belleparlour.com/'
  },
  {
    title: 'RDH Makeover',
    category: 'Creative Portfolio',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/RDH-Makeover-and-Skin-Care-Saloon-–-Your-Beauty-Is-Our-Priority-05-16-2026_08_40_PM-scaled.png',
    link: 'https://rdhmakeover.com/'
  },
  {
    title: 'Crazy Seal',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Crazy-Seal-DIY-Roofing-Done-Right-05-16-2026_08_42_PM-scaled.png',
    link: 'https://crazyseal.com/'
  },
  {
    title: 'Exterior Genie',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Roofing-Exterior-Solutions-in-Lexington-SC-05-16-2026_08_43_PM-scaled.png',
    link: 'https://www.exteriorgenie.com/'
  },
  {
    title: 'Rifat Academy',
    category: 'Educational',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Rifat-Academy-–-Rifat-Academy-–-Learn-Skill-Grow-Career-05-16-2026_08_44_PM-scaled.png',
    link: 'https://rifatacademy.com/'
  },
  {
    title: 'SR Digital Agency',
    category: 'Creative Portfolio',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/SR-Digital-Agency-–-Transforming-Ideas-into-Digital-Reality-–-Creative-Digital-AI-Solutions-for-Your-Business-05-11-2026_01_59_AM-scaled.png',
    link: 'https://srdigitalagency.net/'
  },
  {
    title: 'HITECH POWER',
    category: 'Business Website',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/HITECH-POWER-ENGINEERING-05-11-2026_01_59_AM-scaled.png',
    link: 'https://hitechpowerbd.com/'
  },
  {
    title: 'Tawfiq Computer',
    category: 'WooCommerce',
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Tawfiq-Computer-05-11-2026_01_58_AM-scaled.png',
    link: 'https://tawfiqcomputer.com/'
  }
];

export const STATS = [
  { label: 'Projects Completed', value: '50+', icon: Globe },
  { label: 'Client Satisfaction', value: '98%', icon: Smile },
  { label: 'Years of Experience', value: '3+', icon: Clock },
  { label: 'Support Available', value: '24/7', icon: Headphones },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About Us', path: '/about', icon: Users },
  { label: 'Services', path: '/services', icon: Briefcase },
  { label: 'Portfolio', path: '/portfolio', icon: Layout },
  { label: 'Pricing', path: '/pricing', icon: Sparkles },
  { label: 'Blog', path: '/blog', icon: Search },
];

export const TRUSTED_LOGOS = [
  'Layers', 'Golden', 'Kanba', 'Ideaa', 'Hexlab', 'Muzica'
];

export const BLOG_POSTS = [
  {
    id: 'wordpress-plugins',
    title: '10 Must-Have WordPress Plugins For Business Websites',
    category: 'WordPress Tips',
    date: 'May 10, 2025',
    author: 'Devwave BD',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2338&auto=format&fit=crop',
    excerpt: 'WordPress is the most popular CMS in the world, and for good reason. It is extensible thanks to its massive plugin ecosystem.',
    content: `
      WordPress is the most popular CMS in the world, and for good reason. It is extensible thanks to its massive plugin ecosystem. For business websites, choosing the right plugins is crucial for security, performance, and functionality.

      1. Yoast SEO: The gold standard for WordPress SEO.
      2. WP Rocket: The best caching plugin for speed.
      3. Wordfence Security: Keep your business site safe from attackers.
      4. Gravity Forms: Powerful form building for lead generation.
      5. UpdraftPlus: Reliable backups for peace of mind.
    `
  },
  {
    id: 'speed-up-wordpress',
    title: 'How To Speed Up Your WordPress Website',
    category: 'Optimization',
    date: 'May 07, 2025',
    author: 'Devwave BD',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    excerpt: 'Website speed is a critical factor for both user experience and search engine rankings. Slow sites lose visitors.',
    content: `
      Website speed is a critical factor for both user experience and search engine rankings. Slow sites lose visitors and conversions. If your WordPress site is lagging, here are the top ways to fix it.

      Caching is the most effective way to improve initial load times. By serving static HTML versions of your pages, you reduce the load on your server.

      Image optimization is another heavy hitter. Use modern formats like WebP and compress your images before uploading them.

      Lastly, consider your hosting. Shared hosting might be cheap, but managed WordPress hosting can significantly improve your performance.
    `
  },
  {
    id: 'woocommerce-vs-shopify',
    title: 'WooCommerce vs Shopify: Which One Is Better?',
    category: 'eCommerce',
    date: 'May 03, 2025',
    author: 'Devwave BD',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2340&auto=format&fit=crop',
    excerpt: 'Choosing between WooCommerce and Shopify is a major decision for any online store owner. Let\'s look at the pros and cons.',
    content: `
      Choosing between WooCommerce and Shopify is a major decision for any online store owner. Both platforms are powerful, but they cater to different needs.

      WooCommerce is a free plugin for WordPress. It offers absolute control over every aspect of your store. However, it requires you to handle your own hosting, security, and maintenance.

      Shopify is a hosted, all-in-one platform. It is much easier to set up but comes with a monthly fee and transaction costs if you don't use their payment processor.

      The choice depends on your budget, technical skills, and how much control you need over the platform.
    `
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rashedul Islam',
    role: 'Founder, Layers Agency',
    content: "Devwave BD transformed our ideas into a beautiful, fast and SEO-friendly website. Their support is outstanding and they really understood our brand identity from day one.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop'
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO, GrowthX',
    content: "Working with Devwave BD was a game-changer for our eCommerce business. Our sales increased by 40% after the redesign. Their attention to detail is unmatched.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2340&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director, PixelFlow',
    content: "The speed optimization work they did for our WordPress site was incredible. Our load time went from 6 seconds to under 1 second. Highly recommend!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop'
  },
  {
    name: 'Emma Williams',
    role: 'Marketing Manager, Bloom Digital',
    content: "Their SEO strategies really work. We started ranking on the first page for our target keywords within just three months of working with them.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop'
  },
  {
    name: 'David Miller',
    role: 'Tech Lead, Innovate Inc.',
    content: "Professional, efficient, and highly skilled. They built a custom solution for our complex requirements that exceeded our expectations.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop'
  }
];
