"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CadastroVeterinario() {
  const [foto, setFoto] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    crmv: "", 
    telefone: "",
    especialidade: "",
    endereco: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const formDataToSend = new FormData();
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("crmv", formData.crmv);
    formDataToSend.append("telefone", formData.telefone);
    formDataToSend.append("especialidade", formData.especialidade);
    formDataToSend.append("endereco", formData.endereco);

    if (foto) {
      formDataToSend.append("foto", foto);

      try {
        const response = await fetch(
          "https://petcare-backend-000a9afe2063.herokuapp.com/veterinario",
          {
            method: "POST",
            body: formDataToSend,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData?.message || "Erro ao cadastrar veterinário.");
        }

        setMessage({ type: "success", text: "Veterinário cadastrado com sucesso!" });
        setFormData({ nome: "", email: "", crmv: "", telefone: "", especialidade: "", endereco: "", senha: "" });
        setFoto(null);
      } catch (err) {
        setMessage({ type: "error", text: err.message });
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto py-10 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Cadastro de Veterinário</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="foto">Foto do Veterinário</Label>
                <Input type="file" id="foto" name="foto" accept="image/*" onChange={handleFileChange} />
              </div>
              <div>
                <Label htmlFor="nome">Nome completo</Label>
                <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email profissional</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="crmv">CRMV</Label>
                <Input id="crmv" name="crmv" value={formData.crmv} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="especialidade">Especialidade</Label>
                <Input
                  id="especialidade"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="endereco">Endereço</Label>
                <Textarea id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Cadastrar"}
              </Button>

              {message.text && (
                <p
                  className={`text-sm mt-2 ${message.type === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {message.text}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
