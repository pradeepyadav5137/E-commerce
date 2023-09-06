import React ,{useContext , useState} from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {reactRouting} from './App'

function Carts() {
    const{ cart} = useContext(reactRouting)
    const [cartInview, setCartInView] = useState(false)

    
//   function slideCartIntoView() {
//     setCartInView(!cartInview)
//   }
    return (

    //   <div className="cart-position"
    //     style={{ right: cartInview ? "0" : "-450px" }}>
    //     <div className="handle" onClick={slideCartIntoView}>
    //     <ShoppingCartIcon /> Cart 
    //     </div>
       
        <ul className="cartitems">
          {
            cart.map((crt, index) => {
              return (
                <li key={index} id='CartFlex'>{
                  <>
                    <img id="cartdetails" src={crt.image} alt="" />
                    <span>{crt.title}</span>
                  </>
                }
                </li>
              )
            })
          }
        </ul>
       )
       
      {/* </div> */}
  }

export default Carts