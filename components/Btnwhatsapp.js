export default function Btnwhatsapp() {
  return (
    <>
      <div className="absolute right-4 bottom-0 lg:right-18 xl:right-96">
        <a
          href="https://api.whatsapp.com/send?phone=5516993070022&text=Ol%C3%A1%2C%20Aline!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/static/images/icons/btnwhatsapp.svg"
            alt="Botão do WhatsApp"
          />
        </a>
      </div>
    </>
  );
}
