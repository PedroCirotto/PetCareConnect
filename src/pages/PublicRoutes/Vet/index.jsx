import styled from "styled-components";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import React, { useState, useEffect } from "react";

const Hero = styled.main`
  margin-top: 1rem;
`;

const FormularioCadastro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 2px solid #443f3f;
  border-radius: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  column-gap: 110px;
  max-width: 90vw;
  margin: auto;
  margin-top: 0.5rem;
  padding: 20px;
  background-color: #b6b3ae6e;
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
  margin-bottom: 5px;
`;

const Button = styled.button`
  background-color: rgb(40, 175, 130);
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

const Table = styled.table`
  margin: 1rem auto;
  width: 90vw;
  border-collapse: collapse;
  border-radius: 10px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);

  th,
  td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
  }

  td:last-child {
    display: flex;
    justify-content: center;
  }

  th {
    background-color: rgb(40, 175, 130);
    color: #fff;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  button {
    margin-right: 10px;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 2rem;
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
  const [editingVet, setEditingVet] = useState(null);

  const fetchVeterinarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/veterinario");
      setVeterinarios(response.data);
    } catch (error) {
      console.error("Erro ao buscar veterinários:", error);
    }
  };

  console.log(veterinarios);

  useEffect(() => {
    fetchVeterinarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se o campo nome está vazio
    if (!nome) {
      console.error("O campo nome não pode estar vazio.");
      return;
    }

    const newVet = {
      nomeVeterinario: nome, // Atualizado para corresponder ao backend
      especialidade,
      telefone,
      email,
      crmv,
      cpf,
      endereco,
    };

    try {
      if (editingVet) {
        await axios.put(
          `http://localhost:3001/veterinario/${editingVet.id}`,
          newVet
        );
      } else {
        await axios.post("http://localhost:3001/veterinario", newVet);
      }
      fetchVeterinarios();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar veterinário:", error);
    }
  };

  const handleEdit = (vet) => {
    setEditingVet(vet);
    setNome(vet.nome);
    setEspecialidade(vet.especialidade);
    setTelefone(vet.telefone);
    setEmail(vet.email);
    setCrmv(vet.numero_crmv);
    setCpf(vet.cpf);
    setEndereco(vet.endereco_profissional);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/veterinario/${id}`);
      fetchVeterinarios();
    } catch (error) {
      console.error("Erro ao deletar veterinário:", error);
    }
  };

  const resetForm = () => {
    setEditingVet(null);
    setNome("");
    setEspecialidade("");
    setTelefone("");
    setEmail("");
    setCrmv("");
    setCpf("");
    setEndereco("");
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
                  <h1>
                    {editingVet ? "Editar Veterinário" : "Cadastro Veterinário"}
                  </h1>
                </legend>
                <Label htmlFor="nome_usuario">Nome Completo:</Label>
                <Input
                  type="text"
                  id="nome_usuario"
                  name="nome_usuario"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <Label htmlFor="email_usuario">Email:</Label>
                <Input
                  type="email"
                  id="email_usuario"
                  name="email_usuario"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Label htmlFor="telefone_usuario">Telefone:</Label>
                <Input
                  type="tel"
                  id="telefone_usuario"
                  name="telefone_usuario"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
                <Label htmlFor="crm">Número do CRMV:</Label>
                <Input
                  type="text"
                  id="crm"
                  name="crm"
                  value={crmv}
                  onChange={(e) => setCrmv(e.target.value)}
                />
                <Label htmlFor="especialidades">Especialidades:</Label>
                <Input
                  type="text"
                  id="especialidades"
                  name="especialidades"
                  value={especialidade}
                  onChange={(e) => setEspecialidade(e.target.value)}
                />
                <Label htmlFor="cpf">CPF:</Label>
                <Input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={cpf}
                  maxLength="11"
                  required
                  onChange={(e) => setCpf(e.target.value)}
                />
                <Label htmlFor="endereco_usuario">Endereço Profissional:</Label>
                <Input
                  type="text"
                  id="endereco_usuario"
                  name="endereco_usuario"
                  value={endereco}
                  required
                  onChange={(e) => setEndereco(e.target.value)}
                />
                <Button type="submit">
                  {editingVet ? "Atualizar" : "Cadastrar"}
                </Button>
                {editingVet && (
                  <Button
                    onClick={resetForm}
                    style={{ backgroundColor: "#f44336" }}
                  >
                    Cancelar
                  </Button>
                )}
              </FormFieldset>
            </form>
            <Img
              src="imgs/pexels-tima-miroshnichenko-6235233.jpg"
              alt="Veterinário"
            />
          </FormularioCadastro>
        </section>
      </Hero>
      <H2>Veterinários Cadastrados</H2>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>CRMV</th>
            <th>Ações</th>
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
              <td>{vet.endereco_profissional}</td>
              <td>{vet.numero_crmv}</td>
              <td>
                <Button onClick={() => handleEdit(vet)}>Editar</Button>
                <Button
                  onClick={() => handleDelete(vet.id)}
                  style={{ backgroundColor: "#f44336" }}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}

export default Vet;
