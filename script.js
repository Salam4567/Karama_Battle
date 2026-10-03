/* =====================================================
   معركة الكرامة — ملف الجافاسكربت
   كل بيانات المحتوى التفاعلي في مكان واحد هنا بالأعلى،
   ويمكن للطالب تعديلها بسهولة دون لمس بقية الكود.
   ===================================================== */

"use strict";

// نُعلِم أن الجافاسكربت يعمل (لتُطبَّق حركات الظهور فقط حينئذٍ)
document.documentElement.classList.add("js");

/* =====================================================
   ١) البيانات القابلة للتعديل
   ===================================================== */

// ✏️ مراحل التسلسل الزمني: عدّل أو أضف عناصر بحرية
const timelineData = [
  {
    time: "١٩٦٧ — مطلع ١٩٦٨",
    title: "قبل المعركة: قواعد في البلدة",
    summary: "بعد حرب حزيران ١٩٦٧، أصبحت الكرامة من أبرز قواعد المقاومة الفلسطينية شرقي نهر الأردن، وتوالت الغارات والعمليات بين الطرفين.",
    details: "تعرضت القرى القريبة من النهر لغارات متكررة خلال أشهر ١٩٦٧، واعتبرت إسرائيل وجود الفدائيين قرب حدودها تهديدًا مباشرًا، وهو ما مهّد للعملية العسكرية الواسعة في آذار ١٩٦٨."
  },
  {
    time: "الفجر — نحو ٥:٣٠ صباحًا",
    title: "عبور نهر الأردن",
    summary: "قوات إسرائيلية مدرعة وآلية تعبر النهر من عدة محاور، أبرزها جسر الملك عبدالله، متجهة نحو الكرامة لتطويقها.",
    details: "شملت العملية قوات مظلية هُبطت جنوب البلدة وقصفًا تمهيديًا، بهدف تدمير قواعد الفدائيين والسيطرة على المنطقة خلال ساعات."
  },
  {
    time: "الصباح",
    title: "التصدي والتشابك",
    summary: "تتشابك وحدات الجيش العربي الأردني مع القوات المتقدمة بدعم المدفعية والدبابات، ويستمر القتال مع مقاتلين فدائيين حول البلدة وتلالها.",
    details: "كان من أبرز التشكيلات الأردنية المشاركة وحدات تابعة للفرقة الأولى المدرعة (منها لواء حطين) إضافة إلى المدفعية، وفرضت النيران على القوات المهاجمة توقفات متكررة."
  },
  {
    time: "الظهيرة",
    title: "قتال عنيف حول البلدة",
    summary: "تصل القوات الإسرائيلية إلى الكرامة التي أخلى معظم سكانها قبل المعركة، وتندلع مواجهات متقطعة مع استمرار القصف المتبادل.",
    details: "أُخليت البلدة من معظم أهلها قبل المواجهة خوفًا من التصعيد، وسُجّلت اشتباكات متفرقة داخلها وضواحيها، بينما ظل خطوط التقدم تحت نيران المدفعية."
  },
  {
    time: "العصر",
    title: "هجمات مضادة",
    summary: "تشتبك وحدات أردنية في هجمات مضادة موضعية على تكتلات القوات المهاجمة، ويظل الواقع الميداني متعادلًا على الأرض.",
    details: "استمر القتال بدعم المدفعية والدبابات حتى ساعات ما بعد الظهر، ولم تتمكن القوات الإسرائيلية من تحويل تقدمها الموضعي إلى سيطرة مستقرة."
  },
  {
    time: "بعد الغروب",
    title: "انسحاب المهاجمين",
    summary: "تنسحب القوات الإسرائيلية عبر نهر الأردن بحلول المساء، منهيةً العملية بعد نحو يوم واحد من القتال.",
    details: "انسحبت القوات تحت تغطية نيرانها مع سقوط خسائر في الطرفين، وخرجت بلدة الكرامة من المعركة مدمرة بفعل القصف."
  },
  {
    time: "ما بعد ٢١ آذار",
    title: "رمز في الذاكرة",
    summary: "اكتسب اسم الكرامة صدى واسعًا في الصحافة العربية، وتدفق المتطوعون بأعداد كبيرة على صفوف حركة فتح خلال الأشهر التالية.",
    details: "تحوّل اسم البلدة — الذي يعني حرفيًا «الكرامة» — إلى رمز سياسي في الذاكرة العربية، وتُقام منذ حينها فعاليات تذكارية للاحتفاء بالمعركة وشهدائها."
  }
];

/* =====================================================
   ✏️ بيانات الشهداء — عدّلها من هنا فقط
   لإضافة شهيد جديد: انسخ أي عنصر بين قوسين { } والصقه
   بعده مع تعديل البيانات ووضع فاصلة بين العناصر.
   ===================================================== */
const martyrs = [
  {
    name: "مسلم قاسم مطير المطارنة",
    tag: "الجندي الأول",
    text: "يُعد أول شهيد على أرض المعركة حين استشهد مع انطلاقها صباحاً."
  },
  {
    name: "خضر شكري يعقوب أبو درويش",
    tag: "الملازم الأول",
    text: "استشهد متمسكاً بمواقعه وأجهزة اللاسلكي الخاصة به."
  },
  {
    name: "عيسى سليمان عبد الرحيم",
    tag: "الملازم",
    text: "روى بدمائه ثرى الكرامة دفاعاً عن الوطن."
  }
];

// ✏️ أسئلة الاختبار: correct هو رقم الإجابة الصحيحة (يبدأ من 0)
const quizQuestions = [
  {
    q: "متى وقعت معركة الكرامة؟",
    options: ["٥ حزيران ١٩٦٧", "٢١ آذار ١٩٦٨", "٦ تشرين الأول ١٩٧٣", "١٥ أيار ١٩٤٨"],
    correct: 1
  },
  {
    q: "أين تقع بلدة الكرامة؟",
    options: ["في سيناء جنوبًا", "شرق نهر الأردن قرب جسر الملك عبدالله", "على الساحل المتوسطي", "في صحراء النقب"],
    correct: 1
  },
  {
    q: "من شارك في مواجهة القوات الإسرائيلية في المعركة؟",
    options: ["الجيش العربي الأردني بمشاركة مقاتلين فدائيين", "قوة دولية تابعة للأمم المتحدة", "لم تشارك أي قوة نظامية", "قوات بريطانية متمركزة في المنطقة"],
    correct: 0
  },
  {
    q: "كيف انتهت المعركة؟",
    options: ["استمر القتال أكثر من شهر كامل", "سيطرت القوات المهاجمة على عمّان", "انسحبت القوات الإسرائيلية عبر النهر مساء اليوم نفسه", "أوقفت الوساطات الدولية القتال في ذروته"],
    correct: 2
  },
  {
    q: "أي النتائج التالية تُعد من النتائج الموثقة للمعركة؟",
    options: ["توقفت جميع العمليات العسكرية في المنطقة نهائيًا", "ارتفاع أعداد المتطوعين على صفوف حركة فتح في الأشهر التالية", "انحلال الجيش العربي الأردني", "إقامة مستوطنات جديدة في البلدة"],
    correct: 1
  }
];

/* =====================================================
   ٢) أدوات مساعدة
   ===================================================== */

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// تحويل الأرقام إلى الأرقام العربية المشرقية
const toAr = (n) => String(n).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

const CHEVRON = `<svg class="chev" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M3 6 L8 11 L13 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const ORNAMENT = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 45 V22 C9 12.6 15.7 5 24 5 C32.3 5 39 12.6 39 22 V45" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><g fill="none" stroke="currentColor" stroke-width="1.6"><rect x="17" y="15" width="14" height="14"/><rect x="17" y="15" width="14" height="14" transform="rotate(45 24 22)"/></g><line x1="4" y1="45" x2="44" y2="45" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

/* =====================================================
   ٣) بناء التسلسل الزمني
   ===================================================== */

const timelineList = $("#timelineList");

timelineData.forEach((item, i) => {
  const li = document.createElement("li");
  li.className = "tl-item";
  li.setAttribute("data-reveal", "");
  li.style.setProperty("--d", `${(i % 4) * 0.08}s`);
  li.innerHTML = `
    <span class="tl-dot" aria-hidden="true"></span>
    <article class="tl-card">
      <button class="tl-toggle" type="button" aria-expanded="false" aria-controls="tl-body-${i}">
        <span class="tl-time">${item.time}</span>
        <span class="tl-title">${item.title}</span>
        ${CHEVRON}
      </button>
      <p class="tl-summary">${item.summary}</p>
      <div class="tl-body" id="tl-body-${i}" hidden>
        <p>${item.details}</p>
      </div>
    </article>`;
  timelineList.appendChild(li);
});

// فتح/إغلاق تفاصيل كل مرحلة عند النقر
timelineList.addEventListener("click", (e) => {
  const btn = e.target.closest(".tl-toggle");
  if (!btn) return;
  const body = document.getElementById(btn.getAttribute("aria-controls"));
  const willOpen = btn.getAttribute("aria-expanded") !== "true";
  btn.setAttribute("aria-expanded", String(willOpen));
  body.hidden = !willOpen;
  btn.closest(".tl-item").classList.toggle("open", willOpen);
});

// خط التقدم الذي يمتلئ مع التمرير داخل قسم التسلسل الزمني
const timelineWrap = $(".timeline-wrap");
const tlFill = $("#tlFill");

function updateTimelineProgress() {
  if (!timelineWrap) return;
  const rect = timelineWrap.getBoundingClientRect();
  const passed = Math.min(Math.max(window.innerHeight * 0.55 - rect.top, 0), rect.height);
  tlFill.style.height = passed + "px";
}
let tlTick = false;
window.addEventListener("scroll", () => {
  if (!tlTick) {
    tlTick = true;
    requestAnimationFrame(() => { updateTimelineProgress(); tlTick = false; });
  }
}, { passive: true });
window.addEventListener("resize", updateTimelineProgress);
updateTimelineProgress();

/* =====================================================
   ٤) بطاقات الشهداء والنافذة المنبثقة
   ===================================================== */

const martyrsGrid = $("#martyrsGrid");

martyrs.forEach((m, i) => {
  const card = document.createElement("article");
  card.className = "martyr-card";
  card.dataset.index = i;
  card.setAttribute("data-reveal", "");
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `عرض تفاصيل: ${m.name}`);
  card.style.setProperty("--d", `${(i % 4) * 0.08}s`);
  card.innerHTML = `
    <div class="martyr-ornament" aria-hidden="true">${ORNAMENT}</div>
    <div class="martyr-tags">
      <span class="martyr-tag">${m.tag}</span>
    </div>
    <h3>${m.name}</h3>
    <p>${m.text}</p>`;
  martyrsGrid.appendChild(card);
});

// النافذة المنبثقة
const modal = $("#martyrModal");
const modalTag = $("#modalTag");
const modalName = $("#modalName");
const modalText = $("#modalText");
const modalClose = $("#modalClose");
let lastTrigger = null;

function openMartyrModal(index, trigger) {
  const m = martyrs[index];
  if (!m) return;
  modalTag.textContent = m.tag;
  modalName.textContent = m.name;
  modalText.textContent = m.text;
  lastTrigger = trigger;
  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", ""); // بديل للمتصفحات القديمة جدًا
  }
}

// فتح النافذة بالنقر على البطاقة
martyrsGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".martyr-card");
  if (card) openMartyrModal(Number(card.dataset.index), card);
});

// فتح النافذة بلوحة المفاتيح (Enter أو المسافة)
martyrsGrid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".martyr-card");
  if (!card) return;
  e.preventDefault();
  openMartyrModal(Number(card.dataset.index), card);
});

modalClose.addEventListener("click", () => modal.close());

// النقر على الخلفية المعتمة يغلق النافذة
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

// إعادة التركيز إلى البطاقة بعد الإغلاق (لوحة المفاتيح)
modal.addEventListener("close", () => {
  if (lastTrigger) lastTrigger.focus();
});

/* =====================================================
   ٥) الاختبار
   ===================================================== */

const quizBody = $("#quizBody");
const quizBar = $("#quizBar");
const OPTION_LETTERS = ["أ", "ب", "ج", "د"];

let quizCurrent = 0;
let quizScore = 0;
let quizLocked = false;

function quizMessage(score) {
  if (score === 5) return "ممتاز! معرفة كاملة بتفاصيل هذا اليوم.";
  if (score === 4) return "جيد جدًا — إجابة واحدة بعيدة فقط عن الكمال.";
  if (score === 3) return "جيد — راجع التسلسل الزمني لتثبيت بعض التفاصيل.";
  return "يُبدو أنك بحاجة إلى قراءة الصفحة مرة أخرى — تفضل بالعودة ثم أعد المحاولة.";
}

function renderQuestion() {
  quizLocked = false;
  const total = quizQuestions.length;
  const item = quizQuestions[quizCurrent];

  quizBar.style.width = (quizCurrent / total) * 100 + "%";

  quizBody.innerHTML = `
    <div class="quiz-q">
      <p class="quiz-step">السؤال ${toAr(quizCurrent + 1)} من ${toAr(total)}</p>
      <h3 class="quiz-question">${item.q}</h3>
      <div class="quiz-options" role="group" aria-label="خيارات الإجابة">
        ${item.options.map((opt, idx) => `
          <button class="quiz-option" type="button" data-idx="${idx}">
            <span class="opt-bullet">${OPTION_LETTERS[idx]}</span>
            <span>${opt}</span>
            <svg class="opt-mark ok" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.5 8.5 L6.5 12.5 L13.5 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg class="opt-mark no" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
          </button>`).join("")}
      </div>
      <p class="quiz-feedback" role="status"></p>
      <div class="quiz-actions">
        <button class="btn btn-primary btn-sm quiz-next" type="button" hidden>
          ${quizCurrent === total - 1 ? "إظهار النتيجة" : "السؤال التالي"}
        </button>
      </div>
    </div>`;
}

function renderResult() {
  const total = quizQuestions.length;
  quizBar.style.width = "100%";
  quizBody.innerHTML = `
    <div class="quiz-result">
      <p class="quiz-score-big">${toAr(quizScore)}<span> / ${toAr(total)}</span></p>
      <p class="quiz-message">${quizMessage(quizScore)}</p>
      <button class="btn btn-primary btn-sm quiz-restart" type="button">إعادة الاختبار</button>
    </div>`;
}

quizBody.addEventListener("click", (e) => {
  // اختيار إجابة
  const option = e.target.closest(".quiz-option");
  if (option && !quizLocked) {
    quizLocked = true;
    const item = quizQuestions[quizCurrent];
    const chosen = Number(option.dataset.idx);
    const isCorrect = chosen === item.correct;

    $$(".quiz-option", quizBody).forEach((btn) => {
      const idx = Number(btn.dataset.idx);
      btn.disabled = true;
      if (idx === item.correct) btn.classList.add("correct");
      else if (idx === chosen) btn.classList.add("wrong");
      else btn.classList.add("muted");
    });

    if (isCorrect) quizScore++;
    quizBar.style.width = ((quizCurrent + 1) / quizQuestions.length) * 100 + "%";

    const feedback = $(".quiz-feedback", quizBody);
    feedback.classList.add(isCorrect ? "ok" : "no");
    feedback.textContent = isCorrect
      ? "إجابة صحيحة!"
      : `إجابة غير صحيحة — الصواب: «${item.options[item.correct]}»`;

    $(".quiz-next", quizBody).hidden = false;
    return;
  }

  // زر السؤال التالي / النتيجة
  const nextBtn = e.target.closest(".quiz-next");
  if (nextBtn) {
    quizCurrent++;
    if (quizCurrent < quizQuestions.length) renderQuestion();
    else renderResult();
    return;
  }

  // زر الإعادة
  if (e.target.closest(".quiz-restart")) {
    quizCurrent = 0;
    quizScore = 0;
    renderQuestion();
  }
});

renderQuestion();

/* =====================================================
   ٦) الترويسة والقائمة والتنقل
   ===================================================== */

const header = $("#siteHeader");
const navToggle = $("#navToggle");
const navMenu = $("#navMenu");

// ظل الترويسة عند التمرير + زر العودة للأعلى
const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
  toTop.classList.toggle("show", window.scrollY > 600);
}, { passive: true });

// قائمة الجوال
navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
});

// إغلاق القائمة بعد اختيار رابط (على الجوال)
navMenu.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    header.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// تمييز رابط القسم الحالي أثناء التمرير
const navLinks = $$(".nav-menu a");
const sectionIds = navLinks.map((a) => a.getAttribute("href").slice(1));
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
    );
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach((sec) => activeObserver.observe(sec));

/* =====================================================
   ٧) زر العودة للأعلى وظهور الأقسام تدريجيًا
   ===================================================== */

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ظهور العناصر ب لهجة هادئة عند دخولها الشاشة
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

 $$("[data-reveal]").forEach((el) => revealObserver.observe(el));