import React from "react";
import CardServico from "../../../components/CardsServico";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WhatsZap from "../../../components/WhatsZap";
import Ra from "../../../components/Ra";
import GoogleMaps from "@/components/GoogleMaps";

function Cadastros() {
  return (
    <>
      <Header />
      <GoogleMaps/>
      <Ra />
      <Footer />
      <WhatsZap />
    </>
  );
}

export default Cadastros;
