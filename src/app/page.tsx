import Pricing from '@/components/pricing/pricing';
import Skills from '@/components/skills/Skill';
import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
} from '@/containers';

import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills/>
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Pricing/>
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
