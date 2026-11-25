type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onContactClick: () => void;
};

export default function Header({ search, onSearchChange, onContactClick }: HeaderProps) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>BTB SHOWROOM <i /> KHÔNG GIAN THAM KHẢO CÁC DÒNG XE</span>
          <span>SEDAN · SUV · MPV 7 CHỖ · BÁN TẢI</span>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="BTB SHOWROOM trang chủ">
            <span className="brand-mark">BTB</span>
            <span className="brand-text">BTB <strong>SHOWROOM</strong><small>AUTOMOTIVE COLLECTION</small></span>
          </a>

          <nav className="nav" aria-label="Điều hướng chính">
            <a className="active" href="#">Trang chủ</a>
            <a href="#cars">Mẫu xe</a>
            <a href="#about">Giới thiệu</a>
          </nav>

          <div className="header-actions">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Tìm hãng hoặc tên xe..."
                aria-label="Tìm hãng hoặc tên xe"
              />
            </label>
            <button className="contact-button" onClick={onContactClick}>Liên hệ <span>↗</span></button>
          </div>
        </div>
      </header>
    </>
  );
}