"use client";

import { useLanguage } from "./language-provider";
import { CurrencyBtc } from "@phosphor-icons/react";

export function SiteFooter() {
  const { locale } = useLanguage();

  return (
    <footer className="site-footer">
      <p>killerwhales.sats</p>
      <p>
        {locale === "vi" ? "Xây trên internet." : "Built on the internet."}
      </p>
      <p>
        On Bitcoin <CurrencyBtc aria-hidden="true" weight="bold" />
      </p>
    </footer>
  );
}
