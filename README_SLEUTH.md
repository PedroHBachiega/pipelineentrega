# 🚀 Configuração Sleuth + Vercel - Métricas DORA

## ✅ O que foi configurado automaticamente:

### 1. **GitHub Actions Workflows**
- `/.github/workflows/deploy-production.yml` - Pipeline de deploy para produção
- `/.github/workflows/ci.yml` - Pipeline de CI/CD para testes

### 2. **Scripts de Deploy**
- `/deploy.sh` - Script de deploy para Vercel
- `/validate-sleuth-setup.sh` - Script para validar a configuração
- `/get-vercel-info.sh` - Script para obter informações do Vercel

### 3. **Documentação**
- `VERCEL_SLEUTH_SETUP.md` - Guia completo para Vercel + Sleuth
- `SLEUTH_SETUP_GUIDE.md` - Guia geral (referência)
- `README_SLEUTH.md` - Este arquivo com resumo

## 🔧 Próximos passos MANUAIS necessários:

### **Passo 4: Configurar Secrets no GitHub**
Configure 4 secrets em **Settings** → **Secrets and variables** → **Actions**:

| Secret | Como obter |
|--------|------------|
| `VERCEL_TOKEN` | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | vercel.com/teams/settings |
| `VERCEL_PROJECT_ID` | Vercel project settings |
| `SLEUTH_API_KEY` | sleuth.io → projeto → API Keys |

Execute `./get-vercel-info.sh` para ajuda com as credenciais.

### **Passo 5: Configurar Ambiente no Sleuth**
1. No Sleuth → Seu projeto → **Environments**
2. Adicione ambiente chamado: `production` (exatamente assim)
3. Configure integrações necessárias

### **Passo 6: Configurar Projeto no Vercel**
Se ainda não tem projeto no Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login e configurar
vercel login
vercel

# Deploy inicial
vercel --prod
```

#### Para Netlify:
```bash
# Instalar Netlify CLI  
npm i -g netlify-cli

# No deploy.sh:
npm run build
netlify deploy --prod --dir=out
```

#### Para servidor próprio:
```bash
# Exemplo com rsync
rsync -avz --delete .next/ user@server:/var/www/app/
ssh user@server "pm2 restart app"
```

## 🧪 Como testar:

### **Teste Local:**
```bash
# Obter informações do Vercel
./get-vercel-info.sh

# Validar configuração
./validate-sleuth-setup.sh

# Testar deploy (com token)
VERCEL_TOKEN=seu_token ./deploy.sh
```

### **Teste no GitHub:**
1. Commit e push na branch `main`
2. Verifique em **Actions** se o workflow executou
3. Confirme no Sleuth se recebeu a notificação

## 📊 Métricas DORA que serão coletadas:

1. **Deployment Frequency** - Frequência de deploys
2. **Lead Time for Changes** - Tempo do commit ao deploy  
3. **Change Failure Rate** - % de deploys com falha
4. **Mean Time to Recovery** - Tempo para recuperação

## 🎯 Status Atual:

- ✅ Workflows criados (adaptados para Vercel)
- ✅ Scripts configurados para Vercel
- ⏳ **PENDENTE**: Configurar 4 secrets no GitHub
- ⏳ **PENDENTE**: Configurar ambiente 'production' no Sleuth
- ⏳ **PENDENTE**: Configurar projeto no Vercel (se necessário)
- ⏳ **PENDENTE**: Testar pipeline completo

## 📞 Próximo passo:
1. Execute `./get-vercel-info.sh` para obter credenciais
2. Configure os 4 secrets seguindo o **Passo 4** acima
3. Veja `VERCEL_SLEUTH_SETUP.md` para instruções detalhadas!
