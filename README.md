# 🏆 FutPaixão - Pipeline CI/CD com GitHub Actions

Repositório da disciplina de DevOps, contendo a implementação de uma pipeline CI/CD automatizada com foco em build, testes e deploy contínuo para uma aplicação de futebol moderna.

## 📋 Sobre o Projeto

FutPaixão é uma landing page interativa e moderna com tema de futebol brasileiro, desenvolvida com Next.js, React e Tailwind CSS. O projeto implementa um pipeline completo de CI/CD usando GitHub Actions para automatizar testes, builds e deployments.

## 🚀 Funcionalidades

- **Landing Page Responsiva**: Design moderno com tema de futebol brasileiro
- **Animações Interativas**: Efeitos parallax e animações suaves
- **Pipeline CI/CD Completa**: Integração e entrega contínua automatizada
- **Testes Automatizados**: Cobertura de testes com Jest e Testing Library
- **Deploy Automático**: Deploy para staging e produção via Vercel

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos

### DevOps & CI/CD
- **GitHub Actions** - Automação de workflows
- **Jest** - Framework de testes
- **Testing Library** - Utilitários para testes de componentes
- **Vercel** - Plataforma de deploy
- **ESLint** - Linting de código
- **Prettier** - Formatação de código

## 📁 Estrutura do Projeto

\`\`\`
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline CI/CD
├── app/
│   ├── globals.css             # Estilos globais
│   ├── layout.tsx              # Layout principal
│   └── page.tsx                # Página inicial
├── components/
│   └── ui/                     # Componentes de UI
├── src/
│   └── utils/
│       └── football.ts         # Utilitários do futebol
├── tests/
│   ├── setup.ts                # Configuração dos testes
│   └── football.test.ts        # Testes unitários
├── public/                     # Arquivos estáticos
├── jest.config.js              # Configuração do Jest
├── package.json                # Dependências e scripts
└── README.md                   # Documentação
\`\`\`

## 🔧 Pipeline CI/CD

### Workflow Automatizado

O pipeline é executado automaticamente em:
- **Push** para branches `main` e `develop`
- **Pull Requests** para branch `main`

### Etapas do Pipeline

#### 1. **Testes (Test Job)**
- ✅ Checkout do código
- ✅ Setup do Node.js (versões 18.x e 20.x)
- ✅ Instalação de dependências
- ✅ Linting com ESLint
- ✅ Verificação de tipos TypeScript
- ✅ Execução de testes unitários
- ✅ Upload de cobertura de testes

#### 2. **Build (Build Job)**
- ✅ Build da aplicação Next.js
- ✅ Upload dos artefatos de build

#### 3. **Deploy Staging**
- ✅ Deploy automático para ambiente de staging (branch `develop`)
- ✅ Comentário automático em PRs com URL de preview

#### 4. **Deploy Produção**
- ✅ Deploy automático para produção (branch `main`)
- ✅ Deploy com flag `--prod` no Vercel

#### 5. **Notificações**
- ✅ Notificações no Slack para sucesso/falha
- ✅ Alertas em tempo real sobre status do deploy

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm 8+
- Conta no GitHub
- Conta no Vercel (para deploy)

### Instalação Local

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/futpaixao-app.git
cd futpaixao-app
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Execute em modo desenvolvimento**
\`\`\`bash
npm run dev
\`\`\`

4. **Execute os testes**
\`\`\`bash
npm run test
\`\`\`

5. **Execute o build**
\`\`\`bash
npm run build
\`\`\`

### Scripts Disponíveis

\`\`\`bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run test         # Executa testes
npm run test:watch   # Testes em modo watch
npm run test:ci      # Testes para CI com cobertura
npm run lint         # Linting do código
npm run type-check   # Verificação de tipos
npm run format       # Formatação do código
\`\`\`

## ⚙️ Configuração do Pipeline

### Variáveis de Ambiente Necessárias

Configure as seguintes secrets no GitHub:

#### Vercel Deploy
\`\`\`bash
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
\`\`\`

#### Notificações Slack (Opcional)
\`\`\`bash
SLACK_WEBHOOK_URL=your_slack_webhook_url
\`\`\`

### Como Configurar

1. **Acesse Settings > Secrets and variables > Actions** no seu repositório GitHub

2. **Adicione as secrets necessárias**:
   - `VERCEL_TOKEN`: Token de acesso do Vercel
   - `VERCEL_ORG_ID`: ID da organização no Vercel
   - `VERCEL_PROJECT_ID`: ID do projeto no Vercel
   - `SLACK_WEBHOOK_URL`: URL do webhook do Slack (opcional)

3. **Configure os ambientes**:
   - Crie ambientes `staging` e `production` em Settings > Environments
   - Configure regras de proteção se necessário

## 📊 Cobertura de Testes

O projeto mantém cobertura mínima de:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

### Executar Testes com Cobertura
\`\`\`bash
npm run test:coverage
\`\`\`

## 🔄 Fluxo de Trabalho

### Para Desenvolvimento
1. Crie uma branch a partir de `develop`
2. Faça suas alterações
3. Execute testes localmente: `npm run test`
4. Faça commit e push
5. Abra um Pull Request para `develop`
6. O pipeline executará automaticamente
7. Após aprovação, merge para `develop` (deploy staging)

### Para Produção
1. Abra Pull Request de `develop` para `main`
2. Após aprovação e merge, deploy automático para produção

## 🐛 Troubleshooting

### Problemas Comuns

**Falha nos testes**
\`\`\`bash
# Execute localmente para debug
npm run test:watch
\`\`\`

**Erro de build**
\`\`\`bash
# Verifique tipos TypeScript
npm run type-check

# Execute build local
npm run build
\`\`\`

**Deploy falhou**
- Verifique se as secrets do Vercel estão configuradas
- Confirme se o projeto existe no Vercel
- Verifique logs no GitHub Actions

## 📈 Monitoramento

- **GitHub Actions**: Logs detalhados de cada execução
- **Vercel Dashboard**: Métricas de performance e deploy
- **Slack Notifications**: Alertas em tempo real (se configurado)

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit
\`\`\`
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou modifica testes
chore: tarefas de manutenção
\`\`\`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Disciplina de DevOps
- Comunidade Next.js
- Vercel pela plataforma de deploy
- GitHub Actions pela automação

---

**⚽ Feito com paixão pelo futebol brasileiro! 🇧🇷**
