import React, {useState } from 'react';
import Hero from './Hero';
import TopAuthors from './TopAuthors';
import Footer from './Footer';
import Subscribe from './Subscribe';
import BottomHero from './BottomHero';


export default function Home() {
    const [like, setLike] = useState(0);
    //const [dislike, setDisLike] = useState(0);
     const incerment = () =>{
         setLike(like + 1);
     };

            //const [show, setShow] = useState(false);

            
              /*
            const moses = () => {
                if (!show) {
                    setShow(true)
                    } else {
                        setShow(false)
                    }

            }

            */ 


    
    return(

        <div>

        <Hero />
        <TopAuthors />


        
           {/* <h1 onClick={incerment}>&#x1F44D;</h1>
            <h1 onClick={() => setLike(like - 1)}>&#x1F44E;</h1>
            <h2>{like} like</h2>  */ }


  {/*<button onClick={moses}>login</button>
{show && <Dashboard />}  */}
<BottomHero />
<Subscribe />
<Footer />
        </div>
    );
}