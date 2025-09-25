# 🔧 Troubleshooting Sleuth Integration

## 🚨 Problema: Deploys não aparecem no Sleuth

### ✅ **Verificações Básicas**

#### 1. **Verificar se SLEUTH_API_KEY está configurada**
- GitHub → Repositório → Settings → Secrets and variables → Actions
- Deve existir secret chamado exatamente: `SLEUTH_API_KEY`
- Valor deve ser a API Key obtida do Sleuth

#### 2. **Verificar se o workflow está executando**
- GitHub → Repositório → Actions
- Deve haver execuções recentes do workflow `Deploy to Production`
- Status deve ser ✅ (verde) ou pelo menos chegou até o step de deploy

#### 3. **Verificar logs do workflow**
- Clique na execução mais recente
- Vá no job `deploy`
- Verifique os logs dos steps:
  - `Deploy to Vercel` - deve ter sucesso
  - `Notify Sleuth` - deve executar e não dar erro
  - `Deploy Success` - deve mostrar mensagens de sucesso

### 🔍 **Diagnóstico Avançado**

#### **Teste Local da API Sleuth**
```bash
# Teste a integração localmente
SLEUTH_API_KEY=sua_chave_aqui ./test-sleuth-integration.sh
```

#### **Verificar Formato da API Key**
- API Key deve começar com algo como `sk-` ou similar
- Não deve ter espaços no início/fim
- Deve ser da organização/projeto correto no Sleuth

#### **Verificar Configuração do Projeto no Sleuth**
1. **Ambiente correto:**
   - Sleuth → Projeto → Environments
   - Deve existir ambiente chamado exatamente: `production`

2. **Integração GitHub:**
   - Sleuth → Projeto → Integrations → GitHub
   - Repositório deve estar conectado
   - Permissões devem estar corretas

### 🛠️ **Soluções Comuns**

#### **Problema 1: API Key inválida**
```bash
# Sintomas: HTTP 401/403 nos logs
# Solução: Gerar nova API key no Sleuth
```
1. Vá em sleuth.io → Projeto → Settings → API Keys
2. Delete a key antiga
3. Crie nova API key
4. Atualize o secret SLEUTH_API_KEY no GitHub

#### **Problema 2: Ambiente não existe**
```bash
# Sintomas: HTTP 404 nos logs do Sleuth
# Solução: Criar ambiente no Sleuth
```
1. Sleuth → Projeto → Environments
2. Add Environment: `production`
3. Configure integrações necessárias

#### **Problema 3: Deploy não chegou ao Sleuth**
```bash
# Sintomas: Deploy do Vercel funciona, mas Sleuth não executa
# Solução: Verificar condições do workflow
```
- Step `Deploy to Vercel` deve ter `outcome == 'success'`
- Secret `SLEUTH_API_KEY` deve existir e não estar vazia

#### **Problema 4: Sleuth recebe mas não mostra**
```bash
# Sintomas: API retorna 200, mas não aparece no dashboard
# Solução: Verificar filtros e período
```
1. No dashboard Sleuth, verificar:
   - Filtro de data (últimos 30 dias)
   - Filtro de ambiente (production)
   - Filtro de repositório

### 📊 **Validação Final**

#### **Checklist de Funcionamento:**
- [ ] Secret `SLEUTH_API_KEY` configurada no GitHub
- [ ] Ambiente `production` existe no Sleuth
- [ ] Projeto conectado ao GitHub no Sleuth
- [ ] Último workflow executou com sucesso
- [ ] Step "Notify Sleuth" executou sem erro
- [ ] Dashboard Sleuth mostra período correto

#### **Teste Completo:**
1. Faça uma mudança pequena no código
2. Commit e push na branch `main`
3. Aguarde workflow executar (2-3 min)
4. Verifique logs do GitHub Actions
5. Verifique dashboard do Sleuth (pode demorar alguns minutos)

### 🆘 **Se Ainda Não Funcionar**

#### **Debug Manual:**
```bash
# Execute o teste local
SLEUTH_API_KEY=sua_chave ./test-sleuth-integration.sh

# Verifique a resposta da API
# Status 200 = sucesso
# Status 401 = API key inválida
# Status 404 = projeto/ambiente não encontrado
```

#### **Logs Detalhados:**
1. GitHub Actions → Última execução → Deploy job
2. Procure por:
   - `🔔 Notificando Sleuth`
   - `✅ Sleuth notificado com sucesso`
   - Ou mensagens de erro

#### **Contato Suporte:**
Se nada funcionar, verifique:
- Documentação oficial: [docs.sleuth.io](https://docs.sleuth.io)
- Status do Sleuth: [status.sleuth.io](https://status.sleuth.io)
- Suporte: help@sleuth.io

---

## 🎯 **Próximos Passos**

1. Execute o script de teste: `./test-sleuth-integration.sh`
2. Verifique os logs do último workflow
3. Confirme configurações no Sleuth
4. Faça um novo deploy para testar
