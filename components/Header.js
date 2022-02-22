import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen((oldState) => !oldState);
  };
  const CloseMenu = () => {
    setIsOpen(false);
  };

  /*
    Close menu when screen width exceeds 768px
  */
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    });
  }

  return (
    <>
      <header className="fixed inset-x-0 shadow-2-6 bg-brown-200 border-b-2 border-b-brown-600">
        <div className="container mx-auto px-10 md:px-6 lg:px-0 h-72 flex justify-between items-center">
          <nav>
            <a
              className="text-shadow-4-6 font-dancingscript text-26 select-none md:text-28 lg:text-32 font-bold text-red-400"
              href="#"
            >
              Aline Balas Gourmet
            </a>
          </nav>

          <div>
            {/* TRANSPARENT BLACK BACKGROUND  */}
            <div
              className={`${
                isOpen
                  ? `w-screen h-screen absolute left-0 top-0 z-0 bg-black-default backdrop-blur-2 bg-opacity-50`
                  : `hidden`
              }`}
            ></div>
            {/* /TRANSPARENT BLACK BACKGROUND  */}

            <FiMenu
              className="inline-block cursor-pointer md:hidden"
              size={24}
              color="#80470F"
              onClick={ToggleMenu}
            />

            <nav
              className={
                isOpen
                  ? `h-screen w-6/12 pl-20 pt-22 shadow-5 bg-brown-200 absolute left-0 top-0`
                  : `inline-block`
              }
            >
              <IoIosCloseCircle
                className={`${
                  isOpen ? `absolute right-10 z-10 cursor-pointer` : `hidden`
                }`}
                size={42}
                color="#F23A3A"
                onClick={CloseMenu}
              />

              <ul
                className={`${
                  isOpen
                    ? `flex flex-col gap-8 mt-48`
                    : `hidden md:flex md:flex-row md:gap-12 md:text-14`
                }  font-comfortaa text-16 lg:text-18 lg:gap-18 font-bold text-brown-600`}
              >
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Home
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Cardápio
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Fotos
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Depoimentos
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Sobre
                </li>
                <li className="transition duration-500 hover:text-red-200 cursor-pointer">
                  Contato
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
