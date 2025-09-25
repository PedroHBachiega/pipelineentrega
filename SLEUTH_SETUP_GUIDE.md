# Guia de Configuração Sleuth - Próximos Passos

## ✅ Passos Concluídos
1. ✅ Conta criada no Sleuth
2. ✅ Repositório conectado ao GitHub
3. ✅ Workflow do GitHub Actions criado
4. ✅ Script de deploy criado

## 🔄 Próximos Passos

### **Passo 3: Configurar SLEUTH_API_KEY (EM ANDAMENTO)**

1. **Obter API Key do Sleuth:**
   - Acesse [sleuth.io](https://sleuth.io)
   - Vá em seu projeto → **Settings** → **API Keys**
   - Copie a API Key

2. **Configurar Secret no GitHub:**
   - Vá no repositório: `https://github.com/SEU_USUARIO/pipelineentrega`
   - **Settings** → **Secrets and variables** → **Actions**
   - **New repository secret**
   - Nome: `SLEUTH_API_KEY`
   - Value: [Cole a API Key aqui]

### **Passo 4: Configurar Ambiente "production" no Sleuth**

1. No Sleuth, vá em seu projeto
2. **Environments** → **Add Environment**
3. Nome: `production` (exatamente assim, minúsculo)
4. Configure as integrações necessárias

### **Passo 5: Configurar Monitoramento de Incidentes**

Para calcular **Change Failure Rate** e **MTTR**:

#### Opção A: GitHub Issues
1. No Sleuth: **Integrations** → **GitHub Issues**
2. Configure labels para incidentes: `incident`, `bug`, `outage`
3. Quando houver problemas, crie issues com essas labels

#### Opção B: Integração com Monitoramento
- **Datadog**: Integre alertas
- **Sentry**: Configure para reportar erros
- **New Relic**: Configure dashboards

### **Passo 6: Testar o Pipeline**

1. **Teste Local:**
   ```bash
   chmod +x ./deploy.sh
   ./deploy.sh
   ```

2. **Teste no GitHub:**
   - Faça um commit e push na branch `main`
   - Verifique se o workflow roda em **Actions**
   - Confirme se o Sleuth recebe a notificação

### **Passo 7: Personalizar o Deploy**

O arquivo `deploy.sh` atual é um exemplo. Personalize conforme sua infraestrutura:

#### Para Vercel:
```yaml
# Substitua o step de deploy no workflow por:
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-args: '--prod'
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
```

#### Para Netlify:
```yaml
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.0
  with:
    publish-dir: './out'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
  env:
    NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
    NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

#### Para AWS S3:
```yaml
- name: Deploy to S3
  run: |
    aws s3 sync .next s3://${{ secrets.S3_BUCKET }} --delete
    aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_ID }} --paths "/*"
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

## 📊 Métricas DORA que Serão Coletadas

Após a configuração completa, você terá:

1. **Deployment Frequency**: Quantos deploys por dia/semana
2. **Lead Time for Changes**: Tempo do commit até produção
3. **Change Failure Rate**: % de deploys que causam incidentes
4. **Mean Time to Recovery**: Tempo para resolver problemas

## 🔧 Troubleshooting

### Workflow não executa:
- Verifique se está na branch `main`
- Confirme se o secret `SLEUTH_API_KEY` foi criado
- Veja os logs em **Actions** no GitHub

### Sleuth não recebe dados:
- Confirme se o nome do ambiente é exatamente `production`
- Verifique se a API Key está correta
- Teste manualmente: `curl -X POST https://app.sleuth.io/api/1/deployments/...`

### Deploy falha:
- Teste o script localmente: `./deploy.sh`
- Verifique permissões: `chmod +x deploy.sh`
- Adapte o script para sua infraestrutura

## 📞 Próximo Passo
Configure o secret `SLEUTH_API_KEY` no GitHub seguindo as instruções acima!
