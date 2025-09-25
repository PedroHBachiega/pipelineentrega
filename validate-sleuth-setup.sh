#!/bin/bash

# Script para validar a configuração do Sleuth
echo "🔍 Validando configuração do Sleuth..."

# Verifica se os arquivos foram criados
echo "📁 Verificando arquivos..."

if [ ! -f ".github/workflows/deploy-production.yml" ]; then
    echo "❌ Workflow de deploy não encontrado"
    exit 1
else
    echo "✅ Workflow de deploy encontrado"
fi

if [ ! -f "deploy.sh" ]; then
    echo "❌ Script de deploy não encontrado"
    exit 1
else
    echo "✅ Script de deploy encontrado"
fi

if [ ! -x "deploy.sh" ]; then
    echo "⚠️  Script de deploy não é executável, corrigindo..."
    chmod +x deploy.sh
    echo "✅ Permissões corrigidas"
fi

# Verifica se o projeto pode ser buildado
echo "🏗️  Testando build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build executado com sucesso"
else
    echo "❌ Erro no build - verifique as dependências"
    exit 1
fi

# Testa o script de deploy (sem fazer deploy real)
echo "🚀 Validando script de deploy..."
if [ -f "deploy.sh" ] && [ -x "deploy.sh" ]; then
    echo "✅ Script de deploy está executável"
    echo "ℹ️  Para testar deploy real: VERCEL_TOKEN=seu_token ./deploy.sh"
else
    echo "❌ Erro: Script de deploy não encontrado ou não executável"
    exit 1
fi

echo ""
echo "🎉 Configuração básica validada!"
echo ""
echo "📋 Próximos passos manuais:"
echo "1. Configure os secrets do Vercel no GitHub:"
echo "   - VERCEL_TOKEN"
echo "   - VERCEL_ORG_ID" 
echo "   - VERCEL_PROJECT_ID"
echo "   - SLEUTH_API_KEY"
echo "2. Configure o ambiente 'production' no Sleuth"
echo "3. Faça um push para testar o pipeline completo"
echo ""
echo "📖 Veja VERCEL_SLEUTH_SETUP.md para instruções detalhadas"
