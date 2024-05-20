import React from 'react';
import styled from "styled-components";

// Componentes estilizados
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 9px 30px;
  height: 19%;
  background-color: rgb(40, 175, 130);
  z-index: 99;
`;

const LogoImg = styled.img`
  height: 190px;
  margin-top: 10px;
  width: auto;
  object-fit: cover;
`;

const InputSearch = styled.input`
  width: 650px;
  height: 2.25rem;
  user-select: none;
  box-sizing: content-box;
  outline: none;
  border: none;
  border-radius: 16px;
  padding: 10px;

  &::placeholder {
    font-weight: 400;
    line-height: 132%;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    position: relative;
    font-size: 1rem;
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
`;

// Componente React
export default function Header() {
  return (
    <HeaderContainer>
      <LogoImg src="imgs/echo (3).svg" alt="Logo" />
      <InputSearch
        type="search"
        id="campoPesquisa"
        placeholder="Como podemos te ajudar?"
      />
      <Navigation>
        <a href="/">Home</a>
        <a href="/users">Users</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="btnLogin-popup">Login</button>
      </Navigation>
    </HeaderContainer>
  );
}
