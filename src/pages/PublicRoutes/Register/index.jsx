import { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import { AuthContext, AuthProvider } from "../../../backend/AuthContext.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(40, 175, 130);
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Dados de Register: ", { email, password });


    try {
      await register(email, password);
      navigate("/dashboard");
      alert('Usuario criado com sucesso.')
    } catch (error) {
      console.error("Erro no cadastro", error);
      alert('Erro no cadastro')
    }
    
  };

  return (
    <Main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Crie sua conta!</h1>
          <div className="input-field">
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>


          <button type="submit">Entrar</button>

          <div className="signup-link">
            <p>
              Ja tem uma conta? <a href="/login">Login</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Register;
