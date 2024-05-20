import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import { createGlobalStyle } from "styled-components";
import Tutores from "./pages/Tutores";
import Vet from "./pages/Vet";
import Estabelecimento from "./pages/Estabelecimento";
// import Users from "./pages/Users";

const GlobalStyle = createGlobalStyle`
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
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/veterinario" element={<Vet />} />
          <Route path="/estabelecimento" element={<Estabelecimento />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
