import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "FutPaixão - Viva a Paixão pelo Futebol",
  description:
    "A plataforma definitiva para os amantes do futebol brasileiro e mundial. Acompanhe jogos, estatísticas e momentos épicos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
