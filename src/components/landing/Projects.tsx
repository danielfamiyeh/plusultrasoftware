import Image from 'next/image';
import { projects } from '@/utils/data/projects';
import { techLogos } from '@/utils/constants/techLogos';
import { techTitles } from '@/utils/constants/techTitles';

const Projects = () => {
  return (
    <div
      style={styles.container}
      className="Projects pt-[64px] bg-[#4C4848] flex flex-col items-center"
    >
      <div className="w-screen mb-4 px-4">
        <h2 className="text-xl font-bold text-white">Projects</h2>
        <hr />
      </div>
      <div className="grow flex flex-col gap-4 mb-4">
        {projects.map((project, i) => (
          <div
            key={`project-${project._id}`}
            className="bg-[whitesmoke] p-4 rounded-md drop-shadow-lg flex flex-col"
          >
            <p className="font-semibold text-xl">{project.name}</p>
            <p className="font-extralight">{project.description}</p>
            <Image
              alt={`${project.name}-image`}
              className="self-center"
              src={project.image}
              width={240}
              height={240}
            />
            <ul className="mt-4">
              {project.features.map((feature, j) => (
                <li key={`${project._id}-feature-${j}`} className="text-sm">
                  - {feature}
                </li>
              ))}
            </ul>
            <hr className="mt-2 mb-4" />
            <ul className="flex items-end justify-evenly flex-wrap">
              {project.skills.map((skill) => (
                <li
                  key={`${project._id}-${skill}`}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={techLogos[skill as keyof typeof techLogos]}
                    alt={`${skill}-logo`}
                    height={48}
                    width={48}
                  />
                  <p className="mt-2 text-sm font-bold">
                    {techTitles[skill as keyof typeof techTitles]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
  },
};

export default Projects;
