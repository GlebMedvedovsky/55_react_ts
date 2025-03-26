import Product from "../../components/Product/Product";

const products = [
  { name: "Apple", price: 1.5 },
  { name: "Banana", price: 1.0 },
  { name: "Orange", price: 2.0 },
];

const Homework07: React.FC = () => {
  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((product, index) => (
          <Product key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default Homework07;