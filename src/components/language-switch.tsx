"use client";

import { useLanguage } from "./language-provider";

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="language-switch"
      role="group"
      aria-label={locale === "vi" ? "Chọn ngôn ngữ" : "Choose language"}
    >
      <button
        type="button"
        className={locale === "vi" ? "is-active" : undefined}
        aria-pressed={locale === "vi"}
        onClick={() => setLocale("vi")}
      >
        VI
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        className={locale === "en" ? "is-active" : undefined}
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
