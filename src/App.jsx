import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./backend/AuthContext.jsx";
import { useContext } from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/PublicRoutes/Home";
import Tutores from "./pages/PublicRoutes/Tutores";
import Vet from "./pages/PublicRoutes/Vet";
import Estabelecimento from "./pages/PublicRoutes/Estabelecimento";
import Login from "./pages/PublicRoutes/Login/index.jsx";
import Register from "./pages/PublicRoutes/Register/index.jsx";
import Servicos from "./pages/PublicRoutes/Servicos";
import Cadastros from "./pages/PublicRoutes/Cadastros";

// Private Routes
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

import Dashboard from "./pages/Private/Dashboard";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-green: background-color: rgb(40, 175, 130);

  }

  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/veterinario" element={<Vet />} />
          <Route path="/estabelecimento" element={<Estabelecimento />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
