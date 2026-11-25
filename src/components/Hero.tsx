type HeroProps = {
  onExplore: () => void;
  onContact: () => void;
};

export default function Hero({ onExplore, onContact }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker"><i /> BTB AUTOMOTIVE COLLECTION</span>
        <h1>Tìm chiếc xe<br />xứng đáng <em>với bạn.</em></h1>
        <p>Từ mẫu xe phổ thông dễ tiếp cận đến những dòng xe sang trọng. Khám phá nhiều thương hiệu, nhiều kiểu dáng và chọn chiếc xe phù hợp với nhu cầu của bạn.</p>
        <div className="hero-buttons">
          <button className="btn btn-blue" onClick={onExplore}>Khám phá mẫu xe <span>↗</span></button>
          <button className="btn btn-outline" onClick={onContact}>Nhận tư vấn</button>
        </div>
        <div className="hero-bottom"><strong>39</strong><span>MẪU XE THAM KHẢO</span><i /> <span>11 THƯƠNG HIỆU</span></div>
      </div>
      <div className="hero-label">DISCOVER YOUR NEXT DRIVE</div>
    </section>
  );
}