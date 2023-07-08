import logo from '../assets/images/Rose.png';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header =()=>{
    return(
        <div className="header">
        <div className="leftHeader">
            <img src={logo} alt="" />
        </div>
        <div className="rightHeader">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    </div>
    )
}

export default Header;