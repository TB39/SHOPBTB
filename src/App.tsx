import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import CarGrid from "./components/CarGrid";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import { cars } from "./data/cars";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [activeBrand, setActiveBrand] = useState("Tất cả thương hiệu");
  const [selectedCar, setSelectedCar] = useState("Chưa chọn mẫu xe");
  const [modalOpen, setModalOpen] = useState(false);

  const categories = useMemo(
    () => ["Tất cả", "Sedan", "SUV / Crossover", "SUV 7 chỗ", "MPV 7 chỗ", "Bán tải"],
    [],
  );
  const brands = useMemo(
    () => ["Tất cả thương hiệu", ...new Set(cars.map((car) => car.brand))],
    [],
  );

  const filteredCars = useMemo(() => {
    const term = search.trim().toLocaleLowerCase("vi");
    return cars.filter((car) => {
      const matchCategory = activeCategory === "Tất cả" || car.category === activeCategory;
      const matchBrand = activeBrand === "Tất cả thương hiệu" || car.brand === activeBrand;
      const searchable = `${car.brand} ${car.name} ${car.category}`.toLocaleLowerCase("vi");
      return matchCategory && matchBrand && searchable.includes(term);
    });
  }, [search, activeCategory, activeBrand]);

  function openContact(carName = "Chưa chọn mẫu xe") {
    setSelectedCar(carName);
    setModalOpen(true);
  }

  function exploreCars() {
    document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
  }

  function resetFilters() {
    setSearch("");
    setActiveCategory("Tất cả");
    setActiveBrand("Tất cả thương hiệu");
  }

  return (
    <>
      <Header search={search} onSearchChange={setSearch} onContactClick={() => openContact()} />
      <main>
        <Hero onExplore={exploreCars} onContact={() => openContact()} />

        <section className="stats-strip">
          <div className="container stats-inner">
            <div><strong>39</strong><span>MẪU XE</span></div>
            <div><strong>11</strong><span>THƯƠNG HIỆU</span></div>
            <div><strong>04</strong><span>NHÓM KIỂU DÁNG</span></div>
            <p>Tham khảo đa dạng lựa chọn cho nhu cầu cá nhân và gia đình.</p>
          </div>
        </section>

        <section className="inventory container" id="cars">
          <div className="section-head">
            <div>
              <span className="section-kicker">BTB AUTO COLLECTION</span>
              <h2>Khám phá <em>các mẫu xe</em></h2>
              <p>Từ sedan thanh lịch, SUV đa dụng đến MPV gia đình và bán tải.</p>
            </div>
            <div className="inventory-total"><strong>{filteredCars.length.toString().padStart(2, "0")}</strong><span>MẪU XE ĐANG HIỂN THỊ</span></div>
          </div>

          <FilterBar
            categories={categories}
            brands={brands}
            activeCategory={activeCategory}
            activeBrand={activeBrand}
            onCategoryChange={setActiveCategory}
            onBrandChange={setActiveBrand}
          />

          <div className="result-row">
            <span>Đang hiển thị <strong>{filteredCars.length}</strong> / {cars.length} mẫu xe</span>
            {(search || activeCategory !== "Tất cả" || activeBrand !== "Tất cả thương hiệu") && (
              <button onClick={resetFilters}>Xóa bộ lọc ×</button>
            )}
          </div>

          <CarGrid cars={filteredCars} onContact={openContact} />

          <p className="image-disclaimer">
            <strong>Lưu ý:</strong> Ảnh trên website là ảnh tham khảo theo dòng xe, có thể khác đời xe, phiên bản, màu sắc hoặc trang bị thực tế. Tình trạng xe, giá bán và thông tin phiên bản cần được showroom xác nhận trước khi đăng bán.
          </p>
        </section>

        <section className="contact-band container">
          <div><span>BTB SHOWROOM</span><h2>Bạn đang tìm chiếc xe nào?</h2><p>Để lại thông tin để bắt đầu trao đổi về mẫu xe phù hợp.</p></div>
          <button className="btn btn-blue" onClick={() => openContact()}>Nhận tư vấn <span>↗</span></button>
        </section>
      </main>
      <Footer />
      <ContactModal open={modalOpen} carName={selectedCar} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;