import styled from "styled-components";

// Componentes estilizados
const Heroo = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  max-width: 1424px;
  margin: 1rem auto;
`;

const MainText = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #162938;
    max-width: 544px;
    margin-top: 22px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.13rem;
    color: rgb(40, 38, 38);
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
  }

  .patch-img {
    height: 176px;
    position: relative;
    z-index: 1;
    margin: 40px 0 30px 0;
  }

  a {
    position: relative;
    top: -25%;
    left: 1%;

    border: 2px solid none;
    border-radius: 14px;
    background-color: rgb(40, 175, 130);
    padding: 40px 100px 40px 200px;
    margin: 5px 0 30px 0;

    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
  }

  a:hover {
    background-color: #162938;
  }
`;

const MainBanner = styled.div`
  img {
    object-fit: cover;
    height: 414px;
    width: 590px;
    border-radius: 23px;
  }
`;

export default function Hero() {
  return (
    <Heroo>
      <MainText>
        <h1>Centro Veterinario PetCare</h1>
        <p>
          Bem-vindo ao Centro Veterinário PetCare. Aqui, cuidamos dos seus
          animais de estimação com carinho e dedicação.
        </p>
        <p>
          Nosso compromisso é proporcionar cuidados de saúde excepcionais para
          os animais, promovendo seu bem-estar e felicidade. Nos esforçamos para
          ser líderes na prestação de serviços veterinários de qualidade.
        </p>
        <div className="main-patch">
          <object
            data="imgs/veterinarian-svgrepo-com.svg"
            type="image/svg+xml"
            className="patch-img"
          ></object>
        </div>
        <a href="#">Conheça nossos serviços</a>
      </MainText>
      <MainBanner>
        <img src="imgs/Veterinarian-Best-Wallpaper.jpg" alt=""></img>
      </MainBanner>
    </Heroo>
  );
}
