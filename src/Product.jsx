import axios from "axios";
import React, {useContext, useEffect, useState } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {reactRouting} from './App'
// import Carts from './Carts'

function Products() {
  const [products, setProducts] = useState([]);

  const{ cart ,setCart} = useContext(reactRouting)
  // const [cart, setCart] = useState([]);
  // const [cartInview, setCartInView] = useState(false)


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  function handleAddToCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }
  function checkProductInCart(product) {
    const itemInCart = cart.find((item) => {
      return item.id === product.id;
    });
    return itemInCart === undefined ? false : true;
  }

  function handleRemoveFromCart(e, product) {
    e.preventDefault();
    setCart(
      cart.filter((item) => {
        return item.id !== product.id;
      })
    );
  }

  // function slideCartIntoView() {
  //   setCartInView(!cartInview)
  // }

  // function Carts() {
  //   return (
  //     <div className="cart-position"
  //       style={{ right: cartInview ? "0" : "-450px" }}>
  //       <div className="handle" onClick={slideCartIntoView}>
  //       <ShoppingCartIcon /> Cart 
  //       </div>
  //       <ul className="cartitems">
  //         {
  //           cart.map((crt, index) => {
  //             return (
  //               <li key={index}>{
  //                 <>
  //                   <img id="cartdetails" src={crt.image} alt="" />
  //                   <span>{crt.title}</span>
  //                 </>
  //               }
  //               </li>
  //             )
  //           })
  //         }
  //       </ul>
  //     </div>
  //   )
  // }

  // console.log(cart);
  return (
    <>
      {/* <Carts /> */}
      <div className="products content">
        <h2>Products</h2>
        <div className="product-wrapper">
          {products.map((product, index) => {
            return (

              <div className="product" key={index}>
                <div className="imagee"><img src={product.image} alt="Product Photo" /></div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                {checkProductInCart(product) ? (
                  <a href="" onClick={(e) => handleRemoveFromCart(e, product)}>
                    Remove From Cart
                  </a>
                ) : (
                  <a href="" onClick={(e) => handleAddToCart(e, product)}>
                    Add To Cart
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
