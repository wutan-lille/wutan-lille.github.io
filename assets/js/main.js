/* assets/js/main.js */
(function(){
  "use strict";

  // ---------------------------------------------------------------------
  // 1️⃣  Translations for the UI (data‑i18n).  French is the default.
  // ---------------------------------------------------------------------
  const translations = {
    "fr": {
      brand: "Wutan Lille",
      nav: { about: "À propos", team: "Équipe", social: "Réseaux", fed: "Fédération" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Nous contacter" },
      header: { news: "Actualités" },
      about: { title: "Notre École", desc: "Wutan Lille enseigne les arts internes et externes traditionnels : Bajiquan, Pigua Zhang et Baguazhang. Un chemin de дисциплина, d’équilibre et d’énergie." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosif, direct et efficace, le Bajiquan met l’accent sur le fa jin (explosion d’énergie) et les courtes et moyennes distances." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Longues amplitudes, torsions et puissance des bras « hache » et « voile ». Complément idéal du Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circulaire, fluide et intérieur, travail de changements constants, marche en cercle et sensibilité à l’adversaire." }
      },
      founder: { title: "Fondateur : Liu Yun Qiao", subtitle: "Maître légendaire du Wutan", bio: "Liu Yun Qiao est une figure emblématique du Wutan. Sa transmission rigoureuse et sa compréhension profonde des formes externes et internes ont formé des générations d’élèves. Son héritage est au cœur du programme de Wutan Lille.", link: "En savoir plus" },
      team: { title: "Équipe", santiago: "Professeur à Wutan Lille, élève de Lin Zhongxi depuis 2017, praticien d’arts martiaux depuis près de 30 ans." },
      fed: { title: "Fédération Internationale", desc: "Wutan Lille fait partie de la Fédération Internationale Wutan. Découvrez ses activités, son calendrier et ses événements.", link: "Fédération Internationale (WWKF)" },
      social: { title: "Nos réseaux", hint: "Astuce: ajoutez une clé API Instagram Basic Display en local dans assets/js/main.js pour charger les publications.", tiktok: "Voir sur TikTok", openfb: "Ouvrir la page Facebook", disclaimer: "Les contenus des réseaux sociaux appartiennent à leurs plateformes respectives." },
      contact: { title: "Contact", desc: "Pour essayer un cours, réservez via nos réseaux ou écrivez-nous.", cta: "Voir les réseaux" }
    },
    "es": {
      brand: "Wutan Lille",
      nav: { about: "Acerca de", team: "Equipo", social: "Redes", fed: "Federación" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Contactanos" },
      header: { news: "Novedades" },
      about: { title: "Nuestra Escuela", desc: "Wutan Lille enseña artes internas y externas tradicionales: Bajiquan, Pigua Zhang y Baguazhang. Un camino de disciplina, equilibrio y energía." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosivo, directo y eficaz; enfatiza el fa jin (explosión de energía) y las distancias cortas y medias." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Largos desplazamientos, torsión y potencia de brazos ‘hacha’ y ‘vela’. Ideal para complementar el Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circular, fluido e interno; cambios constantes, marcha en círculo y sensibilidad al oponente." }
      },
      founder: { title: "Fundador: Liu Yun Qiao", subtitle: "Maestro legendario del Wutan", bio: "Liu Yun Qiao es una figura emblemática del Wutan. Su transmisión rigurosa y su profunda comprensión de las formas externas e internas han formado generaciones de alumnos. Su legado es el corazón del programa de Wutan Lille.", link: "Saber más" },
      team: { title: "Equipo", santiago: "Profesor de Wutan Lille, alumno de Lin Zhongxi desde 2017, practicante de artes marciales durante los últimos 30 años." },
      fed: { title: "Federación Internacional", desc: "Wutan Lille es parte de la Federación Internacional Wutan. Descubre actividades, calendario y eventos.", link: "Federación Internacional (WWKF)" },
      social: { title: "Nuestras redes", hint: "Consejo: agrega un token de Instagram Basic Display en assets/js/main.js para cargar publicaciones.", tiktok: "Ver en TikTok", openfb: "Abrir página de Facebook", disclaimer: "Los contenidos de redes sociales pertenecen a sus plataformas." },
      contact: { title: "Contacto", desc: "Para probar una clase, reserva por nuestras redes o escríbenos.", cta: "Ver redes" }
    },
    "en-GB": {
      brand: "Wutan Lille",
      nav: { about: "About", team: "Team", social: "Social", fed: "Federation" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Contact us" },
      header: { news: "News" },
      about: { title: "Our School", desc: "Wutan Lille teaches traditional internal and external arts: Bajiquan, Pigua Zhang and Baguazhang. A path of discipline, balance and energy." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosive, direct and efficient, emphasizing fa jin (burst power) at short to mid‑range." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Long reach, coiling and power of ‘axe’ and ‘palm’. A perfect complement to Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circular, fluid and internal; constant change, circle‑walking and sensitivity to the opponent." }
      },
      founder: { title: "Founder: Liu Yun Qiao", subtitle: "Legendary master of Wutan", bio: "Liu Yun Qiao is an emblematic figure of Wutan. His rigorous transmission and deep understanding of external and internal forms shaped generations. His legacy underpins Wutan Lille’s programme.", link: "Learn more" },
      team: { title: "Team", santiago: "Teacher at Wutan Lille, student of Lin Zhongxi since 2017, martial arts practitioner for almost 30 years." },
      fed: { title: "International Federation", desc: "Wutan Lille is part of the International Wutan Federation. Explore activities, calendar and events.", link: "International Federation (WWKF)" },
      social: { title: "Our social", hint: "Tip: add an Instagram Basic Display token in assets/js/main.js to load posts.", tiktok: "View on TikTok", openfb: "Open Facebook page", disclaimer: "Social media content belongs to their respective platforms." },
      contact: { title: "Contact", desc: "To try a class, book via our social channels or write to us.", cta: "View social" }
    },
    "it": {
      brand: "Wutan Lille",
      nav: { about: "Chi siamo", team: "Team", social: "Social", fed: "Federazione" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Contattaci" },
      header: { news: "Novità" },
      about: { title: "La nostra Scuola", desc: "Wutan Lille insegna arti tradizionali interne ed esterne: Bajiquan, Pigua Zhang e Baguazhang. Un percorso di disciplina, equilibrio ed energia." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Esplosivo, diretto ed efficace; enfatizza il fa jin (potenza esplosiva) a corta e media distanza." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Lungo raggio, torsioni e potenza delle braccia ‘ascia’ e ‘vela’. Perfetto complemento del Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circolare, fluido e interno; cambi continui, camminata in cerchio e sensibilità all’avversario." }
      },
      founder: { title: "Fondatore: Liu Yun Qiao", subtitle: "Maestro leggendario del Wutan", bio: "Liu Yun Qiao è una figura emblematiche del Wutan. La sua trasmissione rigorosa e la profonda comprensione delle forme esterne e interne hanno formato generazioni. Il suo lascito è al centro del programma di Wutan Lille.", link: "Saperne di più" },
      team: { title: "Team", santiago: "Insegnante a Wutan Lille, allievo di Lin Zhongxi dal 2017, praticante di arti marziali da quasi 30 anni." },
      fed: { title: "Federazione Internazionale", desc: "Wutan Lille fa parte della Federazione Internazionale Wutan. Scopri attività, calendario ed eventi.", link: "Federazione Internazionale (WWKF)" },
      social: { title: "I nostri social", hint: "Consiglio: aggiungi un token Instagram Basic Display in assets/js/main.js per caricare i post.", tiktok: "Guarda su TikTok", openfb: "Apri pagina Facebook", disclaimer: "I contenuti social appartengono ai rispettivi social." },
      contact: { title: "Contatto", desc: "Per provare una lezione, prenota tramite i nostri social o scrivici.", cta: "Vedi social" }
    },
    "zh-Hant": {} // UI strings for Chinese Traditional are omitted; content is loaded from JSON.
  };

  // Helper to retrieve nested property (e.g. "nav.about")
  const get = (obj, path) => path.split('.').reduce((o,k)=> (o && o[k] != null ? o[k] : ""), obj);

  // ---------------------------------------------------------------------
  // 2️⃣  Apply UI translations (data-i18n)
  // ---------------------------------------------------------------------
  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.fr;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = get(dict, key);
      if (val) el.textContent = val;
    });
    document.documentElement.lang = lang;
    document.title = (get(dict,"brand") || "Wutan Lille") + " — " + (get(dict,"hero.subtitle") || "");
  };

  const setActiveLang = (lang) => {
    document.querySelectorAll(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  };

  // ---------------------------------------------------------------------
  // 3️⃣  Load content JSON for the selected language
  // ---------------------------------------------------------------------
  const loadContent = (lang = 'fr') => {
    const files = {
      founder: 'founder.json',
      adam: 'adam.json',
      lin: 'lin.json',
      person4: 'person4.json',
      federation: 'federation.json'
    };

    const promises = Object.entries(files).map(([key, file]) => {
      return fetch(`content/${lang}/${file}`)
        .then(r => r.ok ? r.json() : Promise.reject(`${file} not found`))
        .then(json => ({ key, html: json.html || "" }))
        .catch((e) => {
          console.warn(`Failed to load ${file}:`, e);
          return { key, html: "" };
        });
    });

    Promise.all(promises).then(items => {
      items.forEach(({ key, html }) => {
        const el = document.getElementById(`${key}-content`);
        if (el) el.innerHTML = html;
      });
    });
  };

  // ---------------------------------------------------------------------
  // 4️⃣  Language‑switching handler
  // ---------------------------------------------------------------------
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("wutan-lang", lang);
      setActiveLang(lang);
      applyTranslations(lang);
      loadContent(lang);
      // Refresh Facebook plugin if present
      try {
        if (window.FB && window.FB.XFBML) {
          setTimeout(() => window.FB.XFBML.parse(), 150);
        }
      } catch (e) {}
    });
  });

  // ---------------------------------------------------------------------
  // 5️⃣  Initialise with saved language (default French)
  // ---------------------------------------------------------------------
  const savedLang = localStorage.getItem("wutan-lang") || "fr";
  setActiveLang(savedLang);
  applyTranslations(savedLang);
  loadContent(savedLang);

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---------------------------------------------------------------------
  // 6️⃣  Optional Instagram Basic Display integration
  // ---------------------------------------------------------------------
  const INSTAGRAM_TOKEN = ""; // <-- add token if you want live Instagram posts
  async function loadInstagramFeed() {
    const token = INSTAGRAM_TOKEN.trim();
    if (!token) return;
    const blocks = document.querySelectorAll("blockquote[data-instagram]");
    for (const block of blocks) {
      const username = block.getAttribute("data-instagram");
      try {
        const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`);
        const data = await res.json();
        if (!data.data) continue;
        const items = data.data.slice(0,4);
        const wrap = document.createElement("div");
        wrap.style.display = "grid";
        wrap.style.gridTemplateColumns = "repeat(2,1fr)";
        wrap.style.gap = "10px";
        items.forEach(it => {
          const a = document.createElement("a");
          a.href = it.permalink;
          a.target = "_blank";
          a.rel = "noopener";
          const img = document.createElement("img");
          img.alt = it.caption ? (it.caption.length > 80 ? it.caption.slice(0,80) + "…" : it.caption) : "Instagram media";
          img.loading = "lazy";
          img.style.borderRadius = "10px";
          img.style.border = "1px solid #2a2a2a";
          img.src = it.thumbnail_url || it.media_url;
          a.appendChild(img);
          wrap.appendChild(a);
        });
        block.replaceWith(wrap);
      } catch (e) {
        console.warn("Instagram fetch failed", e);
      }
    }
  }
  if (INSTAGRAM_TOKEN) loadInstagramFeed();
})();
