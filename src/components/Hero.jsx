export default function Hero() {
    return (
        <section className="hero">
          <div className="main-text">
            <h1>Centro Veterinario PetCare</h1>
            <p>Bem-vindo ao Centro Veterinário PetCare. Aqui, cuidamos dos seus animais de estimação com carinho e dedicação.</p>
            <p>Nosso compromisso é proporcionar cuidados de saúde excepcionais para os animais, promovendo seu bem-estar e felicidade. Nos esforçamos para ser líderes na prestação de serviços veterinários de qualidade.</p>
            <div className="main-patch">
              <object data="imgs/veterinarian-svgrepo-com.svg" type="image/svg+xml" className="patch-img"></object>
            </div>
            <a href="#">Conheça nossos serviços</a>
          </div>
          <div className="main-banner">
            <img src="imgs/Veterinarian-Best-Wallpaper.jpg" alt=""></img>
          </div>
        </section>
    )
}