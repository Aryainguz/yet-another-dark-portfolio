import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Experience",
  experiences: [
    {
      company: 'Mrotion Labs',
      companyUrl: 'https://www.mrotion.com',
      role: 'frontend developer',
      started: 'july 2022',
      upto: 'December 2022',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'The Xiting Way',
      companyUrl: 'https://thexitingway.com',
      role: 'Technology Lead',
      started: 'January 2023',
      upto: 'July 2024',
      tasks: [
        "Lead complete software development lifecycle and delivered more than 30 big freelance based software projects.",
        'Been part of boosting the company revenure to 2x in 1 year.',
        'Collaborated with diverse background of developers and maintained project timelines and deadlines.',
      ],
    },
    {
      company: 'Chitkara ACM',
      companyUrl: 'https://chitkara.acm.org',
      role: 'Web Master',
      started: 'September 2023',
      upto: 'July 2024',
      tasks: [
        'Built frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        "Developed and maintained organisation's online presence in website and mobile app developed in react native.",
        "Lead and organised many technical workhops and events for member's techical growth.",
      ],
    },
  ],
};
