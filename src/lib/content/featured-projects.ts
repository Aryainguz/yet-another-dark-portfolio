import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Hack4Sustainability Hackathon',
      description: 'Won Hack4Sustainability Hackathon at Thapar University, Patiala',
      tasks:
        "At Hack4Sustainabilty Hackathon, We developed a full stack web3 application with ethereum blockchain, and Nextjs14. We came up with a user friendly web app to manage supply chain of sensitive medicines.",
      url: 'https://x.com/riseinweb3/status/1730185484075147642',
      img: '/hackathon-tiet.jpg',
      tag:"Winner",
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'Ethereum Blockchain',
      ],
    },
    {
      id: getId(),
      name: 'Coffee and Code Hackathon',
      description:
        'Won Coffee and Code  Hackathon at UIET, Punjab',
      tasks:
        "At Coffee and Code UIET, Punjab, we developed a full stack open source developers only freelancing platform, with features like github profile sync to give developers rating and improve client's trust.",
      url: '#',
      img: '/coffeeandcode.jpg',
      tag:"Winner",
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'REST APIs'],
    },
    {
      id: getId(),
      name: 'Lead at Open Source Chandigarh',
      description: 'Selected as Technical Lead at Open Source Chandigarh.',
      tasks:
        'Because of my involvement in open source programs and open source technologies I was selected as Technical Lead at Open Source Chandigarh. Been part of many open source programs and projects through my tenure.',
      url: 'https://www.linkedin.com/company/open-source-chandigarh/posts/?feedView=all',
      img: '/osclead.jpg',
      tag:"Technical Lead",
      tags: ['Open Source'],
    },
    {
      id: getId(),
      name: 'Top 30',
      description: "Top 30 in Inter College SIH",
      tasks:
        "Selected in top 30 teams from my University's inter SIH selection",
      url: '#',
      tag:"Top 30",
      img: '/sih.jpg',
      tags: ['Open AI',"MERN Stack", "PostgreSQL"],
    },
  ],
};

export default featuredProjectsSection;
