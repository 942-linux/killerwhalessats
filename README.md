# killerwhales.sats

Chỉ mục song ngữ cho các ý tưởng, ghi chép và quan sát quanh Bitcoin, thị trường và công nghệ. Nội dung đầy đủ được mở về bài gốc trên X.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Thêm bài viết

Thêm một object mới vào `src/data/posts.ts`. Mỗi bài có title, caption và category cho cả `vi` lẫn `en`; component chỉ mục sẽ tự render theo thứ tự trong mảng.

## Kiểm tra production

```bash
npm run lint
npm run build
npm run start
```

## Bảo mật

`src/proxy.ts` tạo CSP nonce mới cho từng request và chuyển nonce vào quá trình render của Next.js. Các browser security headers còn lại được quản lý tập trung trong `next.config.ts`.

Không thay nonce động bằng `unsafe-inline`. Nếu thêm script hoặc style mới, hãy truyền nonce từ request hoặc giữ tài nguyên trong file cùng origin rồi chạy lại audit CSP trên production build.
