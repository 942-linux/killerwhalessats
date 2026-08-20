import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p>404</p>
      <h1>Không tìm thấy trang.</h1>
      <Link href="/">Về chỉ mục</Link>
    </main>
  );
}
