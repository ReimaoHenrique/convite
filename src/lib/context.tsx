'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Convidado {
  id: string;
  nomeCompleto: string;
  confirmado: boolean;
  dataConfirmacao: Date;
}

interface ConvidadosContextType {
  convidados: Convidado[];
  adicionarConvidado: (nomeCompleto: string, confirmado: boolean) => void;
}

const ConvidadosContext = createContext<ConvidadosContextType | undefined>(undefined);

export function ConvidadosProvider({ children }: { children: ReactNode }) {
  const [convidados, setConvidados] = useState<Convidado[]>([]);

  const adicionarConvidado = (nomeCompleto: string, confirmado: boolean) => {
    const novoConvidado: Convidado = {
      id: Date.now().toString(),
      nomeCompleto,
      confirmado,
      dataConfirmacao: new Date(),
    };
    setConvidados(prev => [...prev, novoConvidado]);
  };

  return (
    <ConvidadosContext.Provider value={{ convidados, adicionarConvidado }}>
      {children}
    </ConvidadosContext.Provider>
  );
}

export function useConvidados() {
  const context = useContext(ConvidadosContext);
  if (context === undefined) {
    throw new Error('useConvidados deve ser usado dentro de um ConvidadosProvider');
  }
  return context;
}

