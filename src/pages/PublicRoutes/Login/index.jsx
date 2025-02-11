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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Dados de Login: ", { email, password });

    navigate('/dashboard')
    await login(email, password);
  };

  return (
    <Main>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse sua conta</h1>
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

          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit">Entrar</button>

          <div className="signup-link">
            <p>
              Não tem uma conta? <a href="/register">Registar</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Login;
