import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import '../assets/styles/Footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="socialIcon">
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
            <FaFacebook/>
            </div>
            <p> &copy; 2023 Rose Shop.com</p>
        </div>
    )
}

export default Footer;