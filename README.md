<<<<<<< HEAD
# BTB SHOWROOM — 39 mẫu xe

Website showroom ô tô demo bằng React + TypeScript + Vite.

## Nội dung
- 39 mẫu xe tham khảo thuộc 11 thương hiệu: Mercedes-Benz, BMW, Audi, Lexus, Toyota, Honda, Mazda, Kia, Hyundai, Ford và Mitsubishi.
- Nhóm xe: Sedan, SUV/Crossover, SUV 7 chỗ, MPV 7 chỗ và bán tải.
- Tìm kiếm theo hãng, tên xe và kiểu dáng.
- Lọc theo loại xe và thương hiệu.
- Thẻ xe có mô tả ngắn và liên kết nguồn tham khảo.
- Biểu mẫu tư vấn demo.
- Giao diện responsive cho máy tính và điện thoại.
- Bảng màu trắng, navy, xanh dương và xám bạc.

## Cài đặt và chạy
Yêu cầu Node.js và npm.

Mở terminal tại thư mục dự án:
=======
# ShopMini - Lab 1 React + TypeScript

## 1. Yêu cầu
- Node.js LTS và npm
- VS Code
- Git (nếu cần đẩy bài lên GitHub)

## 2. Chạy project
Mở terminal tại thư mục `shop-mini-client`, chạy:
>>>>>>> 292513ffb2a0c138b65d7faa2e17b03b6c199c7c

```bash
npm install
npm run dev
```

<<<<<<< HEAD
Mở URL Vite hiển thị, thường là http://localhost:5173.

Kiểm tra build:

=======
Mở địa chỉ Vite hiển thị trong terminal, thường là http://localhost:5173.

## 3. Build kiểm tra
>>>>>>> 292513ffb2a0c138b65d7faa2e17b03b6c199c7c
```bash
npm run build
```

<<<<<<< HEAD
## Lưu ý quan trọng về ảnh và thông tin xe
- Ảnh là ảnh tham khảo theo từng dòng xe, lấy từ trang hãng, đại lý hoặc nguồn tin ô tô. Ảnh có thể khác đời xe, phiên bản, màu sắc hoặc trang bị thực tế.
- Một số đường dẫn ảnh bên ngoài có thể thay đổi hoặc chặn tải từ website khác. Nếu ảnh không tải được, thẻ sẽ hiện nền dự phòng với tên hãng và mẫu xe.
- Tên xe thể hiện dòng xe tham khảo, không khẳng định showroom đang có sẵn xe hoặc đang phân phối chính hãng.
- Giá hiển thị “Liên hệ”; không sử dụng giá chưa xác minh.
- Trước khi công khai website để kinh doanh, cần xác nhận tình trạng xe, phiên bản, giá, hình ảnh và quyền sử dụng hình ảnh.
- Form tư vấn hiện chỉ là demo giao diện, chưa gửi dữ liệu đến máy chủ.

## GitHub
File ZIP không chứa thư mục `.git`. Khi cập nhật project đã kết nối GitHub, giữ nguyên thư mục `.git` của project hiện tại.
=======
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
>>>>>>> 292513ffb2a0c138b65d7faa2e17b03b6c199c7c
