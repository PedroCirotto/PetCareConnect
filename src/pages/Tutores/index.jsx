import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";

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

function CadastroForm() {
  return (
    <div>
      <Header />
      <Hero className="hero">
        <section className="box-cadastro">
          <FormularioCadastro>
            <form action="#" method="post">
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
                  required
                />
                <Label htmlFor="email_usuario">Email:</Label>
                <Input
                  type="email"
                  id="email_usuario"
                  name="email_usuario"
                  required
                />
                <Label htmlFor="telefone_usuario">Telefone:</Label>
                <Input
                  type="tel"
                  id="telefone_usuario"
                  name="telefone_usuario"
                  required
                />
                <Label htmlFor="endereco_usuario">Endereço:</Label>
                <Input
                  type="text"
                  id="endereco_usuario"
                  name="endereco_usuario"
                  required
                />
              </FormFieldset>

              <FormFieldset>
                <legend>
                  <h1>Informações do Pet</h1>
                </legend>
                <Label htmlFor="nome_pet">Nome do Pet:</Label>
                <Input type="text" id="nome_pet" name="nome_pet" required />
                <Label htmlFor="tipo_pet">Tipo de Pet:</Label>
                <Select id="tipo_pet" name="tipo_pet" required>
                  <option value="cachorro">Cachorro</option>
                  <option value="gato">Gato</option>
                  <option value="outro">Outro</option>
                </Select>
                <Label htmlFor="raca_pet">Raça:</Label>
                <Input type="text" id="raca_pet" name="raca_pet" required />
                <Label htmlFor="idade_pet">Idade:</Label>
                <Input type="number" id="idade_pet" name="idade_pet" required />
                <Label htmlFor="peso_pet">Peso (kg):</Label>
                <Input
                  type="number"
                  step="0.1"
                  id="peso_pet"
                  name="peso_pet"
                  required
                />
                <Label htmlFor="observacoes_pet">
                  Observações (saúde, comportamento, etc.):
                </Label>
                <TextArea
                  id="observacoes_pet"
                  name="observacoes_pet"
                  rows="4"
                />
              </FormFieldset>

              <Button type="submit">Cadastrar</Button>
            </form>
            <Img src="imgs/pet-dog-man.jpg" alt="" />
          </FormularioCadastro>
        </section>
      </Hero>
      <Footer />
    </div>
  );
}

export default CadastroForm;
