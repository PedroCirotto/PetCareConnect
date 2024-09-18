import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
//import { Link } from 'react-router-dom';
import "./login.css";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(40, 175, 130);
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login: ", { username, password });
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              Não tem uma conta? <a href="/signup">Registar</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </Main>
  );
};

export default Login;
