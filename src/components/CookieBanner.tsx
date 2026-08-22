"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CookieIcon } from "./icons";

interface CookieBannerProps {
    lang: string;
    dict: {
        cookieBanner: {
            text: string;
            accept: string;
            learnMore: string;
        };
    };
}

export default function CookieBanner({ dict, lang }: CookieBannerProps) {
    const cb = dict.cookieBanner;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Checa consentimento anterior
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <aside
            aria-label="Aviso de Cookies e Privacidade"
            className="fixed bottom-6 right-6 left-6 sm:left-auto sm:max-w-md z-50 print:hidden p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-slate-300 dark:border-cyan-500/30 shadow-2xl backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
            <div className="flex items-start gap-3">
                <CookieIcon className="size-6 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    <p className="mb-3">{cb.text}</p>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAccept}
                            className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                        >
                            {cb.accept}
                        </button>
                        <Link
                            href={`/${lang}/privacidade`}
                            className="text-cyan-800 dark:text-cyan-400 hover:underline font-bold text-xs"
                        >
                            {cb.learnMore}
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}
