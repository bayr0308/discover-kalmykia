import { Manrope } from "next/font/google";

import type { Metadata, Viewport } from "next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Калмыкия — навстречу простору",
  description:
    "Путешествие по Калмыкии: тюльпанная степь, хурулы Элисты, сайгаки и живые традиции. Найдите свой сезон и маршрут.",
  openGraph: {
    title: "Калмыкия — навстречу простору",
    description: "Степь, хурулы и живые традиции.",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/hero-tulips.webp",
        width: 1586,
        height: 992,
        alt: "Тюльпанная степь под вечерним небом",
      },
    ],
  },
};
export const viewport: Viewport = { themeColor: "#141817" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} scroll-pt-6 scroll-smooth scheme-dark md:scroll-pt-8`}
    >
      <body className="bg-ground font-sans text-body leading-[1.6] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
