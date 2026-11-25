
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} ShopLAk · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 0819949196 · Email: shopleanhkiet.vn</p>
      </div>
    </footer>
  );
}
