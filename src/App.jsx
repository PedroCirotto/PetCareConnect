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
import Contato from "./pages/PublicRoutes/Contato";
import Blogcachorro from "./pages/PublicRoutes/Blogcachorro/index.jsx";

// Páginas privadas
import Dashboard from "./pages/Private/Dashboard";
import Agendar from "./pages/Private/Agendar/index.jsx";
import Veterinario from "./pages/Private/Veterinario/index.jsx";
import Sobre from "./pages/PublicRoutes/Sobre/index.jsx";
import BlogGatoVomitando from "./pages/PublicRoutes/Bloggato/index.jsx";
import BlogPetsExoticosApetite from "./pages/PublicRoutes/Blogexotico/index.jsx";
import BlogCavaloMancando from "./pages/PublicRoutes/Blogcavalo/index.jsx";


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
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
};

const RedirectToDashBoard = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/agendar"/> : children
}

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* Rotas privadas */}
          <Route path="/agendar" element={<PrivateRoute><Agendar /></PrivateRoute>} />
          <Route path="/veterinario" element={<PrivateRoute><Veterinario /></PrivateRoute>} />
          
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RedirectToDashBoard><Login /></RedirectToDashBoard>} />
          <Route path="/register" element={<Register />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/veterinario" element={<Vet />} />
          <Route path="/blogcachorro" element={<Blogcachorro />} />
          <Route path="/bloggato" element={<BlogGatoVomitando />} />
          <Route path="/blogexotico" element={<BlogPetsExoticosApetite />} />
          <Route path="/blogcavalo" element={<BlogCavaloMancando />} />
          <Route path="/estabelecimento" element={<Estabelecimento />} />
          <Route path="/cadastros" element={<Cadastros />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
