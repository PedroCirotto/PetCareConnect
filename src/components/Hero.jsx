import styled from "styled-components";

// Componentes estilizados
const Heroo = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  max-width: 1424px;
  width: 100%;
  margin: 1rem auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
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
    font-size: 1.1rem;
    width: 100%;
  }

  a:hover {
    background-color: #162938;
  }
`;

const MainBanner = styled.div`
  img {
    object-fit: cover;
    height: 414px;
    width: 100%;
    border-radius: 23px;
  }
`;

const PetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  max-width: 1424px;
  width: 100%;
  margin: 1rem auto;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const PetImg = styled.img`
  object-fit: cover;
  height: 414px;
  width: 100%;
  border-radius: 23px;
`;

export default function Hero() {
  return (
    <>
      <Heroo>
        <MainText>
          <h1>Centro Veterinario PetCare</h1>
          <p>
            Bem-vindo ao Centro Veterinário PetCare. Aqui, cuidamos dos seus
            animais de estimação com carinho e dedicação.
          </p>
          <p>
            Nosso compromisso é proporcionar cuidados de saúde excepcionais para
            os animais, promovendo seu bem-estar e felicidade. Nos esforçamos
            para ser líderes na prestação de serviços veterinários de qualidade.
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
      <PetContainer>
        <PetImg src="imgs/dog.jpg" alt=""></PetImg>
        <MainText>
          <p>
            O Centro Veterinário PetCare é uma clínica especializada em cuidados
            médicos para animais de estimação, oferecendo uma gama completa de
            serviços voltados para a saúde e bem-estar dos pets. Com uma equipe
            de profissionais altamente capacitados, o PetCare se destaca por seu
            atendimento humanizado e por utilizar tecnologia de ponta em
            diagnósticos e tratamentos. Entre os principais serviços oferecidos
            pelo Centro Veterinário PetCare estão consultas de rotina, vacinas,
            exames laboratoriais, cirurgias, atendimento de emergência e
            acompanhamento nutricional. A clínica também conta com um espaço
            confortável para internações e recuperação dos animais, garantindo o
            máximo de conforto e segurança. O foco do PetCare é proporcionar um
            ambiente acolhedor tanto para os pets quanto para seus tutores,
            assegurando que cada paciente receba o tratamento adequado para suas
            necessidades individuais.
          </p>
        </MainText>
      </PetContainer>
    </>
  );
}
