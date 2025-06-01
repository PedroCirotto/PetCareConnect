import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      alert("Ocorreu um erro ao enviar o formulário.");
    }
  };

  return (
    <>
      <Header />
      <section className="relative isolate bg-white py-12" id="contact">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 lg:static lg:px-8 mb-12">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Fale com a PetCareConnect!
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Tem dúvidas, sugestões ou precisa de suporte? Nossa equipe está pronta para ajudar!
                Seja você um tutor, veterinário ou parceiro, estamos à disposição para tornar a PetCareConnect cada vez melhor para todos.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                A PetCareConnect é uma plataforma digital que facilita o agendamento de consultas veterinárias, promovendo o bem-estar de pets e conectando profissionais confiáveis a quem mais precisa.
              </p>
              <dl className="mt-10 space-y-4 text-base text-gray-600">
                <div className="flex gap-x-4">
                  <dt><Linkedin /></dt>
                  <dd>
                    <a className="hover:text-gray-900" target="_blank" href="https://www.linkedin.com/company/petcareconnect">
                      PetCareConnect - LinkedIn
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt><Mail /></dt>
                  <dd>
                    <a className="hover:text-gray-900" href="mailto:contato@petcareconnect.com">
                      contato@petcareconnect.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Formulário de contato */}
          <form
            onSubmit={handleSubmit}
            className="px-6 lg:px-8"
            id="contact-form"
          >
            <input type="hidden" name="access_key" value="13ca9961-5229-4921-8315-d2c02639f1cf" />
            <input type="hidden" name="subject" value="Nova mensagem - PetCareConnect" />
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-gray-900" htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900" htmlFor="lastName">Sobrenome</label>
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900" htmlFor="email">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900" htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900" htmlFor="message">Mensagem</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Conte-nos como podemos ajudar"
                    className="mt-2.5 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-indigo-600"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between mt-6">
                <div className="h-captcha" data-captcha="true"></div>
                <div className="mt-3 md:mt-0">
                  <Button>Enviar Mensagem</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
