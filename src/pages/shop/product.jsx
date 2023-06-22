import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id,productname,price,productimg}=props.data;
    const {addtocart,cartitems}=useContext(ShopContext);

    const cartitemamount=cartitems[id];
  return (
    <div className='product'>
    <img src={productimg} alt='noimg' />
    <div className='description'>
        <p><b>{productname}</b></p>
        <p><b>₹{price}</b></p>
    </div>
    <button className='addToCartBttn'
    onClick={()=>addtocart(id)}
    >Add To Cart {cartitemamount>0&&<>({cartitemamount})</>}</button>
    </div>
  )
}
