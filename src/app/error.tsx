"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="error-page">
      <p>Có lỗi khi tải chỉ mục.</p>
      <h1>Thử lại một lần nữa.</h1>
      <button type="button" onClick={reset}>
        Tải lại
      </button>
    </main>
  );
}
