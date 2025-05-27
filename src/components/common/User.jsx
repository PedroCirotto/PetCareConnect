'use client'

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { User } from "lucide-react"

export default function DropdownMenuDemo() {
  const [tipoPet, setTipoPet] = useState("")
  const [dataConsulta, setDataConsulta] = useState("")
  const [vetSelecionado, setVetSelecionado] = useState({ nome: "Dr. João" })
  const [agendamentos, setAgendamentos] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const [dropdownAberto, setDropdownAberto] = useState(false)

  const user = typeof window !== "undefined" ? localStorage.getItem('user') : null
  const userData = user ? JSON.parse(user) : {}
  const fullName = userData ? `${userData.first_name} ${userData.last_name}` : ""

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("agendamentos") || "[]")
    setAgendamentos(data)
  }, [])

  // Hook para garantir remoção do pointer-events e overflow
  useEffect(() => {
    if (!modalAberto) {
      const timeout = setTimeout(() => {
        // Remove estilos do body
        document.body.style.removeProperty("pointer-events")
        document.body.style.removeProperty("overflow")

        // Remove pointer-events de overlays ou outros elementos
        document.querySelectorAll('[style*="pointer-events: none"]').forEach(el => {
          el.style.removeProperty('pointer-events')
        })
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [modalAberto])

  // Função para abrir modal garantindo dropdown fechado antes
  function abrirModal() {
    setDropdownAberto(false)  // Fecha dropdown
    setTimeout(() => {
      setModalAberto(true)    // Abre modal após fechamento do dropdown
    }, 150) // Delay para o dropdown fechar e liberar estilos
  }

  function agendarConsulta() {
    const novoAgendamento = {
      veterinario: vetSelecionado?.name || "Veterinário não especificado",
      tipoPet,
      dataConsulta,
      presenca: false
    }

    const atualizados = [...agendamentos, novoAgendamento]
    setAgendamentos(atualizados)
    localStorage.setItem("agendamentos", JSON.stringify(atualizados))

    setTipoPet("")
    setDataConsulta("")
    setModalAberto(false)
    alert("Consulta agendada com sucesso!")
  }

  function cancelarConsulta(index) {
    const atualizados = agendamentos.filter((_, i) => i !== index)
    setAgendamentos(atualizados)
    localStorage.setItem("agendamentos", JSON.stringify(atualizados))
  }

  function marcarPresenca(index) {
    const atualizados = [...agendamentos]
    atualizados[index].presenca = true
    setAgendamentos(atualizados)
    localStorage.setItem("agendamentos", JSON.stringify(atualizados))
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user') 
    localStorage.removeItem('agendamentos')
    window.location.href = '/'
  }

  return (
    <div className="relative inline-block">
      <DropdownMenu open={dropdownAberto} onOpenChange={setDropdownAberto}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="bg-white text-black"><User /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>{user ? fullName : 'Minha conta'}</DropdownMenuLabel>
          <DropdownMenuLabel className="text-muted-foreground">{userData?.email || 'Email'}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={abrirModal}>Consultas</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = '/veterinario'} className="font-bold">Cadastre-se como veterinario!</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="text-red-600 w-full">
            <Button className="w-full" variant="destructive">Sair</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal de Agendamento */}
      <Dialog open={modalAberto} onOpenChange={setModalAberto}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Consultas Agendadas</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {agendamentos.length === 0 ? (
              <p className="text-sm text-gray-600">Nenhuma consulta agendada.</p>
            ) : (
              agendamentos.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded border space-y-1">
                  <p className="font-medium">Veterinário: {item.veterinario}</p>
                  <p className="text-sm text-gray-700">Tipo de pet: {item.tipoPet}</p>
                  <p className="text-sm text-gray-700">Data: {item.dataConsulta}</p>
                  <p className="text-sm text-gray-700">
                    Presença: {item.presenca ? "Confirmada ✅" : "Não confirmada ❌"}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {!item.presenca && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => marcarPresenca(index)}
                      >
                        Marcar presença
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => cancelarConsulta(index)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
