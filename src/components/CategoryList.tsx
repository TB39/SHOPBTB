import type { Product } from "../data/products";

type Props = {
  products: Product[];
};

export default function CategoryList({ products }: Props) {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className="container section">
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div className="category-list">
        {categories.map((category) => (
          <span className="category-chip" key={category}>
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}