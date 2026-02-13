import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="product-detail-page">
      <div className="container">

        {/* Back button */}
        <Link to="/products" className="back-btn">
          ← Back to Products
        </Link>

        {/* Main section */}
        <div className="product-main">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="description">{product.description}</p>

            <button className="enquiry-btn">Request Enquiry</button>
          </div>
        </div>

        {/* Technical details */}
        <div className="product-section">
          <h2>Key Features</h2>
          <ul>
            <li>High-precision diagnostic performance</li>
            <li>Reliable and consistent laboratory results</li>
            <li>User-friendly interface and workflow</li>
            <li>Low maintenance and long operational life</li>
            <li>Complies with international medical standards</li>
          </ul>
        </div>

        {/* Manufacturer */}
        <div className="product-section manufacturer">
          <h2>Manufacturing & Quality</h2>
          <p>
            This product is manufactured by a globally recognized medical
            diagnostics company known for advanced research, strict quality
            control, and compliance with international regulatory standards
            such as ISO and CE certifications. Their solutions are widely used
            in hospitals, diagnostic laboratories, and research institutions
            worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;


