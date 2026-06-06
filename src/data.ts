import { Project, CaseStudy, Service, FAQItem, Testimonial, PricingPlan, Blog } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'fullstack-dev',
    icon: 'Cpu',
    title: 'Full Stack Web Development',
    description: 'End-to-end engineered web systems centered on modern React/Vite/Next architectures and high-performance Node.js backends.',
    features: [
      'Isomorphic server routing & state preloading',
      'High-performance SQL/NoSQL schema architecture',
      'Advanced caching using sliding-expiration Redis containers',
      'Micro-animations & transition pacing with Framer Motion'
    ]
  },
  {
    id: 'saas-dev',
    icon: 'Layers',
    title: 'SaaS Architecture & Development',
    description: 'Transforming product concepts into multi-tenant, cloud-scale platforms outfitted with secure, clean subscriptions.',
    features: [
      'Multi-tenant secure tenant isolation models',
      'Stripe / Paypal micro-transaction, sub-tiering orchestration',
      'Detailed billing metrics dashboards & auto-invoice triggers',
      'Optimized horizontal autoscaling templates'
    ]
  },
  {
    id: 'custom-biz-apps',
    icon: 'Building2',
    title: 'Custom Business Applications',
    description: 'Replacing messy manual spreadsheets with optimized proprietary business workflows, automation pipelines, and management portals.',
    features: [
      'Complex tabular visualizers with CSV/Excel synchronization',
      'Interactive visual process flows & permission hierarchies',
      'Role-based granular single sign-on constraints',
      'Live dynamic PDF report generating engines'
    ]
  },
  {
    id: 'ai-integrations',
    icon: 'Sparkles',
    title: 'Cognitive AI Integrations',
    description: 'Supercharging products with LLMs, retrieval-augmented intelligence (RAG), vector storage lookup, and cognitive automation agents.',
    features: [
      'Gemini 3.5 & embedding indexing setups',
      'Semantic full-text similarity classification pipelines',
      'Autonomous conversational agent flow wiring',
      'Structured object extraction from raw PDFs & audios'
    ]
  },
  {
    id: 'api-dev',
    icon: 'Network',
    title: 'Enterprise API Engineering',
    description: 'Designing safe, developer-friendly, and blazing-fast REST, GraphQL, and WebSocket protocols.',
    features: [
      'Predictable JSON-LD structures & OAuth consent endpoints',
      'Rate limiting, request signatures & secure headers',
      'Fully automated, live Swagger/OpenAPI typing schemas',
      'Real-time bi-directional messaging with socket layers'
    ]
  },
  {
    id: 'db-arch',
    icon: 'Database',
    title: 'Scalable Database Architecture',
    description: 'Normalizing and optimizing relational data maps, distributed documents, caching engines and custom indexes.',
    features: [
      'Write-heavy performance indexing & execution path tuning',
      'Secure connection pooling & replication triggers',
      'Data warehousing, telemetry partitioning & log buffers',
      'Zero-downtime structural database migrations'
    ]
  },
  {
    id: 'perf-opt',
    icon: 'Zap',
    title: 'Page Speed & Core Web Vitals',
    description: 'Guiding products towards the perfect 100/100 Lighthouse matrix with static optimization and asset delivery pipelines.',
    features: [
      'Virtual scroll tables rendering millions of items',
      'Strict asset minifying, modern image compression formats',
      'Critical render paths, payload splitting & lazy bundles',
      'Intelligent network caching strategies'
    ]
  },
  {
    id: 'support-maintenance',
    icon: 'Shield',
    title: 'Maintenance & Ongoing Support',
    description: 'Continuous server telemetry, code dependency audits, performance assessments, and instant issue mitigation.',
    features: [
      'Active Docker health logging & error monitoring integrations',
      'Proactive NPM dependencies & security patching',
      'Daily redundant database snapshots & hot-backups',
      'Rapid devops support responding within an SLA hour'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'pulse-crm',
    title: 'Pulse AI — Multi-Channel Conversational CRM',
    description: 'An enterprise-scale CRM integrating real-time communication feeds from Gmail, Slack, and WhatsApp. Utilizes automated AI categorization, context matching, and message summarization.',
    category: 'ai',
    tags: ['React', 'Node.js', 'Express', 'Gemini API', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    results: [
      'Response times slashed by 45% using AI automated drafts',
      'Boosted client workspace engagement metrics by +110%',
      'Handled over 500,000 live WebSocket triggers daily without lag'
    ],
    githubUrl: 'https://github.com/developer/pulse-crm',
    liveUrl: 'https://pulse-crm.demo.example.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'apex-defi',
    title: 'Apex - Multi-Chain DeFi Yield Dashboard',
    description: 'A modern financial terminal aggregating real-time on-chain yields, liquid reserves, and swap pool metrics. Delivers historical charts, multi-wallet connectivity, and instant transaction simulations.',
    category: 'saas',
    tags: ['React', 'Vite', 'Recharts', 'Tailwind CSS', 'Web3', 'TypeScript', 'Redis'],
    results: [
      'Optimized calculations rendering 200+ token pairs in sub-12ms',
      'Reduced visual memory footprint by 40% using canvas-backed charts',
      'Actively tracks $34M+ in aggregated decentralized assets'
    ],
    githubUrl: 'https://github.com/developer/apex-defi',
    liveUrl: 'https://apex.demo.example.com',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'logi-flow',
    title: 'LogiFlow - Automated Supply Chain Portal',
    description: 'A full-scale internal portal for a cargo freight logistics operation. Solved vehicle routing, real-time driver tracking, delivery signatures, and automated automated invoice building.',
    category: 'business',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'AWS S3', 'Mapbox API', 'Docker'],
    results: [
      'Eliminated manual invoicing saving dispatch and admin staffs 30 hours weekly',
      'Optimized route paths reducing fleet diesel costs by 18%',
      'Achieved 99.98% system uptime across multi-region edge servers'
    ],
    githubUrl: 'https://github.com/developer/logiflow',
    liveUrl: 'https://logiflow.demo.example.com',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'swift-cart',
    title: 'SwiftCart - Live-Auction Headless E-Commerce',
    description: 'A high-speed e-commerce storefront supporting live product auctioning, flash drops, and dynamic cart scaling. Features an admin dashboard with live order tracking and revenue analytics.',
    category: 'e-commerce',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Redis Store', 'Socket.io', 'Stripe'],
    results: [
      'Handled high peak stress spikes of 8,500 concurrent bids instantly',
      'Enhanced Core Web Vitals resulting in perfect 100/100 Mobile PageSpeed score',
      'Successfully automated full multi-currency and regional VAT compliance calculations'
    ],
    githubUrl: 'https://github.com/developer/swiftcart',
    liveUrl: 'https://swiftcart.demo.example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-novus',
    title: 'Re-engineering Legacy Invoicing for Novus Logistics',
    clientName: 'Novus Global Freight',
    problem: 'Novus was handling over 1,200 manual daily dispatch orders using PDFs and Slack messages, resulting in high entry errors, delayed billing pipelines, and missing driver logs.',
    solution: 'Built a specialized full-stack scheduling matrix dashboard connecting dispatch boards and real-time mapping nodes. Programmed background automated invoice generation on route arrival triggers and deployed secure single-view mobile links for cargo drivers.',
    techUsed: ['React', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Google Maps API'],
    impact: 'Transformed logistics administration into a self-service process, securing instant liquidity by invoicing directly on delivery.',
    metrics: [
      { label: 'Admin Overhead', value: '-85%' },
      { label: 'Billing Speed', value: 'Instant' },
      { label: 'Route Deviations', value: '-35%' },
      { label: 'Client Net Savings', value: '$180K/yr' }
    ],
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'case-healthai',
    title: 'Enabling Smart Records Extraction for HealthAI',
    clientName: 'HealthAI Corp',
    problem: 'Medical practitioners spent extensive hours manually cataloging physical hand-written patient admission sheets, which caused critical data silos and bottlenecked diagnostics.',
    solution: 'Designed and deployed an automated analysis pipeline with Gemini. Physical intake scans are fed into an optimized optical intelligence handler to extract standard HL7 schema variables, which are then validated on a secure localized cloud vault.',
    techUsed: ['React', 'Node.js', '@google/genai', 'PostgreSQL', 'Tailwind', 'AWS HSM'],
    impact: 'Replaced hours of repetitive clerical form matching with immediate automated patient summaries.',
    metrics: [
      { label: 'Accuracy Score', value: '99.4%' },
      { label: 'Digitizing Delay', value: '< 2.4s' },
      { label: 'Clinician Satisfaction', value: '4.9/5' },
      { label: 'Records Handled', value: '1.2M+' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  }
];

export const BLOGS_DATA: Blog[] = [
  {
    id: 'clean-architecture-nextjs',
    title: 'Architecting Clean Full-Stack Microservices in React & Express',
    excerpt: 'Deep-dive into structuring directory trees, decoupling business handlers, building declarative routes, and achieving strict compile-time type-safety.',
    content: `Solid software engineering isn’t just about making pixels click; it is about building dynamic, extensible architectures that survive growth waves. Let’s examine how to structure React apps that seamlessly interact with specialized Node APIs.

### The Decoupled Model Principle
One common modular architectural anti-pattern is placing server queries directly inside click components. Instead:
- Separate API dispatch requests into dedicated service wrappers.
- Treat form UI purely as dumb presentation layers that communicate through hook callbacks.
- Build type guards to guarantee responses match expectations prior to state updates.

### Setting Up Shared Enums
Declare shared types (e.g. status lists, billing ranges, project scopes) in standard TypeScript files accessible across backend pipelines and frontend visual blocks. It completely eliminates interface drift and speeds up onboarding.`,
    category: 'Architecture',
    date: 'May 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'Sumit Sinha',
      role: 'Principal Full Stack Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Architecture', 'TypeScript', 'Best Practices', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'streamlining-heavy-apis',
    title: 'Unblocking Massive Data Grids in Client-Side Dashboards',
    excerpt: 'How we cached API query payloads, applied virtual list rendering, and eliminated browser layouts to keep 10,000 active visual tokens at a buttery 60 FPS.',
    content: `When building modern dashboards for finance or telemetry, you will eventually face the challenge of rendering massive data vectors without slowing the browser to a crawl.

### The Myth of Fast React re-renders
By default, placing lists of 5,000 detailed cards will completely clog browser memory. A simple updates triggers layout calculations that block keystrokes and scroll behaviors.

To address this:
1. **Apply Virtual Lists**: Ensure you are only rendering elements currently visible inside the viewport bounds.
2. **Memoize Complex Calculations**: Compute chart coordinate mappings prior to rendering cycles.
3. **Chunk Large WebSocket Streams**: Buffer rapid incoming updates, batching state refreshes to trigger once every 100 milliseconds rather than on every raw network frame.`,
    category: 'Performance',
    date: 'Apr 15, 2026',
    readTime: '8 min read',
    author: {
      name: 'Sumit Sinha',
      role: 'Principal Full Stack Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Performance', 'WebSockets', 'Vite', 'React DevTools'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-cognitive-agent-pipelines',
    title: 'Wiring Contextually Grounded Conversational Agents Into Core SaaS Products',
    excerpt: 'An engineering blueprint to configure system directives, design task schemas, capture tool outputs, and maintain chat memory using the Gemini 3.5 SDK.',
    content: `Embedding cognitive intelligence into standard workspace interfaces is the gold standard of product design in 2026. This is the complete workflow of how we integrated the @google/genai SDK to automate CRM follow-ups.

### Crafting Immutable Directives
Model behaviors are strictly bound to system guidelines. Guide response bounds by feeding clear, concise instructions that dictate precisely what resources the agent can reference.

### Handling Structured Output
Instructing your models to output raw markdown is prone to formatting breaks. Enforce structured JSON schemas specifying exact parameter types. Your application parses the resulting JSON with complete confidence.`,
    category: 'AI Engineering',
    date: 'Mar 04, 2026',
    readTime: '11 min read',
    author: {
      name: 'Sumit Sinha',
      role: 'Principal Full Stack Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['AI', '@google/genai', 'Node.js', 'LLMs'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    company: 'Novus Freight Global',
    role: 'VP of Product Operations',
    review: "Sumit didn't just build a portal — he thoroughly solved our billing operations pipeline. He combined profound technical skills with an sharp understanding of business value. Our systems are now faster and completely automated.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    name: 'David Chen',
    company: 'Cognitive HealthAI',
    role: 'Co-Founder & CTO',
    review: "Working with Sumit felt like having an entire elite engineering squad in one single individual. He built a structured pipeline using Gemini to parse scanned patient logs with zero errors. Absolute professional.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    name: 'Elena Rostova',
    company: 'Apex Trading Corp',
    role: 'Technical Lead',
    review: "The yield charts are incredibly responsive and run flawlessly at 60 FPS under massive dataset updates. Sumit has a masterly understanding of React rendering behaviors and database optimization. Outstanding delivery.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Product Launch MVP',
    price: '$4,800',
    period: 'one-time setup',
    description: 'Perfect for startups needing to bring a solid, validated, and beautiful product MVP to the market within 3 to 4 weeks.',
    features: [
      'Interactive Figma UI/UX mockup layouts',
      'Fully responsive Client Web App',
      'Core authentication & secure data models',
      'Primary API routes & Stripe setup',
      'Vercel or AWS automated edge hosting',
      '30 days of proactive hyper-care support'
    ],
    popular: false,
    cta: 'Discuss My MVP'
  },
  {
    id: 'growth',
    name: 'Full SaaS Application',
    price: '$9,500',
    period: 'one-time setup',
    description: 'Complete, production-ready SaaS system featuring full database architectures, subscriptions, and smart features.',
    features: [
      'Advanced Multi-tenant infrastructure',
      'Full Database schema & optimization setup',
      'Multi-tier sub models & invoice engine',
      'Subtle animations, visual filters & search grids',
      'Dynamic PDF or CSV reporting pipelines',
      'Custom admin dashboards included',
      '90 days of dedicated server support & telemetry'
    ],
    popular: true,
    badge: 'Most Popular',
    cta: 'Launch My Platform'
  },
  {
    id: 'enterprise',
    name: 'Fractional CTO Partner',
    price: '$6,500',
    period: 'per month retainer',
    description: 'Ongoing dedicated engineering leadership, architecture design, and active development cycles for established startups.',
    features: [
      'Flexible architectural engineering sprint planning',
      '25 hours/week of active senior code development',
      'Code reviews, deployment pipelines & server audits',
      'Integrations with modern cognitive AI flows',
      'Strict response SLAs with hot-patch support',
      'Bi-weekly strategic product planning calls'
    ],
    popular: false,
    cta: 'Hire Fractional CTO'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Process',
    question: 'How do you operate and communicate throughout a project?',
    answer: 'Communication is vital. I run weekly milestones, sync work on private staging servers, track deliverables on virtual kanban boards, and keep daily communication open on Slack. No surprises, no radio silence.'
  },
  {
    id: 'faq-2',
    category: 'Technical',
    question: 'Why do you choose React and Express over other traditional frameworks?',
    answer: 'This stack delivers unmatched flexibility, speedy cold starts, strict client-server type safety with TypeScript, and a highly optimized ecosystem. It allows us to compile bundles that load in milliseconds and handle massive concurrent traffic effortlessly.'
  },
  {
    id: 'faq-3',
    category: 'Billing',
    question: 'How do project billing and invoice milestones work?',
    answer: 'Typically, complex setups are billed on a milestone structure: 25% kickoff retainer, 25% layout approval, 25% beta build validation, and 25% final production deployment. Monthly fractional retainers run on an upfront invoice schedule each month.'
  },
  {
    id: 'faq-4',
    category: 'Support',
    question: 'Do you offer ongoing post-launch maintenance?',
    answer: 'Absolutely. Every system includes complimentary support of 30 to 90 days. Beyond that, I offer highly scalable support retainers to handle framework upgrades, safety audits, and continuous database scaling checks.'
  },
  {
    id: 'faq-5',
    category: 'AI Integration',
    question: 'Can you help integrate AI and LLMs directly into our existing products?',
    answer: 'Yes! I specialize in using the Google GenAI SDK to build custom features like automated data extractors, intelligent search systems, smart routing bots, and semantic tagging, completely keeping user data secure.'
  }
];

export const CLIENT_RESULTS = [
  {
    title: 'Applications are 3x Faster',
    desc: 'Average page loads drop from 2.8s to sub-400ms using advanced edge logic and light bundles.',
    metric: '<400ms',
    sub: 'Mean Load Time'
  },
  {
    title: 'Automated Operations',
    desc: 'Businesses save hundreds of manual hours every single month with customized data processing dashboards.',
    metric: '+30h',
    sub: 'Weekly Saved Hours'
  },
  {
    title: 'Reduced Server Overhead',
    desc: 'Performance optimizations, caching, and connection pooling lower cloud costs.',
    metric: '-60%',
    sub: 'Cloud Expense Reduction'
  },
  {
    title: 'Seamless Integrations',
    desc: 'Secure payments, CRM feeds, and cognitive AI assets behave reliably under high concurrency.',
    metric: '99.99%',
    sub: 'Integration Reliability'
  }
];

export const DEV_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Engineering Scope',
    desc: 'We map your target objectives, user profiles, tech constraints, and draw up a detailed, fixed roadmap.'
  },
  {
    step: '02',
    title: 'Figma Layout Design',
    desc: 'Create wireframes focusing closely on usability, glassmorphism aesthetics, modern grids, and brand values.'
  },
  {
    step: '03',
    title: 'API & DB Architecture',
    desc: 'Normalizing backend schemas, mapping API endpoints, planning database indexing and caching paths.'
  },
  {
    step: '04',
    title: 'Core System Development',
    desc: 'Coding decoupled React wrappers and secure Node endpoints. Strictly type-safe from the start.'
  },
  {
    step: '05',
    title: 'Integrations & Optimizations',
    desc: 'Enforcing Stripe hooks, mounting Gemini AI workflows, and optimizing layout cycles for 100/100 Lighthouse grids.'
  },
  {
    step: '06',
    title: 'Staging & Load Testing',
    desc: 'Running high concurency simulation scripts and polishing responsive mobile states.'
  },
  {
    step: '07',
    title: 'Production Deployment & SLA Support',
    desc: 'Setting up zero-downtime server setups, configuring telemetry tools, and kicking off our post-launch support period.'
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Clean Architecture First',
    desc: 'Software must scale with your growth. I build modular systems with clear separation of concerns, strict type-safety, and descriptive code structures.'
  },
  {
    title: 'Business-Oriented Thinking',
    desc: 'Code is only valuable if it drives business outcomes. I write software designed specifically to increase conversion rates, slash operations costs, or delight clients.'
  },
  {
    title: 'Blazing Fast Response Rules',
    desc: 'No ghosting. I provide daily asynchronous updates on Discord/Slack and respond to inquiries within a 4-hour window on working days.'
  },
  {
    title: 'Rigorous Search Optimization',
    desc: 'Semantic HTML markup structures, JSON-LD schemas, supercharged load times, and dynamic metadata to place you high in rankings.'
  },
  {
    title: 'Deep AI Integration Expertise',
    desc: 'Skilled in building smart SaaS. Direct context-grounding, retrieval processes, and multi-modal file processors.'
  },
  {
    title: 'SLA-Assured Support Maintainers',
    desc: 'Active server inspections, regular NPM module updates, database backups, and emergency live support responding in under 60 minutes.'
  }
];

export const SEARCH_COMMANDS = [
  { name: 'Go to Home Section', trigger: 'go home', target: '#home' },
  { name: 'View Work & Projects', trigger: 'go projects', target: '#projects' },
  { name: 'View Client Case Studies', trigger: 'go case-studies', target: '#casestudies' },
  { name: 'Read Blog Articles', trigger: 'go blog', target: '#blog' },
  { name: 'View Pricing Packages', trigger: 'go pricing', target: '#pricing' },
  { name: 'Book a Strategy Call', trigger: 'go book', target: '#book' },
  { name: 'Open AI Assistant Chat', trigger: 'chat', target: 'chatbot' },
  { name: 'Open Privacy Policy', trigger: 'go privacy', target: '#privacy' }
];
