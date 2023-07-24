import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Checkoutform(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
        setErrorMessage("Please fill in all the fields.");
        return;
    }
}
  const handleRegisterClick = () => {
    navigate("/Account");
  }
  // const [formData, setFormData] = useState({
  //   password: "",
  //   email: ""
  // });

  // const handleChange = (event) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [event.target.name]: event.target.value
  //   }));
  // };

  return (
    <div className="registerform--container">
      <div>
        <Navbar/>
      </div>
      <div className="registerform">
        <form onSubmit={handleSubmit}>
          <h2 className="registerform--title">Login</h2>
          <div className="form-group">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="************"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <h4>Not yet registered? <a className="registerform--toggle" onClick={handleRegisterClick}>Register here</a></h4>
          <br />
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button className="registerform--onsubmit">Login</button>
        </form>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}
