import React, { useState } from 'react';
import profileimg from '../Assets-books/Moses.jpg';
import '../Styles/Profile.scss';


export default function  Profile() {


    // Books
    const [viewbooks, setViewBooks] = useState(false);
     
    const books = () => {
        if (!viewbooks) {
            setViewBooks(true)
        } else {
            setViewBooks(false)
        }
    }

    //Meet
    const [viewmeet, setViewMeet] = useState(false);
    const meet = () => {
        if (!viewmeet) {
            setViewMeet(true)
        } else {
            setViewMeet(false)
        }
    }

    const [addbook, setAddBook] = useState(false);
    const add = () => {
        if (!addbook) {
            setAddBook(true)
        } else {
            setAddBook(false)
        }
    }




    return(
        <div className="profile">
            <div className="aside-left">
            <div className="profile-info">
              <img src={profileimg} alt="" />
                <h1>Moses Ubah</h1>
            </div>
                
                <ul>
                    <h2 onClick={books}>Books</h2>
                    <h3 onClick={meet}>Meet</h3>
                    <h4>Audio</h4>
                    <h5>Library</h5>
                    <h6>favourite</h6>
                </ul>
            </div>
            <div className="aside-right">
                <div className="add-books-right">
                    <p>Recently Viewed</p>
                    <button onClick={add}>Add Book</button>
                </div>
            
            { addbook && 
               <form>
                   <input type="text" aria-label="book-title" placeholder="Enter Book Title" />
                   <br />
                   <input type="text" aria-label="author-name" placeholder="Author Name" />
                   <br />
                   <input type="file" aria-label="book-title" />
                   <br />
                   <input type="submit" />
               </form>
            }

            </div>
            <div className="aside-right-bottom">
            {/* books */}
            { viewbooks && 
                <div>
                    <h1>Books</h1>
                </div>
                
                }

                {/* Meet */ }
                { viewmeet && 
                   <div>
                       <h1>Meet</h1>
                   </div>
                
                }
            </div>

        </div>
    );
}