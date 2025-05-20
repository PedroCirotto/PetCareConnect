import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Definição do schema de validação com Zod
const formSchema = z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    type: z.string().min(1, "Tipo é obrigatório"),
    address: z.string().min(1, "Endereço é obrigatório"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    status: z.string().min(1, "Status é obrigatório"),
});

// Lista de estabelecimentos (dados mock)
const establishments = [
    { id: 1, name: "Pet Shop X", type: "Pet Shop", address: "Rua A, 123", phone: "(11) 99999-9999", status: "Ativo" },
    { id: 2, name: "Pet Shop Y", type: "Pet Shop", address: "Rua B, 456", phone: "(11) 98888-8888", status: "Inativo" },
];

export const EstablishmentList = () => {
    // Estado para controlar a abertura do modal
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    // Função para abrir o modal
    const openModal = () => {
        setModalOpen(true);
        history.pushState({ modal: "open" }, "", "/dashboard/cadastroestabelecimento");
    };

    // Função para fechar o modal
    const closeModal = () => {
        setModalOpen(false);
        history.pushState({ modal: "closed" }, "", "/dashboard");
    };

    // Usando o react-hook-form para gerenciar o formulário
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    // Função para lidar com o cadastro do estabelecimento
    const cadastrar = async (data) => {
        try {
            setLoading(true);
            setError(null); // Limpar erros anteriores
            setSuccessMessage(""); // Limpar mensagens de sucesso

            // Enviando a requisição para a API
            const response = await fetch("http://localhost:5000/dashboard/cadastroestabelecimento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Enviar os dados do formulário
            });

            // Checando se a requisição foi bem-sucedida
            if (response.ok) {
                const result = await response.json();
                setSuccessMessage("Estabelecimento cadastrado com sucesso!");
                // Opcional: Você pode fazer algo com a resposta, como atualizar a lista de estabelecimentos
                setModalOpen(false); // Fechar o modal
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Erro ao cadastrar o estabelecimento.");
            }

            reset()
        } catch (error) {
            setError("Erro de rede ou falha na requisição.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold mb-4">Estabelecimentos Cadastrados</h2>
                <Button onClick={openModal} className="mb-4">+ Novo Estabelecimento</Button>
            </div>

            {/* Tabela de Estabelecimentos */}
            <Table className="mb-4 border rounded-md border-gray-200 ">
                <TableHeader>
                    <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Endereço</TableHead>
                        <TableHead>Contato</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {establishments.map((e) => (
                        <TableRow key={e.id}>
                            <TableCell>{e.name}</TableCell>
                            <TableCell>{e.type}</TableCell>
                            <TableCell>{e.address}</TableCell>
                            <TableCell>{e.phone}</TableCell>
                            <TableCell>{e.status}</TableCell>
                            <TableCell>
                                <Button variant="ghost" className="mr-2">Editar</Button>
                                <Button variant="destructive">Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Modal de Cadastro */}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Cadastro de Estabelecimento</h3>
                    <form onSubmit={handleSubmit(cadastrar)}>
                        {/* Campo de Nome do Estabelecimento */}
                        <div className="mb-4">
                            <Label htmlFor="name">Nome do Estabelecimento</Label>
                            <Input id="name" {...register("name")} className="mt-1" />
                            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                        </div>

                        {/* Campo de Endereço */}
                        <div className="mb-4">
                            <Label htmlFor="address">Endereço</Label>
                            <Input id="address" {...register("address")} className="mt-1" />
                            {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                        </div>

                        {/* Campo de Telefone */}
                        <div className="mb-4">
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" {...register("phone")} className="mt-1" />
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                        </div>

                        {/* Campo de Status */}
                        <div className="mb-4">
                            <Label htmlFor="status">Status (Ativo/Inativo)</Label>
                            <Input id="status" {...register("status")} className="mt-1" />
                            {errors.status && <span className="text-red-500">{errors.status.message}</span>}
                        </div>

                        {/* Campo de Tipo */}
                        <div className="mb-4">
                            <Label htmlFor="type">Tipo (Pet Shop/Clinica Veterinária)</Label>
                            <Input id="type" {...register("type")} className="mt-1" />
                            {errors.type && <span className="text-red-500">{errors.type.message}</span>}
                        </div>

                        <DialogFooter className="space-x-2">
                            <Button variant="ghost" onClick={closeModal}>Fechar</Button>
                            <Button type="submit" disabled={loading}>
                                {loading ? "Cadastrando..." : "Cadastrar"}
                            </Button>
                        </DialogFooter>
                    </form>

                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </DialogContent>
            </Dialog>
        </div>
    );
};
