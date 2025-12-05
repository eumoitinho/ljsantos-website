"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import ContactForm from "./contact-form"

export default function WhatsAppButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  // Safely get the current path on the client side
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const handleFormSubmit = () => {
    // Redirecionar para o WhatsApp após o envio do formulário
    const whatsappNumber = "554799830386" // Substitua pelo número correto
    const message = "Olá! Gostaria de mais informações sobre os produtos da LJ Santos."
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
    setIsFormOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="whatsapp-button animate-pulse-slow"
        aria-label="Contato via WhatsApp"
        data-source-page={currentPath || "/"}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative animate-zoomIn">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Fechar formulário"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#25d366] p-2 rounded-full">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Contato via WhatsApp</h3>
              </div>

              <p className="text-gray-600 mb-6">Preencha seus dados para iniciarmos uma conversa pelo WhatsApp:</p>

              <ContactForm
                isWhatsApp
                onSuccess={handleFormSubmit}
                sourcePage={currentPath || "/"}
                sourceType="botao-site"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
