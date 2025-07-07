"use client";

import { FlipText } from "@/components/magicui/flip-text";
import { FotoConvite } from "@/components/FotoConvite";
import Maps from "@/components/maps/maps";

export default function ConvitePage() {
  // Removido o formulário de confirmação e estados relacionados

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6 mt-7">
        <div className="max-w-2xl mx-auto text-center">
          {/* Título principal */}
          <div className="mb-12">
            <FlipText />
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Junte-se a nós para uma celebração inesquecível
            </p>
          </div>
          {/* Foto do convite */}
          <div className="flex justify-center items-center mb-12">
            <FotoConvite
              src="/fotoconvite.jpeg"
              nome="Oneide Fernandes"
              idade={70}
              data="2 de Agosto"
              hora="13h00"
            />
          </div>
          {/* Detalhes do evento */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-12 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="text-center"></div>
              <div className="text-center">
                <h3 className="font-semibold text-5xl mb-10">Local</h3>
                <p className="text-white/80 mb-10">
                  Rua Doutor Boureau - Costa Azul - Salvador, BA{" "}
                </p>
                <p className="text-white/80 mb-10">Como Chegar</p>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-full">
                    <a
                      href="https://maps.app.goo.gl/m7gRyufLjmrnuTKaA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center w-full"
                    >
                      <div className="flex justify-center w-full mb-8">
                        <Maps />
                      </div>
                      <span
                        role="img"
                        aria-label="mapa"
                        className="text-2xl mr-2"
                      ></span>
                      <button className="text-white/80">
                        Ver no Google Maps
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção "Confirme sua Presença" removida */}
        </div>
      </div>
    </div>
  );
}
