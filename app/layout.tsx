import { Cairo } from "next/font/google";
import { Metadata, Viewport } from "next";
import { SITE_URL } from "./lib/site";
import Analytics from "./components/Analytics";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  themeColor: "#0a1124",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "هنا راحتى Honara7ty | وقتك اليومي مع الله",
    template: "%s | هنا راحتى Honara7ty",
  },
  description:
    "تطبيق هنا راحتى يساعدك على حفظ آيات ومقاطع من الكتاب المقدس، والالتزام بالخلوة الروحية اليومية، ومتابعة تقدمك بالنجوم والشارات.",
  keywords: [
    "Honara7ty",
    "الوحدة اليومية",
    "وقت الرب",
    "قراءة الكتاب المقدس",
    "حفظ الكتاب المقدس",
    "تطبيق مسيحي",
    "الخلوة الروحية",
    "حفظ الآيات",
    "devotional app",
  ],
  applicationName: "Honara7ty",
  authors: [{ name: "Fady Khayrat" }],
  creator: "Fady Khayrat",
  publisher: "Honara7ty",
  category: "Religion & Spirituality",
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/",
      "x-default": "/",
    },
  },
  manifest: "/manifest.webmanifest",
  itunes: {
    appId: "6799511461",
    appArgument: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: "Honara7ty",
    title: "Honara7ty | وقتك اليومي مع الله",
    description:
      "احفظ آيات الكتاب المقدس، التزم بخلوّتك اليومية، وتابع تقدمك بطريقة بسيطة ومُشجعة.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "هنا راحتى — احفظ كلمة الله وثبّت عادة خلوة كل يوم",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honara7ty | وقتك اليومي مع الله",
    description:
      "احفظ آيات الكتاب المقدس، التزم بخلوّتك اليومية، وتابع تقدمك بالنجوم والشارات.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.variable}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}",
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
