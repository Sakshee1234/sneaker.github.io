import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer';
import Shoppingcard from './components/shoppingcard';
import {airforce} from './shoppingcardsdata.js';
import img from "./images/img.png"
import { Link} from "react-router-dom";
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

  const [shoppingcard,setShoppingcard]=React.useState(airforce);

  const airforcels=shoppingcard.map(function(data){
    return(
      <Shoppingcard
        data={data}
        toggleForm={toggleForm}
      />
    )
  })
  
  const [displayForm,setDisplayForm]=React.useState(false);

  function toggleForm(){
    setDisplayForm(prevDisplayForm=>!prevDisplayForm)
  }

  const styleDisplayForm={
    display: displayForm ? "block":"none"
  }
  return (
    <>
      <div className="App">

        <Navbar/>
        <div className="salescards">
          {airforcels}
        </div>
        <div className="cardsthree">
          {cards}
        </div>
        <img src={img} className="footimage"/>
        <hr/>
        <Footer/>
        
      </div>
      <div className='checkoutform' style={styleDisplayForm}>
          <Checkout
            toggleForm={toggleForm}
          />
      </div>

    </>
  );
}


export default App;
