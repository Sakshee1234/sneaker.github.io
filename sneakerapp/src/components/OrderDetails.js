import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AIRFORCE,JORDAN,BLAZER,HIPPIE,CRATER } from '../shoppingcardsdata';
function OrderDetails() {
  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate("/App1");
  }
  const {title}=useParams();
  const products = [...AIRFORCE, ...JORDAN, ...BLAZER, ...CRATER, ...HIPPIE];
  const product = products.find((p) =>
    p.title.toLowerCase() === title.toLowerCase()
  );
  
  const orderItems = [
    {
      id: 1,
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQFGcFgRN-QiHxjRN07dUEBSpVJKZ9tUTC0tmFMq1T5H0v-RHB8D20CurM497aetNBuo&usqp=CAU", // Replace with the actual image URL
      name: title,
      price: 33,
      quantity: 2,
    },
  ];
  const today = new Date();
  const sixDaysLater = new Date(today);
  sixDaysLater.setDate(today.getDate() + 6);

  return (
    <div className="order--container">
      <div className="order-details-card">
        <h1 className="my-3">Order # 4543f34f545</h1>
        <div className="shipping-info">
          <h4 className="mb-3">Shipping Info</h4>
          <p><b>Name:</b> John</p>
          <p><b>Phone:</b> 111 111 1111</p>
          <p className="mb-3"><b>Address:</b> Address of user</p>
          <p><b>Amount:</b> $1111</p>
        </div>

        <hr />

        <div className="payment-status">
          <h4 className="my-3">Payment</h4>
          <p className="greenColor"><b>PAID</b></p>

          <h4 className="my-3">Order Status:</h4>
          <p className="greenColor"><b>Shipped</b></p>
        </div>

        <hr />

        <h4 className="my-3">Order Items:</h4>

        {/* {orderItems.map((item) => ( */}
          <div key={product.id} className="cart-item my-1">
            <div className="row my-3">
              <div className="col-4 col-lg-2">
                <img src={product.image}  height="60" width="60" />
              </div>

              <div className="col-8 col-lg-10">
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        {/*)) } */}

        <hr />

        <h4 className="my-3 delivery-title">Delivery Date:</h4>
        <p className="delivery-date">{`${sixDaysLater.getDate()}-${sixDaysLater.getMonth() + 1}-${sixDaysLater.getFullYear()}`}</p>
      </div>
      < div className="order--btnContainer">
      <button className='order--btn' onClick={handleOrderClick}>Done</button>
      </div>
    </div>
  );
}

export default OrderDetails;

