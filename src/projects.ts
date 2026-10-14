export type ProjectCategory =
  | "Web Applications"
  | "Mobile Applications"
  | "Backend & System Design"
  | "E-commerce & Business Systems";

export interface Project {
  name: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  highlights: string[];
  categories: ProjectCategory[];
  accent: string;
  visual: "marketplace" | "pharmacy" | "ai" | "claims" | "delivery" | "property";
  links: { label: string; href: string; external?: boolean }[];
  detail: string;
  note?: string;
}

export const projectFilters: ("All Projects" | ProjectCategory)[] = [
  "All Projects",
  "Web Applications",
  "Mobile Applications",
  "Backend & System Design",
  "E-commerce & Business Systems",
];

export const projects: Project[] = [
  {
    name: "SpeedGigz",
    eyebrow: "Service marketplace · Mobile platform",
    description:
      "A marketplace connecting customers with service providers, from job creation and matching through payment and fulfilment.",
    technologies: [
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Flutterwave",
      "GPS",
      "WebSockets",
    ],
    highlights: [
      "Customer and provider accounts, identity verification, and role-aware access",
      "Job creation, matching, dispatch, location tracking, chat, and notifications",
      "Wallet, payment, transaction, provider earnings, and platform fee workflows",
    ],
    categories: [
      "Mobile Applications",
      "Backend & System Design",
      "E-commerce & Business Systems",
    ],
    accent: "blue",
    visual: "marketplace",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.speedgigz",
      },
    ],
    detail:
      "The platform coordinates mobile clients, NestJS APIs, relational data, Flutterwave transactions, GPS updates, and WebSocket communication. A key system-design concern is keeping job state, wallet entries, provider earnings, and platform fees consistent while location and chat events arrive in real time.",
  },
  {
    name: "Pharmacy Management System",
    eyebrow: "Business systems · Pharmacy operations",
    description:
      "A pharmacy operations dashboard for managing medicines and day-to-day inventory workflows, paired in the product scope with an online pharmacy store.",
    technologies: ["React", "TypeScript", "PostgreSQL", "REST APIs"],
    highlights: [
      "A. Management dashboard — the supplied live URL opens the dashboard",
      "B. Customer storefront — included in the product scope, but no separate URL or implementation was available to verify",
      "Data-model design focus: medicines, batches, suppliers, stock movements, sales, and customers",
    ],
    categories: [
      "Web Applications",
      "Backend & System Design",
      "E-commerce & Business Systems",
    ],
    accent: "mint",
    visual: "pharmacy",
    links: [
      {
        label: "Management dashboard",
        href: "https://pharmacy-seven-tau.vercel.app/",
      },
    ],
    detail:
      "The product is presented as two distinct experiences: an operational dashboard and a customer-facing pharmacy store. The supplied live link is specifically the dashboard; no storefront URL or independently verifiable storefront implementation was available in this workspace. A useful data-modeling focus for this domain is the relationship between medicines, batches, suppliers, stock movements, sales, and customers.",
    note: "Storefront implementation and URL not independently verified.",
  },
  {
    name: "NjiraAI",
    eyebrow: "AI platform · Frontend contribution",
    description:
      "I contributed to earlier versions and prototypes, focusing on frontend implementation, API integrations, user workflows, and application state.",
    technologies: ["Frontend architecture", "Go services", "Python services", "API integration"],
    highlights: [
      "Frontend architecture and interface implementation",
      "User workflow development and application state",
      "Integration with Go backend and Python-based services",
    ],
    categories: ["Web Applications", "Backend & System Design"],
    accent: "violet",
    visual: "ai",
    links: [{ label: "Visit NjiraAI", href: "https://njira.ai/" }],
    detail:
      "My contribution was to earlier versions and prototypes, particularly the frontend experience and its connection to backend services. This description does not imply sole ownership of the platform or claim functionality beyond that contribution.",
  },
  {
    name: "ClaimFlow",
    eyebrow: "Expense reimbursement · Web application",
    description:
      "An expense reimbursement platform built around claim submission, review, and approval workflows for employees and employers.",
    technologies: ["React", "TypeScript", "PostgreSQL", "REST APIs"],
    highlights: [
      "Employee and employer management with role-based access",
      "Expense claim creation, review, approval, and rejection states",
      "Expense records, reporting, and dashboard interfaces",
    ],
    categories: [
      "Web Applications",
      "Backend & System Design",
      "E-commerce & Business Systems",
    ],
    accent: "amber",
    visual: "claims",
    links: [{ label: "Live application", href: "https://claimflow-beige.vercel.app/" }],
    detail:
      "The core workflow is stateful: an employee submits a claim, an authorized reviewer evaluates it, and the decision moves the record through approval or rejection. Role-aware access and explicit claim states help keep actions and records aligned with the right user.",
  },
  {
    name: "Drizr",
    eyebrow: "Delivery platform · Mobile application",
    description:
      "A mobile delivery platform supporting delivery requests, customer and delivery-user interactions, and location-aware workflows.",
    technologies: ["React Native", "TypeScript", "APIs", "Maps / GPS"],
    highlights: [
      "Delivery request and status-management workflows",
      "Customer and delivery-user mobile experiences",
      "Mapping, location functionality, API integration, and notifications",
    ],
    categories: ["Mobile Applications", "Backend & System Design"],
    accent: "coral",
    visual: "delivery",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zoo.drizr",
      },
    ],
    detail:
      "The mobile workflows connect delivery requests with customer and delivery-user actions. Location and mapping support the delivery experience, while API-driven status changes and notifications keep the application responsive to progress.",
  },
  {
    name: "Property Rental Platform",
    eyebrow: "Property management · Web application",
    description:
      "An API-driven rental application for property listings, tenant information, search, and rental workflows.",
    technologies: ["React", "TypeScript", "REST APIs"],
    highlights: [
      "Property listings and management",
      "Tenant information and rental workflows",
      "Search, filtering, and dashboard interfaces",
    ],
    categories: ["Web Applications", "Backend & System Design"],
    accent: "sky",
    visual: "property",
    links: [{ label: "Live application", href: "https://rents-app-lac.vercel.app/" }],
    detail:
      "The application brings listings, tenant information, and rental workflows together in a searchable dashboard, with the frontend communicating through REST APIs.",
  },
];
