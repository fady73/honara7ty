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
    "تطبيق Honara7ty يساعدك على بناء عادة الوحدة اليومية من خلال تذكيرات يومية، وخطط قراءة للكتاب المقدس، وملاحظات صلاة، وتأملات روحية، ومتابعة تقدمك الشخصي.",
  keywords: [
    "Honara7ty",
    "الوحدة اليومية",
    "وقت الرب",
    "قراءة الكتاب المقدس",
    "تطبيق مسيحي",
    "ملاحظات صلاة",
    "تأملات روحية",
    "devotional app",
  ],
  applicationName: "Honara7ty",
  authors: [{ name: "Fady Khayrat" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: "Honara7ty",
    title: "Honara7ty | وقتك اليومي مع الله",
    description:
      "ابنِ عادة الوحدة اليومية: تذكيرات يومية، خطط قراءة للكتاب المقدس، ملاحظات صلاة وتأملات روحية في مكان واحد.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honara7ty | وقتك اليومي مع الله",
    description:
      "ابنِ عادة الوحدة اليومية: تذكيرات، خطط قراءة، وملاحظات صلاة في تطبيق واحد.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
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
