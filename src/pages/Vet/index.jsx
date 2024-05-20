import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Hero = styled.main`
  margin-top: 10rem;
`;

const FormularioCadastro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #443f3f;
  border-radius: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  column-gap: 110px;
  max-width: 90vw;
  margin: 40px auto 50px auto;
  padding: 20px;
  backdrop-filter: blur(10px);
`;

const FormFieldset = styled.fieldset`
  margin-top: 10px;
  display: flex;
  justify-content: left;
  align-items: baseline;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #443f3f;
  border-radius: 6px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 20px 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 34px;

  &:hover {
    background-color: #45a049;
  }
`;

const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: right;
  object-fit: cover;
  width: 40vw;
  height: 97%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Table = styled.ul`
  margin: 1rem auto;
  width: 500px;
  border-radius: 10px;

  thead {
    background-color: rgb(40, 175, 130);
    color: #fff;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

function Vet() {
  const [veterinarios, setVeterinarios] = useState([]);
  const [nome, setNome] = useState("");
  const [crmv, setCrmv] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");

  const fetchVeterinarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/veterinarios");
      setVeterinarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar veterinários:", error);
    }
  };

  useEffect(() => {
    fetchVeterinarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVet = {
      nome,
      especialidade,
      telefone,
      email,
      crmv,
      cpf,
      endereco,
    };
    try {
      await axios.post("http://localhost:3001/veterinarios", newVet);
      fetchVeterinarios();
    } catch (error) {
      console.error("Erro ao cadastrar veterinário:", error);
    }
  };

  return (
    <div>
      <Header />
      <Hero className="hero">
        <section className="box-cadastro">
          <FormularioCadastro>
            <form onSubmit={handleSubmit}>
              <FormFieldset className="tutor-box">
                <p>
                  Bem-vindo(a)! Para se cadastrar como médico veterinário na
                  nossa plataforma, por favor, preencha o formulário abaixo com
                  suas informações. Esses dados são essenciais para garantir a
                  verificação de sua qualificação e facilitar sua interação com
                  clientes.
                </p>
                <legend>
                  <h1>Cadastro Veterinário</h1>
                </legend>
                <Label htmlFor="nome_usuario">Nome Completo:</Label>
                <Input
                  type="text"
                  id="nome_usuario"
                  name="nome_usuario"
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <Label htmlFor="email_usuario">Email:</Label>
                <Input
                  type="email"
                  id="email_usuario"
                  name="email_usuario"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Label htmlFor="telefone_usuario">Telefone:</Label>
                <Input
                  type="tel"
                  id="telefone_usuario"
                  name="telefone_usuario"
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
                <Label htmlFor="crm">Número do CRMV:</Label>
                <Input
                  type="text"
                  id="crm"
                  name="crm"
                  onChange={(e) => setCrmv(e.target.value)}
                />
                <Label htmlFor="especialidades">Especialidades:</Label>
                <Input
                  type="text"
                  id="especialidades"
                  name="especialidades"
                  onChange={(e) => setEspecialidade(e.target.value)}
                />
                <Label htmlFor="cpf">CPF:</Label>
                <Input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  onChange={(e) => setCpf(e.target.value)}
                />
                <Label htmlFor="endereco_usuario">Endereço Profissional:</Label>
                <Input
                  type="text"
                  id="endereco_usuario"
                  name="endereco_usuario"
                  required
                  onChange={(e) => setEndereco(e.target.value)}
                />
                <Label htmlFor="documentos">Documentos comprobatórios:</Label>
                <Input type="file" id="documentos" name="documentos" />
              </FormFieldset>
              <Button type="submit">Cadastrar</Button>
            </form>
            <Img
              src="imgs/pexels-tima-miroshnichenko-6235233.jpg"
              alt="Veterinário"
            />
          </FormularioCadastro>
        </section>
      </Hero>
      <h2>Veterinários Cadastrados</h2>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Cpf</th>
            <th>Endereço</th>
            <th>CRMV</th>
          </tr>
        </thead>
        <tbody>
          {veterinarios.map((vet) => (
            <tr key={vet.id}>
              <td>{vet.nome}</td>
              <td>{vet.especialidade}</td>
              <td>{vet.telefone}</td>
              <td>{vet.email}</td>
              <td>{vet.cpf}</td>
              <td>{vet.endereco}</td>
              <td>{vet.crmv}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

export default Vet;
