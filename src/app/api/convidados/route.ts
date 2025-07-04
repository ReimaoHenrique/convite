import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export interface Convidado {
  id: string;
  nomeCompleto: string;
  confirmado: boolean;
  dataConfirmacao: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "convidados.json");

// Função para garantir que o diretório data existe
async function ensureDataDirectory() {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Função para ler os dados do arquivo JSON
async function readConvidados(): Promise<Convidado[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    // Se o arquivo não existir, retorna array vazio
    return [];
  }
}

// Função para salvar os dados no arquivo JSON
async function writeConvidados(convidados: Convidado[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(DATA_FILE, JSON.stringify(convidados, null, 2));
}

// GET - Buscar todos os convidados
export async function GET() {
  try {
    const convidados = await readConvidados();
    return NextResponse.json(convidados);
  } catch (error) {
    console.error("Erro ao buscar convidados:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// POST - Adicionar novo convidado
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nomeCompleto, confirmado } = body;

    if (!nomeCompleto || typeof confirmado !== "boolean") {
      return NextResponse.json(
        { error: "Nome completo e confirmação são obrigatórios" },
        { status: 400 }
      );
    }

    const convidados = await readConvidados();

    const novoConvidado: Convidado = {
      id: Date.now().toString(),
      nomeCompleto,
      confirmado,
      dataConfirmacao: new Date().toISOString(),
    };

    convidados.push(novoConvidado);
    await writeConvidados(convidados);

    return NextResponse.json(novoConvidado, { status: 201 });
  } catch (error) {
    console.error("Erro ao adicionar convidado:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// DELETE - Limpar todos os convidados (útil para testes)
export async function DELETE() {
  try {
    await writeConvidados([]);
    return NextResponse.json({
      message: "Todos os convidados foram removidos",
    });
  } catch (error) {
    console.error("Erro ao limpar convidados:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
