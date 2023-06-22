import { useContext } from "react"
import React from 'react'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const {id,productname,price,productimg}=props.data;
    const {cartitems,addtocart,removetocart,updatecartitemcart}=useContext(ShopContext);
  return (
    <div className='cartItem'>
    <img src={productimg} />
    <div className='description'>
        <p><b>{productname}</b></p>
        <p><b>₹{price}</b></p>
        <div className='countHandler'>
            <button onClick={()=> removetocart(id)}>-</button> 

            <input value={cartitems[id]} onChange={(e)=>updatecartitemcart(Number(e.target.value),id)}/>

            <button onClick={()=> addtocart(id)}>+</button>
        </div>
    </div>
    </div>
  )
}
