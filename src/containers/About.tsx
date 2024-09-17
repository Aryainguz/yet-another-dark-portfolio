'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
       <h2 className="text-base text-accent font-semibold tracking-wide uppercase" data-aos="flip-right"
          >
          About Me
        </h2>
      <h2 className="heading-secondary"> {"{"} About {"}"}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I am Aryan Inguz a full stack developer and{' '}
            <Link
              href="https://bhu.ac.in/"
              target="_blank"
              className="text-accent"
            >
              a software artist
            </Link>
            .<br /> I love building scalable applications with complex architectures.
          </p>
          <p>
            Other than this, I love Ethical Hacking Stuff, I also Hacked into my University ERP system with a backend vulnerability and later reported the vulnerability as well.{' '}
            <Link
              href="https://www.pixelwand.live/"
              target="_blank"
              className="text-accent"
            >
              And I have also won 2 national level hackathons as well.
            </Link>
          </p>
          <p>
            My main focus these days is explore scalable approaches for building a scalable applications and contribute to open source.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
