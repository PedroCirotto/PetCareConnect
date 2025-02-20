import "./login.css";
import { useState, useContext, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { AuthContext } from "../../../backend/AuthContext.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(40, 175, 130);
`;

const formSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});



const Login = () => {  
  const { login } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const watchedValues = form.watch();
  
  useEffect(() => {
    console.log("Form atualizado", watchedValues)
  }, [watchedValues])
  
  const onSubmit = async (data) => {
    console.log("Dados de Login:", data);
    const response = await login(data.email, data.password);

    if (response.success) {
      navigate("/dashboard");
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      alert("Erro no login");

  }
  };

  return (
    <Main>
      <div className="container">
        <h1>Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu e-mail" {...field} />
                  </FormControl>
                  <FormDescription>
                    Use um e-mail válido para acessar sua conta.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Digite sua senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center">
            <Button type="submit">Entrar</Button>
            <div className="text-center mt-4">
              <p>Não tem uma conta? <a href="/register" className="text-blue-800">Register</a></p>
            </div>
           </div>
          </form>
        </Form>
      </div>
    </Main>
  );
};

export default Login;
