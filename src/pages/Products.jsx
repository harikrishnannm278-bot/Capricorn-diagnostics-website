import products from "../data/products";

function Products() {
  return (
    <section className="products-page">
      <h1 className="products-title">Our Products</h1>

      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img-wrap">
              <img src={p.image} alt={p.name} />
            </div>

            <h3>{p.name}</h3>
            <p className="product-desc">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
