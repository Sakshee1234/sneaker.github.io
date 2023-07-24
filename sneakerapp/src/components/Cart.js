import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Cart(props) {
  var totalPrice=0;
  props.cart.map((data) => (
    totalPrice+=(data.price*data.qty)
  ))
  
  return (
    <div className='cart--container'>
      <Navbar/>
      <div className="cart--border">
      <div className="cart">
        <h1 className="cart--title">Cart</h1>  
        {props.cart && props.cart.map((data) => (
          <span key={data.id}>
            <div className='cart--items'>
                <div className="cart--image">
                    <img src={data.image} alt={data.title} />
                </div>
                <div className='cart--title'>
                    <h3>{data.title}</h3>
                </div>
                <div className="cart--price">
                    <p>Price: ₹{data.price}</p>
                </div>
                <div className="cart--quantity">
                    <button className='cart--quantity-decrease' onClick={() => props.subItemQuantity(data.title)}>
                        -
                    </button>
                    <p className='cart--quantity-qty'>Quantity: {data.qty}</p>
                    
                    <button className='cart--quantity-increase' onClick={() => props.addItemQuantity(data.title)}>
                        +
                    </button>
                </div>
                <div className="cart--remove">
                    <button onClick={() => props.removeItem(data.title)}>Remove</button>
                </div>
            </div>
          </span>
        ))}
        <div className='cart--footer'>
          <p className="cart--footer-totalPrice">Total: ${totalPrice}</p>
          <button onClick={()=>props.emptyCart()}>Empty Cart</button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}