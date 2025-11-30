import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import SwRegister from "../components/SwRegister";
import InstallPrompt from "../components/InstallPrompt";
import ServiceWorkerRegistry from "../components/ServiceWorkerRegistry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Footwear Commerce",
  description: "Discover the latest trends in footwear.",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0d9488",
  appleWebApp: {
    capable: true,
    title: "Footwear Commerce",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <ServiceWorkerRegistry />
          {/* ✅ مكونات PWA */}
          <SwRegister />
          <InstallPrompt />

          {/* ✅ باقي الموقع */}
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
