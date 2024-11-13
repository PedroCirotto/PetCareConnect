import React from 'react';
import styled from "styled-components";

// Componentes estilizados
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 9px 2rem;
  height: 12%;
  background-color: rgb(40, 175, 130);
  z-index: 99;
  margin-bottom: 2rem;
  margin: 0 auto 2rem auto;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: row;
  }
`;

const LogoImg = styled.img`
  height: 135px;
  margin-top: 10px;
  width: auto;
  object-fit: cover;
  z-index: 999;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    position: relative;
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 30px;
  }

  .btnLogin-popup {
    width: 130px;
    height: 55px;
    margin-left: 30px;
    text-align: center;
    color: rgb(10, 107, 75);
    background: #fff;
    border: 2px solid #fff;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: transform 0.3s ease;

    &:hover {
      background: #fff;
      color: #162938;
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }

  transition: all 0.3s ease;

`;

const Hamburguer = styled.div`
  display: none;
  cursor: pointer;
  border-radius: 50%;
  z-index: 999;
  transition: all 0.3s ease;



  @media screen and (max-width: 500px) {
    display: block;
  }

  span {
    display: block;
    width: 30px;
    height: 5px;
    background-color: #fff;
    margin: 5px 0;
    transition: all 0.3s ease;
    border-radius: 100px;
  }
`;

const MobileNavigation = styled.div`
  transition: all 0.3s ease;

  display: none;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
    width: 80%;
    height: 90vh;
    background-color: rgb(40, 175, 130);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    transition: all 0.3s ease;

    a {
      font-size: 2rem;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }

  .btnLogin-popup {
    width: 130px;
    height: 55px;
    text-align: center;
    color: rgb(10, 107, 75);
    background: #fff;
    border: 2px solid #fff;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    transition: transform 0.3s ease;

    &:hover {
      background: #fff;
      color: #162938;
      transform: translateY(-5px);
    }
  }
`;

// Componente React
export default function Header() {
  function redirectUrl() {
    window.location.href = "/login";
  }

  function toggleMenu() {
    const mobileNavigation = document.querySelector(".mobile-navigation");
    mobileNavigation.style.display = mobileNavigation.style.display === "flex" ? "none" : "flex";
  }
  return (
    <HeaderContainer>
      <a href="/">
        <LogoImg src="imgs/echo (3).svg" alt="Logo" />
      </a>
      <Navigation>
        <a href="/">Home</a>
        <a href="/cadastros">Cadastros</a>
        <a href="/servicos">Serviços</a>
        <a href="#">Contato</a>
        <button onClick={redirectUrl} className="btnLogin-popup">
          Login
        </button>
      </Navigation>
      
      <Hamburguer onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburguer>
      <MobileNavigation className='mobile-navigation'>
      <a href="/">Home</a>
        <a href="/cadastros">Cadastros</a>
        <a href="/servicos">Serviços</a>
        <a href="#">Contato</a>
        <button onClick={redirectUrl} className="btnLogin-popup">
          Login
        </button>
      </MobileNavigation>
    </HeaderContainer>
  );
}
