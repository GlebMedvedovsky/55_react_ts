import "./styles.css";
import { ProductProps } from "./types";


function Product({ name, price }: ProductProps) {
  return (
    // <div className="product-card">
    //   <h2>{name}</h2>
    //   <p>Price: ${price.toFixed(2)}</p>
    // </div>
    // Теперь вместо формата Price: $1.50, будет отображаться просто Price: 1.50.

      <div className="product-card">
        <h2>{name}</h2>
        <p>Price: {price.toFixed(2)}</p>
      </div>  
  );
}

export default Product;