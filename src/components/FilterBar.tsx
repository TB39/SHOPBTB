type FilterBarProps = {
  categories: string[];
  brands: string[];
  activeCategory: string;
  activeBrand: string;
  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
};

export default function FilterBar({
  categories,
  brands,
  activeCategory,
  activeBrand,
  onCategoryChange,
  onBrandChange,
}: FilterBarProps) {
  return (
    <div className="filter-area">
      <div className="category-filters" aria-label="Lọc theo kiểu xe">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-pill ${activeCategory === category ? "selected" : ""}`}
            onClick={() => onCategoryChange(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <label className="brand-select-wrap">
        <span>Thương hiệu</span>
        <select value={activeBrand} onChange={(event) => onBrandChange(event.target.value)}>
          {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </label>
    </div>
  );
}