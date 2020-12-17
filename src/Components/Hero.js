import React from 'react';
import '../Styles/Hero.scss';
// import read from '../Assets/illustration-grow-together.svg';
import FadeIn from 'react-fade-in';
import {Link} from "react-router-dom";


export default function Hero() {
    return(
      <FadeIn>
          <div className="hero">
            <div className="hero-section1">
              <h1>Struggling to get your books out there?.</h1>   
            </div>
            <div className="hero-section2">
            {/* <img src={read} alt="book" /> */}
              <h3><span className="title-hero">WorkiiBook</span> is here to help you achieve your set goal to get to potential audiences and better engagement afterwords.</h3>
              <button><Link to="/contact">Speak to us</Link></button>
            </div>
        </div>
      </FadeIn>
      
    );
} 