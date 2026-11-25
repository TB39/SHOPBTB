import type { Car } from "../types";
import CarCard from "./CarCard";

type CarGridProps = {
  cars: Car[];
  onContact: (carName: string) => void;
};

export default function CarGrid({ cars, onContact }: CarGridProps) {
  if (cars.length === 0) {
    return (
      <div className="empty-state">
        <span>⌕</span>
        <h3>Không tìm thấy mẫu xe</h3>
        <p>Thử tìm bằng tên hãng khác hoặc chọn “Tất cả”.</p>
      </div>
    );
  }

  return (
    <div className="car-grid">
      {cars.map((car) => <CarCard key={car.id} car={car} onContact={onContact} />)}
    </div>
  );
}