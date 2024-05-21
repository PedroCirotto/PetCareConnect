import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
  gap: 5px;
  border: 2px solid #443f3f;
  border-radius: 6px;
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
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

function Estabelecimento() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [horario, setHorario] = useState("");
  const [servicos, setServicos] = useState("");
  const [descricao, setDescricao] = useState("");
  const [editingEstabelecimento, setEditingEstabelecimento] = useState(null);

  console.log(estabelecimentos);

  useEffect(() => {
    fetchEstabelecimentos();
  }, []);

  const fetchEstabelecimentos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/estabelecimento");
      setEstabelecimentos(response.data);
    } catch (error) {
      console.error("Erro ao buscar estabelecimentos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(nome);

    const newEstabelecimento = {
      nome_estabelecimento: nome,
      endereco_completo: endereco,
      email_contato: email,
      telefone_contato: telefone,
      horario_funcionamento: horario,
      servicos_fornecidos: servicos,
      descricao: descricao,
    };

    try {
      if (editingEstabelecimento) {
        await axios.put(
          `http://localhost:3001/estabelecimento/${editingEstabelecimento.id}`,
          newEstabelecimento
        );
      } else {
        await axios.post(
          "http://localhost:3001/estabelecimento",
          newEstabelecimento
        );
      }
      fetchEstabelecimentos();
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar estabelecimento:", error);
    }
  };

  const handleEdit = (estabelecimento) => {
    setEditingEstabelecimento(estabelecimento);
    setNome(estabelecimento.nome_estabelecimento);
    setEndereco(estabelecimento.endereco_completo);
    setEmail(estabelecimento.email_contato);
    setTelefone(estabelecimento.telefone_contato);
    setHorario(estabelecimento.horario_funcionamento);
    setServicos(estabelecimento.servicos_fornecidos);
    setDescricao(estabelecimento.descricao);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/estabelecimento/${id}`);
      fetchEstabelecimentos();
    } catch (error) {
      console.error("Erro ao deletar estabelecimento:", error);
    }
  };

  const resetForm = () => {
    setEditingEstabelecimento(null);
    setNome("");
    setEndereco("");
    setEmail("");
    setTelefone("");
    setHorario("");
    setServicos("");
    setDescricao("");
  };

  return (
    <div>
      <Header />
      <Hero>
        <section className="box-cadastro">
          <FormularioCadastro>
            <form onSubmit={handleSubmit}>
              <FormFieldset className="tutor-box">
                <p>
                  Bem-vindo(a)! Para cadastrar seu estabelecimento na nossa
                  plataforma, por favor, preencha o formulário abaixo com as
                  informações necessárias. Esses dados são importantes para
                  verificarmos e divulgarmos corretamente seu estabelecimento!
                </p>
                <legend>
                  <h1>
                    {editingEstabelecimento
                      ? "Editar Estabelecimento"
                      : "Cadastro Estabelecimento"}
                  </h1>
                </legend>

                <br />

                <Label htmlFor="nome">Nome do Estabelecimento:</Label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="endereco">Endereço Completo:</Label>
                <Input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="email">E-mail de Contato:</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="telefone">Telefone de Contato:</Label>
                <Input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="horario">Horário de Funcionamento:</Label>
                <Input
                  type="text"
                  id="horario"
                  name="horario"
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="servicos">Serviços Oferecidos:</Label>
                <Input
                  type="text"
                  id="servicos"
                  name="servicos"
                  value={servicos}
                  onChange={(e) => setServicos(e.target.value)}
                  required
                />

                <br />

                <Label htmlFor="descricao">Descrição do Estabelecimento:</Label>
                <TextArea
                  id="descricao"
                  name="descricao"
                  rows="4"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />

                <br />

                <Button type="submit">
                  {editingEstabelecimento ? "Atualizar" : "Cadastrar"}
                </Button>
              </FormFieldset>
            </form>
            <Img
              src="imgs/pexels-fauxels-3184418.jpg"
              alt=""
              className="img-bussines"
            />
          </FormularioCadastro>
        </section>
      </Hero>
      <H2>Estabelecimentos Cadastrados</H2>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Horário</th>
            <th>Serviços</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {estabelecimentos.map((estabelecimento) => (
            <tr key={estabelecimento.id}>
              <td>{estabelecimento.nome_estabelecimento}</td>
              <td>{estabelecimento.endereco_completo}</td>
              <td>{estabelecimento.endereco_completo}</td>
              <td>{estabelecimento.telefone_contato}</td>
              <td>{estabelecimento.horario_funcionamento}</td>
              <td>{estabelecimento.servicos_fornecidos}</td>
              <td>{estabelecimento.descricao}</td>
              <td>
                <Button onClick={() => handleEdit(estabelecimento)}>
                  Editar
                </Button>
                <Button
                  onClick={() => handleDelete(estabelecimento.id)}
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

export default Estabelecimento;
