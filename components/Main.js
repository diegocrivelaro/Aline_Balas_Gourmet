import Slider from './Slider';

export default function Main({ linkOrder }) {
  return (
    <>
      <main className="w-screen pt-104 sm:pt-96 bg-brown-200">
        <div className="container flex flex-col-reverse md:flex-row justify-between items-center mx-auto px-10">
          <div className="flex flex-col justify-center items-center mt-14 sm:mt-0">
            <h1 className="w-4/5 sm:w-full font-comfortaa font-bold text-28 text-center sm:text-32 text-brown-600">
              Balas para adoçar seu dia
            </h1>
            <p className="w-4/5 mt-8 text-18 font-poppins font-normal text-center text-gray-400">
              Balas feitas com todo cuidado e amor
            </p>

            <div className="relative mt-18 sm:mt-30">
              <img
                className="absolute top-12 -right-12 z-10"
                src="./static/assets/bullet1.svg"
                alt="Ícone de bala atrás do botão de fazer pedido"
              />
              <img
                className="relative top-14 -left-12 z-10"
                src="./static/assets/bullet2.svg"
                alt="Ícone de bala atrás do botão de fazer pedido"
              />
              <a
                className="relative z-20 px-50 py-12 rounded-xl bg-red-400 text-white-default font-poppins text-18 font-semibold"
                href={linkOrder}
                rel="noopener noreferrer"
              >
                Fazer pedido!
              </a>
            </div>
          </div>
          <Slider />
        </div>
      </main>
    </>
  );
}
