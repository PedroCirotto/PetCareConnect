import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./backend/AuthContext.jsx";
import { useContext } from "react";
import { createGlobalStyle } from "styled-components";

// Páginas públicas
import Home from "./pages/PublicRoutes/Home";
import Tutores from "./pages/PublicRoutes/Tutores";
import Vet from "./pages/PublicRoutes/Vet";
import Estabelecimento from "./pages/PublicRoutes/Estabelecimento";
import Login from "./pages/PublicRoutes/Login";
import Register from "./pages/PublicRoutes/Register";
import Servicos from "./pages/PublicRoutes/Servicos";
import Cadastros from "./pages/PublicRoutes/Cadastros";

// Páginas privadas
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

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Usa o contexto corretamente
  return user ? children : <Navigate to="/login" replace />;
};

const RedirectToDashBoard = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/dashboard"/> : children
}

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Rotas privadas */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RedirectToDashBoard><Login /></RedirectToDashBoard>} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/veterinario" element={<Vet />} />
          <Route path="/estabelecimento" element={<Estabelecimento />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/servicos" element={<Servicos />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
