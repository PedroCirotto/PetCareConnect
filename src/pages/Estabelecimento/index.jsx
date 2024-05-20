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

function Estabelecimento() {
  return (
    <div>
      <Header />
      <Hero>
        <section className="box-cadastro">
          <FormularioCadastro>
            <form action="#" method="post">
              <FormFieldset className="tutor-box">
                <p>
                  Bem-vindo(a)! Para cadastrar seu estabelecimento na nossa
                  plataforma, por favor, preencha o formulário abaixo com as
                  informações necessárias. Esses dados são importantes para
                  verificarmos e divulgarmos corretamente seu estabelecimento!
                </p>
                <legend>
                  <h1>Cadastro Estabelecimento</h1>
                </legend>

                <br />

                <Label htmlFor="nome">Nome do Estabelecimento:</Label>
                <Input type="text" id="nome" name="nome" required />

                <br />

                <Label htmlFor="endereco">Endereço Completo:</Label>
                <Input type="text" id="endereco" name="endereco" required />

                <br />

                <Label htmlFor="email">E-mail de Contato:</Label>
                <Input type="email" id="email" name="email" required />

                <br />

                <Label htmlFor="telefone">Telefone de Contato:</Label>
                <Input type="tel" id="telefone" name="telefone" required />

                <br />

                <Label htmlFor="horario">Horário de Funcionamento:</Label>
                <Input type="text" id="horario" name="horario" required />

                <br />

                <Label htmlFor="servicos">Serviços Oferecidos:</Label>
                <Input type="text" id="servicos" name="servicos" required />

                <br />

                <Label htmlFor="descricao">Descrição do Estabelecimento:</Label>
                <TextArea id="descricao" name="descricao" rows="4" />

                <br />

                <Label htmlFor="fotos">Fotos do Local:</Label>
                <Input
                  type="file"
                  id="fotos"
                  name="fotos"
                  accept="image/*"
                  multiple
                />

                <br />

                <Label htmlFor="documentos">Documentos de Licenciamento:</Label>
                <Input type="file" id="documentos" name="documentos" multiple />

                <br />
              </FormFieldset>

              <Button type="submit">Cadastrar</Button>
            </form>
            <Img
              src="imgs/pexels-fauxels-3184418.jpg"
              alt=""
              className="img-bussines"
            />
          </FormularioCadastro>
        </section>
      </Hero>
      <Footer />
    </div>
  );
}

export default Estabelecimento;
