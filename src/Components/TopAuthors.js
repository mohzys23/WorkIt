import React from 'react';
import '../Styles/TopAuthors.scss';
// import img1 from '../Assets-books/Beingmortal.jpg';
// import img2 from '../Assets-books/Criticalthinking.jpg';
// import img3 from '../Assets-books/Drawhumanbody.jpg';
// import img4 from '../Assets-books/foodlab.jpg';
// import img5 from '../Assets-books/morning.jpg';
import {Topbooks} from '../data/books';
import { Link } from "react-router-dom";


 function TopAuthors() {
    return(
        <div className="topauthors">
            <h1>Top Books</h1>

               <div className="top-authors2">


        {Topbooks.map((item) => {
            return(
               
                 <div className="card-box">
                       <div className="authors-card">
                            <div className="authors-sections" >
                                <div className="section-img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="section-text">
                                    <h5>{item.title}</h5>
                                    <h6>{item.author}</h6>
                                    <button><a href={item.url} target="blank"> Get Book</a></button>
                                </div>
                            </div>
                     </div>
                   </div>
               
                   
               
            )
        })}

            </div>
        </div>
    );
}

export default TopAuthors;