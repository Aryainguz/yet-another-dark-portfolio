// 'use client';
// import { skillsSection } from '@/lib/content/skills';
// import { useTheme } from '@/lib/hooks/use-theme';

// import { Skill, Wrapper } from '@/components';

// import { getSectionAnimation } from '@/styles/animations';

// const Skills = () => {
//   const { title, skills } = skillsSection;
//   const { isDarkMode } = useTheme();

//   return (
//     <Wrapper id="skills" {...getSectionAnimation}>
//       <h2 className="text-center heading-secondary">{title}</h2>

//       <div className="space-y-32">
//         {skills.map(({ id, lottie, softwareSkills, points, title }) => (
//           <Skill
//             key={id}
//             className="odd:lg:flex-row-reverse"
//             lottie={lottie[isDarkMode ? 'dark' : 'light']}
//             skills={softwareSkills}
//             points={points}
//             title={title}
//             {...getSectionAnimation}
//           />
//         ))}
//       </div>
//     </Wrapper>
//   );
// };

// export default Skills;

import React from 'react'

const Skills = () => {
  return (
    <div>Skills</div>
  )
}

export default Skills