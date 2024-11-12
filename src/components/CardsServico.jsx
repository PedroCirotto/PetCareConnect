import React from "react";
import styled from "styled-components";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


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
  padding: 5px 20px;
`;

const CadastrosCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  padding: 6px;
  margin: 20px 30px 40px 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const MainCadastro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 100%;
  border-radius: 7px;
  background-color: #28af82;

  .img-card img {
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
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };


  return (
    <>
      <CadastroInformer>
        <TitleCadastro>
          <h1>Conheça algum de nossos Serviços</h1>
        </TitleCadastro>
        <TextCadastro>
          <p>
            Aqui estão alguns veterinários que oferecem serviços especializados para o cuidado e o bem-estar dos animais. Profissionais dedicados, com formações e experiências variadas, que podem atender diferentes tipos de necessidades dos pets, como check-ups regulares, vacinas, diagnósticos e tratamentos de doenças, além de procedimentos de emergência.
          </p>

          <p>
            Os veterinários listados têm como compromisso o uso das melhores práticas da medicina veterinária, sempre buscando o aprimoramento em técnicas modernas de diagnóstico e tratamento. São profissionais que não apenas cuidam da saúde física dos animais, mas também se preocupam com o bem-estar emocional e comportamental de cada paciente, seja ele um animal de estimação, um animal silvestre ou até mesmo um animal de grande porte.
          </p>
        </TextCadastro>
      </CadastroInformer>

      <ContainerCard>
        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={-23.6453888}
              lng={-46.5666048}
              text="PAO"
            />
          </GoogleMapReact>
        </div>
      </ContainerCard>
    </>
  );
}

export default Cards;
