import React,{useContext} from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { Link } from 'react-router-dom';



export const Cart = () => {
  const {cartitems,gettotalamounet}=useContext(ShopContext);
  const totalamount=gettotalamounet();


  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartitems[product.id] !==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalamount>0 ?(
      <div className='checkout'>
        <p>Subtotal:₹{totalamount}</p>
        <Link to="/"><button>Continue Shopping</button></Link>
        <button>Checkout</button>
      </div>
      ):(
        <h2>Your Cart Is Empty</h2>
        )}
    </div>
  )
}
