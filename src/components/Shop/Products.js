import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PROUCTS = [
  { id: "p1", price: 6, title: "buggati", description: "very fast" },
  { id: "p2", price: 60, title: "ferrari", description: "very not fast" }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PROUCTS.map(product => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />

        ))}
        
      </ul>
    </section>
  );
};

export default Products;
