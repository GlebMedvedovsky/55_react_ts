import { v4 as uuidv4 } from "uuid";
import Product from "../../components/Product/Product";

const products = [
  { id: uuidv4(), name: "Apple", price: 1.5 },
  { id: uuidv4(), name: "Banana", price: 1.0 },
  { id: uuidv4(), name: "Orange", price: 2.0 },
];

function Homework07() {
  const productCards = products.map((product) => (
    <Product key={product.id} name={product.name} price={product.price} />
  ));

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {productCards}
      </div>
    </div>
  );
}

export default Homework07;
