# Sistema de Classificação de E-mails

Um sistema inteligente para classificar e-mails como **Produtivos** ou **Improdutivos** usando IA, ajudando equipes de empresas financeiras a otimizar sua caixa de entrada e priorizar mensagens importantes.

## 🎯 O que o programa faz

Este sistema automatiza a classificação de e-mails em duas categorias:

- **Produtivos**: E-mails que requerem ação específica, acompanhamento ou resposta direta da equipe (solicitações urgentes, problemas de clientes, consultas de parceiros, etc.)
- **Improdutivos**: E-mails informativos, sociais ou comunicações gerais que não requerem ação imediata (anúncios internos, spam, marketing não solicitado, etc.)

Além da classificação, o sistema também pode gerar sugestões de resposta automática para e-mails produtivos, aumentando a eficiência da equipe.

## 🚀 Tecnologias Utilizadas

- **Backend**: Python 3.10+ com Flask
- **IA**: Google Gemini (gemini-2.5-flash-lite)
- **Frontend**: HTML, CSS, JavaScript (Bootstrap 5)
- **Bibliotecas principais**:
  - Flask & Flask-CORS
  - google-generativeai
  - Axios (frontend)

## 📧 Dados de Exemplo

Você pode encontrar exemplos detalhados no arquivo `dados-exemplos.md`, incluindo:

1. **E-mails Produtivos**:
   - Solicitações urgentes de diretoria
   - Problemas reportados por clientes
   - Consultas de parceiros comerciais

2. **E-mails Improdutivos**:
   - Comunicados internos informativos
   - Spam e marketing não solicitado
   - Mensagens sociais

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Python**: Versão 3.10 ou superior

### Dependências Externas
- **Chave API do Google Gemini**: Obrigatória para funcionamento da IA
  - Obtenha gratuitamente em: [Google AI Studio](https://aistudio.google.com/)
### Verificar Versão do Python
```bash
# Verificar se o Python está instalado e qual versão
python --version
# ou
python3 --version
```

Se não tiver o Python instalado, baixe em: [python.org](https://www.python.org/downloads/)

## 📥 Clonando o Repositório

Para começar a trabalhar com o projeto, primeiro clone o repositório para sua máquina local:

```bash
# Clone o repositório
git clone https://github.com/GuilhermeLuan/email-classifier.git

# Navegue para o diretório do projeto
cd email-classifier
```

**Opcional**: Criar e ativar um ambiente virtual (recomendado):

```bash
# Criar ambiente virtual
python -m venv venv

# Ativar o ambiente virtual
# No Windows:
venv\Scripts\activate
# No macOS/Linux:
source venv/bin/activate
```

## ⚙️ Configuração do Ambiente

### 1. Configurar Variáveis de Ambiente

O projeto inclui um arquivo `.envTemplate` que deve ser renomeado para `.env` para funcionar corretamente:

```bash
# Renomeie o arquivo
copy .envTemplate .env
```

Em seguida, edite o arquivo `.env` e adicione sua chave de API do Google Gemini:

```env
GEMINI_API_TOKEN=sua_chave_api_aqui
GEMINI_MODEL=gemini-2.5-flash-lite
```

### 2. Instalar Dependências

```bash
# Instale as dependências Python
pip install -r requirements.txt
```

## 🏃‍♂️ Como Executar Localmente

### Método 1: Executar diretamente
```bash
# Navegue até o diretório src
cd src

# Execute a aplicação
python app.py
```

### Método 2: Usar o WSGI
```bash
# Na raiz do projeto
python wsgi.py
```

A aplicação estará disponível em (acesse apenas no localhost, 127.0.0.1 vai apresentar erro de CORS): `http://localhost:5000`

## 🔑 Modelo de IA

O sistema utiliza o **Google Gemini 2.5 Flash Lite** como modelo de IA principal para:

- Classificação automática de e-mails
- Geração de sugestões de resposta
- Análise de conteúdo e contexto

## 📝 Como Usar

Existem duas maneiras de utilizar o sistema:

### 1. Ambiente Local (com sua API)

Para desenvolvimento e testes locais, você utilizará sua própria chave da API do Google Gemini.

1.  **Execute o projeto localmente** (conforme as instruções em "Como Executar Localmente").
2.  Acesse a aplicação em: **[http://localhost:5000](http://localhost:5000)**.
3.  Cole o texto do e-mail na área de texto.
4.  Clique em "Analisar E-mail".
5.  O sistema usará a `GEMINI_API_TOKEN` que você configurou no arquivo `.env`.

### 2. Ambiente na Nuvem (versão pública)

Se preferir, você pode usar a versão online, que já está configurada e pronta para uso.

1.  Acesse a aplicação em: **[https://email.guilhermeluan.dev](https://email.guilhermeluan.dev)**.
2.  Cole o e-mail e clique em "Analisar E-mail".
3.  Não é necessário configurar chaves de API, pois a versão em nuvem utiliza uma API pré-configurada.
