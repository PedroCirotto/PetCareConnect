export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1424px] mx-auto px-6 mt-10">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#175EA8] mt-6 mb-3 max-w-xl">
            Centro Veterinário <br />
            <span className="font-cursive">PetCare</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-800 font-medium mt-5 leading-7">
            Bem-vindo ao Centro Veterinário PetCare. Aqui, cuidamos dos seus
            animais de estimação com carinho e dedicação.
          </p>
          <p className="text-base sm:text-lg text-gray-800 font-medium mt-5 leading-7">
            Nosso compromisso é proporcionar cuidados de saúde excepcionais para
            os animais, promovendo seu bem-estar e felicidade. Nos esforçamos
            para ser líderes na prestação de serviços veterinários de qualidade.
          </p>

          {/* SVG Icon */}
          {/* Call to Action Button com imagem SVG sobrepondo levemente à esquerda */}
          <div className="relative inline-flex items-center mt-10">
            <img
              src="imgs/veterinarian-svgrepo-com.svg"
              alt="Ícone de veterinário"
              className="absolute -left-4 w-24 h-24 z-20 drop-shadow-md  sm:block"
            />
            <a
              href="/servicos"
              className="relative z-10 pl-28 pr-12 py-6 bg-emerald-600 hover:bg-[#162938] text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-lg"
            >
              Conheça nossos serviços
            </a>
          </div>

        </div>

        {/* Hero Image */}
        <div>
          <img
            src="imgs/Veterinarian-Best-Wallpaper.jpg"
            alt="Veterinário atendendo pet"
            className="w-full h-[414px] object-cover rounded-2xl"
          />
        </div>
      </section>
    </>
  );
}
