import React, {useEffect} from "react"
import {Link, useNavigate} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Navbar(props) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const scrollToFooter = () => {
        const footer = document.getElementById('Contact');
        footer.scrollIntoView({ behavior: 'smooth' });
    };

    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate('/About');
    };
    const handleProductsClick = () => {
        navigate('/App1');
    };
    const handleHomeClick = () => {
        navigate('/')
    }
    const handleAccountClick = () => {
        navigate('/Account');
    }
    
    return (
        <>
            <nav>
                <div className="nav--firstline">
                    <div data-aos="fade-right" className="nav--title">.sneakerShack</div>
                    <div className="nav--search-bar">
                        <input type="text" className="form-control nav--search-input" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-append">
                            <button className="nav--search-icon" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </span>
                    </div>
                    <div className="nav--cart">
                    <Link to="/Cart"><i className="fa-duotone fa-shopping-cart fa nav--cart-icon"></i></Link>
                    <Link to="/Wishlist"><i className="fa-duotone fa-heart fa nav--wishlist"></i></Link>
                    </div>
                </div>
                <div className='nav--secondline'>
                    <a className="nav--categories" onClick={handleHomeClick}>HOME</a>
                    <div className="dropdown--container">
                        <a className="nav--categories" onClick={handleProductsClick}>PRODUCTS</a>
                        <div className="dropdown--menu">
                            <a className="nav1--categories" onClick={()=>props.changeTab('AIRFORCE')}>AIR FORCE</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('JORDAN')}>JORDAN</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('BLAZER')}>BLAZER</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('CRATER')}>CRATER</a>
                            <a className="nav1--categories" onClick={()=>props.changeTab('HIPPIE')}>HIPPIE</a>
                        </div>
                    </div>
                    <a className="nav--categories" onClick={handleAccountClick}>ACCOUNT</a>
                    <a className="nav--categories" onClick={handleAboutClick}>ABOUT</a>
                    <a className="nav--categories" onClick={scrollToFooter}>CONTACT</a>
                </div>
            </nav>
        </>
    )
}