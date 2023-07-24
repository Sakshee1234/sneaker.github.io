import React from 'react';
// import './firstpage.css'
import backgroundimage from '../images/background_img2.jpg'
const Firstpage = () => {
    const width=window.innerWidth
    const height=window.innerHeight
    const imgStyle={
        width:width,
        height:height
    }
    return(
        <>
            <div className='firstpage--image'>
                <img src={backgroundimage} style={imgStyle}/>
            </div>
            <div className='firstpage--image-above'>
                <div className='firstpage--title'>
                    <h2>SneakerShack</h2>
                </div>
                <div className='firstpage--para'>
                    <p>Welcome to our sneaker store! We are passionate about providing the latest and greatest sneakers to sneaker enthusiasts worldwide. Our journey began with a shared love for sneakers and a vision to create a destination where sneakerheads can find the most coveted styles from top brands. At our sneaker store, our mission is to deliver the ultimate sneaker shopping experience. We aim to offer a carefully curated selection of sneakers, exceptional customer service, and a seamless online shopping journey.</p>
                    <p></p>
                </div>
                <div className='firstpage--button'>
                    Explore Now
                </div>
            </div>
        </>
    )
}

export default Firstpage