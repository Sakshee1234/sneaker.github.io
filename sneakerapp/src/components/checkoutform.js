import React, { useState } from "react";
import visamatercard from "../images/visa_mastercard.png";
import { useNavigate } from "react-router-dom";

export default function Checkoutform(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    contact: "",
    cardNumber: "",
    MM: "",
    YY: "",
    CVV: ""
  });
  const navigate = useNavigate();
  const handleOrderDetails = () => {
    navigate("/OrderDetails");
  }

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };
  const handleCloseClick=()=>{
    navigate('/App1')
  }
  return (
    <div className="checkout-form--container">
      <div className="checkout-form">
        <button className="checkoutform--close" onClick={()=>handleCloseClick()}>
          X
        </button>
        <form>
          {/*<h2 className="checkoutform--title">Personal Information</h2>
           <div className="form-group">
            <label htmlFor="fullName">Name Surname</label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              name="fullName"
              value={formData.fullName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              placeholder="Contact"
              onChange={handleChange}
              name="contact"
              value={formData.contact}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Address"
              onChange={handleChange}
              name="address"
              value={formData.address}
            />
          </div> */}
          <h2 className="checkoutform--title">Card Information</h2>
          <div className="card-details">
            <img
              src={visamatercard}
              className="checkoutform--visamatercardicon"
              alt="Visa/Mastercard"
            />
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                onChange={handleChange}
                name="cardNumber"
                value={formData.cardNumber}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="MM">MM</label>
                <input
                  type="text"
                  id="MM"
                  placeholder="MM"
                  onChange={handleChange}
                  name="MM"
                  value={formData.MM}
                />
              </div>
              <div className="form-group">
                <label htmlFor="YY">YY</label>
                <input
                  type="text"
                  id="YY"
                  placeholder="YY"
                  onChange={handleChange}
                  name="YY"
                  value={formData.YY}
                />
              </div>
              <div className="form-group">
                <label htmlFor="CVV">CVV</label>
                <input
                  type="text"
                  id="CVV"
                  placeholder="CVV"
                  onChange={handleChange}
                  name="CVV"
                  value={formData.CVV}
                />
              </div>
            </div>
          </div>
          <br />
          <button className="checkoutform--onsubmit" onClick={handleOrderDetails}>Checkout</button>
        </form>
      </div>
    </div>
  );
}
