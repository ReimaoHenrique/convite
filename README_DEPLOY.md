# Deploy do Projeto de Convite na Vercel

## Modificações Realizadas

### 1. API Routes Criada
- **Arquivo**: `src/app/api/convidados/route.ts`
- **Funcionalidade**: API interna para salvar dados dos convidados em JSON
- **Endpoints**:
  - `GET /api/convidados` - Buscar todos os convidados
  - `POST /api/convidados` - Adicionar novo convidado
  - `DELETE /api/convidados` - Limpar todos os convidados

### 2. Context Modificado
- **Arquivo**: `src/lib/context.tsx`
- **Mudanças**: 
  - Integração com a API interna
  - Carregamento automático dos dados
  - Tratamento de erros
  - Estados de carregamento

### 3. Página Principal Atualizada
- **Arquivo**: `src/app/page.tsx`
- **Melhorias**:
  - Tratamento de erros da API
  - Estados de carregamento
  - Feedback visual para o usuário

### 4. Configuração Vercel
- **Arquivo**: `vercel.json`
- **Configurações**: Timeout e rewrites para API Routes

## Como Fazer o Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)
1. Faça push das modificações para seu repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Importe o repositório `convite`
5. A Vercel detectará automaticamente que é um projeto Next.js
6. Clique em "Deploy"

### Opção 2: Via Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
vercel

# Seguir as instruções no terminal
```

## Estrutura de Dados

Os dados dos convidados são salvos em `data/convidados.json` com a seguinte estrutura:

```json
[
  {
    "id": "1704067200000",
    "nomeCompleto": "João Silva",
    "confirmado": true,
    "dataConfirmacao": "2024-01-01T12:00:00.000Z"
  }
]
```

## Funcionalidades

### ✅ Implementado
- [x] Formulário de confirmação de presença
- [x] Salvamento persistente em JSON
- [x] Lista de convidados com estatísticas
- [x] API Routes para gerenciar dados
- [x] Tratamento de erros
- [x] Estados de carregamento
- [x] Interface responsiva

### 🔄 Persistência de Dados
- Os dados são salvos localmente no servidor da Vercel
- **Importante**: Na Vercel, os dados podem ser perdidos entre deploys
- Para produção, considere usar um banco de dados externo (Vercel KV, PlanetScale, etc.)

## Acessando os Dados

### Via Interface Web
- Página principal: `/` (formulário de confirmação)
- Lista de convidados: `/lista-convidados`

### Via API
- `GET /api/convidados` - Listar todos
- `POST /api/convidados` - Adicionar novo
- `DELETE /api/convidados` - Limpar todos

## Observações Importantes

1. **Dados Temporários**: Na Vercel, o sistema de arquivos é temporário. Para dados permanentes, use um banco de dados.

2. **Backup**: Considere implementar backup automático dos dados para um serviço externo.

3. **Monitoramento**: Monitore os logs da Vercel para identificar possíveis erros.

4. **Performance**: A API atual é adequada para eventos pequenos/médios. Para muitos convidados, considere otimizações.

## Próximos Passos (Opcional)

- Integrar com banco de dados (Vercel KV, Supabase, etc.)
- Adicionar autenticação para área administrativa
- Implementar notificações por email
- Adicionar exportação de dados (CSV/Excel)
- Implementar backup automático

