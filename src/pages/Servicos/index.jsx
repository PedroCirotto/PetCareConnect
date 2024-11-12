import React from "react";
import CardServico from "../../components/CardsServico";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsZap from "../../components/WhatsZap";
import Ra from "../../components/Ra";

function Cadastros() {
  return (
    <>
      <Header />
      <CardServico />
      <Ra/>
      <Footer />
      <WhatsZap />
    </>
  );
}

export default Cadastros;
