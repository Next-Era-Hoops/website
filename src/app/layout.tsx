import "@/styles/globals.css"
import "leaflet/dist/leaflet.css"
import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-eurostile bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

