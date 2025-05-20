'use client'

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area" // ✅ Importação
import Footer from "@/components/Footer"

export default function Agendar() {
  const [veterinarios, setVeterinarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filtroTeleconsulta, setFiltroTeleconsulta] = useState(false)
  const [vetSelecionado, setVetSelecionado] = useState(null)
  const [tipoPet, setTipoPet] = useState("")
  const [dataConsulta, setDataConsulta] = useState("")

  useEffect(() => {
    async function fetchVeterinarios() {
      try {
        const response = await fetch("https://682bc191d29df7a95be459c2.mockapi.io/veterinarios/veterinarios")
        if (!response.ok) throw new Error(`Erro: ${response.statusText}`)
        const data = await response.json()
        setVeterinarios(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchVeterinarios()
  }, [])

  const veterinariosFiltrados = filtroTeleconsulta
    ? veterinarios.filter(vet => vet.atendeTeleconsulta)
    : veterinarios

  function agendarConsulta() {
    const agendamento = {
      veterinario: vetSelecionado?.name,
      especialidade: vetSelecionado?.especialidade,
      tipoPet,
      dataConsulta
    }

    const agendamentosExistentes = JSON.parse(localStorage.getItem("agendamentos") || "[]")
    agendamentosExistentes.push(agendamento)
    localStorage.setItem("agendamentos", JSON.stringify(agendamentosExistentes))

    setVetSelecionado(null)
    setTipoPet("")
    setDataConsulta("")
    alert("Consulta agendada com sucesso!")
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="py-10 px-4 text-center text-gray-600">Carregando veterinários...</div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="py-10 px-4 text-center text-red-600">Erro: {error}</div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 lg:max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Veterinários</h2>

        

        {/* ScrollArea para a lista de veterinários */}
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {veterinariosFiltrados.map((vet) => (
              <div
                key={vet.id}
                className="flex flex-col md:flex-row items-center justify-between border-b pb-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={vet.imagem}
                    alt={vet.nome}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Nome: {vet.name}</h3>
                    <p className="text-sm text-gray-600">{vet.endereco}, {vet.cidade}</p>
                    {vet.atendeTeleConsulta && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        🖥️ Atende por teleconsulta
                      </span>
                    )}
                  </div>
                </div>
                <Dialog className='m-4'>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setVetSelecionado(vet)}
                      className="bg-[#00A651] hover:bg-[#009144] text-white font-semibold py-2 px-4 rounded shadow transition-transform hover:scale-95"
                    >
                      Agendar consulta
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[450px]">
                    <DialogHeader>
                      <DialogTitle>Agendar com {vetSelecionado?.nome}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tipoPet" className="text-right">Tipo de Pet</Label>
                        <Input
                          id="tipoPet"
                          value={tipoPet}
                          onChange={(e) => setTipoPet(e.target.value)}
                          className="col-span-3"
                          placeholder="Cachorro, Gato, etc."
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dataConsulta" className="text-right">Data</Label>
                        <Input
                          type="date"
                          id="dataConsulta"
                          value={dataConsulta}
                          onChange={(e) => setDataConsulta(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={agendarConsulta}
                        disabled={!tipoPet || !dataConsulta}
                      >
                        Confirmar Agendamento
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <Footer/>
    </>
  )
}
