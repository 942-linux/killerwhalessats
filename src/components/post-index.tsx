"use client";

import { posts, type Post } from "@/data/posts";
import { useLanguage } from "./language-provider";
import { ArrowUpRight } from "@phosphor-icons/react";

function formatDate(date: string | undefined, locale: "vi" | "en") {
  if (!date) return null;

  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));
}

function PostRow({ post, index }: { post: Post; index: number }) {
  const { locale } = useLanguage();
  const number = String(index + 1).padStart(2, "0");
  const openLabel = locale === "vi" ? "Mở bài gốc" : "Open original";
  const readableLabel =
    locale === "vi"
      ? `Mở bài gốc trên X trong tab mới: ${post.title.vi}`
      : `Open original post on X in a new tab: ${post.title.en}`;

  return (
    <li className="post-item">
      <a
        className="post-row"
        href={post.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={readableLabel}
      >
        <div className="post-meta">
          <span className="post-number">{number}</span>
          <span>{post.category?.[locale]}</span>
          <span>{formatDate(post.publishedAt, locale)}</span>
        </div>
        <div className="post-copy">
          <h3>{post.title[locale]}</h3>
          <p>{post.caption[locale]}</p>
          <span className="mobile-source">
            {post.source} {post.author}
          </span>
        </div>
        <span className="post-action" aria-hidden="true">
          <span>{openLabel}</span>
          <ArrowUpRight weight="bold" />
        </span>
      </a>
    </li>
  );
}

export function PostIndex() {
  const { locale } = useLanguage();
  const heading = locale === "vi" ? "Chỉ mục ý tưởng" : "Index of ideas";
  const countLabel = locale === "vi" ? "bài viết" : "entries";

  return (
    <section className="post-index" id="index" aria-labelledby="index-title">
      <div className="section-heading">
        <h2 id="index-title">{heading}</h2>
        <p>
          {String(posts.length).padStart(2, "0")} {countLabel}
        </p>
      </div>

      {posts.length > 0 ? (
        <ol className="post-list">
          {posts.map((post, index) => (
            <PostRow key={post.id} post={post} index={index} />
          ))}
        </ol>
      ) : (
        <p className="empty-state">
          {locale === "vi"
            ? "Chưa có ý tưởng nào trong chỉ mục."
            : "There are no ideas in the index yet."}
        </p>
      )}
    </section>
  );
}
