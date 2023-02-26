import Image from 'next/image';
import { useState } from 'react';

import logo from '@/assets/logo/logo_text.png';

const headerTitles = ['About', 'Experience', 'Projects'];

const Header = () => {
  const onClickHeaderButton = (title: string) => {
    const containerElem = document.querySelector(`.${title}`);
    containerElem?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <header className="fixed flex px-4 bg-[#4C4848] w-screen h-[48px] items-center justify-between z-10 border-b-2 border-b-[rgba(128,128,128,0.7)]">
      <Image src={logo} height={16} alt="Logo" className="self-center" />
      <div className="hidden md:flex">
        {headerTitles.map((title) => (
          <button
            className="mr-4 text-white text-sm hover:opacity-75 active:opacity-50"
            key={`header-button-${title}`}
            onClick={(e) => onClickHeaderButton(title)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="md:hidden relative">
        <button
          className="flex items-center"
          onClick={() => setIsBurgerOpen((bool) => !bool)}
        >
          <Image
            src={`vectors/${isBurgerOpen ? 'close' : 'burger'}.svg`}
            className="filter invert"
            alt="Burger icon"
            width={32}
            height={32}
          />
        </button>
        <div
          className={
            isBurgerOpen
              ? 'absolute bg-[#4C4848] left-[calc(-100vw+150%)] w-screen top-[34px] flex flex-col z-10 border-y-2 border-y-[rgba(128,128,128,0.7)]'
              : 'hidden'
          }
        >
          {headerTitles.map((title) => (
            <button
              className="mr-4 text-white text-sm hover:opacity-75 active:opacity-50 py-2"
              onClick={() => {
                onClickHeaderButton(title);
                setIsBurgerOpen(false);
              }}
              key={`header-button-${title}`}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
