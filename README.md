# 🐾 Patudos Petshop

> Site institucional + agendamento online para um petshop de bairro.
> **Projeto final** da disciplina **Padrões Web para No Code e Low Code**.

[![Feito com HTML](https://img.shields.io/badge/HTML5-sem%C3%A2ntico-E34F26?logo=html5&logoColor=white)]()
[![Feito com CSS](https://img.shields.io/badge/CSS3-responsivo-1572B6?logo=css3&logoColor=white)]()
[![Feito com JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)]()

🔗 **Site no ar:** https://SEU-USUARIO.github.io/patudos-petshop/
🎥 **Vídeo pitch:** _(cole o link aqui)_

---

## 📌 Sobre o projeto

**Problema.** Pequenos negócios locais precisam de presença online, mas não têm
orçamento para contratar programadores.

**Solução.** Um site one-page, rápido e acessível, onde o cliente conhece os
serviços e **agenda banho/tosa em 1 minuto**.

- **Público-alvo:** tutores de cães e gatos do bairro (acesso majoritário por celular).
- **Estrutura:** Início → Serviços → Galeria → Depoimentos → Agendamento → Contato.

## ✨ Funcionalidades

| Recurso | Como funciona |
|---|---|
| 📱 Navegação responsiva | Menu vira "hambúrguer" no celular (media query + JS). |
| 🌙 Modo escuro | Botão alterna tema; preferência salva em `localStorage`. |
| 🖼️ Galeria dinâmica | Fotos carregadas em tempo real da **Dog CEO API** (`fetch` + `async/await`). |
| 🧭 Menu ativo por seção | Link destaca a seção visível (`IntersectionObserver`). |
| 📝 Agendamento validado | Formulário com validação em JS, mensagens acessíveis e data mínima de hoje. |
| ♿ Acessibilidade | HTML semântico, `aria-*`, skip link, foco visível, `alt` nas imagens. |

## 🧱 Padrões web aplicados

- **HTML5 semântico:** `header`, `nav`, `main`, `section`, `footer`, `form`, `dl`.
- **CSS3:** variáveis (`:root`), Grid + Flexbox, `clamp()` (tipografia fluida),
  media queries mobile-first, `prefers-reduced-motion`, modo escuro via `data-tema`.
- **JavaScript ES6+:** `fetch`, `async/await`, manipulação do DOM,
  `IntersectionObserver`, validação de formulário, `localStorage`.

## 🔌 Integração externa (API)

```
GET https://dog.ceo/api/breeds/image/random/6
→ { "message": ["url1", ...], "status": "success" }
```
Gratuita, sem chave de API. Ver `script.js → carregarGaleria()`.

## 📂 Estrutura

```
patudos-petshop/
├── index.html        # marcação semântica
├── styles.css        # estilo, responsividade, modo escuro
├── script.js         # API, scroll-spy, validação, interações
├── relatorio.html    # relatório técnico (parte teórica) → exportar PDF
├── roteiro-video.md  # roteiro do vídeo pitch
├── .gitignore
└── README.md
```

## ▶️ Rodar localmente

```bash
# Opção 1 — abrir index.html no navegador (duplo clique)

# Opção 2 — servidor local (recomendado p/ a galeria)
python -m http.server 8000
# acesse http://localhost:8000
```

## 🚀 Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado `patudos-petshop`.
2. Suba os arquivos (veja comandos abaixo).
3. No GitHub: **Settings → Pages → Branch: `main` / `/root` → Save**.
4. Em ~1 min o site fica em `https://SEU-USUARIO.github.io/patudos-petshop/`.
5. Cole o link no topo deste README e na capa do relatório.

```bash
git init
git add .
git commit -m "Patudos Petshop — projeto final"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/patudos-petshop.git
git push -u origin main
```

## ✅ Acessibilidade & responsividade

- [x] Contraste de cores WCAG AA
- [x] Navegação por teclado com foco visível
- [x] Skip link para o conteúdo
- [x] `alt` descritivo nas imagens
- [x] Layout fluido de 320 px a 1440 px+
- [x] Respeita `prefers-reduced-motion`

---

## 📦 Entregáveis da disciplina

| # | Entregável | Onde está |
|---|---|---|
| 1 | Parte teórica (relatório PDF) | `relatorio.html` → exportar como PDF |
| 2 | Parte prática (app + código + README) | este repositório + link do GitHub Pages |
| 3 | Vídeo pitch (até 4 min) | `roteiro-video.md` → gravar e linkar |

---

_Projeto acadêmico · 2026._
