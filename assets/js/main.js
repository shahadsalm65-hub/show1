/* ==========================================================================
   MYSPACE — interactions & bilingual content
   Arabic is the default language. Everything below is vanilla JS.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. EDIT HERE — project images and contact details
        Project URLs live on the buttons in projects.html so they keep
        working even when JavaScript is unavailable.
     ------------------------------------------------------------------ */
  var PROJECT_IMAGES = {
    flower: './صوره الاول.jpg',
    smart: './1630321545530.jfif'
  };

  var CONTACT_EMAIL = 'hello@myspace.design';

  var SOCIALS = {
    behance: 'https://www.behance.net/',
    dribbble: 'https://dribbble.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/'
  };

  /* ------------------------------------------------------------------
     2. Dictionary
     ------------------------------------------------------------------ */
  var I18N = {
    ar: {
      'meta.home.title': 'MYSPACE — معرض شهد البصري',
      'meta.home.desc': 'معرض أعمالي: تصميم واجهات، متجر الورد، وعروض المدن الذكية. مساحة إبداعية لشهد.',
      'meta.projects.title': 'المشاريع — MYSPACE',
      'meta.projects.desc': 'استعرض مشاريع شهد: متجر الورد والعرض التقديمي للمدن الذكية.',
      'meta.contact.title': 'التواصل — MYSPACE',
      'meta.contact.desc': 'تواصل مع شهد لمشاريع التصميم والهوية البصرية والعروض التقديمية.',

      'a11y.skip': 'تخطَّ إلى المحتوى',
      'nav.label': 'التنقل الرئيسي',
      'nav.home': 'الرئيسية',
      'nav.projects': 'المشاريع',
      'nav.contact': 'التواصل',
      'lang.label': 'تبديل اللغة بين العربية والإنجليزية',
      'menu.open': 'فتح القائمة',
      'menu.close': 'إغلاق القائمة',

      'common.viewAll': 'جميع المشاريع',
      'common.explore': 'استكشف المشاريع',
      'common.sayHello': 'تواصل معي',
      'common.scroll': 'مرّر للاكتشاف',
      'common.lightboxHint': 'اضغط ESC للإغلاق',
      'common.close': 'إغلاق',
      'common.copy': 'نسخ البريد الإلكتروني',
      'common.copied': 'تم نسخ البريد الإلكتروني',
      'common.backTop': 'العودة إلى الأعلى',
      'common.available': 'متاحة لمشاريع جديدة',
      'common.visitHint': 'افتح المشروع في نافذة جديدة',
      'common.zoomHint': 'اضغط للتكبير',
      'common.nextProject': 'المشروع التالي',

      'footer.tagline': 'مساحة تصميم مستقلة لأفكار لا تُنسى.',
      'footer.navigation': 'التنقل',
      'footer.social': 'تابعني',
      'footer.rights': 'جميع الحقوق محفوظة',
      'footer.made': 'صُمّم بشغف وفضول.',

      'home.badge': 'معرض شهد البصري',
      'home.kicker': 'مصمّمة واجهات · هوية بصرية · حركة',
      'home.title1': 'أصمّم',
      'home.title2': 'مساحات',
      'home.title3': 'تُروى.',
      'home.intro': 'أنا شهد، مصمّمة واجهات أمامية أؤمن أن التصميم ليس شكلاً فقط، بل إحساسًا يسبق الكلمة. هنا أجمع تجاربي البصرية في مكان واحد: من متجر الورد إلى تصوّر المدن الذكية.',
      'home.stat1': 'مشروعان مميزان',
      'home.stat2': 'لغتان، رؤية واحدة',
      'home.stat3': 'فضول بلا حدود',
      'home.featured.kicker': 'مختارات من الأرشيف',
      'home.featured.title': 'عملان، حكايتان.',
      'home.featured.text': 'كل مشروع بدأ بسؤال مختلف، وانتهى بتجربة بصرية لها شخصيتها.',
      'home.f1.title': 'متجر الورد',
      'home.f1.cat': 'تجارة إلكترونية / تصميم موقع',
      'home.f2.title': 'المدن الذكية',
      'home.f2.cat': 'تصميم عروض تقديمية',
      'home.skills.kicker': 'لوحة المهارات',
      'home.skills.title': 'أفكار، نظام، وإحساس.',
      'home.skills.text': 'أعمل عند تقاطع التصميم والتقنية: من الفكرة الأولى على الورق إلى واجهة حيّة تستجيب لكل تفصيلة.',
      'skill.1': 'تصميم واجهات المستخدم',
      'skill.2': 'أنظمة التصميم',
      'skill.3': 'النماذج التفاعلية',
      'skill.4': 'الهوية البصرية',
      'skill.5': 'الحركة والانتقالات',
      'skill.6': 'تطوير الواجهات',
      'home.quote': 'التصميم الجيد لا يُرى… يُحسّ.',
      'home.ctaband.kicker': 'الخطوة التالية',
      'home.ctaband.title': 'لديك فكرة تستحق أن تُرى؟',
      'home.ctaband.text': 'أحب الأفكار التي تبدأ بسؤال صغير ثم تكبر إلى تجربة كاملة.',

      'projects.kicker': 'الأرشيف — ٠١ / ٠٢',
      'projects.title1': 'مشاريعي',
      'projects.title2': 'المختارة.',
      'projects.intro': 'نظرة قريبة على مشروعين مختلفين في الروح والغاية: أحدهما يُباع منه الورد، والآخر يتخيّل مدن الغد.',
      'projects.p1.tag': '٠١ / متجر إلكتروني',
      'projects.p1.name': 'متجر الورد',
      'projects.p1.cat': 'تجارة إلكترونية / تصميم موقع',
      'projects.p1.desc': 'متجر إلكتروني للورد صُمّم ليجمع بين رقة التفاصيل وسهولة التسوّق. اعتمدت فيه على تدرّجات لونية هادئة، وتسلسل بصري واضح يقود الزائر من أول زهرة إلى آخر نقرة شراء، مع تجربة متجاوبة على كل شاشة.',
      'projects.p1.btn': 'زيارة المشروع',
      'projects.p1.alt': 'لقطة من تصميم موقع متجر الورد',
      'projects.p2.tag': '٠٢ / عرض تقديمي',
      'projects.p2.name': 'المدن الذكية',
      'projects.p2.cat': 'تصميم عروض تقديمية',
      'projects.p2.desc': 'عرض تقديمي بصري عن مدن الغد: كيف تتحوّل البنية التحتية إلى شبكة حيّة تتنفّس مع سكّانها. بنيت الشرائح بلغة هندسية نظيفة، وألوان تقنية داكنة، وإيقاع حركي يجعل الفكرة تُفهم قبل أن تُقرأ.',
      'projects.p2.btn': 'عرض العرض التقديمي',
      'projects.p2.alt': 'صورة من عرض المدن الذكية التقديمي',
      'projects.more.kicker': 'ما وراء الصورة',
      'projects.more.title': 'كيف أعمل؟',
      'projects.s1.title': 'أستمع',
      'projects.s1.text': 'أبدأ بالسؤال قبل التصميم: من الجمهور؟ وما الإحساس المطلوب؟',
      'projects.s2.title': 'أبني',
      'projects.s2.text': 'أحوّل الفكرة إلى نظام بصري متماسك يخدم المحتوى قبل الزينة.',
      'projects.s3.title': 'أصقل',
      'projects.s3.text': 'أضبط التفاصيل والحركة والتجاوب حتى تبدو التجربة سهلة بلا جهد.',
      'projects.ctaband.title': 'لديك مشروعك القادم؟',
      'projects.ctaband.text': 'أحب أن أعمل على أفكار جديدة، كبيرها وصغيرها.',

      'contact.kicker': 'قناة مفتوحة',
      'contact.title1': 'لنصنع',
      'contact.title2': 'شيئًا مميزًا.',
      'contact.intro': 'سواء كان لديك مشروع كامل أو فكرة تريد أن تنمو، أنا هنا لأسمعها وأبنيها معك بصريًا.',
      'contact.emailLabel': 'البريد الإلكتروني',
      'contact.socialLabel': 'تابعني',
      'contact.behance': 'Behance',
      'contact.dribbble': 'Dribbble',
      'contact.linkedin': 'LinkedIn',
      'contact.instagram': 'Instagram',
      'contact.mailBtn': 'أرسل لي رسالة',
      'contact.note': 'أرد عادة خلال يوم واحد.',
      'contact.big': 'قل مرحبًا'
    },

    en: {
      'meta.home.title': 'MYSPACE — Shahad’s Visual Portfolio',
      'meta.home.desc': 'Selected work by Shahad: UI design, a flower store, and smart cities presentation design.',
      'meta.projects.title': 'Projects — MYSPACE',
      'meta.projects.desc': 'Explore Shahad’s projects: Flower Store e-commerce design and the Smart Cities presentation.',
      'meta.contact.title': 'Contact — MYSPACE',
      'meta.contact.desc': 'Get in touch with Shahad for design, visual identity and presentation projects.',

      'a11y.skip': 'Skip to content',
      'nav.label': 'Primary navigation',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'lang.label': 'Switch between Arabic and English',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',

      'common.viewAll': 'All projects',
      'common.explore': 'Explore projects',
      'common.sayHello': 'Say hello',
      'common.scroll': 'Scroll to explore',
      'common.lightboxHint': 'Press ESC to close',
      'common.close': 'Close',
      'common.copy': 'Copy email address',
      'common.copied': 'Email copied to clipboard',
      'common.backTop': 'Back to top',
      'common.available': 'Available for new projects',
      'common.visitHint': 'Opens in a new tab',
      'common.zoomHint': 'Click to enlarge',
      'common.nextProject': 'Next project',

      'footer.tagline': 'An independent design space for unforgettable ideas.',
      'footer.navigation': 'Navigate',
      'footer.social': 'Follow',
      'footer.rights': 'All rights reserved',
      'footer.made': 'Designed with care & curiosity.',

      'home.badge': 'Shahad’s visual archive',
      'home.kicker': 'Interface designer · Visual identity · Motion',
      'home.title1': 'I design',
      'home.title2': 'spaces',
      'home.title3': 'that speak.',
      'home.intro': 'I’m Shahad, a frontend designer who believes design is more than form — it’s a feeling that arrives before the words. Here I gather my visual experiments in one place: from a flower store to imagined smart cities.',
      'home.stat1': 'Featured projects',
      'home.stat2': 'Two languages, one vision',
      'home.stat3': 'Boundless curiosity',
      'home.featured.kicker': 'From the archive',
      'home.featured.title': 'Two projects, two stories.',
      'home.featured.text': 'Each project began with a different question and ended as a visual experience with its own personality.',
      'home.f1.title': 'Flower Store',
      'home.f1.cat': 'E-Commerce / Website Design',
      'home.f2.title': 'Smart Cities',
      'home.f2.cat': 'Presentation Design',
      'home.skills.kicker': 'The skillboard',
      'home.skills.title': 'Ideas, systems, and feel.',
      'home.skills.text': 'I work at the intersection of design and technology: from the first sketch to a living interface that responds to every detail.',
      'skill.1': 'UI & Interface Design',
      'skill.2': 'Design Systems',
      'skill.3': 'Prototyping',
      'skill.4': 'Visual Identity',
      'skill.5': 'Motion & Interaction',
      'skill.6': 'Front-end Development',
      'home.quote': 'Good design isn’t seen… it’s felt.',
      'home.ctaband.kicker': 'Next step',
      'home.ctaband.title': 'Got an idea worth seeing?',
      'home.ctaband.text': 'I love ideas that start small and grow into complete experiences.',

      'projects.kicker': 'The archive — 01 / 02',
      'projects.title1': 'Selected',
      'projects.title2': 'work.',
      'projects.intro': 'A closer look at two projects with different spirits and purposes: one sells flowers, the other imagines tomorrow’s cities.',
      'projects.p1.tag': '01 / E-Commerce',
      'projects.p1.name': 'Flower Store',
      'projects.p1.cat': 'E-Commerce / Website Design',
      'projects.p1.desc': 'An online flower shop designed to balance delicate detail with effortless shopping. Soft colour transitions and a clear visual rhythm guide visitors from the first bloom to the final checkout, with a responsive experience on every screen.',
      'projects.p1.btn': 'Visit Project',
      'projects.p1.alt': 'Screenshot of the Flower Store website design',
      'projects.p2.tag': '02 / Presentation',
      'projects.p2.name': 'Smart Cities',
      'projects.p2.cat': 'Presentation Design',
      'projects.p2.desc': 'A visual narrative about tomorrow’s cities: how infrastructure becomes a living network that breathes with its people. The slides use a clean geometric language, deep tech tones, and a rhythmic flow that makes the idea understood before it’s read.',
      'projects.p2.btn': 'View Presentation',
      'projects.p2.alt': 'Visual from the Smart Cities presentation',
      'projects.more.kicker': 'Behind the frame',
      'projects.more.title': 'How I work',
      'projects.s1.title': 'Listen',
      'projects.s1.text': 'I start with questions before pixels: Who is it for? And what should it feel like?',
      'projects.s2.title': 'Build',
      'projects.s2.text': 'The idea becomes a coherent visual system that serves the content before the decoration.',
      'projects.s3.title': 'Polish',
      'projects.s3.text': 'Details, motion and responsiveness are tuned until the experience feels effortless.',
      'projects.ctaband.title': 'Your next project?',
      'projects.ctaband.text': 'I love working on fresh ideas, big and small.',

      'contact.kicker': 'Open channel',
      'contact.title1': 'Let’s create',
      'contact.title2': 'something.',
      'contact.intro': 'Whether you have a full project or just a seed of an idea, I’d love to hear it and shape it with you.',
      'contact.emailLabel': 'Email address',
      'contact.socialLabel': 'Find me',
      'contact.behance': 'Behance',
      'contact.dribbble': 'Dribbble',
      'contact.linkedin': 'LinkedIn',
      'contact.instagram': 'Instagram',
      'contact.mailBtn': 'Send me an email',
      'contact.note': 'I usually reply within a day.',
      'contact.big': 'Say hello'
    }
  };

  /* ------------------------------------------------------------------
     3. Helpers
     ------------------------------------------------------------------ */
  var root = document.documentElement;
  var body = document.body;
  var page = body.dataset.page || 'home';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var currentLang = 'ar';
  var dict = I18N.ar;

  function t(key) { return dict[key] !== undefined ? dict[key] : key; }

  function applyLanguage(lang, persist) {
    if (!I18N[lang]) lang = 'ar';
    currentLang = lang;
    dict = I18N[lang];

    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    root.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(':').trim();
        var value = dict[key];
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });

    document.title = t('meta.' + page + '.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.' + page + '.desc'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('meta.' + page + '.desc'));

    document.querySelectorAll('.lang-opt').forEach(function (opt) {
      var active = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('is-active', active);
      if (active) opt.setAttribute('aria-current', 'true');
      else opt.removeAttribute('aria-current');
    });

    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.setAttribute('aria-label', t('lang.label'));
      langBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    }

    var navToggle = document.getElementById('navToggle');
    if (navToggle) navToggle.setAttribute('aria-label', navToggle.getAttribute('aria-expanded') === 'true' ? t('menu.close') : t('menu.open'));

    var lbHint = document.querySelector('.lightbox-hint');
    if (lbHint) lbHint.textContent = t('common.lightboxHint');
    var lbClose = document.querySelector('.lightbox-close');
    if (lbClose) lbClose.setAttribute('aria-label', t('common.close'));
    var copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) copyBtn.setAttribute('aria-label', t('common.copy'));

    document.querySelectorAll('[data-social]').forEach(function (link) {
      var url = SOCIALS[link.getAttribute('data-social')];
      if (url) link.setAttribute('href', url);
    });

    document.querySelectorAll('[data-email]').forEach(function (el) {
      el.setAttribute('href', 'mailto:' + CONTACT_EMAIL);
      if (el.getAttribute('data-email') === 'text') el.textContent = CONTACT_EMAIL;
    });

    if (persist !== false) {
      try { localStorage.setItem('myspace-lang', lang); } catch (e) { /* storage blocked */ }
    }
  }

  function setLanguage(lang) {
    applyLanguage(lang, true);
    closeNav();
  }

  /* ------------------------------------------------------------------
     4. Language switch
     ------------------------------------------------------------------ */
  var langButton = document.getElementById('langToggle');
  var savedLang = 'ar';
  try { savedLang = localStorage.getItem('myspace-lang') || 'ar'; } catch (e) { savedLang = 'ar'; }

  applyLanguage(savedLang, false);

  if (langButton) {
    langButton.addEventListener('click', function () {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
    langButton.querySelectorAll('[data-lang]').forEach(function (opt) {
      opt.addEventListener('click', function (event) {
        event.stopPropagation();
        setLanguage(opt.getAttribute('data-lang'));
      });
    });
  }

  /* ------------------------------------------------------------------
     5. Mobile navigation
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('primary-nav');

  function closeNav() {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', t('menu.open'));
    nav.classList.remove('is-open');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? t('menu.open') : t('menu.close'));
      nav.classList.toggle('is-open', !open);
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.site-header')) closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeNav();
    });
  }

  /* ------------------------------------------------------------------
     6. Reveal on scroll + progress bar
     ------------------------------------------------------------------ */
  var revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  var progress = document.querySelector('.scroll-progress i');
  function updateProgress() {
    if (!progress) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* ------------------------------------------------------------------
     7. Page transition curtain
     ------------------------------------------------------------------ */
  var curtain = document.querySelector('.page-curtain');
  if (curtain && !reduceMotion) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        curtain.classList.add('is-leaving');
        window.setTimeout(function () { curtain.classList.remove('is-leaving'); }, 620);
      });
    });

    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#' || link.target === '_blank' ||
          link.hasAttribute('download') || event.metaKey || event.ctrlKey ||
          event.shiftKey || event.altKey || event.button !== 0) return;
      if (/^(mailto:|tel:|javascript:)/i.test(href)) return;

      var destination;
      try { destination = new URL(link.href, window.location.href); } catch (e) { return; }
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.hash) return;

      event.preventDefault();
      curtain.classList.add('is-covering');
      window.setTimeout(function () { window.location.href = destination.href; }, 430);
    });

    window.addEventListener('pageshow', function (event) {
      if (event.persisted) {
        curtain.classList.remove('is-covering');
        curtain.classList.remove('is-leaving');
      }
    });
  }

  /* ------------------------------------------------------------------
     8. Lightbox for project visuals
     ------------------------------------------------------------------ */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCap = document.getElementById('lightboxCap');
  var lightboxClose = document.getElementById('lightboxClose');
  var lastFocused = null;

  function openLightbox(src, caption) {
    if (!lightbox || !src) return;
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    lightboxCap.textContent = caption || '';
    lightbox.hidden = false;
    body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox();
    });

    document.addEventListener('keydown', function (event) {
      if (lightbox.hidden) return;
      if (event.key === 'Escape') { closeLightbox(); return; }
      if (event.key !== 'Tab') return;
      var focusables = lightbox.querySelectorAll('button, a[href]');
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
  }

  document.querySelectorAll('[data-open-image]').forEach(function (button) {
    button.addEventListener('click', function () {
      var key = button.getAttribute('data-open-image');
      var caption = t('projects.' + (key === 'flower' ? 'p1' : 'p2') + '.alt');
      openLightbox(PROJECT_IMAGES[key], caption);
    });
  });

  /* ------------------------------------------------------------------
     9. Copy email + toast
     ------------------------------------------------------------------ */
  var toast = document.getElementById('toast');
  var toastTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-on');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toast.classList.remove('is-on'); }, 2600);
  }

  var copyButton = document.getElementById('copyEmail');
  if (copyButton) {
    copyButton.addEventListener('click', function () {
      function fallbackCopy() {
        var field = document.createElement('textarea');
        field.value = CONTACT_EMAIL;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        try { document.execCommand('copy'); } catch (e) { /* no-op */ }
        document.body.removeChild(field);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(CONTACT_EMAIL)
          .then(function () { showToast(t('common.copied')); })
          .catch(function () { fallbackCopy(); showToast(t('common.copied')); });
      } else {
        fallbackCopy();
        showToast(t('common.copied'));
      }
    });
  }

  /* ------------------------------------------------------------------
     10. Cursor glow + footer year (progressive enhancements)
     ------------------------------------------------------------------ */
  if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    var glow = document.querySelector('.cursor-glow');
    if (glow) {
      var mouseX = 0, mouseY = 0, raf = null;
      document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX; mouseY = event.clientY;
        glow.classList.add('is-on');
        if (raf) return;
        raf = requestAnimationFrame(function () {
          glow.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0)';
          raf = null;
        });
      });
      document.addEventListener('mouseleave', function () { glow.classList.remove('is-on'); });
    }
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
