export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="container footer-grid">
        <div className="footer-about">
          <a className="brand brand-footer" href="#"><span className="brand-mark">BTB</span><span className="brand-text">BTB <strong>SHOWROOM</strong><small>AUTOMOTIVE COLLECTION</small></span></a>
          <p>Không gian tham khảo nhiều dòng xe từ phổ thông đến cao cấp. BTB SHOWROOM hướng đến trải nghiệm chọn xe rõ ràng, đơn giản và phù hợp nhu cầu.</p>
        </div>
        <div className="footer-col"><strong>Danh mục xe</strong><a href="#cars">Sedan</a><a href="#cars">SUV / Crossover</a><a href="#cars">MPV 7 chỗ</a><a href="#cars">Bán tải</a></div>
        <div className="footer-col"><strong>Thương hiệu</strong><a href="#cars">Toyota · Honda · Mazda</a><a href="#cars">Mercedes-Benz · BMW · Audi</a><a href="#cars">Lexus · Kia · Hyundai</a><a href="#cars">Ford · Mitsubishi</a></div>
        <div className="footer-col"><strong>Thông tin</strong><span>Website demo React</span><span>Giá bán: vui lòng liên hệ</span><span>Ảnh xe mang tính tham khảo</span></div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} BTB SHOWROOM. All rights reserved.</span>
        <span>White · Navy · Blue · Silver</span>
      </div>
    </footer>
  );
}