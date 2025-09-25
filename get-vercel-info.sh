#!/bin/bash

# Script para obter informações necessárias do Vercel
echo "🔍 Obtendo informações do Vercel..."

# Verifica se Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

echo ""
echo "🔑 Para obter as informações necessárias:"
echo ""

echo "1️⃣ **VERCEL_TOKEN**:"
echo "   → Vá em: https://vercel.com/account/tokens"
echo "   → Clique em 'Create Token'"
echo "   → Nome: 'GitHub Actions Deploy'"
echo "   → Escopo: 'Full Account'"
echo "   → Copie o token gerado"
echo ""

echo "2️⃣ **VERCEL_ORG_ID** (Team/Organization ID):"
echo "   → Vá em: https://vercel.com/teams/settings"
echo "   → Na seção 'General', copie o 'Team ID'"
echo "   → Ou execute: vercel teams ls"
echo ""

echo "3️⃣ **VERCEL_PROJECT_ID**:"
echo "   → Opção A: No dashboard do projeto → Settings → General"
echo "   → Opção B: Execute os comandos abaixo após fazer login:"
echo ""

# Tentar fazer login e obter informações
echo "🔐 Fazendo login no Vercel..."
if vercel login; then
    echo ""
    echo "📋 Listando projetos:"
    vercel projects ls
    echo ""
    echo "ℹ️  Para obter detalhes de um projeto específico:"
    echo "   vercel inspect SEU_DOMINIO.vercel.app"
else
    echo "❌ Falha no login. Execute manualmente:"
    echo "   vercel login"
    echo "   vercel projects ls"
fi

echo ""
echo "4️⃣ **SLEUTH_API_KEY**:"
echo "   → Vá em: https://sleuth.io"
echo "   → Seu projeto → Settings → API Keys"
echo "   → Copie a API Key"
echo ""

echo "📝 Depois de obter todas as informações:"
echo "   → Vá no GitHub: Settings → Secrets → Actions"
echo "   → Adicione os 4 secrets listados acima"
echo ""
echo "📖 Veja VERCEL_SLEUTH_SETUP.md para instruções completas"
