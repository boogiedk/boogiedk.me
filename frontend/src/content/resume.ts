import { yearsSince } from '../lib/date';
import { Link, Resume } from '../types/resume';

const BIRTH_DATE = new Date(1998, 0, 19);
const CAREER_START = new Date(2018, 6, 1);

const MTS: Link = { label: 'MTS Digital', href: 'https://moskva.mts.ru' };

export const resume: Resume = {
  name: 'Dmitry K.',
  role: 'Software Engineer',
  facts: ['Moscow, Russia', `${yearsSince(BIRTH_DATE)} y.o.`],
  summary:
    `Backend developer with ${yearsSince(CAREER_START)}+ years of commercial experience. ` +
    'I mostly work with microservices, SRE and application architecture, and lately a lot with AI tools for development.',
  email: { user: 'boogiedkjob', domain: 'gmail.com' },
  links: [
    { label: 'GitHub', href: 'https://github.com/boogiedk' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dmitry-kulkin-a3640818b/' },
  ],
  experience: [
    {
      period: 'Feb 2025 - Present',
      title: '.NET Backend Developer',
      org: { label: 'Gold Apple', href: 'https://goldapple.ru' },
      subtitle: 'Beauty marketplace · Moscow',
      summary: 'Checkout team. We own payments, delivery and the whole flow from cart to order.',
      highlights: [
        {
          title: 'Checkout V3',
          text:
            'Rewrote the whole delivery domain: delivery options, parcel variations, date and time slots, ' +
            'plus new contracts for all related services. This saved the business a lot of money.',
        },
        {
          title: 'Parcel consolidation',
          text: 'Warehouses can now combine parcels into fewer shipments, which cuts delivery costs.',
        },
        {
          title: 'Out-of-stock items',
          text:
            'Out-of-stock items no longer block the user from going to payment. ' +
            'This improved checkout-to-purchase conversion.',
        },
        {
          title: 'Payments',
          text:
            'Added Apple Pay for Belarus and Kazakhstan and several BNPL providers like Yandex Split and Podeli. ' +
            'Also added region restrictions.',
        },
        {
          title: 'Timeouts',
          text:
            "Looked into how our services talk to other teams' services, collected data, came up with a timeout " +
            'strategy based on it, rolled it out and monitored the metrics.',
        },
        {
          title: 'AI adoption',
          text:
            'Built pipelines, skills, agents and workflows for work tasks, gave talks at internal guilds ' +
            'and helped put together the AI adoption strategy at the platform level.',
        },
      ],
    },
    {
      period: 'Jun 2024 - Dec 2024',
      title: 'Tech Lead',
      org: MTS,
      subtitle: 'Telecom · Moscow',
      summary:
        'Tech lead / CTO of the product, led a team of 15 engineers. Planned the move from VMs to the MTS Ocean ' +
        'cloud, the migration from MSSQL to PostgreSQL, and splitting ShareIt from MasterHub (they shared one ' +
        'environment). Set up monitoring and dashboards, got the product through the MTS tech committee and tech ' +
        'maturity reviews, managed tech debt, and planned releases and sprints.',
    },
    {
      period: 'Sep 2021 - Jun 2024',
      title: 'Senior Backend Developer',
      org: MTS,
      summary: 'Lead backend developer on two subscription products.',
      highlights: [
        {
          title: 'ShareIt',
          text:
            'Device subscription (leasing) service, built from scratch. Alpha went live in August 2023. ' +
            'Did the core features: creating and billing subscriptions, integrations with payment systems and ' +
            'MTS retail stores, device insurance, a catalog with faceted search in SQL, and integrations with ' +
            'MTS services (geolocation, fiscalization, scoring).',
        },
        {
          title: 'MasterHub',
          text:
            'Subscription system for MTS and partner services like Spotify, YouTube, Tinder and OZON, about 30 ' +
            'microservices. Added calendar-month billing periods (before that only days were supported), ' +
            'mutually exclusive subscription groups, and switching YouTube Premium from trial to paid. ' +
            'Set up a Kafka service for external integrations, dug into deadlocks and optimized SQL queries.',
        },
      ],
      tags: [
        '.NET Core 3.1 to .NET 8',
        'C#',
        'Dapper',
        'MSSQL',
        'PostgreSQL',
        'Kafka',
        'RabbitMQ',
        'Kubernetes',
        'ArgoCD',
        'Grafana',
        'ELK',
      ],
    },
    {
      period: 'Oct 2019 - Aug 2021',
      title: 'Middle Fullstack Developer',
      org: { label: 'TOPCASE', href: 'https://www.itopcase.ru' },
      subtitle: 'Systems integration, IT consulting · Moscow',
      summary:
        'Worked on the Supplier Portal (zakupki.mos.ru), a public procurement platform. Mostly built features ' +
        'for portal admins and moderators. Remote since March 2020.',
      highlights: [
        {
          title: 'Integration Journal',
          text: 'Storage and UI for data coming from external integrations: purchases, contracts and sync records.',
        },
        {
          title: 'Regional integrations',
          text:
            'Built the UI and backend for setting up integrations with regional systems, including API access ' +
            'rules. Worked with their developers to sort out data validation problems.',
        },
        {
          title: 'Statistics service',
          text: 'Refactored it and covered it with tests. Replaced SQL stored procedures with EF Core and NHibernate.',
        },
        {
          title: 'Other features',
          text:
            'Feedback form with HPSM integration, a check for disposable email domains at sign-up with an admin ' +
            'page for blocked domains, email templates and SEO fixes.',
        },
      ],
      tags: [
        '.NET Core 2.2 to 3.1',
        'EF Core',
        'NHibernate',
        'React',
        'TypeScript',
        'Hangfire',
        'MS SQL',
        'ElasticSearch',
        'RabbitMQ',
        'MassTransit',
      ],
    },
    {
      period: 'Jul 2018 - Feb 2019',
      title: 'Junior Fullstack Developer',
      org: { label: 'IML', href: 'https://iml.ru' },
      subtitle: 'Logistics, courier delivery · Moscow',
      summary: 'Worked on internal products: the fiscalization service and the courier workplace app.',
      highlights: [
        {
          title: 'Fiscalization service',
          text:
            'Added new features, including a service that sends email notifications after a receipt is ' +
            'fiscalized and Z-reports are pulled from cash registers.',
        },
        {
          title: 'Courier workplace',
          text:
            'Improved the integration with the mobile app using SignalR. The app is basically a browser that ' +
            "shows the site and works with the phone's Bluetooth and GPS.",
        },
        {
          title: 'Internal APIs',
          text:
            'Extended contracts, added new methods and did small optimizations. Also supported a Java mobile ' +
            'app and some legacy WebForms, and worked with IdentityServer3.',
        },
      ],
      tags: ['ASP.NET MVC 5', 'Dapper', 'Quartz', 'SignalR', 'jQuery', 'Kendo UI', 'Java'],
    },
  ],
  education: [
    {
      period: '2020 - 2022',
      title: "Master's degree, Information Systems and Technologies",
      subtitle:
        'Russian Technological University, Moscow · Institute of Complex Security and Special Instrumentation',
    },
    {
      period: '2016 - 2020',
      title: "Bachelor's degree, Information Security",
      subtitle:
        'Russian Technological University, Moscow · Institute of Complex Security and Special Instrumentation',
    },
  ],
  skills: [
    'C#',
    '.NET (Core 2.2 to .NET 8)',
    'ASP.NET Core',
    'Dapper',
    'EF Core',
    'PostgreSQL',
    'MSSQL',
    'Kafka',
    'RabbitMQ',
    'Docker',
    'Kubernetes',
    'ArgoCD',
    'Grafana',
    'ELK',
    'OpenSearch',
    'Vault',
    'React',
    'TypeScript',
    'Microservices',
    'AI tooling for development (agents, skills, pipelines)',
  ],
  languages: ['Russian (native)', 'English (B1, Intermediate)'],
};
