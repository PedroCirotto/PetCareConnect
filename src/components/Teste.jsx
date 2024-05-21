import React, { useState } from "react";
import axios from "axios";

const Tutores = () => {
  const [formCliente, setFormCliente] = useState({
    nome_completo: "",
    email: "",
    telefone: "",
    endereco: "",
  });

  const [formPet, setFormPet] = useState({
    nome_pet: "",
    tipo_pet: "",
    raca: "",
    idade: "",
    peso: "",
    observacoes: "",
  });

  const handleChangeCliente = (e) => {
    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePet = (e) => {
    setFormPet({
      ...formPet,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      cliente: formCliente,
      pet: formPet,
    };
    try {
      await axios.post("http://localhost:3001/tutores", data);
      // Limpar os formulários após a submissão
      setFormCliente({
        nome_completo: "",
        email: "",
        telefone: "",
        endereco: "",
      });
      setFormPet({
        nome_pet: "",
        tipo_pet: "",
        raca: "",
        idade: "",
        peso: "",
        observacoes: "",
      });
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <div>
      <h1>Tutores</h1>
      <form onSubmit={handleSubmit}>
        <h2>Cliente</h2>
        <input
          name="nome_completo"
          value={formCliente.nome_completo}
          onChange={handleChangeCliente}
          placeholder="Nome Completo"
        />
        <input
          name="email"
          value={formCliente.email}
          onChange={handleChangeCliente}
          placeholder="Email"
        />
        <input
          name="telefone"
          value={formCliente.telefone}
          onChange={handleChangeCliente}
          placeholder="Telefone"
        />
        <input
          name="endereco"
          value={formCliente.endereco}
          onChange={handleChangeCliente}
          placeholder="Endereço"
        />

        <h2>Pet</h2>
        <input
          name="nome_pet"
          value={formPet.nome_pet}
          onChange={handleChangePet}
          placeholder="Nome do Pet"
        />
        <input
          name="tipo_pet"
          value={formPet.tipo_pet}
          onChange={handleChangePet}
          placeholder="Tipo de Pet"
        />
        <input
          name="raca"
          value={formPet.raca}
          onChange={handleChangePet}
          placeholder="Raça"
        />
        <input
          name="idade"
          value={formPet.idade}
          onChange={handleChangePet}
          placeholder="Idade"
        />
        <input
          name="peso"
          value={formPet.peso}
          onChange={handleChangePet}
          placeholder="Peso (kg)"
        />
        <input
          name="observacoes"
          value={formPet.observacoes}
          onChange={handleChangePet}
          placeholder="Observações"
        />

        <button type="submit">Adicionar Tutor e Pet</button>
      </form>
    </div>
  );
};

export default Tutores;
