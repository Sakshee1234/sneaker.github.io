import React from "react";

import visamatercard from "../images/visa_mastercard.png";

export default function Checkoutform(props){
    const [formData,setFormData]=React.useState(
        {fullName:"",email:"",address:"",contact:"",cardnumber:"",MM:"",YY:"",CVV:""}
    )
    function handleChange(event){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }
    return(
        <div className="checkout-form">
            <button className="checkoutform--close" onClick={props.toggleForm}>X</button>
            <form >
            <h2 className="checkoutform--title">Personal Information</h2>
                <div>
                    <p>Name Surname</p>
                </div>
                <input
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    name="fullName"
                    value={formData.fullName}
                />
                
                <div>
                    <p>Email</p>
                </div>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <div>
                    <p>Contact</p>
                </div>
                <input
                    type="text"
                    placeholder="Contact"
                    onChange={handleChange}
                    name="contact"
                    value={formData.contact}
                />
                <div>
                    <p>Address</p>
                </div>
                <input
                    type="text"
                    placeholder="Address"
                    onChange={handleChange}
                    name="address"
                    value={formData.address}
                />
                <h2 className="checkoutform--title">Card Information</h2>
                <img src={visamatercard} className="checkoutform--visamatercardicon"/>
                <p>Card Number</p>
                <input
                    type="text"
                    placeholder="Card Number"
                    onChange={handleChange}
                    name="cardNumber"
                    value={formData.cardNumber}
                />
                <div>
                    <input
                        type="text"
                        placeholder="MM"
                        onChange={handleChange}
                        name="MM"
                        value={formData.MM}
                    />
                    <input
                        type="text"
                        placeholder="YY"
                        onChange={handleChange}
                        name="YY"
                        value={formData.YY}
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        onChange={handleChange}
                        name="CVV"
                        value={formData.CVV}
                    />
                </div>
                <br/>
                <button className="checkoutform--onsubmit">Checkout</button>
            </form>
        </div>
    )
}

