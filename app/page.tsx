import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import googlePlayBadge from "@/public/google-play-badge.svg";
import appStoreBadge from "@/public/app-store-badge.svg";
import shot1 from "@/public/images/sm/1.webp";
import shot2 from "@/public/images/sm/2.webp";
import shot3 from "@/public/images/sm/3.webp";
import shot4 from "@/public/images/sm/4.webp";
import shot5 from "@/public/images/sm/5.webp";
import shot6 from "@/public/images/sm/6.webp";
import shot7 from "@/public/images/sm/7.webp";
import shot8 from "@/public/images/sm/8.webp";
import shot9 from "@/public/images/sm/9.webp";
import Reveal from "./components/Reveal";
import Faq, { FAQ_ITEMS } from "./components/Faq";
import ThemeToggle from "./components/ThemeToggle";
import { SITE_URL } from "./lib/site";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.honara7ty.app";
const APP_STORE_URL = "https://apps.apple.com/eg/app/id6799511461";

const APP_SHOTS = [
  {
    src: shot1,
    caption: "الرئيسية",
    alt: "الشاشة الرئيسية في تطبيق هنا راحتى",
  },

  {
    src: shot4,
    caption: "حفظ الكتاب المقدس",
    alt: "اختيار جزء لحفظه من الكتاب المقدس",
  },
  {
    src: shot9,
    caption: "اختبارات الحفظ",
    alt: "اختبار تسميع وحفظ نص الكتاب المقدس",
  },
  {
    src: shot6,
    caption: "شرح الخلوة",
    alt: "محتوى شرح الخلوة والقراءة المنتظمة",
  },
  {
    src: shot8,
    caption: "متابعة الالتزام",
    alt: "تقويم متابعة الالتزام اليومي بالخلوة",
  },
  {
    src: shot2,
    caption: "قراءة الكتاب المقدس",
    alt: "شاشة قراءة الكتاب المقدس داخل تطبيق هنا راحتى",
  },
  {
    src: shot3,
    caption: "خطة القراءة اليومية",
    alt: "إعداد وقت وخطة القراءة اليومية في تطبيق هنا راحتى",
  },

  {
    src: shot5,
    caption: "مراجعة الحفظ",
    alt: "نتيجة اختبار حفظ الكتاب المقدس",
  },

  { src: shot7, caption: "الإنجازات", alt: "شاشة الإنجازات والثبات الروحي" },
] as const;

function Icon({ d, size = 26 }: { d: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const ICON_BELL = "M18 16v-5a6 6 0 1 0-12 0v5l-1.7 3h15.4L18 16ZM9.8 22h4.4";
const ICON_BOOK =
  "M12 6.5C10 5 7.2 4.3 4 4.3v14.4c3.2 0 6 .7 8 2.2 2-1.5 4.8-2.2 8-2.2V4.3c-3.2 0-6 .7-8 2.2v14.4";
const ICON_SHIELD =
  "M12 3l8 2.8v5.9c0 4.8-3.4 7.8-8 9.3-4.6-1.5-8-4.5-8-9.3V5.8L12 3Z";
const ICON_DOWNLOAD = "M12 3v11m-5-4.5L12 14l5-4.5M4.5 20.5h15";
const ICON_FLAME =
  "M12 22c4 0 7-2.7 7-6.6 0-2.6-1.4-4.7-3-6.3-.3 1.3-1 2.4-2 3.1-.1-2.8-1.6-5.5-4-7.1-.2 2.4-1.3 4.1-2.7 5.6C6 12.2 5 13.9 5 15.7 5 19.4 8 22 12 22Z";
const ICON_CHECK = "M4.5 12.5l4.5 4.5L19.5 6.5";
const ICON_STAR =
  "m12 2.8 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3-4.6-4.5 6.3-.9L12 2.8Z";

function StoreLinks() {
  return (
    <div className="store-links">
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
        <Image
          src={googlePlayBadge}
          alt="حمّل هنا راحتى من Google Play"
          width={162}
          height={48}
        />
      </a>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
        <Image
          src={appStoreBadge}
          alt="حمّل هنا راحتى من App Store"
          width={162}
          height={48}
        />
      </a>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap anim-up d5">
      <span className="chip chip-1">
        <Icon d={ICON_BELL} size={16} />
        تذكير ٦:٠٠ صباحًا
      </span>
      <span className="chip chip-2">
        <Icon d={ICON_FLAME} size={16} />٧ أيام متتابعة
      </span>
      <Image
        className="hero-app-shot"
        src={shot1}
        alt="الشاشة الرئيسية لتطبيق هنا راحتى"
        priority
        sizes="(max-width: 760px) 78vw, 290px"
      />
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "هنا راحتى - Honara7ty",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        inLanguage: "ar",
        url: SITE_URL,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EGP" },
        author: { "@type": "Person", name: "Fady Khayrat" },
        installUrl: GOOGLE_PLAY_URL,
        sameAs: [GOOGLE_PLAY_URL, APP_STORE_URL],
        featureList: [
          "حفظ آيات ومقاطع من الكتاب المقدس",
          "تذكيرات يومية بالخلوة الروحية",
          "متابعة التقدم والالتزام",
          "نجوم وشارات تحفيزية",
          "شرح خطوات الخلوة الروحية",
        ],
        screenshot: APP_SHOTS.map((shot) =>
          `${SITE_URL}${shot.src.src}`,
        ),
        description:
          "تطبيق يساعدك على حفظ آيات ومقاطع من الكتاب المقدس، والالتزام بالخلوة الروحية اليومية، ومتابعة تقدمك من خلال النجوم والشارات التحفيزية.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "هنا راحتى Honara7ty",
        inLanguage: "ar-EG",
        description:
          "الموقع الرسمي لتطبيق هنا راحتى لحفظ الكتاب المقدس وبناء عادة الخلوة اليومية.",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="hero">
        <div className="wrap">
          <nav className="topbar anim-up">
            <div className="brand">
              <Image
                src={logo}
                alt="شعار هنا راحتى Honara7ty"
                width={44}
                height={44}
                priority
              />
              <span className="brand-text">
                <strong>هنا راحتى</strong>
                <span>Honara7ty</span>
              </span>
            </div>
            <div className="topbar-actions">
              <Link href="/privacy" className="topbar-link">
                سياسة الخصوصية
              </Link>
              <ThemeToggle />
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-body">
              <span className="eyebrow anim-up d1">
                «هنا راحتى» — رفيقك اليومي في رحلتك الروحية
              </span>
              <h1 className="anim-up d2">
                احفظ كلمة الله بسهولة
                <br />
                <span className="gold-text">وثبّت عادة خلوة كل يوم</span>
              </h1>
              <p className="lead anim-up d3">
                يساعدك «هنا راحتى» على حفظ آيات ومقاطع من الكتاب المقدس،
                والالتزام بالخلوات الروحية اليومية، ومتابعة تقدمك بطريقة بسيطة
                ومُشجعة تقرّبك من الله يومًا بعد يوم.
              </p>
              <div className="actions anim-up d4">
                <Link href="#download" className="btn btn-primary">
                  حمّل التطبيق مجانًا
                </Link>
                <a
                  href="mailto:fadykhayrat@gmail.com"
                  className="btn btn-outline"
                >
                  تواصل معنا
                </a>
              </div>
              <div className="store-caption anim-up d5">متوفر على</div>
              <div className="anim-up d6">
                <StoreLinks />
              </div>
            </div>

            <PhoneMockup />
          </div>
        </div>
      </header>

      <main>
        <div className="wrap">
          <section className="grid features">
            <Reveal>
              <article className="card feature-card">
                <span className="feature-icon gold-bg">
                  <Icon d={ICON_BOOK} />
                </span>
                <h3>حفظ منظّم للكتاب</h3>
                <p>
                  اختر الآيات والمقاطع التي تريد حفظها، وراجعها بطريقة واضحة
                  ومنظّمة.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="card feature-card">
                <span className="feature-icon navy-bg">
                  <Icon d={ICON_BELL} />
                </span>
                <h3>تذكيرات بالخلوة</h3>
                <p>
                  حدّد موعد خلوّتك واستقبل تذكيرًا يوميًا يساعدك على الالتزام
                  والاستمرار.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="card feature-card">
                <span className="feature-icon gold-bg">
                  <Icon d={ICON_CHECK} />
                </span>
                <h3>متابعة يومًا بيوم</h3>
                <p>
                  تابع أيام التزامك وتقدمك في الحفظ والخلوة لتشاهد نمو عادتك
                  الروحية.
                </p>
              </article>
            </Reveal>
            <Reveal delay={270}>
              <article className="card feature-card">
                <span className="feature-icon navy-bg">
                  <Icon d={ICON_STAR} />
                </span>
                <h3>نجوم وشارات تحفيزية</h3>
                <p>
                  اكسب نجومًا وشارات تشجّعك على المثابرة والاستمرار في رحلتك.
                </p>
              </article>
            </Reveal>
          </section>

          <section className="verse-band full-width">
            <div className="wrap">
              <div className="quote-mark" aria-hidden="true">
                &rdquo;
              </div>
              <blockquote>
                <span>
                  طُوبَى لِلرَّجُلِ الَّذِي لَمْ يَسْلُكْ فِي مَشُورَةِ
                  الأَشْرَارِ، وَفِي طَرِيقِ الْخُطَاةِ لَمْ يَقِفْ، وَفِي
                  مَجْلِسِ الْمُسْتَهْزِئِينَ لَمْ يَجْلِسْ. لكِنْ فِي نَامُوسِ
                  الرَّبِّ مَسَرَّتُهُ، وَفِي نَامُوسِهِ يَلْهَجُ نَهَارًا
                  وَلَيْلًا.
                </span>
              </blockquote>
              <cite>مزمور ١: ١–٢</cite>
            </div>
          </section>

          <Reveal>
            <section className="section card">
              <h2>ابدأ في ثلاث خطوات</h2>
              <ol className="steps">
                <li>
                  <span className="step-num">١</span>
                  <div>
                    <strong>حمّل التطبيق</strong>
                    <p>متوفر لأجهزة Android و iOS من المتاجر أدناه.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">٢</span>
                  <div>
                    <strong>حدّد موعدك واختر ما تحفظه</strong>
                    <p>اختر وقت خلوّتك والآيات أو المقاطع التي تريد حفظها.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">٣</span>
                  <div>
                    <strong>ثبّت عادتك اليومية</strong>
                    <p>راجع ما حفظته، تابع تقدمك، واكسب النجوم والشارات.</p>
                  </div>
                </li>
              </ol>
            </section>
          </Reveal>

          <section className="section">
            <Reveal>
              <div className="shots-head">
                <h2>لمحة من داخل التطبيق</h2>
                <p>واجهة بسيطة وهادئة تساعدك على التركيز في وقتك مع الله.</p>
              </div>
            </Reveal>
            <div className="shots" aria-label="صور من داخل تطبيق هنا راحتى">
              {APP_SHOTS.map((shot, index) => (
                <Reveal key={shot.caption} delay={(index % 3) * 90}>
                  <figure className="shot">
                    <Image
                      className="shot-image"
                      src={shot.src}
                      alt={shot.alt}
                      sizes="(max-width: 640px) 72vw, 260px"
                    />
                    <figcaption>{shot.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          <div className="split">
            <Reveal>
              <section className="card h-full">
                <h2>ماذا يقدّم لك التطبيق؟</h2>
                <ul>
                  <li>حفظ آيات ومقاطع من الكتاب المقدس بطريقة منظّمة</li>
                  <li>تلقّي تذكيرات يومية بالخلوات الروحية</li>
                  <li>متابعة التقدم والالتزام يومًا بيوم</li>
                  <li>ربح نجوم وشارات كمكافآت تحفيزية</li>
                  <li>تعلّم خطوات الخلوة الروحية وكيفية البدء عمليًا</li>
                  <li>بناء عادة روحية مستمرة تقرّبك من الله</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={120}>
              <section className="card h-full">
                <h2>التطبيق مناسب لك إذا كنت تريد</h2>
                <ul>
                  <li>تنظيم وقت خلوّتك الروحية</li>
                  <li>مواصلة القراءة والتأمل باستمرار</li>
                  <li>حفظ الكتاب المقدس بسهولة</li>
                  <li>الحصول على تشجيع مستمر للمثابرة</li>
                </ul>
              </section>
            </Reveal>
          </div>

          <Reveal>
            <section className="section privacy-strip">
              <span className="feature-icon">
                <Icon d={ICON_SHIELD} />
              </span>
              <div>
                <h2>الخصوصية والشفافية</h2>
                <p>
                  يطلب Honara7ty فقط البيانات اللازمة لتوفير الوصول إلى الحساب،
                  وجدولة التذكيرات، وحفظ المحتوى الروحي، وتشغيل خدمات التطبيق.
                </p>
                <Link href="/privacy" className="text-link">
                  اقرأ سياسة الخصوصية كاملة ←
                </Link>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="section card faq-card">
              <h2>أسئلة شائعة</h2>
              <Faq />
            </section>
          </Reveal>

          <Reveal>
            <section className="section card meta-card">
              <h2>بيانات التطبيق</h2>
              <div className="meta">
                <p>
                  <strong>اسم التطبيق:</strong> هنا راحتى — Honara7ty
                </p>
                <p>
                  <strong>المنصة:</strong> تطبيق موبايل (Android و iOS)
                </p>
                <p>
                  <strong>المطوّر / للتواصل:</strong> fadykhayrat@gmail.com
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section id="download" className="section download-card">
              <Icon d={ICON_DOWNLOAD} size={34} />
              <h2>حمّل «هنا راحتى» الآن</h2>
              <p>
                ابدأ اليوم في بناء عادتك الروحية اليومية… خطوة صغيرة كل يوم تصنع
                فرقًا كبيرًا.
              </p>
              <StoreLinks />
            </section>
          </Reveal>
        </div>
      </main>

      <footer>
        <div className="wrap footer-inner">
          <p>© {new Date().getFullYear()} Honara7ty — جميع الحقوق محفوظة</p>
          <p>
            للتواصل:{" "}
            <a href="mailto:fadykhayrat@gmail.com" className="text-link">
              fadykhayrat@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
