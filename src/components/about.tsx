"use client";

import { useLanguage } from "./language-provider";
import { ArrowUpRight } from "@phosphor-icons/react";

export function About() {
  const { locale } = useLanguage();

  const copy = {
    vi: {
      heading: "Một chỉ mục nhỏ cho những ý tưởng lớn.",
      body: "killerwhales.sats lưu lại các ghi chép, quan sát và rabbit hole quanh Bitcoin, thị trường và công nghệ. Bản viết đầy đủ sống trên X. Đây là nơi để tìm lại chúng.",
      link: "Theo dõi trên X",
    },
    en: {
      heading: "A small index for big ideas.",
      body: "killerwhales.sats collects notes, observations and rabbit holes around Bitcoin, markets and technology. The full writing lives on X. This is where you find it again.",
      link: "Follow on X",
    },
  }[locale];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <h2 id="about-title">{copy.heading}</h2>
      <div className="about-copy">
        <p>{copy.body}</p>
        <a
          href="https://x.com/normallitt"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.link} <ArrowUpRight aria-hidden="true" weight="bold" />
        </a>
      </div>
    </section>
  );
}
