# DevCode — Software House

Site institucional da **DevCode Software House**: sites, sistemas web e aplicativos sob medida, do primeiro commit ao suporte pós-lançamento.

🌐 Domínio: [devcode.dev.br](http://devcode.dev.br)

---

## Sobre o projeto

Landing page de página única, em português, com tema escuro e identidade técnica (tipografia Bricolage Grotesque + Manrope + JetBrains Mono). Todas as chamadas para ação levam direto ao WhatsApp da equipe.

### Seções

| Seção | Descrição |
| --- | --- |
| Hero | Apresentação da empresa e CTAs principais |
| Stack | Marquee com as tecnologias utilizadas |
| Serviços | Sites & landing pages, sistemas web, aplicativos e consultoria técnica |
| Projetos | Cases publicados (Grupo Unir Empresas, Técnico TI Pedro) |
| Processo | As quatro etapas de um projeto: descoberta, design & arquitetura, desenvolvimento, deploy & suporte |
| Contato | Faixa de CTA + rodapé com e-mail, telefone e Instagram |

---

## Stack técnica

- **TanStack Start** (React 19 + TanStack Router, SSR)
- **Vite 8** como bundler
- **TypeScript**
- **Tailwind CSS v4** (configurado via `src/styles.css`)
- **shadcn/ui** + Radix UI (componentes disponíveis em `src/components/ui`)
- Deploy em runtime edge (Nitro / Cloudflare Workers por padrão)

---

## Rodando localmente

Requer Node.js 20+ e npm.

```sh
git clone <url-do-repositorio>
cd <pasta-do-projeto>
npm install
npm run dev
```

O site sobe em `http://localhost:8080`.

### Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com Prettier |

---

## Estrutura de pastas

```text
src/
  assets/        imagens e thumbnails dos cases (referências de CDN)
  components/ui/ componentes shadcn/ui
  hooks/         hooks reutilizáveis
  lib/           utilitários e captura de erros
  routes/
    __root.tsx   layout raiz, fontes e metadados globais
    index.tsx    página principal do site
  styles.css     design system (tokens de cor, tipografia e componentes)
  router.tsx     configuração do TanStack Router
  server.ts      entrypoint SSR com tratamento de erro
```

> `src/routeTree.gen.ts` é gerado automaticamente — não editar manualmente.

---

## Adicionando um novo case de projeto

1. Envie a imagem do print para `src/assets/` e crie o `.asset.json` correspondente.
2. Em `src/routes/index.tsx`, dentro da seção `#projetos`, duplique um bloco `<a className="proj-card">`.
3. Ajuste `href`, `src` da imagem, `alt`, categoria, título e descrição.
4. Remova o card `is-empty` quando não houver mais espaço reservado.

---

## Deploy

O projeto pode ser publicado direto pela Lovable ou em qualquer host compatível com Node/edge (Vercel, Cloudflare, Netlify).

### Domínio personalizado (Vercel)

- `@` → registro **A** → `76.76.21.21`
- `www` → registro **CNAME** → `cname.vercel-dns.com`

O certificado SSL é emitido automaticamente após a propagação do DNS.

---

## Contato

- E-mail: devcodesoftwarehouse@gmail.com
- Telefone/WhatsApp: (48) 99206-4809
- Instagram: [@oficial_devcode](https://instagram.com/oficial_devcode)

---

© 2026 DevCode Software House. Todos os direitos reservados.
