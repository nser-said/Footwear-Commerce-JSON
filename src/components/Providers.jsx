"use client";

import { useEffect } from "react";
import { CartProvider } from "../context/CartContext";
import SwRegister from "./SwRegister";
import InstallPrompt from "./InstallPrompt";

export default function Providers({ children }) {
    // ✅ تسجيل Service Worker
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .then(() => console.log("✅ Service Worker Registered"))
                .catch((err) =>
                    console.error("❌ Service Worker Registration Failed:", err)
                );
        }
    }, []);

    return (
        <CartProvider>
            {/* ✅ مكونات PWA */}
            <SwRegister />
            <InstallPrompt />
            {children}
        </CartProvider>
    );
}
