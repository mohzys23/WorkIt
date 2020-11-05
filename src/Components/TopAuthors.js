import React from 'react';
import '../Styles/TopAuthors.scss';
import img1 from '../Assets-books/Beingmortal.jpg';
import img2 from '../Assets-books/Criticalthinking.jpg';
import img3 from '../Assets-books/Drawhumanbody.jpg';
import img4 from '../Assets-books/foodlab.jpg';
import img5 from '../Assets-books/morning.jpg';



export default function TopAuthors() {
    return(
        <div className="topauthors">
            <h1>Top Authors</h1>

            <div className="card-box">
            <div className="authors-card1">

                <div div className = "authors-sections" >
                    <div className="section-img">
                    <img src={img1} alt=""/>
                    </div>

                    <div  className = "section-text" >
                    <h5>Being mortal</h5>
                    <h6>AUTHOR: Moses Ubah</h6>
                    <button>Get Book</button>
                    </div>
                
                </div>
             
           </div>
              
           <div div className="authors-card">

               <div className = "authors-sections" >

                    <div className = "section-img" >
                    <img src={img2} alt="" />
                    </div>

                    <div className="section-text">
                    <h5>Critical thinking</h5>
                    <h6>AUTHOR: Moses Ubah</h6>
                    <button>Get Book</button>
                    </div>
                
                </div>
           </div>

           <div div className="authors-card2">

              <div className = "authors-sections" >

                    <div className="section-img">
                    <img src={img3} alt="" />
                    </div>

                    <div className = "section-text">
                    <h5>Draw human body</h5>
                    <h6>AUTHOR: Moses Ubah</h6>
                    <button>Get Book</button>
                    </div>
                
                </div>

           </div>

            <div className="authors-card2">

               <div className = "authors-sections" >

                    <div className="section-img">
                    <img src={img4} alt="" />
                    </div>

                    <div className = "section-text">
                    <h5>Food lab</h5>
                    <h6>AUTHOR: Moses Ubah</h6>
                    <button>Get Book</button>
                    </div>
                
                </div>

           </div>

            <div className="authors-card1">

               <div className = "authors-sections" >
                    <div className="section-img">
                       <img src={img5} alt="Morning" />
                    </div>

                    <div className = "section-text">
                        <h5>Miracle Morning</h5>
                        <h6>AUTHOR: Moses Ubah</h6>
                        <button>Get Book</button>
                    </div>
                
                </div>
            </div>
           
           </div>
        </div>
    );
}