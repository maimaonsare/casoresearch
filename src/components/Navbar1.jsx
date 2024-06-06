import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Navbar1.css';
import Logo from './img/casologo.png';
import Pricing from './Pricing';

function Navbar1() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };
  return (
    <>
    <ul className={isActive ? "charges-pro activated" : "charges-pro"}>
        <a className="get-pro" href="#" onClick={ToggleClass}>
            Pricing
        <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
        </a>
        <li className="big-title">Charges overview</li>
        <div className='price_table'>
            <Pricing />
        </div>
    </ul>

    <nav>
        <div className='top-links'>
            <ul>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/faq'>FAQ</NavLink></li>
            </ul>
            <ul className='contacts'>
                <li>Sign In</li>
                <li>Sign Up</li>
            </ul>
        </div>
        <div className='nav-bar'>
            <div className='logo'>
                <Link to='/'><img src={Logo} alt='Samwel Okeyo Logo'/></Link>
            </div>
            <div className='menu' onClick={() =>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='nav-links'>
                <ul className={menuOpen ? "open": ""}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Services'>Services</NavLink></li>                    
                    <li><NavLink to='/blogs/blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
                {/*<div className='app-btn'>
                    <button>
                       <Link>Order Now!</Link>
                    </button>
                </div>*/}
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar1;