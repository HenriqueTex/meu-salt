# Documentação para Deploy do Site Salt ERP

## Visão Geral

Este documento contém instruções para o deploy do site Salt ERP, desenvolvido com base nas recomendações de redesign fornecidas. O site foi criado utilizando HTML, CSS e JavaScript com Bootstrap para garantir um design responsivo e profissional.

## Estrutura de Arquivos

```
salt-erp-site-html/
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── images/
│   ├── logo-salt-erp.png
│   ├── logo-salt-erp-white.png
│   ├── hero-image.jpg
│   ├── modulo-producao.jpg
│   ├── modulo-estoque.jpg
│   ├── modulo-financeiro.jpg
│   ├── modulo-vendas.jpg
│   ├── modulo-compras.jpg
│   ├── modulo-relatorios.jpg
│   ├── cliente-1.jpg
│   ├── cliente-2.jpg
│   ├── cliente-3.jpg
│   ├── logo-cliente-1.png
│   ├── logo-cliente-2.png
│   └── logo-cliente-3.png
└── index.html
```

## Requisitos para Deploy

O site é estático e pode ser hospedado em qualquer serviço de hospedagem web que suporte HTML, CSS e JavaScript. Não há requisitos especiais de servidor ou banco de dados.

## Instruções para Deploy

### Opção 1: Hospedagem Tradicional (cPanel, Plesk, etc.)

1. Faça o download do arquivo ZIP contendo todos os arquivos do site
2. Extraia o conteúdo do ZIP para uma pasta local
3. Acesse o painel de controle da sua hospedagem
4. Navegue até o gerenciador de arquivos
5. Faça upload de todos os arquivos e pastas para o diretório raiz do seu domínio (geralmente `public_html` ou `www`)
6. Certifique-se de manter a estrutura de pastas intacta

### Opção 2: Serviços de Hospedagem Estática (Netlify, Vercel, GitHub Pages)

#### Netlify

1. Crie uma conta em [netlify.com](https://www.netlify.com/) (se ainda não tiver)
2. Clique em "New site from upload"
3. Arraste e solte a pasta do site ou o arquivo ZIP
4. O site será automaticamente publicado

#### Vercel

1. Crie uma conta em [vercel.com](https://vercel.com/) (se ainda não tiver)
2. Clique em "New Project"
3. Escolha a opção para importar um diretório local
4. Selecione a pasta do site
5. Clique em "Deploy"

#### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos do site para o repositório
3. Vá para Settings > Pages
4. Selecione a branch principal como source
5. Clique em "Save"

## Personalização

### Substituição de Imagens

Para substituir as imagens placeholder por imagens reais:

1. Prepare imagens com os mesmos nomes dos arquivos placeholder
2. Substitua os arquivos na pasta `images/`
3. Recomendações para imagens:
   - Logo: formato PNG com fundo transparente
   - Hero image: imagem de alta qualidade mostrando ambiente industrial
   - Módulos: capturas de tela do sistema ou imagens representativas
   - Clientes: fotos profissionais em formato quadrado

### Configuração do Formulário

O formulário de demonstração está configurado para simular o envio. Para conectá-lo a um serviço real:

1. Edite o arquivo `index.html`
2. Localize a tag `<form id="demo-form">`
3. Adicione o atributo `action` com a URL do seu serviço de processamento de formulários
4. Ajuste o atributo `method` para "POST" ou "GET" conforme necessário
5. Atualize os nomes dos campos conforme exigido pelo seu serviço

### Configuração do WhatsApp

Para configurar o botão de WhatsApp com seu número real:

1. Edite o arquivo `index.html`
2. Localize a tag `<a href="https://wa.me/5511987654321" class="whatsapp-btn"`
3. Substitua "5511987654321" pelo seu número de telefone com código do país (sem espaços ou caracteres especiais)

## Otimizações Recomendadas

Para melhorar ainda mais o desempenho do site após o deploy:

1. **Otimização de imagens**: Comprima todas as imagens usando ferramentas como TinyPNG ou Squoosh
2. **Minificação de código**: Use ferramentas como Minify para reduzir o tamanho dos arquivos CSS e JavaScript
3. **CDN**: Considere usar uma CDN (Content Delivery Network) para melhorar o tempo de carregamento
4. **Cache do navegador**: Configure cabeçalhos de cache apropriados no servidor

## Suporte e Manutenção

Para fazer alterações no site após o deploy:

1. Edite os arquivos localmente
2. Teste as alterações em um ambiente local
3. Faça upload dos arquivos modificados para substituir os existentes no servidor

## Conclusão

O site Salt ERP foi desenvolvido seguindo as melhores práticas de design web e as recomendações específicas para transmitir seriedade, confiança e despertar interesse em potenciais clientes do setor de manufatura. Com as instruções acima, você poderá facilmente fazer o deploy do site e começar a atrair novos clientes para o Salt ERP.
