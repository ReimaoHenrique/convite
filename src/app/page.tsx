"use client";

import { useState } from "react";
import { useConvidados } from "@/lib/context";
import { Confetti } from "@/components/magicui/confetti";
import { FlipText } from "@/components/magicui/flip-text";
import { FotoConvite } from "@/components/FotoConvite";
import Maps from "@/components/maps/maps";

export default function ConvitePage() {
  const { adicionarConvidado, erro } = useConvidados();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [confirmado, setConfirmado] = useState<boolean | null>(null);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nomeCompleto.trim() && confirmado !== null) {
      try {
        setEnviando(true);
        await adicionarConvidado(nomeCompleto.trim(), confirmado);
        setEnviado(true);
        setTimeout(() => {
          setNomeCompleto("");
          setConfirmado(null);
          setEnviado(false);
        }, 3000);
      } catch (error) {
        // Erro já é tratado no context
        console.error('Erro ao enviar confirmação:', error);
      } finally {
        setEnviando(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Confetti ao enviar confirmação */}
      {enviado && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <Confetti className="w-full h-full absolute inset-0" />
        </div>
      )}

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

          {/* Formulário de confirmação */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Confirme sua Presença
            </h3>

            {/* Exibir erro se houver */}
            {erro && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 mb-6">
                <p className="text-red-200">{erro}</p>
              </div>
            )}

            {enviado ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✨</div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Obrigado!
                </h4>
                <p className="text-white/80">
                  Sua resposta foi registrada com sucesso.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-white font-medium mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                    placeholder="Digite seu nome completo"
                    required
                    disabled={enviando}
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-4">
                    Você confirma sua presença?
                  </label>
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => setConfirmado(true)}
                      disabled={enviando}
                      className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                        confirmado === true
                          ? "bg-green-500 text-white shadow-lg scale-105"
                          : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                      } ${enviando ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      ✅ Sim, estarei presente!
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmado(false)}
                      disabled={enviando}
                      className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                        confirmado === false
                          ? "bg-red-500 text-white shadow-lg scale-105"
                          : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                      } ${enviando ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      ❌ Não poderei comparecer
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!nomeCompleto.trim() || confirmado === null || enviando}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {enviando ? 'Enviando...' : 'Enviar Confirmação'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Foto do convite */}
    </div>
  );
}

