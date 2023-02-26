import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo/logo_text.png';
import { socialLinks } from '@/utils/constants/socialLinks';

const Hero = () => {
  return (
    <div
      className="About pt-[48px] flex items-center text-white"
      style={styles.container}
    >
      <div className="w-screen p-8 flex flex-col md:px-32">
        <Image src={logo} height={96} alt="Logo" className="ml-[-8px]" />
        <p className="font-thin">/plʌs &apos;ʌltrə/</p>

        <i className="font-light">noun</i>

        <p className="text-2xl">Software solutions that go further beyond</p>
        <hr className="my-2" />
        <div className="my-4">
          {heroDescription.map((desc, i) => {
            return <p key={`hero-description-${i}`}>{desc}</p>;
          })}
        </div>
        <div className="flex">
          {socialLinks.map(({ name, icon, href }) => (
            <Link
              href={href}
              className="filter invert hover:opacity-75 active:opacity-50"
              rel="noreferrer noopener"
              key={`hero-link-${name}`}
              target="_blank"
            >
              <Image alt={`${name} icon`} src={icon} width={32} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const heroDescription = [
  'A seasoned software developer with over a decade of experience in a variety of programming languages and frameworks.',
  'In recent years, I have worked on a range of projects, from business software to mobile apps for national-scale companies.',
  'My goal is to deliver high-quality software that exceeds client expectations and drives business success.',
];

const styles = {
  container: {
    backgroundImage:
      'linear-gradient(to bottom,rgba(26, 26, 26, 0.8),rgba(26, 26, 26, 0.4)), url(/images/hero_bg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: '100vh',
  },
};

export default Hero;
