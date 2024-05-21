import axios from 'axios';

const API_URL = 'http://localhost:3001'; // substitua pela URL da sua API

// Clientes API

export const getClientes = async () => {
    try {
        const response = await axios.get(`${API_URL}/clientes`);
        return response;
    } catch (error) {
        console.error('Erro ao obter clientes:', error);
        throw error;
    }
};

export const createCliente = async (cliente) => {
    try {
        const response = await axios.post(`${API_URL}/clientes`, cliente);
        return response;
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        throw error;
    }
};

export const updateCliente = async (id, cliente) => {
    try {
        const response = await axios.put(`${API_URL}/clientes/${id}`, cliente);
        return response;
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        throw error;
    }
};

export const deleteCliente = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/clientes/${id}`);
        return response;
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
        throw error;
    }
};

// Pets API

export const getPets = async () => {
    try {
        const response = await axios.get(`${API_URL}/pets`);
        return response;
    } catch (error) {
        console.error('Erro ao obter pets:', error);
        throw error;
    }
};

export const createPet = async (pet) => {
    try {
        const response = await axios.post(`${API_URL}/pets`, pet);
        return response;
    } catch (error) {
        console.error('Erro ao criar pet:', error);
        throw error;
    }
};

export const updatePet = async (id, pet) => {
    try {
        const response = await axios.put(`${API_URL}/pets/${id}`, pet);
        return response;
    } catch (error) {
        console.error('Erro ao atualizar pet:', error);
        throw error;
    }
};

export const deletePet = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/pets/${id}`);
        return response;
    } catch (error) {
        console.error('Erro ao deletar pet:', error);
        throw error;
    }
};
