import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first Book",
    desciption: "the first book I ever wrote",
  },
  {
    id: "p2",
    price: 11,
    title: "My Second Book",
    desciption: "the second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.desciption}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;