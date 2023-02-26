import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { techLogos } from '@/utils/constants/techLogos';
import { techTitles } from '@/utils/constants/techTitles';

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

export default Skills;
