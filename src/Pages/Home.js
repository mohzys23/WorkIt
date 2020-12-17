import React from 'react';
import Hero from '../Components/Hero';
import TopAuthors from '../Components/TopAuthors';
import Subscribe from '../Components/Subscribe';
import BottomHero from '../Components/BottomHero';
import '../Styles/home.scss';
import TopCarousel from '../Components/TopCarousel';


export default function Home() {

    
    return(

        <div className="Home-wrapper">

        <Hero />
        <TopAuthors />
        <BottomHero />
        <Subscribe />
        <TopCarousel />
        </div>
    );
}