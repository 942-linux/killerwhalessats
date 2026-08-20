"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Locale } from "@/data/posts";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const localeEvent = "kw-locale-change";
let volatileLocale: Locale | null = null;

function readStoredLocale(): Locale | null {
  try {
    const storedLocale = window.localStorage.getItem("kw-locale");
    return storedLocale === "vi" || storedLocale === "en"
      ? storedLocale
      : null;
  } catch {
    return volatileLocale;
  }
}

function getLocaleSnapshot(): Locale {
  return readStoredLocale() ?? "vi";
}

function getLocaleServerSnapshot(): Locale {
  return "vi";
}

function subscribeToLocale(onStoreChange: () => void) {
  const notify = () => onStoreChange();
  window.addEventListener("storage", notify);
  window.addEventListener(localeEvent, notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(localeEvent, notify);
  };
}

function updateLocale(nextLocale: Locale) {
  volatileLocale = nextLocale;
  document.documentElement.lang = nextLocale;

  try {
    window.localStorage.setItem("kw-locale", nextLocale);
  } catch {
    // Storage is optional; the in-page event still updates the interface.
  }

  window.dispatchEvent(new Event(localeEvent));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: updateLocale }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
