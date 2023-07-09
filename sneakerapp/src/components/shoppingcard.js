import React from "react"

export default function Shoppingcard(props){

    const [wishlist,setWishlist]=React.useState(props.data.wishlist);
    const wishliststyle={
        color:wishlist?"red":"black"
    }

    function addOrRemovefromWishlist(){
        setWishlist(prevwishlist=> !prevwishlist);
    }

    const styleOrange={
        color:"orange"
    }
    const styleBlack={
        color:"black"
    }
    return (
        <>
            <div className="shoppingcard">
                <div className="shoppingcard--image">
                    <img src={props.data.image}/>
                </div>

                <div className="shoppingcard--price">
                    <h3>Shoes</h3>
                    <span>
                        ₹{props.data.price}  
                            {props.data.originalprice && <sub><del>₹{props.data.originalprice}</del></sub>}
                    </span>
                </div>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deserunt  </p>
                <div className="shoppingcard--stars">
                    {1<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa "></i>)}
                    {2<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa "></i>)}
                    {3<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa "></i>)}
                    {4<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa "></i>)}
                    {5<=props.data.star?(<i className="fa fa-star fa " style={styleOrange}></i>):(<i className="fa fa-star fa "></i>)}
                </div>

                <div className="shoppingcard--buy">
                    <button>buy now</button>
                </div>

                <i className="fa-duotone fa-heart fa shoppingcard--wishlist" style={wishliststyle} onClick={addOrRemovefromWishlist}></i>
            </div>
        </>
)
}