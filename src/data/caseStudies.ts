
import { SOCIAL_LINKS } from './portfolioData';
import huellitasMockup2 from '../assets/huellitas-prototipe-hi-fi.jpg';
import huellitasCrazyEight from '../assets/huellitas-crazy-eight.jpg';
import huellitasLoFi1 from '../assets/huellitas-wireframe-lofi-1.jpg';
import huellitasLoFi2 from '../assets/huellitas-wireframe-lofi-2.jpg';
import huellitasLoFi3 from '../assets/huellitas-wireframe-lofi-3.jpg';
import huellitasHiFi1 from '../assets/huellitas-wireframe-hifi-1.jpg';
import huellitasHiFi2 from '../assets/huellitas-wireframe-hifi-2.jpg';
import huellitasHiFi3 from '../assets/huellitas-wireframe-hifi-3.jpg';
import HuellitasPersona1 from '../assets/huellitas-persona1.jpg';
import HuellitasPersona2 from '../assets/huellitas-persona2.jpg';

import artAuctionMockup2 from '../assets/art-auction-prototipe-hi-fi.jpg';
import artAuctionSketching from '../assets/art-auction-sketching.jpg';
import artAuctionLoFi1 from '../assets/art-auction-wireframe-lofi-1.jpg';
import artAuctionLoFi2 from '../assets/art-auction-wireframe-lofi-2.jpg';
import artAuctionLoFi3 from '../assets/art-auction-wireframe-lofi-3.jpg';
import artAuctionHiFi1 from '../assets/art-auction-wireframe-hifi-1.jpg';
import artAuctionHiFi2 from '../assets/art-auction-wireframe-hifi-2.jpg';
import artAuctionHiFi3 from '../assets/art-auction-wireframe-hifi-3.jpg';
import artAuctionPersona1 from '../assets/art-auction-persona1.jpg';
import artAuctionPersona2 from '../assets/art-auction-persona2.jpg';


export type CaseStudyId =
  | 'huellitas-case-study'
  | 'art-auction-case-study'; 

export interface CaseStudyHeroData {
    category: string;
    year: string;
    title: string;
    description: string;
    mission: string;
    prototypeUrl: string;
    prototypeLabel: string;
    researchLabel: string;
    image: {
      src: string;
      alt: string;
      fallbackLabel: string;
    };
    previewLabel: string;
    footerLabel: string;
    durationLabel: string;
};
export interface CaseStudyOverviewData {
    meta: {
      kicker: string;
      value: string;
      sub: string;
    }[];
    artifactsTitle: string;
    artifacts: string[];
  };
export interface CaseStudyProblemData {
    eyebrow: string;
    title: string;
    statementTitle: string;
    statement: string;
    cards: {
      icon: string;
      title: string;
      text: string;
    }[];
  };
export interface CaseStudyResearchData {
    eyebrow: string;
    title: string;
    description: string;
    methodologyTitle: string;
    metrics: {
      value: string;
      title: string;
      description: string;
    }[];
    insights: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
export interface CaseStudyPersonasData {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      name: string;
      role: string;
      image: {
        src: string;
        alt: string;
        fallbackLabel: string;
      };
      quote: string;
      frustrations: string[];
      goal: string;
      context: string;
    }[];
  };
export interface CaseStudyIdeationData {
    eyebrow: string;
    title: string;
    description: string;
    decisionTitle: string;
    decision: string;
    artifactsTitle: string;
    artifactsSubtitle: string;
    image: {
      src: string;
      alt: string;
      fallbackLabel: string;
    };
  };
export interface CaseStudyWireframesData {
    eyebrow: string;
    title: string;
    description: string;
    screens: {
      number: string;
      title: string;
      description: string;
      image: {
        src: string;
        alt: string;
        fallbackLabel: string;
      };
    }[];
    prototypeUrl: string;
    prototypeLabel: string;
  };
export interface CaseStudyUsabilityData {
    eyebrow: string;
    title: string;
    description: string;
    findings: {
      number: string;
      frictionPoint: string;
      title: string;
      description: string;
      resolved: string;
    }[];
  };
export interface CaseStudyShowcaseData {
    eyebrow: string;
    title: string;
    description: string;
    prototypeUrl: string;
    prototypeLabel: string;
    screens: {
      title: string;
      description: string;
      src: string;
      alt: string;
    }[];
  };
export interface CaseStudyAccessibilityData {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
export interface CaseStudyConclusionsData {
    eyebrow: string;
    title: string;
    description: string;
    insights: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
export interface CaseStudyRoadmapData {
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      phase: string;
      icon: string;
      title: string;
      description: string;
    }[];
  };
export interface CaseStudyFooterData {
    prototypeUrl: string;
    prototypeLabel: string;
    contactLabel: string;
  };


export interface CaseStudyData {
  id: CaseStudyId;
  slug: string;
  hero:CaseStudyHeroData; 
  overview:CaseStudyOverviewData; 
  problem:CaseStudyProblemData; 
  research:CaseStudyResearchData;
  personas:CaseStudyPersonasData;
  ideation:CaseStudyIdeationData;
  wireframes:CaseStudyWireframesData;
  usability:CaseStudyUsabilityData;
  showcase:CaseStudyShowcaseData;
  accessibility:CaseStudyAccessibilityData;
  conclusions:CaseStudyConclusionsData;
  roadmap:CaseStudyRoadmapData;
  footer:CaseStudyFooterData;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'huellitas-case-study',
    slug: '/projects/huellitas',

    // SECTION 1 - HERO
    hero: {
      category: 'Google UX Design Certificate',
      year: 'Case Study 2024',
      title:
        'Huellitas: Reconnecting Lost Pets with Their Families & Empowering Rescuers',
      description:
        'A collaborative community-driven mobile and web platform facilitating pet recovery, lost-and-found matching, and animal adoption through friction-free reporting.',
      mission:
        'Fostering solidarity and neighborhood connection by linking pet owners with local rescuers to collaborate in finding lost pets and facilitating compassionate adoptions without digital barriers.',
      prototypeUrl: SOCIAL_LINKS.huellitasHiFiFigma,
      prototypeLabel: 'Interactive Prototype',
      researchLabel: 'View Research Process',
      image: {
        src: huellitasMockup2,
        alt: 'High fidelity mobile application mockup showing the Huellitas home screen in Spanish and English with cards of lost pets, urgent alert badges in deep violet, direct contact buttons for pet finders, warm ivory background, clean typography and high contrast cards',
        fallbackLabel: 'Huellitas Mobile Preview',
      },
      previewLabel: 'Mobile prototype HI-FI',
      footerLabel: 'First phase completed',
      durationLabel: '',
    },

    // SECTION 2 - PROJECT OVERVIEW
    overview: {
      meta: [
        {
          kicker: 'Role',
          value: 'UX/UI Designer & researcher',
          sub: 'Google UX Design Professional Certificate',
        },
        {
          kicker: 'Format & Scope',
          value: 'Mobile App & Web',
          sub: 'Cross-platform responsive design',
        },
        {
          kicker: 'Timeline',
          value: '4 Weeks',
          sub: 'Iterative sprints & usability testing',
        },
        {
          kicker: 'Tooling',
          value: 'Figma',
          sub: 'Miro, Google Workspace',
        },
      ],
      artifactsTitle: 'Comprehensive End-to-End UX Deliverables',
      artifacts: [
        'User Research',
        'User Personas',
        'Competitive audit',
        'Crazy 8s Sketches',
        'Digital Wireframes',
        'Interactive Prototypes',
        'A11y',
      ],
    },

    // SECTION 3 - THE PROBLEM
    problem: {
      eyebrow: '01 / Challenge',
      title: 'The Emotional & Logistical Crisis of Lost Pets',
      statementTitle: 'Problem Statement',
      statement:
        'Pet owners need to connect with their community to get help finding their lost animals. They seek to restore peace and joy to their homes by reuniting their pets with their families.',
      cards: [
        {
          icon: 'family_restroom',
          title: 'Distressed Families',
          text:
            'Need immediate peace of mind and urgent neighborhood visibility before the pet wanders outside safe perimeters.',
        },
        {
          icon: 'volunteer_activism',
          title: 'Active Rescuers',
          text:
            'Struggle with scattered social media posts and heavy account registration requirements when encountering lost animals.',
        },
        {
          icon: 'visibility',
          title: 'High-Stress Usability',
          text:
            'High-contrast readability and direct phone triggers are essential during chaotic outdoor search expeditions.',
        },
      ],
    },

    // SECTION 4 - USER RESEARCH
    research: {
      eyebrow: '02 / Investigation',
      title: 'Empathetic User Research',
      description:
        'A comprehensive usability investigation to expose friction points when publishing and retrieving critical pet alert bulletins under stressful conditions.',
      methodologyTitle: 'Methodology & Demographics',
      metrics: [
        {
          value: '5',
          title: 'Participants',
          description:
            'Diverse demographics across ages & digital literacy levels',
        },
        {
          value: '100%',
          title: 'Remote Moderated',
          description:
            'Screen-recorded task flows with live voice debriefs',
        },
        {
          value: 'A11y',
          title: 'Accessibility Focus',
          description:
            'Included participants with visual impairments',
        },
      ],
      insights: [
        {
          icon: 'no_accounts',
          title: 'Zero Mandatory Onboarding',
          description:
            'Users under acute stress abandon apps that force login screens prior to letting them broadcast or view missing pet coordinates.',
        },
        {
          icon: 'brightness_medium',
          title: 'Outdoor Sunlight Contrast',
          description:
            'Search teams scan phones under direct sunlight; small grey fonts fail completely. Bold badges and high-contrast chips are essential.',
        },
      ],
    },

    // SECTION 5 - USER PERSONAS
    personas: {
      eyebrow: '03 / Human Context',
      title: 'Archetypal User Personas',
      description:
        'Synthesized from qualitative interviews, these profiles represent both sides of the community rescue dynamic.',
      items: [
        {
          name: 'Sofía Martínez',
          role: 'Mother & Remote Graphic Designer',
          image: {
            src: HuellitasPersona1,
            alt: 'Portrait photo of Sofia Martinez, a warm graphic designer and mother with thoughtful expression against a soft studio backdrop, natural lighting, serene atmosphere',
            fallbackLabel: 'Sofía Martínez',
          },
          quote:
            "My pet is my family and I won't rest until I bring him home and joy back to my children.",
          frustrations: [
            'Lack of information',
            'Disconnection/disinterest from the community',
            'Time constraints'
          ],
          goal: 'Fast Pet Recovery',
          context: 'Urban Resident',
        },
        {
          name: 'Carlos Gómez',
          role: 'Sales Manager & Morning Runner',
          image: {
            src: HuellitasPersona2,
            alt: 'Portrait photo of Carlos Gomez, an athletic sales manager in running attire outdoors in a city park at dawn, authentic candid photo with soft morning sunlight',
            fallbackLabel: 'Carlos Gómez',
          },
          quote:
            'Every pet deserves a home and I will do everything I can to help them find theirs.',
          frustrations: [
            'Outdated or illegible signs',
            'No standardized phone/WhatsApp quick trigger to call frantic pet parents.',
          ],
          goal: 'Instant Contact',
          context: 'Neighborhood Good Samaritan',
        },
      ],
    },

    // SECTION 6 - IDEATION
    ideation: {
      eyebrow: '04 / Divergence',
      title: 'Crazy Eights & Strategic Pivot',
      description:
        'To rapidly brainstorm alternative layouts, I ran multiple Crazy 8s sketching iterations exploring how to display high-priority actions without cognitive overload.',
      decisionTitle: 'Key Design Decision',
      decision:
        "The user's primary intent is unambiguous: Find, Return, or Adopt. I chose to surface these three primary action buttons front-and-center rather than gating the experience behind onboarding screens or authentication walls.",
      artifactsTitle: 'Rapid Ideation Artifacts',
      artifactsSubtitle: '8 Sketches in 8 Minutes',
      image: {
        src: huellitasCrazyEight, 
        alt:'Huellitas crazy eight', 
        fallbackLabel:'Huellitas crazy eight'
      }
        
    },

    // SECTION 7 - WIREFRAMES
    wireframes: {
      eyebrow: '05 / Structure',
      title: 'Digital Wireframes & Low-Fi Prototyping',
      description:
        'Translating rough pen-and-paper concepts into structured Figma wireframes, tested early to discover architectural gaps before styling.',
      screens: [
        {
          number: 'Screen 01',
          title: 'Search Zone and Last Location Setup',
          description:
            'Screen where the user sets the exact address, zip code, and search radius in kilometers where their pet was last seen, allowing the app to automatically alert community members within the perimeter.',
          image: {
            src: huellitasLoFi1,
            alt: 'Search Zone and Last Location Setup LoFi wireframe',
            fallbackLabel: 'Search Zone and Last Location Setup LoFi wireframe'
          }  
        },
        {
          number: 'Screen 02',
          title: 'Active Tracking and Nearby Missing Pets',
          description:
            'Main view displaying the map with the active search perimeter, quick access to the latest report or message received regarding a pet sighting, and a bottom carousel featuring other missing pets in the area to encourage community support.',
          image: {
            src: huellitasLoFi2,
            alt: 'Active Tracking and Nearby Missing Pets LoFi wireframe',
            fallbackLabel: 'Active Tracking and Nearby Missing Pets LoFi wireframe'
          } 
        },
        {
          number: 'Community Alerts and Messages',
          title: 'Pet Detail & Call Action',
          description:
            "Slide-down panel that centralizes alerts and direct messages sent by other users who have clues or relevant information about the missing pet's whereabouts.",
          image: {
            src: huellitasLoFi3,
            alt: 'Community Alerts and Messages LoFi wireframe',
            fallbackLabel: 'Community Alerts and Messages LoFi wireframe'
          }
        },
      ],
      prototypeUrl: SOCIAL_LINKS.huellitasLowFiFigma,
      prototypeLabel: 'Explore Low-Fidelity Figma Prototype',
    },

    // SECTION 8 - USABILITY TESTING
    usability: {
      eyebrow: '06 / Evaluation',
      title: 'Usability Testing & 3 Core Findings',
      description:
        'Moderated sessions with 5 participants revealed critical oversights in the publication flow that hindered effective rescue communication.',
      findings: [
        {
          number: '01',
          frictionPoint: 'Usability' ,
          title: 'Missing Contact Name Field',
          description:
            "The lost pet reporting form did not include a name field when requesting the owner's contact information, leaving an important piece of information out of the submission process.",
          resolved: 'Resolved: Added explicit full name field',
        },
        {
          number: '02',
          frictionPoint: 'Visibility' ,
          title: 'Missing Information in Post Preview',
          description:
            "The post preview did not display the user's name or the reward amount, when applicable, making it difficult to verify how the final post would appear before publishing.",
          resolved: 'Resolved: Live card preview with reward chip',
        },
        {
          number: '03',
          frictionPoint: 'Accessibility' ,
          title: 'Lack of Language Selection',
          description:
            "The app did not provide a language selector, limiting users' ability to choose their preferred language and potentially creating barriers for non-native speakers.",
          resolved: 'Resolved: Persistent EN/ES language toggle',
        },
      ],
    },

    // SECTION 9 - HIGH-FIDELITY SHOWCASE
    showcase: {
      eyebrow: '07 / Polish',
      title: 'High-Fidelity Visual Design',
      description:
        'A harmonious interface pairing accessible high-contrast color tokens with clear editorial cards and instant communication triggers.',
      prototypeUrl: SOCIAL_LINKS.huellitasHiFiFigma,
      prototypeLabel: 'Launch Hi-Fi Figma Prototype',
      screens: [
        {
          title: 'Search Poster Preview',
          description:
            'Screen where the owner reviews how the digital poster will look before publishing it, integrating the pet’s photo, last seen location, distinctive characteristics, offered reward, and contact details for the community.',
          src: huellitasHiFi1,
          alt: 'High fidelity UI screen of Search Poster Preview',
        },
        {
          title: 'Location Tracking, Emotional Support, and Nearby Pets',
          description:
            'High-fidelity main view featuring the interactive map with the last seen location perimeter, a supportive message card ("Keep calm") to guide the owner through the process, and a bottom section displaying cards of other missing or sheltered pets in the area.',
          src: huellitasHiFi2,
          alt: 'High fidelity UI screen of Location Tracking, Emotional Support, and Nearby Pets',
        },
        {
          title: 'Direct Messaging',
          description:
            'Private chat screen between the owner and a community member reporting a sighting, enabling real-time detail sharing and photo attachments to confirm the pet’s identity and exact location.',
          src: huellitasHiFi3,
          alt: 'High fidelity UI screen of Direct Messaging',
        },
      ],
    },

    // SECTION 10 - ACCESSIBILITY
    accessibility: {
      eyebrow: '08 / Universal Design',
      title: 'Accessibility Considerations',
      description:
        'Inclusive design principles integrated from day one to accommodate participants with visual impairments and varying motor abilities.',
      items: [
        {
          number: '1',
          title: 'Language Preferences',
          description:
            'A language selector was implemented to allow users to choose their preferred language, creating a more inclusive and accessible experience that is easier to understand.',
        },
        {
          number: '2',
          title: 'High Color Contrast',
          description:
            'A high-contrast color palette was implemented to ensure text readability for all users, including those with visual impairments.',
        },
        {
          number: '3',
          title: 'Optimized Interactive Elements',
          description:
            'Interactive elements were resized to improve usability and ease of interaction, particularly for users with motor difficulties or visual impairments.',
        },
      ],
    },

    // SECTION 11 - CONCLUSIONS
    conclusions: {
      eyebrow: '09 / Reflections',
      title: 'Project Conclusions & Impact',
      description:
        'Huellitas illustrates that in life-critical and emotionally stressful digital products, empathy is measured by the removal of friction. By removing mandatory onboarding, users are empowered to act within seconds of finding an animal.',
      insights: [
        {
          icon: 'thumb_up',
          title: 'Project Impact',
          description:
            'The Huellitas app is designed to make finding and reporting lost pets easier and more accessible. Its intuitive and efficient interface aims to encourage positive user interactions while helping pet owners reconnect with their pets and supporting the community.',
        },
        {
          icon: 'psychology',
          title: 'Research-Driven Design',
          description:
            'Throughout this project, I learned that user research is essential to understanding users’ needs and making effective design decisions. Usability testing provided valuable insights, while the prototyping process helped me strengthen my skills in creating intuitive and accessible user experiences.',
        },
      ],
    },

    // SECTION 12 - ROADMAP
    roadmap: {
      eyebrow: '10 / Future Roadmap',
      title: 'Next Iteration Horizons',
      description:
        'Future feature rollouts planned for future development cycles of Huellitas:',
      steps: [
        {
          phase: 'Phase 1',
          icon: 'manage_search',
          title: 'Find the Owner Tool',
          description:
            'Introduce a feature that allows users to report found animals and search for their owners, helping reunite lost pets with their families.',
        },
        {
          phase: 'Phase 2',
          icon: 'volunteer_activism',
          title: 'In-App Adoption Module',
          description:
            'Introduce an adoption feature that allows users to find pets in need of a home or offer them for adoption, encouraging responsible pet ownership.',
        },
        {
          phase: 'Phase 3',
          icon: 'library_add',
          title: 'Multi-Pet Reporting',
          description:
            'Allow users to include multiple pets in a single post, making it easier and more efficient for owners to report several missing pets at once.',
        },
      ],
    },

    // FOOTER
    footer: {
      prototypeUrl: SOCIAL_LINKS.huellitasHiFiFigma,
      prototypeLabel: 'Figma High-Fi',
      contactLabel: 'Discuss this Project',
    },
  },
  {
    id: 'art-auction-case-study',
    slug: '/projects/art-auction',

    // SECTION 1 - HERO
    hero: {
      category: 'Google UX Design Certificate',
      year: 'Case Study 2025',
      title:
        'ArtAuction: Simplifying Art Bidding & Online Auction Experiences',
      description:
        'A mobile application designed to help art enthusiasts and collectors discover and participate in online art auctions, making the bidding experience more accessible to users with limited technological experience.',
      mission:
      'Making art auctions more accessible through an intuitive and inclusive mobile experience that allows users to discover artwork, participate in auctions, and complete their purchases without attending in-person events.',
      prototypeUrl: SOCIAL_LINKS.artAuctionHiFiFigma,
      prototypeLabel: 'Interactive Prototype',
      researchLabel: 'View Research Process',
      image: {
        src: artAuctionMockup2,
        alt: 'ArtAuction mobile prototype showing the auction flow by the user',
        fallbackLabel: 'ArtAuction Mobile Preview',
      },
      previewLabel: 'Mobile prototype HI-FI',
      footerLabel: 'Case study completed',
      durationLabel: '',
    },

    // SECTION 2 - PROJECT OVERVIEW
    overview: {
      meta: [
        {
          kicker: 'Role',
          value: 'UX/UI Designer & Researcher',
          sub: 'Google UX Design Professional Certificate',
        },
        {
          kicker: 'Format & Scope',
          value: 'Mobile App',
          sub: 'End-to-end mobile UX/UI design',
        },
        {
          kicker: 'Timeline',
          value: '6 Months',
          sub: 'User research, wireframing & usability testing',
        },
        {
          kicker: 'Tooling',
          value: 'Figma',
          sub: '',
        },
      ],
      artifactsTitle: 'Comprehensive End-to-End UX Deliverables',
      artifacts: [
        'User Research',
        'User Personas',
        'Problem Statements',
        'User Journey Maps',
        'Paper Sketches',
        'Digital Wireframes',
        'Low-Fidelity Prototypes',
        'Usability Studies',
        'High-Fidelity Prototypes',
        'Accessibility Considerations',
      ],
    },

    // SECTION 3 - THE PROBLEM
    problem: {
      eyebrow: '01 / Challenge',
      title: 'Making Online Art Auctions Accessible to Everyone',
      statementTitle: 'Problem Statement',
      statement:
        'Users need a simple and accessible way to participate in online art auctions because limited technological skills and insufficient time to attend in-person events make it difficult for them to conveniently acquire artwork they are interested in.',
      cards: [
        {
          icon: 'shield',
          title: 'Financial Security',
          text:
            'Users may feel concerned about the security of online transactions. Offering secure payment options through certified third-party platforms such as PayPal can help build trust and confidence.',
        },
        {
          icon: 'smartphone',
          title: 'Product Usability',
          text:
            'Limited familiarity with technology can make the interface difficult to understand, creating confusion and frustration when searching for and participating in auctions.',
        },
        {
          icon: 'gavel',
          title: 'Complex Bidding Process',
          text:
            'Users may find it difficult to complete the bidding process, making it harder to participate effectively in online auctions.',
        },
        {
          icon: 'headset',
          title: 'Lack of Accessible Support',
          text:
            'Poorly structured support can make it difficult for users with limited technological experience to find answers or receive the assistance they need.',
        },
      ],
    },

    // SECTION 4 - USER RESEARCH
    research: {
      eyebrow: '02 / Investigation',
      title: 'Understanding Users & Their Challenges',
      description:
        'The study "ArtAuction Application Usability Study" evaluated how easily art enthusiasts and collectors could use the application to discover and participate in art auctions. The research focused on validating essential tasks, identifying usability difficulties, and evaluating the time required to find an auction and complete the process.',
      methodologyTitle: 'Research Focus',
      metrics: [
        {
          value: '2',
          title: 'Usability Study Rounds',
          description:
            'Two rounds of usability testing to identify difficulties and evaluate design improvements.',
        },
        {
          value: 'Core',
          title: 'Essential User Tasks',
          description:
            'Evaluating auction discovery, bidding participation, and the completion of the auction process.',
        },
        {
          value: 'Iterative',
          title: 'Design Evaluation',
          description:
            'Using research findings to identify usability issues and refine the application experience.',
        },
      ],
      insights: [
        {
          icon: 'search',
          title: 'Difficulty Starting an Auction',
          description:
            'Round 1: More than half of the users struggled to identify how to begin participating in an auction.',
        },
        {
          icon: 'language',
          title: 'Language Familiarity',
          description:
            'Round 1: Fewer than half of the participants experienced difficulties with the English language.',
        },
        {
          icon: 'map',
          title: 'Shipping Address Flexibility',
          description:
            'Round 2: Most participants wanted the ability to add or edit their shipping address before completing delivery.',
        },
        {
          icon: 'payment',
          title: 'Payment Method Flexibility',
          description:
            'Round 2: Most participants wanted the ability to add or edit their payment method before completing a purchase.',
        },
      ],
    },

    // SECTION 5 - USER PERSONAS
    personas: {
      eyebrow: '03 / Human Context',
      title: 'Archetypal User Personas',
      description:
        'Synthesized from user research, these profiles represent art enthusiasts with varying levels of digital familiarity.',
      items: [
        {
          name: 'Diana Martinez',
          role: 'Art Enthusiast & Collector',
          image: {
            src: artAuctionPersona2,
            alt: 'Portrait photo of Diana Martinez, an art enthusiast and collector',
            fallbackLabel: 'Diana Martinez',
          },
          quote:
            'Buying and competing are two key parts of the excitement I find in art auctions.',
          frustrations: [
            'Difficulty updating bids when someone outbids her.',
            'Lack of clear tracking and updates on an artwork after winning an auction.',
          ],
          goal: 'Buying & Competing',
          context: 'Young Art Collector',
        },
        {
          name: 'Ignacio Perez',
          role: 'Art Enthusiast & Occasional Bidder',
          image: {
            src: artAuctionPersona1,
            alt: 'Portrait photo of Ignacio Perez, an art enthusiast and auction participant',
            fallbackLabel: 'Ignacio Perez',
          },
          quote:
            'Winning a piece is a victory worth admiring.',
          frustrations: [
            'Difficulty finding locations and information about in-person auctions.',
            'Non-intuitive apps that make participation difficult for users with limited tech experience.',
          ],
          goal: 'Competing & Decorating',
          context: 'Less Tech-Savvy User',
        },
      ],
    },

    // SECTION 6 - IDEATION
    ideation: {
      eyebrow: '04 / Ideation process',
      title: 'Sketching & Layout Exploration',
      description:
        'The ideation process included mapping the user journey and exploring different paper sketches to understand how users could discover auctions, participate in bidding, receive results, complete payments, and track their purchased artwork.',
      decisionTitle: 'Key Design Decision',
      decision:
        'Create a centralized home screen that prioritizes the information users need: ongoing participations, active auctions, and upcoming auctions. The design also emphasizes artwork imagery, current bid information, and accessible bidding actions.',
      artifactsTitle: 'Paper Sketches & Rapid Ideation',
      artifactsSubtitle: 'Exploring Multiple Layout Possibilities',
      image: {
        src: artAuctionSketching,
        alt: 'ArtAuction paper sketches exploring different mobile auction dashboard layouts',
        fallbackLabel: 'ArtAuction sketching UX/UI',
      },
    },

    // SECTION 7 - WIREFRAMES
    wireframes: {
      eyebrow: '05 / Structure',
      title: 'Digital Wireframes & Low-Fi Prototyping',
      description:
        'Translating initial sketches into structured low-fidelity wireframes in Figma to test core user flows before visual styling.',
      screens: [
        {
          number: 'Screen 01',
          title: 'Initial Dashboard Design',
          description:
            'Initial dashboard layout presenting the main structure and organization of the ArtAuction platform.',
          image: {
            src: artAuctionLoFi1,
            alt: 'Initial ArtAuction Dashboard LoFi wireframe',
            fallbackLabel: 'Initial Dashboard LoFi wireframe',
          },
        },
        {
          number: 'Screen 02',
          title: 'Artwork Details & Bidding',
          description:
            'Artwork details view providing information about the auctioned piece and a dedicated button for users to place a bid.',
          image: {
            src: artAuctionLoFi2,
            alt: 'Artwork Details and Bidding LoFi wireframe',
            fallbackLabel: 'Artwork Details and Bidding LoFi wireframe',
          },
        },
        {
          number: 'Screen 03',
          title: 'Shipping Address Selection',
          description:
            'Delivery step allowing users to select the address where the artwork should be shipped if they win the auction.',
          image: {
            src: artAuctionLoFi3,
            alt: 'Shipping Address Selection LoFi wireframe',
            fallbackLabel: 'Shipping Address Selection LoFi wireframe',
          },
        },
      ],
      prototypeUrl: SOCIAL_LINKS.artAuctionLowFiFigma,
      prototypeLabel: 'Explore Low-Fidelity Figma Prototype',
    },

    // SECTION 8 - USABILITY TESTING
    usability: {
      eyebrow: '06 / Evaluation',
      title: 'Usability Testing & Key Findings',
      description:
        'Testing the low-fidelity prototype with 5 participants highlighted three key opportunities to improve discoverability and checkout flexibility.',
      findings: [
        {
          number: '01',
          frictionPoint: 'Discoverability',
          title: 'Difficulty Finding How to Place a Bid',
          description:
            'More than half of the users struggled to identify where to begin participating in an auction, revealing that the primary bidding action needed greater visibility.',
          resolved:
            'Resolved: Increased the size and prominence of the "Make a bid" button to make the primary action easier to identify.',
        },
        {
          number: '02',
          frictionPoint: 'Payment Flexibility',
          title: 'Limited Payment Editing Options',
          description:
            'Most participants wanted the ability to add or edit their payment method directly during the purchase process instead of navigating back to the main menu.',
          resolved:
            'Resolved: Improved the payment selection interface to allow users to manage their saved cards during checkout.',
        },
        {
          number: '03',
          frictionPoint: 'Shipping Flexibility',
          title: 'Missing Shipping Address Management',
          description:
            'Most participants wanted to add or edit their shipping address before completing the delivery process.',
          resolved:
            'Resolved: Included a dedicated shipping address selection screen with options to edit existing addresses or add a new one.',
        },
      ],
    },

    // SECTION 9 - HIGH-FIDELITY SHOWCASE
    showcase: {
      eyebrow: '07 / Polish',
      title: 'High-Fidelity Visual Design',
      description:
        'Refining the interface with clear visual hierarchy, prominent call-to-action buttons, and a complete end-to-end winner checkout experience.',
      prototypeUrl: SOCIAL_LINKS.artAuctionHiFiFigma,
      prototypeLabel: 'Launch Hi-Fi Figma Prototype',
      screens: [
        {
          title: 'Place Your Bid',
          description:
            'A bidding modal that allows users to choose from predefined bid amounts suggested by the app or enter a custom amount based on their budget and bidding capabilities.',
          src: artAuctionHiFi1,
          alt: 'ArtAuction bidding modal with predefined and custom bid amount options',
        },
        {
          title: 'Artwork Details & Auction Results',
          description:
            'Artwork details screen displaying information about the auctioned piece, followed by a notification informing users that the auction has ended and prompting them to check the results.',
          src: artAuctionHiFi2,
          alt: 'ArtAuction artwork details screen with auction completion notification',
        },
        {
          title: 'Winner Payment Information',
          description:
            'A payment information screen where users who win an auction can enter their credit or debit card details if they have not previously registered a payment method.',
          src: artAuctionHiFi3,
          alt: 'ArtAuction winner checkout screen for entering payment card details',
        },
      ],
    },

    // SECTION 10 - ACCESSIBILITY
    accessibility: {
      eyebrow: '08 / Universal Design',
      title: 'Accessibility Considerations',
      description:
        'Accessibility was incorporated into the design process to make the application more inclusive and comfortable to use, particularly for users with different technological abilities and individual accessibility needs.',
      items: [
        {
          number: '1',
          title: 'Color Contrast Validation',
          description:
            'The primary interface colors were evaluated through a contrast checker, achieving a contrast score of 10.0 to support visual readability.',
        },
        {
          number: '2',
          title: 'Clear & Structured Navigation',
          description:
            'Implemented a clear navigation structure that helps users easily discover and access available art auctions.',
        },
        {
          number: '3',
          title: 'Language Selection',
          description:
            'Introduced a language selector so users can choose the language they feel most comfortable using.',
        },
      ],
    },

    // SECTION 11 - CONCLUSIONS
    conclusions: {
      eyebrow: '09 / Reflections',
      title: 'Project Conclusions & Impact',
      description:
        'The ArtAuction design process focused on creating a more accessible and inclusive online auction experience. Through user research, usability testing, and iterative improvements, the application evolved to better address users’ needs and simplify their participation in art auctions.',
      insights: [
        {
          icon: 'thumb_up',
          title: 'Project Impact',
          description:
            'The proposed accessible design aims to create an inclusive experience for all users through clearer navigation and a more straightforward auction participation process, making the application more accessible and comfortable to use.',
        },
        {
          icon: 'lightbulb',
          title: 'What I Learned',
          description:
            'Putting users at the center of the design process is essential to identifying and solving their needs effectively. I also learned the importance of integrating accessibility into every stage of design to create inclusive and easy-to-use experiences.',
        },
      ],
    },

    // SECTION 12 - ROADMAP
    roadmap: {
      eyebrow: '10 / Future Roadmap',
      title: 'Next Iteration Horizons',
      description:
        'Future improvements identified to enhance the application experience and provide users with greater control, readability, and personalization.',
      steps: [
        {
          phase: 'Phase 1',
          icon: 'wallet',
          title: 'Auction Expense Tracking',
          description:
            'Implement spending monitoring so users can track their auction expenses, make informed purchasing decisions, and avoid exceeding their intended budgets.',
        },
        {
          phase: 'Phase 2',
          icon: 'resize',
          title: 'Adjustable Font Sizes',
          description:
            'Introduce text size adjustments to improve readability for users with visual impairments or those who prefer larger text.',
        },
        {
          phase: 'Phase 3',
          icon: 'palette',
          title: 'Customizable Color Palettes',
          description:
            'Allow users to personalize the application color scheme according to their individual needs, improving visual comfort and accessibility.',
        },
      ],
    },

    // FOOTER
    footer: {
      prototypeUrl: SOCIAL_LINKS.artAuctionHiFiFigma,
      prototypeLabel: 'Figma High-Fi',
      contactLabel: 'Discuss this Project',
    },
  },
];

// FUNCTION TO GET THE CASE STUDY BY ID
export function getCaseStudyById(
  id: CaseStudyId
): CaseStudyData | undefined {
  return CASE_STUDIES.find((caseStudy) => caseStudy.id === id);
}
