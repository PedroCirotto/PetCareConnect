import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
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
  resize: none;
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

const TableWrapper = styled.div`
  max-width: 90vw;
  margin: auto;
  margin-top: 2rem;
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

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 8px;

  &:last-child {
    display: flex;
    justify-content: center;
  }
`;

const Buttonn = styled.button`
  padding: 6px 12px;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.danger ? "#f44336" : "rgb(40, 175, 130)"};
  color: white;
  border: none;
  border-radius: 4px;
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 2rem;
`;

function CadastroForm() {
  const [clientes, setClientes] = useState([]);
  const [nome_usuario, setNomeUsuario] = useState("");
  const [email_usuario, setEmailUsuario] = useState("");
  const [telefone_usuario, setTelefoneUsuario] = useState("");
  const [endereco_usuario, setEnderecoUsuario] = useState("");
  const [nome_pet, setNomePet] = useState("");
  const [tipo_pet, setTipoPet] = useState("");
  const [raca, setRacaPet] = useState("");
  const [idade, setIdadePet] = useState("");
  const [peso, setPesoPet] = useState("");
  const [observacoes, setObservacoesPet] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentClienteId, setCurrentClienteId] = useState(null);

  useEffect(() => {
    fetchClientes();
  }, []);

  console.log(clientes);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tutores");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome_completo: nome_usuario,
      email: email_usuario,
      telefone: telefone_usuario,
      endereco: endereco_usuario,
      nome_pet,
      tipo_pet,
      raca,
      idade,
      peso,
      observacoes,
    };

    try {
      if (isEditing) {
        await axios.put(
          `http://localhost:3001/tutores/${currentClienteId}`,
          data
        );
        setIsEditing(false);
        setCurrentClienteId(null);
      } else {
        await axios.post("http://localhost:3001/tutores", data);
      }

      resetForm();
      fetchClientes();
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  const resetForm = () => {
    setNomeUsuario("");
    setEmailUsuario("");
    setTelefoneUsuario("");
    setEnderecoUsuario("");
    setNomePet("");
    setTipoPet("");
    setRacaPet("");
    setIdadePet("");
    setPesoPet("");
    setObservacoesPet("");
    setIsEditing(false);
    setCurrentClienteId(null);
  };

  const handleEdit = (cliente) => {
    setIsEditing(true);
    setCurrentClienteId(cliente.id);

    setNomeUsuario(cliente.nome_completo);
    setEmailUsuario(cliente.email);
    setTelefoneUsuario(cliente.telefone);
    setEnderecoUsuario(cliente.endereco);
    setNomePet(cliente.nome_pet);
    setTipoPet(cliente.tipo_pet);
    setRacaPet(cliente.raca);
    setIdadePet(cliente.idade);
    setPesoPet(cliente.peso);
    setObservacoesPet(cliente.observacoes);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tutores/${id}`);
      fetchClientes();
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
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
                  Bem-vindo! Para proporcionar um atendimento ainda melhor para
                  você e seu pet, pedimos que preencha o cadastro abaixo. É
                  rápido, fácil e garantirá que possamos oferecer o melhor
                  serviço possível!
                </p>
                <legend>
                  <h1>Cadastro tutor</h1>
                </legend>
                <br />
                <Label htmlFor="nome_usuario">Nome Completo:</Label>
                <Input
                  type="text"
                  id="nome_usuario"
                  name="nome_usuario"
                  value={nome_usuario}
                  onChange={(e) => setNomeUsuario(e.target.value)}
                  required
                />
                <Label htmlFor="email_usuario">Email:</Label>
                <Input
                  type="email"
                  id="email_usuario"
                  name="email_usuario"
                  value={email_usuario}
                  onChange={(e) => setEmailUsuario(e.target.value)}
                  required
                />
                <Label htmlFor="telefone_usuario">Telefone:</Label>
                <Input
                  type="tel"
                  id="telefone_usuario"
                  name="telefone_usuario"
                  value={telefone_usuario}
                  onChange={(e) => setTelefoneUsuario(e.target.value)}
                  required
                />
                <Label htmlFor="endereco_usuario">Endereço:</Label>
                <Input
                  type="text"
                  id="endereco_usuario"
                  name="endereco_usuario"
                  value={endereco_usuario}
                  onChange={(e) => setEnderecoUsuario(e.target.value)}
                  required
                />
              </FormFieldset>

              <FormFieldset>
                <legend>
                  <h1>Informações do Pet</h1>
                </legend>
                <Label htmlFor="nome_pet">Nome do Pet:</Label>
                <Input
                  type="text"
                  id="nome_pet"
                  name="nome_pet"
                  value={nome_pet}
                  onChange={(e) => setNomePet(e.target.value)}
                  required
                />
                <Label htmlFor="tipo_pet">Tipo de Pet:</Label>
                <Select
                  id="tipo_pet"
                  name="tipo_pet"
                  value={tipo_pet}
                  onChange={(e) => setTipoPet(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="cachorro">Cachorro</option>
                  <option value="gato">Gato</option>
                  <option value="outro">Outro</option>
                </Select>
                <Label htmlFor="raca_pet">Raça:</Label>
                <Input
                  type="text"
                  id="raca_pet"
                  name="raca_pet"
                  value={raca}
                  onChange={(e) => setRacaPet(e.target.value)}
                  required
                />
                <Label htmlFor="idade_pet">Idade:</Label>
                <Input
                  type="number"
                  id="idade_pet"
                  name="idade_pet"
                  value={idade}
                  onChange={(e) => setIdadePet(e.target.value)}
                  required
                />
                <Label htmlFor="peso_pet">Peso (kg):</Label>
                <Input
                  type="number"
                  step="0.1"
                  id="peso_pet"
                  name="peso_pet"
                  value={peso}
                  onChange={(e) => setPesoPet(e.target.value)}
                  required
                />
                <Label htmlFor="observacoes_pet">
                  Observações (saúde, comportamento, etc.):
                </Label>
                <TextArea
                  id="observacoes_pet"
                  name="observacoes_pet"
                  rows="4"
                  value={observacoes}
                  onChange={(e) => setObservacoesPet(e.target.value)}
                />
              </FormFieldset>
              <Button type="submit">
                {isEditing ? "Atualizar" : "Cadastrar"}
              </Button>
              {isEditing && (
                <Button
                  onClick={resetForm}
                  style={{ backgroundColor: "#f44336" }}
                >
                  Cancelar
                </Button>
              )}
            </form>
            <Img
              src="imgs/pet-dog-man.jpg"
              alt="Imagem de um homem com um cachorro"
            />
          </FormularioCadastro>
        </section>
      </Hero>
      <H2>Clientes cadastrados</H2>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Nome do Pet</th>
              <th>Tipo do Pet</th>
              <th>Raça do Pet</th>
              <th>Idade do Pet</th>
              <th>Peso do Pet</th>
              <th>Observações do Pet</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, index) => (
              <TableRow key={index}>
                <TableCell>{cliente.nome_completo}</TableCell>
                <TableCell>{cliente.email}</TableCell>
                <TableCell>{cliente.telefone}</TableCell>
                <TableCell>{cliente.endereco}</TableCell>
                <TableCell>{cliente.nome_pet}</TableCell>
                <TableCell>{cliente.tipo_pet}</TableCell>
                <TableCell>{cliente.raca}</TableCell>
                <TableCell>{cliente.idade}</TableCell>
                <TableCell>{cliente.peso}</TableCell>
                <TableCell>{cliente.observacoes}</TableCell>
                <TableCell>
                  <Buttonn onClick={() => handleEdit(cliente)}>Editar</Buttonn>
                  <Buttonn onClick={() => handleDelete(cliente.id)} danger>
                    Excluir
                  </Buttonn>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
      <Footer />
    </div>
  );
}

export default CadastroForm;
