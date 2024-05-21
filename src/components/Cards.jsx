import React from "react";
import styled from "styled-components";

const CadastroInformer = styled.section`
  margin: 5px 10px 5px 10px;
  margin-left: 20px;
`;

const TitleCadastro = styled.article`
  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: #162938;
    margin-top: 22px;
    margin-bottom: 0.5rem;
    padding: 0 10px 0 20px;
  }
`;

const TextCadastro = styled.article`
  p {
    text-align: justify;
    font-size: 1.13rem;
    font-weight: 500;
    color: rgb(40, 38, 38);
    margin-top: 20px;
    padding: 5px 20px 5px 20px;
    width: 100%;
  }
`;

const ContainerCard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 7px;
`;

const CadastrosCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  padding: 6px;
  margin: 20px 30px 40px 30px;
`;

const MainCadastro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 90%;
  border-radius: 7px;
  background-color: #28af82;

  .img-card img {
    height: 290px;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .patch-card img {
    position: relative;
    top: -55%;
    height: 90px;
    border: 1px solid white;
    background: #ffffff7e;
    backdrop-filter: blur(10px);
    border-radius: 50%;
    object-fit: cover;
    z-index: 2;
  }

  h1 {
    color: #162938;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.28rem;
    font-weight: 600;
    padding: 12px;
    margin-bottom: 2px;
  }

  hr {
    position: relative;
    top: 0;
    left: 2%;
    width: 90%;
    margin-bottom: 7px;
    border-color: #1a1b1b83;
  }

  p {
    color: #ffffff;
    text-align: left;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 12px;
  }

  .link-cadastro {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.4rem;
      border: 1px solid #162938;
      border-radius: 8px;
      background-color: #162938;
      padding: 15px 30px 15px 30px;
      position: absolute;
      bottom: 50px;
    }
  }
`;

function Cards() {
  return (
    <>
      <CadastroInformer>
        <TitleCadastro>
          <h1>Núcleo PetCare:Connect</h1>
        </TitleCadastro>
        <TextCadastro>
          <p>
            Aqui no nosso site, valorizamos a conexão entre tutores, pets,
            veterinários e estabelecimentos que cuidam desses membros especiais
            da família. Para facilitar essa interação, oferecemos três tipos de
            cadastros separados:
          </p>
        </TextCadastro>
      </CadastroInformer>

      <ContainerCard>
        <CadastrosCard>
          <MainCadastro className="card1">
            <div className="img-card">
              <img src="imgs/pet-dog-man.jpg" alt="" />
            </div>
            <div className="patch-card patch1">
              <img src="imgs/charity-dog-svgrepo-com.svg" alt="" />
            </div>
            <article>
              <h1>Cadastro de Tutores</h1>
              <hr />
              <p>
                Se você é o guardião amoroso de um pet, queremos conhecê-lo e ao
                seu amiguinho! Cadastre-se para ter acesso a recursos
                exclusivos, dicas personalizadas e promoções especiais para
                vocês dois.
              </p>
            </article>
            <nav className="link-cadastro link1">
              <a href="/tutores">Acesse</a>
            </nav>
          </MainCadastro>

          <MainCadastro className="card2">
            <div className="img-card">
              <img src="imgs/pexels-tima-miroshnichenko-6235233.jpg" alt="" />
            </div>
            <div className="patch-card patch2">
              <img src="imgs/veterinarian-2-com.svg" alt="" />
            </div>
            <article>
              <h1>Cadastro de Veterinários</h1>
              <hr />
              <p>
                Veterinários desempenham um papel crucial na saúde e no
                bem-estar dos nossos amigos peludos. Se você é um veterinário
                comprometido em oferecer os melhores cuidados, junte-se a nós!
                Cadastre-se para conectar-se com tutores e estar disponível para
                ajudar sempre que necessário.
              </p>
            </article>
            <nav className="link-cadastro link2">
              <a href="/veterinario">Acesse</a>
            </nav>
          </MainCadastro>

          <MainCadastro className="card3">
            <div className="img-card img3">
              <img src="imgs/Shop-1.jpg" alt="" />
            </div>
            <div className="patch-card patch3">
              <img src="imgs/clinic-building-svgrepo-com.svg" alt="" />
            </div>
            <article>
              <h1>Cadastro de Estabelecimentos</h1>
              <hr />
              <p>
                Clínicas, pet shops e outros estabelecimentos que oferecem
                serviços para pets são parte essencial da nossa comunidade. Se
                você gerencia um estabelecimento dedicado aos cuidados e ao amor
                pelos animais, estamos ansiosos para tê-lo conosco! Cadastre-se
                para aumentar sua visibilidade, alcançar novos clientes e fazer
                parte de uma rede dedicada ao bem-estar animal.
              </p>
            </article>
            <nav className="link-cadastro link3">
              <a href="/estabelecimento">Acesse</a>
            </nav>
          </MainCadastro>
        </CadastrosCard>
      </ContainerCard>
    </>
  );
}

export default Cards;
