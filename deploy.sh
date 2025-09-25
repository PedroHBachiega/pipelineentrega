#!/bin/bash

# Script de deploy para Vercel
# Este script é usado como backup caso a action do GitHub falhe

set -e  # Para o script se houver erro

echo "🚀 Iniciando deploy para Vercel..."

# Verifica se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Verifica se o build foi feito
if [ ! -d ".next" ]; then
    echo "🏗️ Executando build..."
    npm run build
fi

echo "✅ Build encontrado, continuando..."

# Deploy para Vercel
echo "🚀 Fazendo deploy no Vercel..."

if [ -n "$VERCEL_TOKEN" ]; then
    # Se tiver token, usa deploy automatizado
    echo "🔑 Usando token de autenticação..."
    vercel --prod --token "$VERCEL_TOKEN" --yes
else
    # Se não tiver token, usa deploy interativo
    echo "🔐 Deploy interativo (você precisará fazer login)..."
    vercel --prod
fi

echo "✅ Deploy realizado com sucesso!"

# Opcional: Invalidar cache do CDN
# echo "🔄 Invalidando cache..."
# vercel --token "$VERCEL_TOKEN" inspect --timeout 30000

echo "🎉 Deploy no Vercel concluído!"
echo "📱 Seu app está disponível em: https://seu-app.vercel.app"

exit 0

