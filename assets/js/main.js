(function(){
  const translations = {
    "fr": {
      brand: "Wutan Lille",
      nav: { about: "À propos", team: "Équipe", social: "Réseaux", fed: "Fédération" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Nous contacter" },
      header: { news: "Actualités" },
      about: { title: "Notre École", desc: "Wutan Lille enseigne les arts internes et externes traditionnels : Bajiquan, Pigua Zhang et Baguazhang. Un chemin de дисциплина, d’équilibre et d’énergie." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosif, direct et efficace, le Bajiquan met l’accent sur le fa jin (explosion d’énergie) et les courte et moyenne distances." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Longues amplitudes, torsions et puissance des bras « hache » et « voile ». Complément idéal du Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circulaire, fluide et intérieur, travail de changements constants, marche en cercle et sensibilité à l’adversaire." }
      },
      founder: { title: "Fondateur : Liu Yun Qiao", subtitle: "Maître legendario del Wutan", bio: "Liu Yun Qiao est une figure emblématiques du Wutan. Sa transmission rigoureuse et sa compréhension profonde des formes externes et internes ont formé des générations d’élèves. Son héritage est au cœur du programme de Wutan Lille.", link: "En savoir plus" },
      team: { title: "Équipe", santiago: "Professeur à Wutan Lille, élève de Lin Zhongxi depuis 2017, praticien d’arts martiaux depuis près de 30 ans." },
      fed: { title: "Fédération Internationale", desc: "Wutan Lille fait partie de la Fédération Internationale Wutan. Découvrez ses activités, son calendrier et ses événements.", link: "Fédération Internationale (WWKF)" },
      social: { title: "Nos réseaux", hint: "Astuce: ajoutez une clé API Instagram Basic Display en local dans assets/js/main.js pour charger les publications.", tiktok: "Voir sur TikTok", openfb: "Ouvrir la page Facebook", disclaimer: "Les contenus des réseaux sociaux appartiennent à leurs plateformes respectives." },
      contact: { title: "Contact", desc: "Pour essayer un cours, reservez via nos réseaux ou écrivez-nous.", cta: "Voir les réseaux" }
    },
    "es": {
      brand: "Wutan Lille",
      nav: { about: "Acerca de", team: "Equipo", social: "Redes", fed: "Federación" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Contactanos" },
      header: { news: "Novedades" },
      about: { title: "Nuestra Escuela", desc: "Wutan Lille enseña artes internas y externas tradicionales: Bajiquan, Pigua Zhang y Baguazhang. Un camino de disciplina, equilibrio y energía." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosivo, directo y eficaz, enfatiza el fa jin (explosión de energía) y las distancias cortas y medias." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Amplitud larga, torsión y potencia de brazos ‘hacha’ y ‘vela’. Ideal para complementar el Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circular, fluido e interno; cambios constantes, marcha en círculo y sensibilidad al oponente." }
      },
      founder: { title: "Fundador: Liu Yun Qiao", subtitle: "Maestro legendario del Wutan", bio: "Liu Yun Qiao es una figura emblemática del Wutan. Su transmisión rigurosa y su profunda comprensión de las formas externas e internas han formado generaciones de alumnos. Su legado es el corazón del programa de Wutan Lille.", link: "Saber más" },
      team: { title: "Equipo", santiago: "Profesor de Wutan Lille, alumno de Lin Zhongxi desde 2017, practicante de artes marciales durante los últimos 30 años." },
      fed: { title: "Federación Internacional", desc: "Wutan Lille es parte de la Federación Internacional Wutan. Descubre actividades, calendario y eventos.", link: "Federación Internacional (WWKF)" },
      social: { title: "Nuestras redes", hint: "Tip: agrega un token de Instagram Basic Display en assets/js/main.js para cargar publicaciones.", tiktok: "Ver en TikTok", openfb: "Abrir página de Facebook", disclaimer: "El contenido de redes sociales pertenece a sus plataformas." },
      contact: { title: "Contacto", desc: "Para probar una clase, reserva por nuestras redes o escríbenos.", cta: "Ver redes" }
    },
    "en-GB": {
      brand: "Wutan Lille",
      nav: { about: "About", team: "Team", social: "Social", fed: "Federation" },
      hero: { title: "Wutan Lille", subtitle: "Bajiquan • Pigua Zhang • Baguazhang", cta: "Contact us" },
      header: { news: "News" },
      about: { title: "Our School", desc: "Wutan Lille teaches traditional internal and external arts: Bajiquan, Pigua Zhang and Baguazhang. A path of discipline, balance and energy." },
      styles: {
        bajiquan: { title: "Bajiquan ( 八极拳 )", text: "Explosive, direct and efficient, emphasizing fa jin (burst power) at short to mid-range." },
        piguazhang: { title: "Pigua Zhang ( 劈挂掌 )", text: "Long reach, coiling and power of ‘axe’ and ‘palm’. A perfect complement to Bajiquan." },
        baguazhang: { title: "Baguazhang ( 八卦掌 )", text: "Circular, fluid and internal; constant change, circle-walking and sensitivity to the opponent." }
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
    "zh-Hant": {
      brand: "Wutan Lille",
      nav: { about: "關於", team: "團隊", social: "社群", fed: "聯盟" },
      hero: { title: "Wutan Lille", subtitle: "八極拳 • 劈掛掌 • 八卦掌", cta: "聯絡我們" },
      header: { news: "最新消息" },
      about: { title: "我們的學校", desc: "Wutan Lille 傳授傳統內外家武術：八極拳、劈掛掌、八卦掌。紀律、平衡與能量的修煉之路。" },
      styles: {
        bajiquan: { title: "八極拳", text: "爆發力強、直接有效，講究發勁，擅長近中距離制敵。" },
        piguazhang: { title: "劈掛掌", text: "長腰闊背、擰裹翻崩，如「斧」與「帆」之力，是八極拳的絕佳互補。" },
        baguazhang: { title: "八卦掌", text: "走圈換掌、圓轉如風，以「變」應萬變，身法靈活、內勁綿長。" }
      },
      founder: { title: "創始人：劉雲樵", subtitle: "武壇傳奇宗師", bio: "劉雲樵先生為武壇代表人物之一。其嚴謹傳承與對內外拳路的深刻理解，培育了無數弟子。其精神為 Wutan Lille 課程之核心。", link: "了解更多" },
      team: { title: "團隊", santiago: "Wutan Lille 教師，林忠喜門下自 2017 年至今，習武近三十年。" },
      fed: { title: "國際聯盟", desc: "Wutan Lille 隸屬國際武壇聯盟。歡迎探索活動、行程與賽事。", link: "國際聯盟（WWKF）" },
      social: { title: "社群媒體", hint: "提示：於 assets/js/main.js 設定 Instagram Basic Display token 可載入貼文。", tiktok: "在 TikTok 觀看", openfb: "開啟 Facebook 粉專", disclaimer: "社群內容歸各平台所有。" },
      contact: { title: "聯絡", desc: "想體驗課程，請透過社群預約或來訊。", cta: "查看社群" }
    }
  };

  function get(obj, path){
    return path.split('.').reduce((o,k)=> (o && o[k] != null ? o[k] : ""), obj);
  }

  function applyTranslations(lang){
    const dict = translations[lang] || translations.fr;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = get(dict, key);
      if (val) el.textContent = val;
    });
    // Update HTML lang for accessibility/SEO
    document.documentElement.lang = lang;
    document.title = (get(dict,"brand") || "Wutan Lille") + " — " + (get(dict,"hero.subtitle") || "");
  }

  function setActiveLang(lang){
    document.querySelectorAll(".lang-btn").forEach(b=>{
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }

  // Language switching
  const savedLang = localStorage.getItem("wutan-lang") || "fr";
  setActiveLang(savedLang);
  applyTranslations(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const lang = btn.dataset.lang;
      localStorage.setItem("wutan-lang", lang);
      setActiveLang(lang);
      applyTranslations(lang);
      // Update Facebook locale dynamically
      try {
        if (window.FB) {
          // Force a reload of the fb embed by re-parsing after short delay
          setTimeout(()=>window.FB && window.FB.XFBML && window.FB.XFBML.parse(), 150);
        }
      } catch(e){}
    });
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Instagram embed helper (requires token)
  // To enable Instagram posts, add a short-lived token in INSTAGRAM_TOKEN below.
  const INSTAGRAM_TOKEN = ""; // Optional: put your Instagram Basic Display token here
  const IG_USERNAME_ATTR = "data-instagram"; // used on blockquote to capture username
  async function loadInstagramFeed(){
    const token = INSTAGRAM_TOKEN.trim();
    if(!token) return;

    const blocks = document.querySelectorAll(`blockquote[${IG_USERNAME_ATTR}]`);
    for (const block of blocks) {
      const username = block.getAttribute(IG_USERNAME_ATTR);
      try {
        const res = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${token}`); // quick test
        // Fetch recent media
        const mediaRes = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`);
        const data = await mediaRes.json();
        if (!data.data) continue;
        const items = data.data.slice(0, 4);
        const wrap = document.createElement("div");
        wrap.style.display = "grid";
        wrap.style.gridTemplateColumns = "repeat(2,1fr)";
        wrap.style.gap = "10px";
        items.forEach(it=>{
          const a = document.createElement("a");
          a.href = it.permalink;
          a.target = "_blank";
          a.rel = "noopener";
          const img = document.createElement("img");
          img.alt = it.caption ? (it.caption.length>80?it.caption.slice(0,80)+"…":it.caption) : "Instagram media";
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

  // Auto language via ?lang=es|fr|en-GB|it|zh-Hant
  (function initialLangFromQuery(){
    const params = new URLSearchParams(location.search);
    const ql = params.get("lang");
    if (ql && translations[ql]) {
      localStorage.setItem("wutan-lang", ql);
      setActiveLang(ql);
      applyTranslations(ql);
    }
  })();

  // Load IG if token present
  if (INSTAGRAM_TOKEN) {
    loadInstagramFeed();
  }
})();
