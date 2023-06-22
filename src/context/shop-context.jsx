import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';


const getdefaultcart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}


export const ShopContext=createContext(null);


export const ShopContextProvider = (props) => {
    const [cartitems,setcartitems]=useState(getdefaultcart());

const gettotalamounet=()=>{
    let totalAmount=0;
    for(const item in cartitems){
        if(cartitems[item]>0){
            let iteminfo=PRODUCTS.find((product)=>product.id===Number(item));
            totalAmount += cartitems[item]*iteminfo.price
        }
    }
    return totalAmount;
}
const addtocart=(itemId)=>{
    setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
};

const removetocart=(itemId)=>{
    setcartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
};

const updatecartitemcart=(newamount,itemId)=>{
    setcartitems((prev)=>({...prev,[itemId]:newamount}))
};



const contextvalue={cartitems,addtocart,removetocart,updatecartitemcart,gettotalamounet}




  return (
    <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
  )
  }
