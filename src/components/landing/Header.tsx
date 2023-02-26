import Image from 'next/image';

import logo from '@/assets/logo/logo_text.png';

const headerTitles = ['About', 'Experience', 'Projects', 'Contact'];

const Header = () => {
  const onClickHeaderButton = (e: any, title: string) => {
    e.preventDefault();

    const containerElem = document.querySelector(`.${title}`);
    containerElem?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="fixed flex px-4 bg-[#4C4848] w-screen h-[48px] items-center justify-between">
      <Image src={logo} height={16} alt="Logo" className="self-center" />
      <div className="hidden md:flex">
        {headerTitles.map((title) => (
          <button
            className="mr-4 text-white text-sm hover:opacity-75 active:opacity-50"
            key={`header-button-${title}`}
            onClick={(e) => onClickHeaderButton(e, title)}
          >
            {title}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
