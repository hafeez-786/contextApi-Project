import React, { useContext } from 'react';
import { ProductsContext } from '../Global/ProductsContext';
import { CartContext } from '../Global/CartContext';
import Banner from './Banner';

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container marginBottom no-pad">
      <Banner />
      <h1 className="products__heading">Products</h1>
      <div className="product">
        {
          products.map((product) => {
            return (
              <div key={product.id}>
                <div className="product__details">
                  <img src={product.image} alt="not found" />
                  <p className="product__name">{product.name}</p>
                  <p className="product__price"> ${product.price}</p>
                  <button
                    className="btn addCart"
                    onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}
                  >
                    Add to cart
                  </button>
                  {product.status === 'hot' ? <div className="hot">Hot</div> : ""}
                  {product.status === 'new' ? <div className="new">New</div> : ""}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
