import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer';
import Shoppingcard from './components/shoppingcard';
import {AIRFORCE,JORDAN,CRATER,HIPPIE,BLAZER} from './shoppingcardsdata.js';
import img from "./images/img.png"
import Checkout from './components/checkoutform';

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
  function App() {
    const cards=data.map(function(data){
      return(
        <Card
          cards={data}
        />
      )
  })

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
      />
    )
  })

  const [displayForm,setDisplayForm]=React.useState(true);

  function toggleForm(){
    setDisplayForm(prevDisplayForm=>!prevDisplayForm)
  }
  
  return (
    <>
      {displayForm && <div className="App">
        <Navbar
        changeTab={changeTab}
        />
        <div className="salescards">
          {shoppingcards}
        </div>
        <div className="cardsthree">
          {cards}    
        </div>
        <img src={img} className="footimage"/>
        <Footer/>
      </div>}
      {!displayForm && <div className='checkoutform' >
          <Checkout
            toggleForm={toggleForm}
          />
      </div>}
    </>
  );
}


export default App;
