# Site de Convite - Next.js

Um site de convite elegante e interativo construído com Next.js, TypeScript e Tailwind CSS.

## 🎉 Funcionalidades

- **Página de Convite**: Design atrativo com gradientes e animações
- **Formulário de Confirmação**: Permite que convidados confirmem ou declinem presença
- **Lista de Convidados**: Visualização em tempo real de todas as respostas
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Estado Global**: Gerenciamento de estado com React Context
- **Validação**: Validação de formulário em tempo real

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

1. **Navegue até o diretório do projeto:**
   ```bash
   cd convite-site
   ```

2. **Instale as dependências (se necessário):**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra o navegador e acesse:**
   ```
   http://localhost:3000
   ```

## 📱 Páginas

### Página Principal (/)
- Apresenta o convite com informações do evento
- Formulário para confirmação de presença
- Design com gradientes roxo/azul e elementos decorativos

### Lista de Convidados (/lista-convidados)
- Estatísticas de respostas
- Lista de convidados confirmados
- Lista de convidados que não confirmaram
- Data e hora das respostas

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Context** - Gerenciamento de estado
- **React Hooks** - useState, useContext

## 📁 Estrutura do Projeto

```
convite-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de convite
│   │   └── lista-convidados/
│   │       └── page.tsx        # Página da lista
│   ├── components/             # Componentes reutilizáveis
│   └── lib/
│       └── context.tsx         # Context para estado global
├── public/                     # Arquivos estáticos
├── package.json
└── README.md
```

## 🎨 Design

O site utiliza um design moderno com:
- Gradientes vibrantes (roxo, azul, rosa)
- Elementos decorativos com blur e animações
- Cards com backdrop-blur para efeito glassmorphism
- Botões interativos com hover effects
- Tipografia clara e hierárquica

## 📊 Funcionalidades do Formulário

- **Validação em tempo real**: Campos obrigatórios
- **Feedback visual**: Botões destacados quando selecionados
- **Reset automático**: Formulário limpa após envio
- **Mensagem de confirmação**: Feedback visual após envio

## 🔄 Estado Global

O estado dos convidados é gerenciado através de React Context, permitindo:
- Compartilhamento de dados entre páginas
- Atualização em tempo real da lista
- Persistência durante a navegação

## 🚀 Deploy

Para fazer deploy em produção:

1. **Build do projeto:**
   ```bash
   npm run build
   ```

2. **Iniciar em produção:**
   ```bash
   npm start
   ```

## 📝 Notas

- O estado é mantido apenas durante a sessão (não persiste após refresh)
- Para persistência, considere adicionar localStorage ou banco de dados
- O design é totalmente responsivo e funciona em todos os dispositivos

