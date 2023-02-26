import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import css3 from '@/assets/technologies/css3.png';
import jest from '@/assets/technologies/jest.png';
import node from '@/assets/technologies/node.png';
import vue from '@/assets/technologies/vuejs.png';
import react from '@/assets/technologies/react.svg';
import html5 from '@/assets/technologies/html5.png';
import graphql from '@/assets/technologies/graphql.png';
import mongoDb from '@/assets/technologies/mongodb.png';
import bootstrap from '@/assets/technologies/bootstrap.png';
import javascript from '@/assets/technologies/javascript.png';
import typescript from '@/assets/technologies/typescript.png';
import reactNative from '@/assets/technologies/react-native.png';

const Skills = () => {
  return (
    <Marquee
      className="darker skills-marquee bg-[#4C4848]"
      gradientColor={[26, 26, 26]}
    >
      {Object.entries(techLogos).map(([title, img], i) => {
        return (
          <div
            className="flex flex-col items-center mx-10 py-4"
            key={`${title}-${img}-${i}`}
          >
            <Image
              className="skills-marquee-logo"
              alt={`skill-logo-${title}`}
              height={72}
              src={img}
            />
            <p className="mt-2 text-white">
              {techTitles[title as keyof typeof techTitles]}
            </p>
          </div>
        );
      })}
    </Marquee>
  );
};

const techLogos = {
  vue,
  css3,
  jest,
  node,
  react,
  html5,
  graphql,
  mongoDb,
  bootstrap,
  javascript,
  typescript,
  reactNative,
};

const techTitles = {
  react: 'React',
  mongoDb: 'MongoDB',
  html5: 'HTML5',
  css3: 'CSS3',
  bootstrap: 'Bootstrap 4/5',
  jest: 'Jest',
  node: 'NodeJS',
  javascript: 'JavaScript ES6+',
  typescript: 'TypeScript',
  reactNative: 'React Native',
  graphql: 'GraphQL',
  vue: 'VueJS',
};

export default Skills;
