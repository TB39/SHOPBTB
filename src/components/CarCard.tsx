import type { Car } from "../types";

type CarCardProps = {
  car: Car;
  onContact: (carName: string) => void;
};

export default function CarCard({ car, onContact }: CarCardProps) {
  return (
    <article className="car-card">
      <div className="car-image">
        <div className="image-fallback">
          <strong>{car.brand}</strong>
          <span>{car.name}</span>
          <small>ẢNH THAM KHẢO</small>
        </div>
        <img
          src={car.image}
          alt={`${car.brand} ${car.name} - ảnh tham khảo`}
          loading="lazy"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <span className="car-type">{car.category}</span>
      </div>
      <div className="car-details">
        <span className="car-brand">{car.brand}</span>
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <div className="car-card-bottom">
          <div className="price-caption"><small>Thông tin giá</small><strong>Liên hệ</strong></div>
          <button className="card-button" onClick={() => onContact(`${car.brand} ${car.name}`)}>
            Tư vấn xe <span>↗</span>
          </button>
        </div>
        <a className="source-link" href={car.sourceUrl} target="_blank" rel="noreferrer">Tham khảo mẫu xe / nguồn ảnh ↗</a>
      </div>
    </article>
  );
}