import React from "react"
import blazer from "../blazer2.jpg"
export default function Shoppingcard(props){

    const [wishlist,setWishlist]=React.useState(props.data.wishlist);
    const wishliststyle={
        color:wishlist?"red":"grey"
    }

    function addOrRemovefromWishlist(){
        setWishlist(prevwishlist=> !prevwishlist);
    }
    const [cart,setCart]=React.useState(props.data.addtocart);
    const cartstyle={
        color:cart?"green":"grey"
    }
    function addOrRemovefromCart(){
        setCart(prevcart=> !prevcart);
    }
    const styleOrange={
        color:"orange"
    }
    const styleBlack={
        color:"grey"
    }
    return (
        <>
            <div className="shoppingcard">
                <div className="shoppingcard--image">
                    <img src={blazer}/>
                </div>
                <div className="shoppingcard--icons">
                    <i className="fa-duotone fa-heart fa shoppingcard--wishlist" style={wishliststyle} onClick={addOrRemovefromWishlist}></i>
                </div>
                
                <div className="shoppingcard--price">
                    <span>
                        ₹{props.data.price}  
                            {props.data.originalprice && <sub><del>₹{props.data.originalprice}</del></sub>}
                    </span>
                </div>
                <div className="shoppingcard--name">
                    <h3>{props.data.title}</h3>
                </div>
                
                <p className="shoppingcard--description">{props.data.description}</p>
                <div className="shoppingcard--stars">
                    {1<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
                    {2<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
                    {3<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
                    {4<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
                    {5<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa " style={styleBlack}></i>)}
                </div>

                <div className="shoppingcard--buy">
                    <button>Add to cart</button>
                    <button onClick={props.toggleForm}>buy now</button>
                </div>
            </div>
        </>
)
}