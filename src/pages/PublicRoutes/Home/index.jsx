import Especialidades from "@/components/Especialidades";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Atendimentos from "@/components/Atendimentos";
import Blog from "@/components/Blog";

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
    </>
  );
}

export default Home;
