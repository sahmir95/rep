import { ProductList } from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import '../assets/styles/Product.css'


const Product = () => {
  return (
    <div className="product">
      <h1 className="titleProduct">Products</h1>
      <div className="productList">
        {ProductList.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Product;