import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Img from '../Assets-books/bg2.jpg';
// import Img2 from '../Assets-books/bg1.jpg';
// import Img3 from '../Assets-books/bg3.jpg';
import '../Styles/Topcarousel.scss';


export default function TopCarousel() {
    return(
       <Carousel>
                {/* <div className="img-box">
                    <img src={Img} alt="" />
                   
                </div>
                <div className="img-box">
                    <img src={Img2} alt="" />
                   
                </div>
                <div className="img-box">
                    <img src={Img3} alt="" />
                </div> */}
      </Carousel>
    );
}