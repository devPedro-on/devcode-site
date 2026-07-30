# DevCode — Site institucional

Site estático (HTML + CSS + JS puro, sem build) com animação de constelação no hero, seção de serviços, projetos e processo.

## Estrutura

```
devcode-site/
├── index.html          # marcação principal
├── assets/
│   ├── style.css        # todos os estilos
│   ├── script.js        # animação de constelação (canvas)
│   ├── logo.png          # logo com fundo transparente
│   ├── projeto-unir.jpg   # thumb do case Grupo Unir Empresas
│   └── projeto-pedro.jpg  # thumb do case Técnico TI Pedro
└── README.md
```

## Como abrir

Não precisa de instalação nem build. Duas opções:

1. **Direto no navegador**: dê duplo clique em `index.html`.
2. **Com live reload (recomendado no VS Code)**: instale a extensão "Live Server" e clique em "Go Live" com o `index.html` aberto.

## Editar conteúdo

- Textos e estrutura: `index.html`
- Cores, tipografia, espaçamentos: `assets/style.css` (variáveis no topo, em `:root`)
- Animação do fundo do hero: `assets/script.js`

## Links já configurados

- WhatsApp: `https://wa.me/5548992064809`
- E-mail: `devcodesoftwarehouse@gmail.com`
- Instagram: `@oficial_devcode`
- Case Grupo Unir Empresas: `https://grupo-unir-site.vercel.app/index.html`
- Case Técnico TI Pedro: `https://t-cnico-ti-pedro.vercel.app`
