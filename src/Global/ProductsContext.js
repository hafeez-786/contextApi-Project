import React, {createContext, useState} from 'react';
import dslr from '../img/dslr.jpg';
import headphones from '../img/headphones.jpg';
import iphone from '../img/iphone.jpg';
import blueYetti from '../img/microphone.jpg';
import perfume from '../img/perfume.jpg';
import rings from '../img/rings.jpg';
import shoes from '../img/shoes.jpg';
import watch from '../img/watch.jpg';


export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {id: 1, name: 'DSLR Camera', price: 300, image: dslr, status: 'hot'},
    {id: 2, name: 'Head Phones', price: 100, image: headphones, status: 'new'},
    {id: 3, name: 'Iphone', price: 400, image: iphone, status: 'hot'},
    {id: 4, name: 'Blue Yetti', price: 50, image: blueYetti, status: 'hot'},
    {id: 5, name: 'Perfume', price: 90, image: perfume, status: 'new'},
    {id: 6, name: 'Rings', price: 800, image: rings, status: 'new'},
    {id: 7, name: 'Shoes', price: 130, image: shoes, status: 'hot'},
    {id: 8, name: 'Watch', price: 200, image: watch, status: 'new'}
  ])

  return (
    <>
       <ProductsContext.Provider value={{products: [...products]}}>
          {props.children}
       </ProductsContext.Provider>
    </>
  )
}

export default ProductsContextProvider