  import { useContext } from "react";
  import { FaUser, FaLock } from "react-icons/fa";
  import { AuthContext } from "../../../backend/AuthContext.jsx";
  import styled from "styled-components";
  import { useNavigate } from "react-router-dom";
  import { z } from "zod";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

  const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(40, 175, 130);
  `;

  const formSchema = z
    .object({
      firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
      lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
      age: z.coerce.number().min(1, "Idade inválida"),
      gender: z.string().min(1, "Gênero é obrigatório"),
      phone: z.string().min(10, "Número inválido"),
      cpfCnpj: z
      .string({
        required_error: 'CPF/CNPJ é obrigatório.',
      })
      .refine((doc) => {
        const replacedDoc = doc.replace(/\D/g, '');
        return replacedDoc.length >= 11;
      }, 'CPF/CNPJ deve conter no mínimo 11 caracteres.')
      .refine((doc) => {
        const replacedDoc = doc.replace(/\D/g, '');
        return replacedDoc.length <= 14;
      }, 'CPF/CNPJ deve conter no máximo 14 caracteres.')
      .refine((doc) => {
        const replacedDoc = doc.replace(/\D/g, '');
        return !!Number(replacedDoc);
      }, 'CPF/CNPJ deve conter apenas números.'),
      email: z.string().email("E-mail inválido"),
      password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
    });

  const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const form = useForm({
      resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
      console.log("Dados de Registro: ", data);
      try {
        await register(
          data.email,
          data.password,
          data.firstName,
          data.lastName,
          data.gender,
          data.phone,
          data.cpfCnpj
        );
        navigate("/dashboard");
        alert("Usuário criado com sucesso.");
      } catch (error) {
        console.error("Erro no cadastro", error);
        alert("Erro no cadastro");
      }
    };

    return (
      <Main>
        <div className="container">
          <h1 className="pb-5">Registrar</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite seu nome" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite seu sobrenome" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="Digite seu email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <FormField control={form.control} name="password" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="Digite sua senha" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar Senha</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="Confirme sua senha" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="age" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua Idade</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} placeholder="Digite sua idade" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="gender" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu Genero</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="Genero" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de Celular</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} placeholder="Celular" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="cpfCnpj" render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="CPF" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              
              <Button type="submit" className="w-full">Cadastrar</Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            <p>Já tem uma conta? <a href="/login" className="text-blue-500">Login</a></p>
          </div>
        </div>
      </Main>
    );
  };

  export default Register;