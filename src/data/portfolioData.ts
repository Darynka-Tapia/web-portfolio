import type { ExperienceItem, NavSectionId, ProjectCategory, ProjectItem, SkillGroup } from '../types/portfolio';
import behaviorMockup from '../assets/behaviorjs-laptop-mockup.jpg';
import rpsMockup from '../assets/rps-tablet-mockup.jpg';
import vaquitaMockup from '../assets/una-vaquita-desktop-mockup.jpg';
import huellitasMockup from '../assets/huellitas-mockup.jpg';

export const NAV_ITEMS: { id: NavSectionId; label: string; sectionId: string }[] = [
  { id: 'home', label: 'Home', sectionId: 'hero' },
  { id: 'about', label: 'About', sectionId: 'about' },
  { id: 'projects', label: 'Projects', sectionId: 'projects' },
  { id: 'experience', label: 'Experience', sectionId: 'experience' },
  { id: 'skills', label: 'Skills', sectionId: 'skills' },
  { id: 'contact', label: 'Contact', sectionId: 'contact' },
];

export const PROJECT_FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'development', label: 'Development' },
  { id: 'ux-ui', label: 'UX/UI' },
  { id: 'open-source', label: 'Open Source' },
];

export const SOCIAL_LINKS = {
  email: 'darytapia09@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abril-tapia/',
  github: 'https://github.com/Darynka-Tapia',
  npm: 'https://www.npmjs.com/settings/tapyka/packages',
  huellitasHiFiFigma: 'https://www.figma.com/proto/kDzPRdCZzc7qSTtzaLbYlq/Huellitas?page-id=78%3A131&node-id=78-132&node-type=frame&viewport=3182%2C94%2C2.48&t=lzJETVGsGgfnqj8L-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=78%3A132',
  huellitasLowFiFigma: 'https://www.figma.com/proto/kDzPRdCZzc7qSTtzaLbYlq/Huellitas?page-id=0%3A1&node-id=65-65&node-type=canvas&viewport=-18%2C-637%2C0.28&t=igvIsuKpSp3idM1h-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=65%3A65&show-proto-sidebar=1',
  artAuctionLowFiFigma: 'https://www.figma.com/proto/spFXOFRoJ6oqQIY8xW1Lg2/ArtAuction?content-scaling=fixed&node-id=1-2&page-id=0%3A1&scaling=scale-down&starting-point-node-id=1%3A2&t=tXRjd90PYK6wMjPS-1&viewport=642%2C267%2C0.19',
  artAuctionHiFiFigma: 'https://www.figma.com/proto/spFXOFRoJ6oqQIY8xW1Lg2/ArtAuction?content-scaling=fixed&node-id=121-6&page-id=121%3A5&scaling=scale-down&starting-point-node-id=121%3A6&t=eLd4wNiEsUFfEsSc-1&viewport=374%2C460%2C0.31',

  };

export const PROJECTS: ProjectItem[] = [
  {
    id: 'behaviorjs',
    featured: true,
    badgeLeft: 'Developer Tool',
    categoryLabel: 'UX Analytics',
    title: 'BehaviorJS',
    description:
      'Lightweight JavaScript library for analyzing user interactions, understanding user intent, and identifying UX friction points.',
    architectureSummary:
      'Designed as a client-side interaction tracking library with real-time behavior analysis and a modular approach to UX analytics.',
    categories: ['development', 'open-source'],
    tags: ['JavaScript', 'UX Analytics', 'User Behavior', 'Interaction Tracking'],
    imageSrc:behaviorMockup,
    imageAlt:
      'BehaviorJS JavaScript library showcasing user interaction analytics and behavior tracking.',
    actions: [
      {
        label: 'Website',
        icon: 'arrow_outward',
        variant: 'primary',
        href: 'https://gift-pool.netlify.app/',
        external: true,
        actionType: 'external-website',
      },
      {
        label: 'NPM',
        icon: 'terminal',
        variant: 'secondary',
        href: 'https://www.npmjs.com/package/@tapyka/behaviorjs',
        external: true,
        actionType: 'external',
      },
      {
        label: 'GitHub',
        icon: 'code',
        variant: 'ghost',
        href: 'https://github.com/',
        external: true,
        actionType: 'external',
      },
    ],
  },
  {
    id: 'huellitas',
    featured: false,
    badgeLeft: 'Case Study',
    badgeSecondary: 'UX/UI',
    categoryLabel: 'Community Animal Platform',
    year: '2024',
    title: 'Huellitas — Animal Rescue & Pet Reconnection Platform',
    description:
      'Huellitas is a proposed platform designed to promote solidarity and animal welfare by connecting pet owners, animal rescuers, and people willing to help. It focuses on bringing the community together to help find lost pets, raise awareness about abandoned animals, and encourage responsible adoption, with the goal of building a safer and more caring community for everyone.',
    architectureSummary:
      'A modular platform structure with dedicated sections for lost pets, found pets and rescue support.',
    categories: ['ux-ui'],
    tags: ['UX Research', 'Figma', 'Design Systems', 'Accessibility (a11y)'],
    imageSrc:huellitasMockup,
    imageAlt:
      'UI presentation of Huellitas animal rescue web platform mockup on high resolution screen displaying pet profiles, search filters, and warm lilac aesthetic accents',
    actions: [
      {
        label: 'View Case Study',
        icon: 'arrow_outward',
        variant: 'primary',
        actionType: 'case-study',
        page: 'huellitas'
      },
    ],
  },
  {
    id: 'gift-pool',
    badgeLeft: 'Web Application',
    categoryLabel: 'Frontend Architecture',
    title: 'Gift Pool',
    description:
      'A collaborative platform that allows users to create, manage, and contribute to group funds through a simple and intuitive interface.',
    architectureSummary:
      'Built with Vue.js and Tailwind CSS, using Firebase for backend services and data management, with a component-based structure for reusable UI elements.',
    categories: ['development'],
    tags: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    imageSrc: vaquitaMockup, 
    imageAlt:
      'BehaviorJS JavaScript library showcasing user interaction analytics and behavior tracking.',
    actions: [
      {
        label: 'Website',
        icon: 'arrow_outward',
        variant: 'secondary',
        href: 'https://gift-pool.netlify.app/',
        external: true,
        actionType: 'external-website',
      },
      {
        label: 'GitHub',
        icon: 'terminal',
        variant: 'ghost',
        href: 'https://github.com/',
        external: true,
        actionType: 'external',
      },
    ],
  },
  {
    id: 'rock-paper-scissors',
    badgeLeft: 'Interactive Game',
    categoryLabel: 'Game Architecture',
    title: 'Rock, Paper, and Scissors',
    description:
      'An interactive version of the classic rock-paper-scissors game, where users play against the system and receive instant results.',
    architectureSummary:
      'Built with Vue.js, JavaScript, and Tailwind CSS, separating player interactions, game logic, and result handling into a component-based structure.',
    categories: ['development'],
    tags: ['Vue.js', 'JavaScript', 'Tailwind CSS'],
    imageSrc:rpsMockup, 
    imageAlt:
        'BehaviorJS JavaScript library showcasing user interaction analytics and behavior tracking.',
    actions: [
      {
        label: 'Website',
        icon: 'arrow_outward',
        variant: 'secondary',
        href: 'https://gift-pool.netlify.app/',
        external: true,
        actionType: 'external-website',
      },
      {
        label: 'GitHub',
        icon: 'terminal',
        variant: 'ghost',
        href: 'https://github.com/',
        external: true,
        actionType: 'external',
      },
    ],
  },
  {
    id: 'art-auction',
    featured: false,
    badgeLeft: 'Case Study',
    badgeSecondary: 'UX/UI',
    categoryLabel: 'Online Art Auction App',
    title: 'ArtAuction — Online Art Auction Platform',
    description:
      'ArtAuction is a mobile app concept designed to make online art auctions easier and more accessible. It focuses on helping art enthusiasts and collectors browse available auctions, discover artwork, and participate in bidding without needing to attend in-person events.',
    architectureSummary:
      'A mobile-first information architecture organized around auction discovery, active bids, artwork recommendations, and the bidding and checkout process, with an emphasis on simple navigation and accessibility.',
    categories: ['ux-ui'],
    tags: ['UX Research', 'Usability Testing', 'Mobile App Design', 'Figma', 'Accessibility (a11y)'],
    year: '2024',
    imageSrc:
      'https://static.wixstatic.com/media/1ed91b_098c53fcbbce4744bec8b30283d6bd9b~mv2.png/v1/fill/w_491%2Ch_368%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/1ed91b_098c53fcbbce4744bec8b30283d6bd9b~mv2.png',
    imageAlt:
      'ArtAuction mobile application design showcasing an online art auction experience.',
    actions: [
      {
        label: 'View Case Study',
        icon: 'arrow_outward',
        variant: 'primary',
        actionType: 'case-study',
        page: 'art-auction'
      },
    ],
  },



  /*{
    id: 'design-system',
    badgeLeft: 'Developer Tool',
    categoryLabel: 'Design Architecture',
    title: 'Design System & Component Architecture',
    description:
      'Modular, accessible UI component library built with atomic design principles and strict token synchronization across design and code.',
    architectureSummary:
      'Built on Vue 3, TypeScript, and Tailwind CSS with deterministic design token pipelines, Pinia state primitives, and comprehensive Vitest unit test coverage.',
    categories: ['development', 'open-source'],
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vitest', 'Pinia'],
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBfvDd23pgzPMAGo365yrDDZUpJKcdiHUUhCX62qcaO0mUWRKOlx8NBlTsHyhFpJ78Ud3gXEkIzbSOBPW6ebUlDPYVqKqIuL8Pvh_LtWI8kCWiArGjgaIL_l1F7nD0RhFgMrxspfy6ODLJQRSfTlkx6LQ92tcifhmCPacjJyV9yR0zIZicc2aCZ8H1gKkMkhB8-nfFKvjCmLDCPUZrlZe_6GsTF-DrfeBLDycy3GCk',
    imageAlt:
      'Clean minimal UI design system showcase layout featuring atomic components, typography scale, color tokens in soft lavender and charcoal on a pristine editorial background',
    actions: [
      {
        label: 'Live Demo',
        icon: 'visibility',
        variant: 'secondary',
        href: 'https://github.com/',
        external: true,
        actionType: 'external',
      },
      {
        label: 'GitHub',
        icon: 'code',
        variant: 'ghost',
        href: 'https://github.com/',
        external: true,
        actionType: 'external',
      },
    ],
  },*/
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'htech-senior',
    role: 'Senior Frontend Software Engineer',
    company: 'HTech Solutions',
    period: 'January 2024 – March 2026',
    description:
      'Led frontend architecture and reusable UI component standards across enterprise web suites. Mentored engineers, spearheaded code quality initiatives, and systematically enforced web performance and WCAG AA accessibility baselines.',
    tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vitest', 'Descope'],
    dotStyle: 'primary',
  },
  {
    id: 'htech-mid',
    role: 'Frontend Engineer',
    company: 'HTech Solutions',
    period: 'November 2021 – December 2023',
    description:
      'Developed enterprise user interfaces, streamlined complex client-side state handling, and integrated high-throughput RESTful backend endpoints with fluid interaction patterns.',
    tags: ['Vue 2/3', 'TypeScript', 'JavaScript', 'REST APIs', 'CSS3'],
    dotStyle: 'tertiary',
  },
  {
    id: 'socialhero',
    role: 'Full Stack Developer',
    company: 'Socialhero',
    period: 'March 2020 – September 2021',
    description:
      'Engineered core features across full-stack applications, developed RESTful endpoints, maintained relational database models, and enhanced platform performance.',
    tags: ['Vue 2','PHP', 'Laravel', 'MySQL', 'JavaScript'],
    dotStyle: 'tertiary',
  },
  {
    id: 'coordinate-si',
    role: 'Full Stack Developer',
    company: 'Coordinate.si',
    period: 'July 2019 – March 2020',
    description:
      'Built responsive interface modules and integrated third-party platforms with clean data synchronizations and intuitive scheduling interactions.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'HTML5/CSS3'],
    dotStyle: 'outline',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'terminal',
    accentChips: true,
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Vue 3',
      'Vue 2',
      'React',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    id: 'design-ux',
    title: 'Design & UX',
    icon: 'draw',
    skills: ['Figma', 'Atomic Design', 'Design Systems', 'Responsive Design', 'Mobile-First'],
  },
  {
    id: 'testing-quality',
    title: 'Testing & Quality',
    icon: 'verified_user',
    skills: ['Vitest', 'Unit Testing', 'SonarQube', 'Lighthouse', 'Code Reviews'],
  },
  {
    id: 'backend-integrations',
    title: 'Backend & Integrations',
    icon: 'account_tree',
    skills: ['PHP', 'Laravel', 'Node.js','RESTful APIs', 'API Integration', 'MySQL', 'MariaDB'],
  },
  {
    id: 'state-auth',
    title: 'State Management & Authentication',
    icon: 'vpn_key',
    skills: ['Pinia','Descope', 'SSO', 'JWT', 'Authentication Flows'],
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    icon: 'construction',
    skills: ['Git', 'GitHub', 'GitLab', 'NPM', 'Jira', 'Confluence'],
  },
  {
    id: 'currently-exploring',
    title: 'Currently Exploring',
    icon: 'explore',
    highlighted: true,
    badge: 'Active Learning',
    description:
      'Exploring new approaches and improving my skills through practical experimentation.',
    skills: ['Next.js', 'Supabase', 'Express.js'],
  },
];
