import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    color: #162938;
    margin-top: 22px;
    margin-bottom: 0.5rem;
    padding: 0 10px 0 20px;
`;

const P = styled.p`
    text-align: justify;
    font-size: 1.13rem;
    font-weight: 500;
    color: rgb(40, 38, 38);
    margin-top: 20px;
    padding: 5px 20px 5px 20px;
    width: 100%;

    a {
        color: #28AF82;
    }
`;

function Cards() {
    return (
    <>
            <H1>Conheça o nosso serviço de realidade aumentada</H1>
            <P><a href="https://pedrocirotto.github.io/RA/">Clique aqui</a> e experimente</P>
    </>
  );
}

export default Cards;
