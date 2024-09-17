'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
        <h2 className="text-base text-accent font-semibold tracking-wide uppercase" data-aos="flip-right">
          My Experience
        </h2>
      <h2 className="heading-secondary"> {"{"} Experience {"}"}</h2>

      <TabList experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
