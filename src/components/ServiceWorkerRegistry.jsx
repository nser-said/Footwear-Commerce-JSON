"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistry() {
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

    return null;
}
