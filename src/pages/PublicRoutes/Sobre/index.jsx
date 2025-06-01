import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" >
          <div className=" w-full h-full absolute top-0 left-0 z-0" />
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#00A651]">Sobre o PetCare Connect</h1>
            <p className="text-[#00A651] mt-4 text-lg max-w-xl mx-auto">Conectando você aos melhores cuidados para o seu pet, com praticidade, confiança e carinho.</p>
          </div>
        </section>
  
        {/* Missão e Visão */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Nossa Missão</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Oferecer uma plataforma eficiente e acolhedora que conecta tutores de animais aos melhores profissionais de saúde pet, promovendo bem-estar e comodidade.
            </p>
            <h2 className="text-3xl font-semibold mt-12 mb-6 text-indigo-700">Nossa Visão</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Ser referência nacional em soluções digitais para cuidados veterinários, inovando continuamente para transformar a experiência de quem ama e cuida dos seus animais.
            </p>
          </div>
        </section>
  
        {/* Valores */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10 text-indigo-700">Nossos Valores</h2>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              {[
                { title: "Amor pelos Animais", icon: "🐾", text: "Cada decisão que tomamos tem o bem-estar animal como prioridade." },
                { title: "Transparência", icon: "🔍", text: "Informações claras, acessíveis e confiáveis para tutores e profissionais." },
                { title: "Inovação", icon: "💡", text: "Tecnologia a serviço do cuidado, com soluções práticas e humanas." },
              ].map(({ title, icon, text }, i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-indigo-600">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Equipe */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-10 text-indigo-700">Nossa Equipe</h2>
            <div className="grid gap-10 md:grid-cols-5 text-center">
              {[
                {
                  name: "Guilherme Bucci",
                  role: "Designer UI/UX e Front-end",
                  img: "/imgs/gui.png",
                },
                {
                  name: "Giovanna Cabrera",
                  role: "Copywriter e QA",
                  img: "/imgs/gih.jpeg",
                },
                {
                  name: "Pedro Cirotto",
                  role: "Desenvolvedor Full-stack",
                  img: "/imgs/pedro.jpg",
                },
                {
                  name: "João Ferreira",
                  role: "Scrum master",
                  img: "/imgs/joao.png",
                },
                {
                  name: "Leonardo",
                  role: "Desenvolvedor Back-end",
                  img: "/imgs/leo.png",
                },
              ].map(({ name, role, img }, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4">
                  <img src={img} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                  <h3 className="text-xl font-medium text-gray-800">{name}</h3>
                  <p className="text-indigo-600">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
    );
  }
  