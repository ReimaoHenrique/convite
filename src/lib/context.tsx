"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface Convidado {
  id: string;
  nomeCompleto: string;
  confirmado: boolean;
  dataConfirmacao: Date;
}

type ConvidadoAPI = Omit<Convidado, "dataConfirmacao"> & {
  dataConfirmacao: string;
};

interface ConvidadosContextType {
  convidados: Convidado[];
  adicionarConvidado: (
    nomeCompleto: string,
    confirmado: boolean
  ) => Promise<void>;
  carregando: boolean;
  erro: string | null;
}

const ConvidadosContext = createContext<ConvidadosContextType | undefined>(
  undefined
);

export function ConvidadosProvider({ children }: { children: ReactNode }) {
  const [convidados, setConvidados] = useState<Convidado[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  // Carregar convidados ao inicializar
  useEffect(() => {
    carregarConvidados();
  }, []);

  const carregarConvidados = async () => {
    try {
      setCarregando(true);
      setErro(null);

      const response = await fetch("/api/convidados");
      if (!response.ok) {
        throw new Error("Erro ao carregar convidados");
      }

      const data: ConvidadoAPI[] = await response.json();

      // Converter strings de data de volta para objetos Date
      const convidadosComData: Convidado[] = data.map((convidado) => ({
        ...convidado,
        dataConfirmacao: new Date(convidado.dataConfirmacao),
      }));

      setConvidados(convidadosComData);
    } catch (error) {
      console.error("Erro ao carregar convidados:", error);
      setErro("Erro ao carregar dados dos convidados");
    } finally {
      setCarregando(false);
    }
  };

  const adicionarConvidado = async (
    nomeCompleto: string,
    confirmado: boolean
  ) => {
    try {
      setErro(null);

      const response = await fetch("/api/convidados", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeCompleto,
          confirmado,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar convidado");
      }

      const novoConvidado: ConvidadoAPI = await response.json();

      // Converter string de data para objeto Date
      const convidadoComData: Convidado = {
        ...novoConvidado,
        dataConfirmacao: new Date(novoConvidado.dataConfirmacao),
      };

      setConvidados((prev) => [...prev, convidadoComData]);
    } catch (error) {
      console.error("Erro ao adicionar convidado:", error);
      setErro("Erro ao salvar confirmação");
      throw error; // Re-throw para que o componente possa tratar o erro
    }
  };

  return (
    <ConvidadosContext.Provider
      value={{
        convidados,
        adicionarConvidado,
        carregando,
        erro,
      }}
    >
      {children}
    </ConvidadosContext.Provider>
  );
}

export function useConvidados() {
  const context = useContext(ConvidadosContext);
  if (context === undefined) {
    throw new Error(
      "useConvidados deve ser usado dentro de um ConvidadosProvider"
    );
  }
  return context;
}
