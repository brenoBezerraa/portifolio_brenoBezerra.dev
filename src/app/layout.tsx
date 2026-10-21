import type { Metadata } from "next";
import AuroraBackground from "./components/AuroraBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breno Bezerra | Desenvolvedor Full Stack",
  description:
    "Portfólio de Breno Bezerra, desenvolvedor Full Stack especializado em React, Next.js, Node.js, NestJS e Java.",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Breno Bezerra | Desenvolvedor Full Stack",
    description:
      "Portfólio de desenvolvedor Full Stack com projetos em React, Next.js, NestJS e Java.",
    url: "https://seusite.com",
    siteName: "Breno Bezerra",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" data-scroll-behavior="smooth">
      <body className="antialiased">
        <AuroraBackground />
        <div className="noise"></div>

        {children}
      </body>
    </html>
  );
}
