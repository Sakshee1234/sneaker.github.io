<<<<<<< HEAD
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
=======
import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import backgroundimage from '../images/b2.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Firstpage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const Imagestyle = {
        width: width,
        height: height,
    };
    const  navigate = useNavigate();
    const handleExploreClick = () => {
        navigate("/App1");
    };
    return(
        <>
            <div className='firstpage--image'>
                <img src={backgroundimage} style={Imagestyle}/>
            </div>
            <div className='firstpage--image-above'>
                <div data-aos="fade-up" className='firstpage--title'>
                    <h2>.sneakerShack</h2>
                </div>
                <div data-aos="fade-right" className='firstpage--para'>
                    <p>Welcome to our sneaker store! We are passionate about providing the latest and greatest sneakers to sneaker enthusiasts worldwide. Our journey began with a shared love for sneakers and a vision to create a destination where sneakerheads can find the most coveted styles from top brands. At our sneaker store, our mission is to deliver the ultimate sneaker shopping experience. We aim to offer a carefully curated selection of sneakers, exceptional customer service, and a seamless online shopping journey.</p>
                    <p></p>
                </div>
                <div data-aos="fade-down" className='firstpage--button'>
                <span onClick={handleExploreClick}>Explore Now</span>
>>>>>>> 4328e655bcc07bfe070fa12ddff65509babc8e70
                </div>
            </div>
        </>
    )
}

export default Firstpage;