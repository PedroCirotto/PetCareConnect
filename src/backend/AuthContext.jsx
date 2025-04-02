import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const register = async (email, password, first_name, last_name, gender, phone, cpf) => {
        try {
            const { data } = await axios.post("http://localhost:5000/register", { 
                email, password, first_name, last_name, gender, phone, cpf 
            });

            if (!data || !data.token) {
                throw new Error("Resposta inválida do servidor.");
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            setUser(data.user);
        } catch (error) {
            console.error("Erro no cadastro", error);
            throw error.response?.data?.message || "Erro ao cadastrar. Tente novamente.";
        }
    };

    const login = async (email, password) => {
        try {
            const { data } = await axios.post("http://localhost:5000/login", { email, password });

            if (!data || !data.token) {
                throw new Error("Credenciais inválidas ou resposta inesperada do servidor.");
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            setUser(data.user);

            return { success: true, user: data.user };
        } catch (error) {
            console.error("Erro no login:", error);

            const errorMessage = error.response?.data?.message || "Erro ao realizar login. Verifique suas credenciais.";
            return { success: false, message: errorMessage };
        }
    };

    const getUsers = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/users")
            localStorage.setItem("users", JSON.stringify(data));
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, getUsers }}>
            {children}
        </AuthContext.Provider>
    );
};
