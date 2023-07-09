import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer';
import Shoppingcard from './components/shoppingcard';
import {shoppingcarddata} from './shoppingcardsdata.js';
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
  console.log(shoppingcarddata);
  const [shoppingcard,setShoppingcard]=React.useState(shoppingcarddata);

  const shoppingcardels=shoppingcard.map(function(data){
    return(
      <Shoppingcard
        data={data}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar/>
      <div className="salescards">
        {shoppingcardels}
      </div>
      <div className="cardsthree">
        {cards}
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}


export default App;
