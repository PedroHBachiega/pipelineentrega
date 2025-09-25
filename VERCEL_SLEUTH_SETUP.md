# 🚀 Configuração Sleuth + Vercel - Guia Completo

## ✅ Configuração Atual
- ✅ Workflow GitHub Actions configurado para Vercel
- ✅ Script de deploy adaptado para Vercel
- ⏳ **PENDENTE**: Configurar secrets do Vercel

---

## 🔧 Passo a Passo para Configurar Vercel + Sleuth

### **1. Obter credenciais do Vercel**

#### **A. Token de Acesso:**
1. Vá em [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Clique em **Create Token**
3. Nome: `GitHub Actions Deploy`
4. Escopo: **Full Account**
5. Copie o token gerado

#### **B. Organization ID:**
1. Vá em [vercel.com/teams/settings](https://vercel.com/teams/settings)
2. Na seção **General**, copie o **Team ID** (ou **Organization ID**)

#### **C. Project ID:**
1. No seu projeto no Vercel → **Settings** → **General**
2. Copie o **Project ID**
3. OU execute: `vercel inspect seu-dominio.vercel.app --token SEU_TOKEN`

### **2. Configurar Secrets no GitHub**

No seu repositório GitHub, vá em **Settings** → **Secrets and variables** → **Actions**:

| Nome do Secret | Valor | Onde obter |
|---|---|---|
| `VERCEL_TOKEN` | Token gerado no passo 1A | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Organization/Team ID | vercel.com/teams/settings |
| `VERCEL_PROJECT_ID` | Project ID | Vercel project settings |
| `SLEUTH_API_KEY` | API Key do Sleuth | sleuth.io → projeto → API Keys |

### **3. Configurar projeto no Vercel (se ainda não existe)**

#### **Opção A: Via Vercel CLI (local)**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Configurar projeto
vercel

# Deploy inicial
vercel --prod
```

#### **Opção B: Via Vercel Dashboard**
1. Vá em [vercel.com/new](https://vercel.com/new)
2. Importe seu repositório GitHub
3. Configure as variáveis de ambiente se necessário
4. Deploy automático será feito

### **4. Configurar Sleuth**

1. **No Sleuth.io:**
   - Projeto → **Environments** → Add: `production`
   - Integrations → **GitHub** (se ainda não configurado)

2. **Obter API Key:**
   - Sleuth → Projeto → **Settings** → **API Keys**
   - Copie a chave e adicione como secret `SLEUTH_API_KEY`

---

## 🧪 Como Testar

### **Teste Local:**
```bash
# Testar script de deploy
./deploy.sh

# Ou com token
VERCEL_TOKEN=seu_token ./deploy.sh
```

### **Teste no GitHub:**
```bash
# Fazer commit e push
git add .
git commit -m "feat: configurar deploy Vercel + Sleuth"
git push origin main
```

### **Verificar:**
1. **GitHub Actions:** Vá em **Actions** → workflow deve executar
2. **Vercel:** Deploy deve aparecer no dashboard
3. **Sleuth:** Deve receber notificação do deploy

---

## 📊 Métricas DORA com Vercel

Após configurar, você terá:

### **Deployment Frequency**
- Cada push na `main` → deploy automático
- Sleuth conta frequência automaticamente

### **Lead Time for Changes**
- Tempo do commit até deploy no Vercel
- Calculado automaticamente pelo Sleuth

### **Change Failure Rate**
- Se deploy falhar → Sleuth detecta
- Configure alertas no Vercel para incidentes

### **Mean Time to Recovery**
- Configure GitHub Issues com labels `incident`
- Ou integre com Sentry/Datadog

---

## 🔧 Configurações Avançadas

### **A. Variáveis de Ambiente no Vercel:**
```bash
# Via CLI
vercel env add NEXT_PUBLIC_API_URL production

# Ou no dashboard: Project → Settings → Environment Variables
```

### **B. Configurar Domínio Customizado:**
```bash
# Via CLI
vercel domains add meudominio.com

# Ou no dashboard: Project → Settings → Domains
```

### **C. Preview Deployments:**
- Cada PR gera um preview automaticamente
- Configure Sleuth para ambiente `staging` se quiser métricas de preview

---

## 🚨 Troubleshooting

### **Deploy falha no GitHub Actions:**
```yaml
# Verificar logs em Actions → workflow → step "Deploy to Vercel"
# Erros comuns:
- VERCEL_TOKEN inválido ou expirado
- VERCEL_PROJECT_ID incorreto  
- Build falhou (verificar npm run build localmente)
```

### **Sleuth não recebe dados:**
```yaml
# Verificar:
- SLEUTH_API_KEY está correto
- Ambiente no Sleuth é exatamente "production"
- Deploy foi bem-sucedido (step anterior)
```

### **Script local não funciona:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer login
vercel login

# Testar deploy
vercel --prod
```

---

## ✅ Checklist Final

- [ ] Secrets configurados no GitHub (4 secrets)
- [ ] Projeto existe no Vercel
- [ ] Ambiente `production` configurado no Sleuth
- [ ] Teste local funcionando: `./deploy.sh`
- [ ] Teste GitHub Actions: push na main
- [ ] Sleuth recebendo dados de deploy
- [ ] Métricas DORA aparecendo no dashboard

---

## 🎯 Próximo Passo

**Configure os 4 secrets no GitHub** seguindo o **Passo 2** acima, depois faça um push para testar!
