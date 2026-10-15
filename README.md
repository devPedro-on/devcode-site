# DevCode Software House

Site institucional da DevCode: sites, sistemas web e aplicativos sob medida.

Domínio: [devcode.dev.br](https://devcode.dev.br)

## Sobre

Landing page de página única, tema escuro, fontes Space Grotesk e JetBrains Mono. Os botões de contato levam direto para o WhatsApp.

Seções: hero, stack (faixa com as tecnologias), serviços, projetos, processo, chamada final e rodapé.

## Estrutura

```
index.html            página
assets/style.css      estilos
assets/script.js      animação de fundo (constelação)
assets/logo.png       logo
assets/projeto-*.jpg  prints dos projetos
favicon.ico           ícone do site
```

HTML, CSS e JS puros, sem build.

## Rodando localmente

Qualquer servidor estático serve:

```sh
npx serve .
```

## Adicionando um projeto

1. Coloque o print em `assets/` (ex.: `assets/projeto-nome.jpg`).
2. No `index.html`, na seção `#projetos`, copie um bloco `<a class="project-card">` e ajuste link, imagem, categoria, título e descrição.

## Deploy

Publicado na Vercel como site estático. Todo push na `main` gera um deploy novo.

Domínio (DNS):

- `@` → registro **A** → `76.76.21.21`
- `www` → registro **CNAME** → `cname.vercel-dns.com`

## Contato

- E-mail: devcodesoftwarehouse@gmail.com
- WhatsApp: (48) 99206-4809
- Instagram: [@oficial_devcode](https://instagram.com/oficial_devcode)
