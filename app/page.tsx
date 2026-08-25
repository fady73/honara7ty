import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import googlePlayBadge from "@/public/google-play-badge.svg";
import appStoreBadge from "@/public/app-store-badge.svg";
import shot1 from "@/public/images/sm/1.png";
import shot2 from "@/public/images/sm/2.png";
import shot3 from "@/public/images/sm/3.png";
import shot4 from "@/public/images/sm/4.png";
import shot5 from "@/public/images/sm/5.png";
import shot6 from "@/public/images/sm/6.png";
import shot7 from "@/public/images/sm/7.png";
import shot8 from "@/public/images/sm/8.png";
import shot9 from "@/public/images/sm/9.png";
import Reveal from "./components/Reveal";
import Faq, { FAQ_ITEMS } from "./components/Faq";
import ThemeToggle from "./components/ThemeToggle";
import { SITE_URL } from "./lib/site";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.honara7ty.app";
const APP_STORE_URL = "https://apps.apple.com/eg/app/id6799511461";

const APP_SHOTS = [
  { src: shot1, caption: "الرئيسية", alt: "الشاشة الرئيسية في تطبيق هنا راحتى" },
  { src: shot2, caption: "قراءة الكتاب المقدس", alt: "شاشة قراءة الكتاب المقدس داخل تطبيق هنا راحتى" },
  { src: shot3, caption: "خطة القراءة اليومية", alt: "إعداد وقت وخطة القراءة اليومية في تطبيق هنا راحتى" },
  { src: shot4, caption: "حفظ الكتاب المقدس", alt: "اختيار جزء لحفظه من الكتاب المقدس" },
  { src: shot5, caption: "مراجعة الحفظ", alt: "نتيجة اختبار حفظ الكتاب المقدس" },
  { src: shot6, caption: "شرح الخلوة", alt: "محتوى شرح الخلوة والقراءة المنتظمة" },
  { src: shot7, caption: "الإنجازات", alt: "شاشة الإنجازات والثبات الروحي" },
  { src: shot8, caption: "متابعة الالتزام", alt: "تقويم متابعة الالتزام اليومي بالخلوة" },
  { src: shot9, caption: "اختبارات الحفظ", alt: "اختبار تسميع وحفظ نص الكتاب المقدس" },
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

const ICON_USER =
  "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.5c.6-3.5 3.7-5.5 7.5-5.5s6.9 2 7.5 5.5";
const ICON_BELL = "M18 16v-5a6 6 0 1 0-12 0v5l-1.7 3h15.4L18 16ZM9.8 22h4.4";
const ICON_BOOK =
  "M12 6.5C10 5 7.2 4.3 4 4.3v14.4c3.2 0 6 .7 8 2.2 2-1.5 4.8-2.2 8-2.2V4.3c-3.2 0-6 .7-8 2.2v14.4";
const ICON_PEN = "M12 20.5h9M16.8 3.2l4 4L7.5 20.5h-4v-4L16.8 3.2Z";
const ICON_SHIELD =
  "M12 3l8 2.8v5.9c0 4.8-3.4 7.8-8 9.3-4.6-1.5-8-4.5-8-9.3V5.8L12 3Z";
const ICON_DOWNLOAD = "M12 3v11m-5-4.5L12 14l5-4.5M4.5 20.5h15";
const ICON_FLAME =
  "M12 22c4 0 7-2.7 7-6.6 0-2.6-1.4-4.7-3-6.3-.3 1.3-1 2.4-2 3.1-.1-2.8-1.6-5.5-4-7.1-.2 2.4-1.3 4.1-2.7 5.6C6 12.2 5 13.9 5 15.7 5 19.4 8 22 12 22Z";
const ICON_CHECK = "M4.5 12.5l4.5 4.5L19.5 6.5";

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
        <Icon d={ICON_FLAME} size={16} />
        ٧ أيام متتابعة
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
        name: "هنا راحتى - Honara7ty",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Android, iOS",
        inLanguage: "ar",
        url: SITE_URL,
        offers: { "@type": "Offer", price: "0", priceCurrency: "EGP" },
        author: { "@type": "Person", name: "Fady Khayrat" },
        description:
          "تطبيق مساعد على بناء عادة الوحدة اليومية: تذكيرات، خطط قراءة للكتاب المقدس، ملاحظات صلاة وتأملات روحية.",
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
                «هنا راحتى» — تطبيقك للوقت اليومي مع الله
              </span>
              <h1 className="anim-up d2">
                ابنِ عادة الوحدة اليومية
                <br />
                <span className="gold-text">وابقَ قريبًا كل يوم</span>
              </h1>
              <p className="lead anim-up d3">
                Honara7ty يساعدك على الاستمرار في وقتك اليومي مع الله من خلال
                تذكيرات في الوقت الذي تختاره، ودعم لقراءة الكتاب المقدس، وملاحظات
                صلاة، وتأملات روحية، ومتابعة لتقدمك الشخصي.
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
                  <Icon d={ICON_USER} />
                </span>
                <h3>حسابك بسهولة</h3>
                <p>
                  أنشئ حسابك بالبريد الإلكتروني أو سجّل الدخول بحساب Google في
                  ثوانٍ.
                </p>
              </article>
            </Reveal>
            <Reveal delay={90}>
              <article className="card feature-card">
                <span className="feature-icon navy-bg">
                  <Icon d={ICON_BELL} />
                </span>
                <h3>تذكيرات يومية</h3>
                <p>
                  اختر وقت وحدتك اليومية واستقبل تذكيرًا لطيفًا في وقته إذا كانت
                  الإشعارات مُفعّلة.
                </p>
              </article>
            </Reveal>
            <Reveal delay={180}>
              <article className="card feature-card">
                <span className="feature-icon gold-bg">
                  <Icon d={ICON_BOOK} />
                </span>
                <h3>قراءة وتتبّع التقدم</h3>
                <p>
                  خطط قراءة ونشاطك الروحي وتقدمك في الكلمة محفوظة دائمًا في
                  حسابك.
                </p>
              </article>
            </Reveal>
            <Reveal delay={270}>
              <article className="card feature-card">
                <span className="feature-icon navy-bg">
                  <Icon d={ICON_PEN} />
                </span>
                <h3>ملاحظات خاصة بك</h3>
                <p>
                  ملاحظات الصلاة والتأملات الروحية محفوظة بخصوصية تامة لحسابك فقط.
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
                أَجْعَلْنِي فِي الصَّبَاحِ أَسْمَعُ رَحْمَتَكَ، لِأَنِّي عَلَيْكَ
                تَوَكَّلْتُ
              </blockquote>
              <cite>مزمور ١٤٣: ٨</cite>
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
                    <strong>أنشئ حسابك وحدّد وقتك</strong>
                    <p>اختيار وقت يومي لوحدتك ليصلك التذكير عند موعده.</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">٣</span>
                  <div>
                    <strong>ثبّت عادتك اليومية</strong>
                    <p>اقرأ، سجّل تأملاتك، وتابع تقدمك يزيد يوم عن يوم.</p>
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
                  <li>تسجيل الدخول بالبريد الإلكتروني أو بحساب Google</li>
                  <li>تحديد وقت يومي للوحدة واستقبال التذكيرات في موعدها</li>
                  <li>تتبّع نشاط القراءة والتقدم الروحي</li>
                  <li>حفظ ملاحظات الصلاة والتأملات الروحية</li>
                  <li>إعداد الملف الشخصي وتخصيص التجربة داخل التطبيق</li>
                </ul>
              </section>
            </Reveal>

            <Reveal delay={120}>
              <section className="card h-full">
                <h2>لماذا نطلب هذه البيانات؟</h2>
                <ul>
                  <li>البريد الإلكتروني وهوية الحساب لإنشاء الحساب وتأمينه</li>
                  <li>
                    بيانات حساب Google تُستخدم فقط لتسجيل الدخول عبر Google
                  </li>
                  <li>تفاصيل الملف الشخصي تساعد على تخصيص تجربتك داخل التطبيق</li>
                  <li>
                    وقت التذكير يُستخدم لجدولة الإشعارات التي اخترتها بنفسك
                  </li>
                  <li>
                    ملاحظات الصلاة والتأملات وتقدم القراءة محفوظة ليك أنت وحده
                  </li>
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
