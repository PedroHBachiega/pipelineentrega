#!/bin/bash

# Script para testar a integração com Sleuth
echo "🧪 Testando integração com Sleuth..."

# Verificar se a API key está definida
if [ -z "$SLEUTH_API_KEY" ]; then
    echo "❌ SLEUTH_API_KEY não está definida"
    echo "💡 Use: SLEUTH_API_KEY=sua_chave ./test-sleuth-integration.sh"
    exit 1
fi

echo "✅ SLEUTH_API_KEY encontrada"

# Obter informações do Git
REPO_NAME=$(git config --get remote.origin.url | sed 's/.*github.com[/:]\([^/]*\/[^/]*\)\.git/\1/')
CURRENT_SHA=$(git rev-parse HEAD)
CURRENT_BRANCH=$(git branch --show-current)

echo "📊 Informações do repositório:"
echo "   Repo: $REPO_NAME"
echo "   SHA: $CURRENT_SHA"
echo "   Branch: $CURRENT_BRANCH"

# Testar diferentes endpoints do Sleuth
echo ""
echo "🔍 Testando endpoints do Sleuth..."

# Endpoint 1: Registro de deploy
echo "1️⃣ Testando registro de deploy..."
curl -X POST "https://app.sleuth.io/api/1/deployments/$REPO_NAME/register_deploy" \
    -H "Authorization: Bearer $SLEUTH_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
        \"sha\": \"$CURRENT_SHA\",
        \"environment\": \"production\",
        \"deployed_at\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"
    }" \
    -w "\nStatus: %{http_code}\n" \
    || echo "❌ Falha no endpoint 1"

echo ""

# Endpoint 2: Webhook genérico
echo "2️⃣ Testando webhook genérico..."
curl -X POST "https://app.sleuth.io/api/1/deployments" \
    -H "Authorization: Bearer $SLEUTH_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
        \"repository\": \"$REPO_NAME\",
        \"sha\": \"$CURRENT_SHA\",
        \"environment\": \"production\",
        \"deployed_at\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"
    }" \
    -w "\nStatus: %{http_code}\n" \
    || echo "❌ Falha no endpoint 2"

echo ""

# Endpoint 3: Usando apikey em vez de Bearer
echo "3️⃣ Testando com apikey..."
curl -X POST "https://app.sleuth.io/api/1/deployments/$REPO_NAME/register_deploy" \
    -H "Authorization: apikey $SLEUTH_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
        \"sha\": \"$CURRENT_SHA\",
        \"environment\": \"production\"
    }" \
    -w "\nStatus: %{http_code}\n" \
    || echo "❌ Falha no endpoint 3"

echo ""
echo "🏁 Teste concluído!"
echo "💡 Verifique no dashboard do Sleuth se algum deploy foi registrado"
