import React from "react";

const ProductItem = () => {
  let url = "http://localhost:8080/products";
  let [prod, setProd] = React.useState([]);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    let products = data.map(product => {
      return <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button>ADD TO CART</button>
      </div>
    });
    setProd(products);
  })
  .catch(error => {
    console.log(error);
  })
  return <div>
    {prod}
  </div>;
};

export default ProductItem;