import Especialidades from "@/components/Especialidades";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import WhatsZap from "../../../components/WhatsZap";
import Atendimentos from "@/components/Atendimentos";
import Blog from "@/components/Blog";
import WatsonChat from "@/components/WatsonChat";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atendimentos />
        <Especialidades />
        <Blog />
      </main>
      <Footer />
      <WatsonChat/>
    </>
  );
}

export default Home;
