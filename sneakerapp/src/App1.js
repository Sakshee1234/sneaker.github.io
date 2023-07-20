import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer';
import Shoppingcard from './components/shoppingcard';
import {AIRFORCE,JORDAN,CRATER,HIPPIE,BLAZER} from './shoppingcardsdata.js';
import img from "./images/img.png"
import Checkout from './components/checkoutform';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Carousel from './components/Carousel';

const data=[
  {
      icon:"fa-solid fa-truck-fast",
      title: "FREE SHIPPING",
      description: "Free worldwide shipping on all orders.",
  }
  ,
  {
      icon:"fa-duotone fa-box fa",
      title:"30 DAYS RETURN",
      description:"No question return and easy refund in 14 day's."
  },
  {
      icon:"fa-regular fa-paper-plane",
      title:"CONTACT US",
      description:"Keep in touch via email and support system."
  }
]
  function App1() {
    const cards=data.map(function(data){
      return(
        <Card
          cards={data}
        />
      )
  })
  
  const [wishlist,setWishlist]=React.useState({BLAZER,CRATER,JORDAN,HIPPIE,AIRFORCE});
  function addOrRemovefromWishlist(title){
    setWishlist(BLAZER.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(CRATER.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(JORDAN.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(HIPPIE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
    setWishlist(AIRFORCE.map((data)=>{
      return data.title===title?data.wishlist=!data.wishlist:data;
    }))
  }
  const [shoppingcard,setShoppingcard]=React.useState(AIRFORCE);
  function changeTab(str){
    if(str==="BLAZER")
    setShoppingcard(BLAZER);
    else if(str==="AIRFORCE")
    setShoppingcard(AIRFORCE);
    else if(str==="JORDAN")
    setShoppingcard(JORDAN);
    else if(str==="CRATER")
    setShoppingcard(CRATER);
    else if(str==="HIPPIE")
    setShoppingcard(HIPPIE);
  }
  
  const shoppingcards=shoppingcard.map(function(data){
    return(
      <Shoppingcard
      data={data}
      toggleForm={toggleForm}
      addToCart={addToCart}
      addOrRemovefromWishlist={addOrRemovefromWishlist}
    />

    )
  })

  const [displayForm,setDisplayForm]=React.useState(false);
  

  function toggleForm(){
    setDisplayForm(prevDisplayForm=>!prevDisplayForm)
  }
  
  const [cart,setCart]=React.useState([]);

  function addToCart(title){
    BLAZER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    AIRFORCE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    JORDAN.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    CRATER.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })

    HIPPIE.map(function(data){
      if(data.title===title){
        setCart(prevCart=>{
          return [...prevCart,data];
        })
      }
    })
  }

  function addItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:data.qty+1}:data;
      })
    })
  }

  function subItemQuantity(title){
    setCart(prevCart=>{
      return prevCart.map((data)=>{
        return data.title===title?{...data,qty:(data.qty>1?data.qty-1:data.qty)}:data;
      })
    })
  }
  
  function emptyCart(){
    setCart([]);
  }
  function removeItem(title){
    setCart(prevCart=>{
      return prevCart.filter((data)=>{
        return data.title!==title;
      })
    })
  }

  return (
    
    <>
      {
        !displayForm && <div className="App">
          <Navbar
          changeTab={changeTab}
          />
          <div className='carousel'>
            <Carousel/>
          </div>
          <div className="salescards">
            {shoppingcards}
          </div>
          <div className="cardsthree">
            {cards}    
          </div>
          <img src={img} className="footimage"/>
          <Footer/>
          {/* <Cart
            cart={cart}
            emptyCart={emptyCart} 
            addItemQuantity={addItemQuantity}
            subItemQuantity={subItemQuantity}
            removeItem={removeItem}
          /> */}
          {/* <Wishlist
            addToCart={addToCart}
          /> */}
        </div>
      }
      {displayForm && <div className='checkoutform' >
          <Checkout
            toggleForm={toggleForm}
          />
      </div>}
    </>
  );
}

export default App1;