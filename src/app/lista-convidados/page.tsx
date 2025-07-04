'use client';

import { useConvidados } from '@/lib/context';
import Link from 'next/link';

export default function ListaConvidadosPage() {
  const { convidados } = useConvidados();

  const convidadosConfirmados = convidados.filter(c => c.confirmado);
  const convidadosNaoConfirmados = convidados.filter(c => !c.confirmado);

  const formatarData = (data: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navegação */}
      <nav className="relative z-10 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Lista de Convidados</h1>
          <Link 
            href="/"
            className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Voltar ao Convite
          </Link>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12">
        {/* Estatísticas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">{convidados.length}</div>
            <div className="text-white/80">Total de Respostas</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-lg border border-green-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">{convidadosConfirmados.length}</div>
            <div className="text-green-200">Confirmados</div>
          </div>
          <div className="bg-red-500/20 backdrop-blur-lg border border-red-400/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-red-300 mb-2">{convidadosNaoConfirmados.length}</div>
            <div className="text-red-200">Não Confirmados</div>
          </div>
        </div>

        {convidados.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-3xl font-bold text-white mb-4">Nenhuma resposta ainda</h2>
            <p className="text-white/80 text-lg mb-8">
              Aguardando as primeiras confirmações dos convidados.
            </p>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Ir para o Convite
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lista de Confirmados */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">✅</div>
                <h2 className="text-2xl font-bold text-white">Confirmados ({convidadosConfirmados.length})</h2>
              </div>
              
              {convidadosConfirmados.length === 0 ? (
                <p className="text-white/60 text-center py-8">Nenhum convidado confirmado ainda.</p>
              ) : (
                <div className="space-y-4">
                  {convidadosConfirmados.map((convidado) => (
                    <div 
                      key={convidado.id}
                      className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 hover:bg-green-500/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-green-100 text-lg">{convidado.nomeCompleto}</h3>
                          <p className="text-green-200/80 text-sm">
                            Confirmado em {formatarData(convidado.dataConfirmacao)}
                          </p>
                        </div>
                        <div className="text-green-300 text-xl">🎉</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Lista de Não Confirmados */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">❌</div>
                <h2 className="text-2xl font-bold text-white">Não Confirmados ({convidadosNaoConfirmados.length})</h2>
              </div>
              
              {convidadosNaoConfirmados.length === 0 ? (
                <p className="text-white/60 text-center py-8">Todos os convidados confirmaram presença! 🎉</p>
              ) : (
                <div className="space-y-4">
                  {convidadosNaoConfirmados.map((convidado) => (
                    <div 
                      key={convidado.id}
                      className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 hover:bg-red-500/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-red-100 text-lg">{convidado.nomeCompleto}</h3>
                          <p className="text-red-200/80 text-sm">
                            Respondeu em {formatarData(convidado.dataConfirmacao)}
                          </p>
                        </div>
                        <div className="text-red-300 text-xl">😔</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

