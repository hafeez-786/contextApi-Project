import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext)

  return (
    <div className="container">
      <div className="cart__container" style={{ marginTop: "50px" }}>
        <div className="left__pannel">
          <table className="table">
            {shoppingCart.length > 0 ?
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Delete</th>
                </tr>
              </thead> : 'Sorry! your cart is currently is empty'}
            <tbody>
              {shoppingCart.length > 0 ?
                shoppingCart.map((cart, index) => {
                  return <tr className="cart" key={index}>
                    <td>
                      <span className="cart__image">
                        <img src={cart.image} alt="not found" />
                      </span>
                    </td>
                    <td><span className="cart__product__name">{cart.name}</span></td>
                    <td><span className="cart__product__price">{cart.price}</span></td>
                    <td style={{padding: "0px"}}>
                      <span className="incriment__productPlus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                      <span className="product__quantity">{cart.quantity} 2</span>
                      <span className="decriment__productMinus"><i class="fa fa-minus" aria-hidden="true"></i></span>
                    </td>
                    <td>
                      <span className="product__total__price">500.00</span>
                    </td>
                    <td>
                      <span className="delete__product"><i class="fa fa-trash"
                        aria-hidden="true"></i></span>
                    </td>
                  </tr>
                })
                : ''}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart
