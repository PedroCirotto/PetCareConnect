import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setUser(true);
        }
    }, []);

    const register = async(email, password) => {
        try {
            const { data } = await axios.post("http://localhost:5000/register", { email, password });
            console.log(data)
            localStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            setUser(true);
        } catch (error) {
            console.error("Erro no cadastro", error);
        }
    }

    const login = async (email, password) => {
        try {
            const { data } = await axios.post("http://localhost:5000/login", { email, password });
            console.log(data)
            localStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            setUser(true);
        } catch (error) {
            console.error("Erro no login", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

