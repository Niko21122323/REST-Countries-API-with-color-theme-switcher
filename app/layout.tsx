import type { Metadata } from "next"
import "./globals.css"
import { Nunito_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import Theme from "./Theme"

const nutionSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nutionSans.className} bg-bg-l dark:bg-bg-d`}>
        <Theme>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  )
}
