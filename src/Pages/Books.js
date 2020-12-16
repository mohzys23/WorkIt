import React from 'react';
import '../Styles/Books.scss';

import {books} from '../data/books';


export default function Books(props) {
    return (
        <div className="topauthors1">
            <h1>Books</h1>

            <div className="topauthors2">


        {books.map((item) => {
            return(
               
                   <div className="card-box">
                       <div className="authors-card">
                            <div className="authors-sections">
                                <div className="section-img">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="section-text" >
                                    <h5>{item.title}</h5>
                                    <h6>{item.author}</h6>
                                    <button>Get Book</button>
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