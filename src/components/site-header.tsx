"use client";

import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";
import { useLanguage } from "./language-provider";

export function SiteHeader() {
  const { locale } = useLanguage();

  const labels = {
    vi: { index: "Chỉ mục", about: "Về trang này", skip: "Đi đến nội dung" },
    en: { index: "Index", about: "About", skip: "Skip to content" },
  }[locale];

  return (
    <>
      <a className="skip-link" href="#main-content">
        {labels.skip}
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="killerwhales.sats home">
          killerwhales<span>.</span>sats
        </a>
        <nav
          className="site-nav"
          aria-label={locale === "vi" ? "Điều hướng chính" : "Primary navigation"}
        >
          <a href="#index">{labels.index}</a>
          <a href="#about">{labels.about}</a>
        </nav>
        <div className="header-controls">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
