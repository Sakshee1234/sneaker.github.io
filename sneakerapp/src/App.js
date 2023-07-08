import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import Footer from './components/Footer';
const data=[
  {
      icon:"fa-solid fa-truck-fast",
      title: "FREE SHIPPING",
      description: "Free worldwide shipping on all orders.",
  }
  ,
  {
      icon:"fa-duotone fa-box",
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
  return (
    <div className="App">
      <Navbar/>
      <div className="cardsthree">
        {cards}
      </div>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
