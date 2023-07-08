/* eslint-disable react/prop-types */


const ProductItem = ({ name, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem