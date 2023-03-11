import Link from 'next/link';
import Image from 'next/image';

import { socialLinks } from '@/utils/constants/socialLinks';

const Footer = () => {
  return (
    <footer className="h-[48px] border-t-2 border-t-[rgba(128,128,128,0.1)] flex items-center justify-between px-4 bg-[#474444] text-white">
      <div>&copy;&nbsp;Plus Ultra Software Limited</div>
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
    </footer>
  );
};

export default Footer;
