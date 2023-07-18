import React from "react";
import { BLAZER } from "../shoppingcardsdata";
import { JORDAN } from "../shoppingcardsdata";
import { HIPPIE } from "../shoppingcardsdata";
import { CRATER } from "../shoppingcardsdata";
import { AIRFORCE } from "../shoppingcardsdata";

export default function Wishlist(props){
    var wishlist=[];
    BLAZER.map((data)=>{
        if(data.wishlist){
            wishlist=[...wishlist,data];
        }
    })
    JORDAN.map((data)=>{
        if(data.wishlist){
            wishlist=[...wishlist,data];
        }
    })
    HIPPIE.map((data)=>{
        if(data.wishlist){
            wishlist=[...wishlist,data];
        }
    })
    CRATER.map((data)=>{
        if(data.wishlist){
            wishlist=[...wishlist,data];
        }
    })
    AIRFORCE.map((data)=>{
        if(data.wishlist){
            wishlist=[...wishlist,data];
        }
    })

    return (
        <div>
          <div className="wishlist">
            <h1 className="wishlist--titlesymbol">❤️</h1>
            <h1 className="wishlist--title">My Wishlist </h1> 
            {wishlist.map((data) => (
              <span key={data.id}>
                <div className='wishlist--items'>
                    <div className="wishlist--image">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className='wishlist--title'>
                        <h3>{data.title}</h3>
                    </div>
                    <div className="wishlist--price">
                        <p>Price: ₹{data.price}</p>
                    </div>
                    <div className="wishlist--addtocart">
                        <button onClick={() => props.addToCart(data.title)}>Add to Cart</button>
                    </div>
                </div>
              </span>
            ))}
          </div>
        </div>
      );
}