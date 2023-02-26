import Image from 'next/image';
import { useMemo, useState } from 'react';

import { experiences } from '@/utils/data/experiences';
import { techLogos } from '@/utils/constants/techLogos';
import { techTitles } from '@/utils/constants/techTitles';

const Experience = () => {
  const [selectedExperienceIdx, setSelectedExperienceIdx] = useState(0);
  const experience = useMemo(
    () => experiences[selectedExperienceIdx],
    [selectedExperienceIdx]
  );

  return (
    <div
      style={styles.container}
      className="Experience bg-[whitesmoke] py-[48px] flex items-center justify-center flex-col"
    >
      <div className="w-screen mb-4 px-4">
        <h2 className="text-xl font-bold">Experience</h2>
        <hr />
      </div>
      <div className="border-2 grow flex flex-col-reverse md:flex-row bg-[#4C4848] p-8 rounded-md drop-shadow-lg">
        <div className="flex flex-row md:flex-col flex-wrap items-center justify-center">
          {experiences.map(({ logo, company }, i) => (
            <Image
              className={
                i === selectedExperienceIdx
                  ? 'mr-4 md:mr-0 md:mb-4 cursor-pointer'
                  : 'mr-4 md:mr-0 md:mb-4 opacity-25 hover:opacity-50 active:opacity-100 cursor-pointer'
              }
              alt={`${company}-logo`}
              onClick={() => setSelectedExperienceIdx(i)}
              key={logo}
              src={logo}
              width={128}
              height={128}
            />
          ))}
        </div>
        <div className="md:hidden h-[1px] bg-[whitesmoke] w-[100%] mt-4 mb-2" />
        <div className="text-white px-8 w-[480px] md:w-[540px] flex flex-col justify-center">
          <h2 className="font-bold text-2xl">{experience.company}</h2>
          <p className="font-extralight">{experience.position}</p>
          <div className="my-2">
            {experience.responsibilities.map((responsibility, i) => (
              <p
                key={`experience-${selectedExperienceIdx}-responsibility-${i}`}
              >
                - {responsibility}
              </p>
            ))}
          </div>
          <hr className="my-4" />
          <ul className="flex items-end justify-evenly flex-wrap">
            {experience.skills.map((skill, i) => (
              <li
                key={`${experience.company}-${skill}`}
                className="flex flex-col items-center"
              >
                <Image
                  src={techLogos[skill as keyof typeof techLogos]}
                  alt={`${skill}-logo`}
                  height={48}
                  width={48}
                />
                <p className="mt-2 text-sm">
                  {techTitles[skill as keyof typeof techTitles]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
  },
};

export default Experience;
