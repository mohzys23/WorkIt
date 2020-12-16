import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/Footer.scss';
import Logo from '../Assets/logo.png';

export default function Footer() {
    return(
        <div className="footer">
             <img src={Logo} alt="" />
        
             
             <div className="link-button">
             <div className="footer-links">
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/">Books</Link></li>
                     <li><Link to="/">Contact</Link></li>
                     <li><Link to="/">Resquest Publication</Link></li>
                 </ul>
                  <ul>
                     <li><Link to="/">About-us</Link></li>
                     <li><Link to="/">Privacy Policy</Link></li>
                     <li><Link to="/">Support / Help</Link></li>
                     <li><Link to="/">Terms of Use</Link></li>
                 </ul>
                 
             </div>


             <div className="buttons">
                 <button>Signup</button>
                 <button>Login</button>
             </div>

             </div>

             <div className="footer-socials">
                 <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="iconfa" />
                 <FontAwesomeIcon icon={faTwitter} size="2x" className="icontw" />
                 <FontAwesomeIcon icon={faInstagram} size="2x" className="iconig" />
                 <FontAwesomeIcon icon={faLinkedin} size="2x" className="iconlnd"  />
             </div>

             <p>&copy; Moses Ubah. 2020.</p>
        </div>
    );
}