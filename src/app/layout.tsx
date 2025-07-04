import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvidadosProvider } from "@/lib/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Convite Especial",
  description: "Você está convidado para um evento especial!",
  openGraph: {
    title: "Convite Especial",
    description: "Você está sendo convidado para essa comemoração.",
    images: [
      {
        url: "/fotoconvite.jpeg",
        width: 972,
        height: 1296,
        alt: "Foto do convite",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convite Especial",
    description: "Você está sendo convidado para essa comemoração.",
    images: ["/fotoconvite.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvidadosProvider>{children}</ConvidadosProvider>
      </body>
    </html>
  );
}
