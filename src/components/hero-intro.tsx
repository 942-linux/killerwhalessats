"use client";

import { useLanguage } from "./language-provider";
import { CurrencyBtc } from "@phosphor-icons/react";

export function HeroIntro() {
  const { locale } = useLanguage();

  const description =
    locale === "vi"
      ? "Ghi chép, quan sát và những lối rẽ sâu quanh Bitcoin."
      : "Notes, observations and rabbit holes around Bitcoin.";

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>killerwhales.sats</span>
          <span className="hero-subtitle">
            On Bitcoin <CurrencyBtc aria-hidden="true" weight="bold" />
          </span>
        </h1>
        <p>{description}</p>
      </div>
      <div className="bitcoin-watermark" aria-hidden="true">
        <CurrencyBtc weight="bold" />
      </div>
    </section>
  );
}
