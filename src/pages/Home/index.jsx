import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default Home;
