# ShopMini - Lab 1 React + TypeScript

## 1. Yêu cầu
- Node.js LTS và npm
- VS Code
- Git (nếu cần đẩy bài lên GitHub)

## 2. Chạy project
Mở terminal tại thư mục `shop-mini-client`, chạy:

```bash
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị trong terminal, thường là http://localhost:5173.

## 3. Build kiểm tra
```bash
npm run build
```

## 4. Đẩy lên GitHub
Tạo repository `shop-mini-client` trên GitHub, sau đó chạy:

```bash
git init
git add .
git commit -m "Lab 1: trang chu ShopMini"
git branch -M main
git remote add origin https://github.com/TEN_GITHUB/shop-mini-client.git
git push -u origin main
```

Thay `TEN_GITHUB` bằng tên tài khoản GitHub của bạn.

## 5. Nội dung đã hoàn thành
- Header, ProductCard, ProductList, Footer.
- Dữ liệu 6 sản phẩm trong `src/data/products.ts`.
- Banner khuyến mãi.
- CategoryList lấy danh mục bằng `Set` và `map`.
- Sản phẩm có `stock === 0` hiển thị “Hết hàng” và khóa nút mua.
- CSS responsive cho màn hình nhỏ.
