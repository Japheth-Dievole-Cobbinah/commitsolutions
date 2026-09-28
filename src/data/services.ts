export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: { title: string; description: string }[];
  useCases: string[];
  category: 'IT' | 'Communication';
  icon: string;
}

export const itServices: Service[] = [
  {
    id: 'it-consultancy',
    slug: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic IT guidance to align your technology with your business goals.',
    fullDescription: 'Our IT consultancy services help businesses navigate the complex landscape of modern technology. We work closely with you to understand your challenges and design a roadmap that drives efficiency and growth.',
    benefits: ['Strategic alignment', 'Cost optimization', 'Risk management', 'Future-proof technology'],
    process: [
      { title: 'Discovery', description: 'Understanding your business processes and goals.' },
      { title: 'Analysis', description: 'Evaluating your current IT infrastructure.' },
      { title: 'Strategy', description: 'Developing a tailored IT roadmap.' }
    ],
    useCases: ['SMEs looking to scale', 'Corporates undergoing digital transformation'],
    category: 'IT',
    icon: 'Monitor'
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    description: 'Custom, responsive websites that convert visitors into customers.',
    fullDescription: 'We build high-performance websites that are not only visually stunning but also technically sound. From e-commerce to corporate portals, we ensure a seamless user experience.',
    benefits: ['Responsive design', 'SEO optimized', 'Fast loading speeds', 'Scalable architecture'],
    process: [
      { title: 'UI/UX Design', description: 'Crafting the visual experience.' },
      { title: 'Development', description: 'Coding with modern frameworks.' },
      { title: 'Testing', description: 'Rigorous QA and performance checks.' }
    ],
    useCases: ['Businesses needing a digital presence', 'Brands launching new products'],
    category: 'IT',
    icon: 'Globe'
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    description: 'Bespoke software solutions tailored to your unique business needs.',
    fullDescription: 'Off-the-shelf software often falls short. Our software development team builds custom applications that solve specific business problems and automate manual tasks.',
    benefits: ['Tailored functionality', 'Easy integration', 'Full ownership', 'Competitive advantage'],
    process: [
      { title: 'Requirement Gathering', description: 'Deep dive into your needs.' },
      { title: 'Agile Development', description: 'Iterative building and feedback.' },
      { title: 'Deployment', description: 'Smooth launch and integration.' }
    ],
    useCases: ['Automating complex workflows', 'Building internal management tools'],
    category: 'IT',
    icon: 'Code'
  },
  {
    id: 'network-installation',
    slug: 'network-installation',
    title: 'Network Installation',
    description: 'Robust and secure networking solutions for seamless connectivity.',
    fullDescription: 'A reliable network is the backbone of any modern business. We design and install high-speed, secure networks that keep your team connected and productive.',
    benefits: ['High reliability', 'Enhanced security', 'Scalable bandwidth', '24/7 monitoring'],
    process: [
      { title: 'Site Survey', description: 'Assessing your physical environment.' },
      { title: 'Network Design', description: 'Planning the topology and hardware.' },
      { title: 'Implementation', description: 'Professional cabling and setup.' }
    ],
    useCases: ['Office moves', 'Infrastructure upgrades', 'Multi-site connectivity'],
    category: 'IT',
    icon: 'Server'
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your digital assets from evolving cyber threats.',
    fullDescription: 'Threats are everywhere. Our cybersecurity services provide multi-layered protection to keep your data safe and your business compliant with regulations.',
    benefits: ['Data protection', 'Regulatory compliance', 'Threat detection', 'Peace of mind'],
    process: [
      { title: 'Risk Assessment', description: 'Identifying vulnerabilities.' },
      { title: 'Defense Setup', description: 'Implementing firewalls and encryption.' },
      { title: 'Monitoring', description: 'Continuous surveillance and updates.' }
    ],
    useCases: ['Financial institutions', 'Healthcare providers', 'Any data-driven business'],
    category: 'IT',
    icon: 'ShieldCheck'
  },
  {
    id: 'penetration-testing',
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    description: 'Proactive security testing to find and fix vulnerabilities.',
    fullDescription: 'Ethical hacking is the best way to test your defenses. We simulate real-world attacks to identify weak points before malicious actors do.',
    benefits: ['Identify weaknesses', 'Validate defenses', 'Improve security posture', 'Compliance readiness'],
    process: [
      { title: 'Planning', description: 'Defining the scope and goals.' },
      { title: 'Scanning', description: 'Using tools to find entry points.' },
      { title: 'Exploitation', description: 'Testing the vulnerabilities safely.' }
    ],
    useCases: ['Annual security audits', 'Pre-launch software testing'],
    category: 'IT',
    icon: 'Lock'
  }
];

export const communicationServices: Service[] = [
  {
    id: 'communications-services',
    slug: 'communications-services',
    title: 'Communications Services',
    description: 'Strategic communication planning to amplify your brand voice.',
    fullDescription: 'Our general communications services provide a holistic approach to how your brand speaks to the world. We unify your message across all channels, ensuring that your corporate identity is both strong and coherent.',
    benefits: ['Consistent messaging across all platforms', 'Increased brand awareness and authority', 'Improved audience engagement and loyalty', 'Strategic alignment of comms with business goals'],
    process: [
      { title: 'Communication Audit', description: 'Reviewing current messaging and channels.' },
      { title: 'Strategy Development', description: 'Crafting a long-term communication roadmap.' },
      { title: 'Execution', description: 'Rolling out the unified messaging strategy.' }
    ],
    useCases: ['Corporate re-branding', 'New market entry', 'Reputation overhaul'],
    category: 'Communication',
    icon: 'MessageSquare'
  },
  {
    id: 'corporate-communications',
    slug: 'corporate-communications',
    title: 'Corporate Communications',
    description: 'Managing internal and external communication for organizational clarity.',
    fullDescription: 'Maintain a professional image and ensure clear communication within your organization and with external stakeholders. We help you build a culture of transparency.',
    benefits: ['Enhanced stakeholder trust', 'Internal organizational alignment', 'Effective crisis prevention and management', 'Clearer corporate identity'],
    process: [
      { title: 'Stakeholder Mapping', description: 'Identifying key internal and external audiences.' },
      { title: 'Message Architecture', description: 'Developing core pillars of corporate identity.' },
      { title: 'Implementation', description: 'Coordinating comms across departments.' }
    ],
    useCases: ['Investor relations', 'Internal change management', 'Executive positioning'],
    category: 'Communication',
    icon: 'Building'
  },
  {
    id: 'pr-media-relations',
    slug: 'pr-media-relations',
    title: 'PR & Media Relations',
    description: 'Building relationships with the media to manage your public image.',
    fullDescription: 'Earned media is powerful. We help you tell your story through reputable news outlets and industry publications, building credibility that money can\'t buy.',
    benefits: ['Third-party validation and credibility', 'Wider reach through media networks', 'Proactive reputation management', 'Enhanced brand authority'],
    process: [
      { title: 'Story Discovery', description: 'Finding the newsworthy angles in your business.' },
      { title: 'Media Outreach', description: 'Pitching to relevant journalists and editors.' },
      { title: 'Monitoring', description: 'Tracking and reporting on media coverage.' }
    ],
    useCases: ['Product launches', 'Thought leadership positioning', 'Crisis response'],
    category: 'Communication',
    icon: 'Megaphone'
  },
  {
    id: 'digital-communications',
    slug: 'digital-communications',
    title: 'Digital Communications',
    description: 'Navigating the digital landscape to reach your audience where they live.',
    fullDescription: 'From social media to email marketing, we ensure your digital presence is active, engaging, and result-oriented. We help you cut through the noise.',
    benefits: ['Targeted reach to specific demographics', 'Real-time audience feedback and interaction', 'Measurable ROI through data analytics', 'Agile messaging updates'],
    process: [
      { title: 'Channel Strategy', description: 'Picking the right platforms for your audience.' },
      { title: 'Campaign Design', description: 'Creating engaging digital content and ads.' },
      { title: 'Analytics', description: 'Measuring performance and optimizing results.' }
    ],
    useCases: ['B2C and B2B digital growth', 'Community building', 'Social media management'],
    category: 'Communication',
    icon: 'Share2'
  },
  {
    id: 'content-creation',
    slug: 'content-creation',
    title: 'Content Creation',
    description: 'High-quality content that informs, educates, and inspires.',
    fullDescription: 'Content is king. We create blogs, whitepapers, case studies, and more that resonate with your target audience and establish you as an industry leader.',
    benefits: ['Improved SEO and organic search visibility', 'Demonstration of deep industry expertise', 'Higher audience retention and engagement', 'Support for the entire sales funnel'],
    process: [
      { title: 'Content Audit', description: 'Assessing existing assets and gaps.' },
      { title: 'Production', description: 'Writing and designing high-value assets.' },
      { title: 'Distribution', description: 'Getting your content in front of the right eyes.' }
    ],
    useCases: ['Lead generation', 'Education-based marketing', 'Customer onboarding'],
    category: 'Communication',
    icon: 'PenTool'
  },
  {
    id: 'brand-creative',
    slug: 'brand-creative',
    title: 'Brand & Creative',
    description: 'Visual identity and creative strategy that stands out.',
    fullDescription: 'We design the look and feel of your brand, from logos to full brand guidelines, ensuring you leave a lasting impression in a crowded marketplace.',
    benefits: ['Unique visual distinction', 'High memorability and brand recall', 'Emotional connection with the audience', 'Professional and polished brand image'],
    process: [
      { title: 'Visual Discovery', description: 'Exploring brand personality and aesthetics.' },
      { title: 'Creative Concepts', description: 'Developing logo and identity options.' },
      { title: 'Brand Guidelines', description: 'Standardizing usage across all media.' }
    ],
    useCases: ['Startups', 'Brand refreshes', 'Sub-brand creation'],
    category: 'Communication',
    icon: 'Palette'
  },
  {
    id: 'brand-management',
    slug: 'brand-management',
    title: 'Brand Management',
    description: 'Ensuring your brand remains consistent and relevant over time.',
    fullDescription: 'Protect your brand equity by ensuring consistency across all touchpoints and evolving your strategy as the market changes. We help you stay relevant.',
    benefits: ['Brand equity protection and growth', 'Long-term market relevance', 'Operational consistency across regions', 'Efficient asset management'],
    process: [
      { title: 'Brand Health Check', description: 'Monitoring brand perception and usage.' },
      { title: 'Guidance', description: 'Updating brand standards as needed.' },
      { title: 'Asset Management', description: 'Maintaining a central brand repository.' }
    ],
    useCases: ['Established businesses', 'Franchises', 'Growing organizations'],
    category: 'Communication',
    icon: 'Star'
  },
  {
    id: 'event-management',
    slug: 'event-management',
    title: 'Event Management',
    description: 'Seamless planning and execution of corporate events.',
    fullDescription: 'From product launches to conferences, we handle all the logistics and creative elements to ensure a successful event that meets your objectives.',
    benefits: ['Stress-free planning and coordination', 'Professional execution and hosting', 'High attendee satisfaction and engagement', 'Strong brand presence at physical events'],
    process: [
      { title: 'Event Strategy', description: 'Defining goals and target audience.' },
      { title: 'Logistics Planning', description: 'Managing venues, tech, and suppliers.' },
      { title: 'On-site Execution', description: 'Managing the live event flow.' }
    ],
    useCases: ['Networking events', 'Trade shows', 'Product reveals'],
    category: 'Communication',
    icon: 'Calendar'
  },
  {
    id: 'corporate-profiles',
    slug: 'corporate-profiles',
    title: 'Corporate Profiles',
    description: 'Compelling corporate profiles that showcase your company’s strengths.',
    fullDescription: 'A professional profile is essential for tenders and partnerships. We craft profiles that highlight your achievements, capabilities, and unique value proposition.',
    benefits: ['Enhanced professionalism and trust', 'Ready-to-use material for partnerships', 'Clear communication of capabilities', 'Competitive edge in tenders'],
    process: [
      { title: 'Information Gathering', description: 'Interviewing key team members.' },
      { title: 'Narrative Design', description: 'Crafting the brand story.' },
      { title: 'Design & Layout', description: 'Professional formatting and visuals.' }
    ],
    useCases: ['Tender applications', 'Investor decks', 'B2B partnerships'],
    category: 'Communication',
    icon: 'FileText'
  },
  {
    id: 'photography-videography',
    slug: 'photography-videography',
    title: 'Photography & Videography',
    description: 'Professional visual content that tells your brand story.',
    fullDescription: 'High-quality photos and videos are essential for modern communication. We provide professional shooting and editing services that capture the essence of your brand.',
    benefits: ['Authentic and high-quality imagery', 'Significant increase in social engagement', 'Versatile assets for all marketing channels', 'Powerful emotional storytelling'],
    process: [
      { title: 'Pre-production', description: 'Storyboarding and planning the shoot.' },
      { title: 'Production', description: 'High-end on-site or studio shooting.' },
      { title: 'Post-production', description: 'Professional editing and color grading.' }
    ],
    useCases: ['Website imagery', 'Social media video content', 'Company culture videos'],
    category: 'Communication',
    icon: 'Camera'
  },
  {
    id: 'webinar-masterclass-planning',
    slug: 'webinar-masterclass-planning',
    title: 'Webinar & Masterclass Planning',
    description: 'End-to-end planning and technical support for online events.',
    fullDescription: 'Reach a global audience with professionally managed webinars and masterclasses. We handle the technology, the promotion, and the moderation.',
    benefits: ['Global reach without travel costs', 'High-quality lead generation', 'Interactive and engaging learning experiences', 'Positioning as a thought leader'],
    process: [
      { title: 'Technical Setup', description: 'Choosing and configuring the platform.' },
      { title: 'Promotion', description: 'Marketing the event to your audience.' },
      { title: 'Live Moderation', description: 'Managing the session flow and Q&A.' }
    ],
    useCases: ['Training providers', 'Thought leaders', 'B2B lead generation'],
    category: 'Communication',
    icon: 'Video'
  }
];

export const allServices = [...itServices, ...communicationServices];
