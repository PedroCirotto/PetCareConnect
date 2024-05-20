// import styled from "styled-components";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { response } from "express";

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background-color: #c8e6c9;
//   margin-top: 15rem;
//   height: 100vh;

//   th,
//   td {
//     padding: 12px;
//     border: 1px solid #a5d6a7;
//     text-align: left;
//   }

//   th {
//     background-color: #388e3c;
//     color: white;
//   }

//   tr:nth-child(even) {
//     background-color: #a5d6a7;
//   }

//   tr:hover {
//     background-color: #81c784;
//   }
// `;

// function CadastroForm() {
//   const [veterinarios, setVeterinarios] = useState([]);

//   useEffect(() => {
//     const fetchVeterinarios = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/veterinarios");
//         setVeterinarios(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar veterinários:", error);
//       }
//     };

//     fetchVeterinarios();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Table>
//         <thead>
//           <tr>
//             <Th>ID Veterinário</Th>
//             <Th>ID Clínica</Th>
//             <Th>Nome</Th>
//             <Th>Nascimento</Th>
//             <Th>Graduação</Th>
//             <Th>Experiência</Th>
//           </tr>
//         </thead>
//         <tbody>
//           {veterinarios.map((vet) => (
//             <Tr key={vet.idVeterinario}>
//               <Td>{vet.idVeterinario}</Td>
//               <Td>{vet.idClinica}</Td>
//               <Td>{vet.nome}</Td>
//               <Td>{vet.nascimento}</Td>
//               <Td>{vet.graduacao}</Td>
//               <Td>{vet.experiencia}</Td>
//             </Tr>
//           ))}
//         </tbody>
//       </Table>
//       <Footer />
//     </div>
//   );
// }

// export default CadastroForm;
