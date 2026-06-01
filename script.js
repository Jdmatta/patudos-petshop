/* ===========================================================
   Patudos Petshop — JavaScript
   Demonstra: manipulação do DOM, fetch a API externa (REST),
   async/await, validação de formulário e persistência (localStorage).
   =========================================================== */

"use strict";

/* ---------- 1. Menu mobile (acessível) ---------- */
const navToggle = document.getElementById("navToggle");
const menu = document.getElementById("menu");

navToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(aberto));
});

// Fecha o menu ao clicar num link (mobile)
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- 2. Dark mode com persistência ---------- */
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon").querySelector("use");

function aplicarIconeTema(tema) {
  // mostra sol no escuro (clique volta p/ claro) e lua no claro
  themeIcon.setAttribute("href", tema === "escuro" ? "#ic-sun" : "#ic-moon");
}

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  document.documentElement.setAttribute("data-tema", temaSalvo);
  aplicarIconeTema(temaSalvo);
}

themeBtn.addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-tema");
  const novo = atual === "escuro" ? "claro" : "escuro";
  document.documentElement.setAttribute("data-tema", novo);
  localStorage.setItem("tema", novo);
  aplicarIconeTema(novo);
});

/* ---------- 3. Galeria dinâmica via Dog CEO API ---------- */
const gallery = document.getElementById("gallery");
const reloadBtn = document.getElementById("reloadGallery");
const galleryStatus = document.getElementById("galleryStatus");
const QTD_FOTOS = 6;

function mostrarSkeleton() {
  gallery.setAttribute("aria-busy", "true");
  gallery.innerHTML = Array.from({ length: QTD_FOTOS })
    .map(() => '<div class="skeleton" aria-hidden="true"></div>')
    .join("");
}

async function carregarGaleria() {
  mostrarSkeleton();
  galleryStatus.textContent = "Carregando fotos…";
  try {
    // API pública e gratuita — retorna URLs de fotos aleatórias de cães
    const resp = await fetch(
      `https://dog.ceo/api/breeds/image/random/${QTD_FOTOS}`
    );
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const dados = await resp.json();

    gallery.innerHTML = dados.message
      .map(
        (url, i) =>
          `<img src="${url}" alt="Foto de um cão cliente do Patudos (${i + 1})" loading="lazy" />`
      )
      .join("");
    galleryStatus.textContent = `${dados.message.length} fotos carregadas da Dog CEO API.`;
  } catch (err) {
    gallery.innerHTML = "";
    galleryStatus.textContent =
      "Não foi possível carregar as fotos agora. Verifique a conexão e tente de novo.";
    console.error("Erro ao buscar galeria:", err);
  } finally {
    gallery.setAttribute("aria-busy", "false");
  }
}

reloadBtn.addEventListener("click", carregarGaleria);
carregarGaleria(); // carga inicial

/* ---------- 4. Navegação ativa por seção (scroll-spy) ---------- */
const linksMenu = [...menu.querySelectorAll('a[href^="#"]')];
const secoes = linksMenu
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          linksMenu.forEach((a) =>
            a.classList.toggle("ativo", a.getAttribute("href") === "#" + id)
          );
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  secoes.forEach((s) => observer.observe(s));
}

/* ---------- 5. Ano automático no rodapé ---------- */
document.getElementById("ano").textContent = new Date().getFullYear();

/* ---------- 6. Validação do formulário de agendamento ---------- */
const form = document.getElementById("bookingForm");
const feedback = document.getElementById("formFeedback");

// Impede escolher data no passado (mínimo = hoje)
const inputData = document.getElementById("data");
inputData.min = new Date().toISOString().split("T")[0];

const regras = {
  nome: (v) => v.trim().length >= 2 || "Informe seu nome.",
  pet: (v) => v.trim().length >= 2 || "Diga o nome e o porte do pet.",
  servico: (v) => v !== "" || "Escolha um serviço.",
  data: (v) =>
    (v && new Date(v) >= new Date(new Date().toDateString())) ||
    "Escolha uma data de hoje em diante.",
  whatsapp: (v) =>
    /^[\d\s()+-]{8,}$/.test(v) || "Telefone inválido.",
};

function validarCampo(campo) {
  const valor = campo.value;
  const resultado = regras[campo.name](valor);
  const wrapper = campo.closest(".field");
  const erroEl = wrapper.querySelector(".error");

  if (resultado === true) {
    wrapper.classList.remove("invalid");
    erroEl.textContent = "";
    return true;
  }
  wrapper.classList.add("invalid");
  erroEl.textContent = resultado;
  return false;
}

// Valida em tempo real após o primeiro erro
form.querySelectorAll("input, select").forEach((campo) => {
  campo.addEventListener("blur", () => validarCampo(campo));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const campos = [...form.querySelectorAll("input, select")];
  const tudoValido = campos.map(validarCampo).every(Boolean);

  if (!tudoValido) {
    feedback.textContent = "Confira os campos destacados em vermelho.";
    feedback.classList.remove("ok");
    campos.find((c) => c.closest(".field").classList.contains("invalid"))?.focus();
    return;
  }

  // Em produção: enviar para Airtable/Formspree/Notion.
  // Aqui guardamos localmente para demonstração.
  const dados = Object.fromEntries(new FormData(form));
  const historico = JSON.parse(localStorage.getItem("agendamentos") || "[]");
  historico.push({ ...dados, em: new Date().toISOString() });
  localStorage.setItem("agendamentos", JSON.stringify(historico));

  feedback.textContent = `Obrigado, ${dados.nome.split(" ")[0]}! Recebemos o pedido para ${dados.pet}. Confirmaremos no WhatsApp.`;
  feedback.classList.add("ok");
  form.reset();
});
