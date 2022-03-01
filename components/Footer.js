import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <footer className="w-screen absolute bottom-0">
        <div className="bg-red-200 py-16">
          <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center sm:px-10">
            {/* LOGO AND SOCIAL NETWORKS */}
            <nav className="flex flex-col gap-10 items-center mb-22">
              <a
                className="font-dancingscript text-26 md:text-28 lg:text-30 select-none font-bold text-white-default text-shadow-0-4-8"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aline Balas Gourmet
              </a>

              <div className="flex justify-center items-center gap-18 px-12 py-10 rounded-full bg-brown-300">
                <a
                  href="https://api.whatsapp.com/send?phone=5516993070022&text=Ol%C3%A1%2C%20Aline!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp
                    className="w-20 h-20 md:w-22 md:h-22"
                    color="fff"
                  />
                </a>
                <a
                  href="https://www.facebook.com/alinebalasgourmet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook
                    className="w-20 h-20 md:w-22 md:h-22"
                    color="fff"
                  />
                </a>
                <a
                  href="https://www.instagram.com/alinebalasgourmet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram
                    className="w-20 h-20 md:w-22 md:h-22"
                    color="fff"
                  />
                </a>
              </div>
            </nav>
            {/* /LOGO AND SOCIAL NETWORKS */}

            <div className="flex flex-col items-center justify-center gap-2">
              <a
                className="font-poppins text-14 md:text-16 font-normal transition duration-200 hover:text-white-default hover:text-opacity-80 text-white-default"
                href="#"
                rel="noopener noreferrer"
              >
                Politica de Privacidade
              </a>
              <a
                className="font-poppins text-14 md:text-16 font-normal transition duration-200 hover:text-white-default hover:text-opacity-80 text-white-default"
                href="#"
                rel="noopener noreferrer"
              >
                Termos de Uso e Condições
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-screen h-34 bg-red-400">
          <a
            className="font-poppins text-14 md:text-16 font-normal text-white-default"
            href="https://www.linkedin.com/in/diegocrivelaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desenvolvido com ❤️ por Diego Ferreira Crivelaro
          </a>
        </div>
      </footer>
    </>
  );
}
