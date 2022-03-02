import { BsWhatsapp } from 'react-icons/bs';

export default function Btnwhatsapp() {
  return (
    <>
      <div className="fixed right-24 bottom-24">
        <a
          href="https://api.whatsapp.com/send?phone=5516993070022&text=Ol%C3%A1%2C%20Aline!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-whatsapp-floating w-56 h-56 sm:w-58 sm:h-58 flex justify-center items-center rounded-full bg-green-500 transition-all duration-300 hover:bg-green-400 hover:scale-105 shadow-btn-whatsapp">
            <BsWhatsapp color="#fff" className="w-26 h-26 sm:w-28 sm:h-28" />
          </div>
        </a>
      </div>
    </>
  );
}
