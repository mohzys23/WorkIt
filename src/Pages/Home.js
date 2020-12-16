import React from 'react';
import Hero from '../Components/Hero';
import TopAuthors from '../Components/TopAuthors';
import Subscribe from '../Components/Subscribe';
import BottomHero from '../Components/BottomHero';


export default function Home() {

    
    return(

        <div>

        <Hero />
        <TopAuthors />
        <BottomHero />
        <Subscribe />
        </div>
    );
}