# 🎬 Roteiro — Vídeo Pitch (até 4 min)

**Projeto:** Patudos Petshop · Padrões Web No Code/Low Code
**Formato:** grave a tela (site aberto) + sua narração. Publique no YouTube (não listado), Drive ou Loom e teste o link.

> Dica: deixe o site já aberto em `http://localhost:8000` (ou no link público) e o `script.js` em outra aba para mostrar o código.

---

## ⏱️ Estrutura (4 blocos)

### Bloco 1 — Abertura e problema (0:00–0:40)
**Mostre:** seu rosto ou a tela inicial do site.
> "Oi, eu sou [NOME]. Pequenos negócios locais muitas vezes não têm site nem orçamento
> para contratar um programador. Para resolver isso, criei o **Patudos Petshop**: um site
> institucional com **agendamento online**, feito com ferramentas no-code/low-code e
> personalizado com código."

### Bloco 2 — A ferramenta e a customização (0:40–1:50)
**Mostre:** rolando o site (hero → serviços → galeria → formulário).
> "Montei a estrutura num construtor visual de blocos e desci ao código onde precisei.
> Repara em três customizações manuais:
> 1. A **galeria** carrega fotos em tempo real de uma **API externa**, a Dog CEO — clico aqui e ela renova.
> 2. O **formulário de agendamento** valida cada campo em JavaScript, com mensagens claras.
> 3. O **modo escuro** lembra a preferência do usuário."

**Mostre:** abra o `script.js` e aponte a função `carregarGaleria()` com o `fetch`.
> "Esse é o código da integração: um `fetch` assíncrono que busca as imagens e injeta no HTML."

### Bloco 3 — Padrões web: responsividade e acessibilidade (1:50–3:00)
**Mostre:** redimensione a janela (ou DevTools modo celular) → menu vira hambúrguer.
> "Apliquei os padrões da web: **HTML semântico** com header, nav, main e section;
> **CSS** com variáveis, Grid e media queries — olha o layout se adaptando ao celular;
> e cuidados de **acessibilidade**: skip link, foco visível, textos alternativos e
> atributos ARIA. Também respeito quem prefere menos animação."

**Mostre:** navegue com a tecla **Tab** para evidenciar o foco visível.

### Bloco 4 — Dificuldades, aprendizados e fechamento (3:00–4:00)
**Mostre:** sua cara ou a tela inicial de novo.
> "A maior dificuldade foi superar as **limitações da ferramenta visual** — componentes
> genéricos e pouca lógica dinâmica. A solução foi o código manual: API, validação e tema.
> O grande aprendizado é que **no-code não elimina os fundamentos** — quem entende HTML,
> CSS e JS extrai muito mais das plataformas e evita o vendor lock-in mantendo código portável.
> O resultado é um site rápido, acessível e pronto para publicar de graça. Obrigado!"

---

## ✅ Checklist antes de gravar
- [ ] Site publicado e link funcionando
- [ ] Galeria carregando (testar internet)
- [ ] Formulário mostrando validação e mensagem de sucesso
- [ ] Mostrar versão mobile (DevTools → ícone de celular)
- [ ] Mostrar o `fetch` no `script.js`
- [ ] Áudio limpo, menos de 4 minutos
- [ ] Link do vídeo acessível (testar numa aba anônima)
