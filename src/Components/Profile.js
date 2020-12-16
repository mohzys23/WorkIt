import React, { useState } from 'react';
import profileimg from '../Assets-books/Moses.jpg';
import '../Styles/Profile.scss';
import axios from 'axios';
import {My_book} from '../data/books';
import { Link } from "react-router-dom";


export default function  Profile() {

// const [profilename, setPorofileName] = useState("");
// const [firstname, setFirstName] = useState("");
// const [lastname, setLastName] = useState("");
// const [email, setEmail] = useState("");

// }



    // Books
    const [viewbooks, setViewBooks] = useState(false);
     
    const mybooks = () => {
        if (!viewbooks) {
            setViewBooks(true)
            setViewMeet(false)
        } else {
            setViewBooks(false)
        }
    }

    //Meet
    const [viewmeet, setViewMeet] = useState(false);
    const library = () => {
        if (!viewmeet) {
            setViewMeet(true)
            setViewBooks(false)
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

   
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookcover, setBookCover] = useState("");
  const [bookfile, setBookFile] = useState("");

  const [titleErrorMessage ,setTitleErrorMessage] = useState("");
  const [authorErrorMessage ,setAuthorErrorMessage] = useState("");
  const [bookcoverErrorMessage ,setBookCoverErrorMessage] = useState("");
  const [bookfileErrorMessage ,setBookFileErrorMessage] = useState("");
   
   const Addbook  = (e) => {
       e.preventDefault();
      const data = {
           title: title,
           author: author,
           bookcover: bookcover,
           bookfile: bookfile,
       }
       
        // HTTP Verbs: GET, POST, PUT, DELETE, PATCH, etc
    axios.post('http://localhost:5000/addbook/addbook', data)
    .then(response=> console.log(response.data))
    .catch(exception=> {
      setTitleErrorMessage(exception.response.data.firstname);
      setAuthorErrorMessage(exception.response.data.plastname);
      setBookCoverErrorMessage(exception.response.data.email);
      setBookFileErrorMessage(exception.response.data.password);
    })
  
   }


//     function (new) {

//     }


//    useEffect(() => {
// 		setTimeout(function () {
// 			// getslist()
// 		}, 2000)
// 	}, []);

   

    return(
        <div className="profile">
            <div className="aside-left">
            <div className="profile-info">
              <img src={profileimg} alt="" />
                <h1>Moses Ubah</h1>
            </div>
                
                <ul>
                    <h2 onClick={mybooks}>My-Books</h2>
                    <h5 onClick={library}>Library</h5>
                </ul>
            </div>
            <div className="aside-right">
                <div className="add-books-right">
                    <p>Recently Viewed</p>
                    <button onClick={add}>Add Book +</button>
                </div>
            
            { addbook && 
               <form onSubmit={Addbook}>
                   <input type="text" aria-label="book-title" placeholder="Enter Book Title" onChange={e=> setTitle(e.target.value)} value={title}/>
                   <p>{titleErrorMessage}</p>
                   
                   <input type="text" aria-label="author-name" placeholder="Author Name" onChange={e=> setAuthor(e.target.value)} value={author}/>
                    <p>{authorErrorMessage}</p>
                  
                   <input type="file" aria-label="add-file" className="add-file" onChange={e=> setBookCover(e.target.value)} value={bookcover}/>
                    <p>{bookcoverErrorMessage}</p>
                   <input type="file" aria-label="add-file" className="add-file2" onChange={e=> setBookFile(e.target.value)} value={bookfile}/>
                    <p>{bookfileErrorMessage}</p>
                  
                   <button>Add book</button>
               </form>
            }

            </div>
            <div className="aside-right-bottom">
            {/* books */}
            { viewbooks && 
                <div className="books-box">
                
                {My_book.map((item) => {
                    return (
                            <div className="card-box">
                       <div className="authors-card">
                            <div className="authors-sections">
                                <div className="section-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="section-text">
                                    <h5>{item.title}</h5>
                                    <button><Link to="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxteW1vZmF6YmxvZ3xneDoyNWQyMWJhNTBjOTRjN2U" target="blank">Open Book</Link></button>
                                </div>
                            </div>
                     </div>
                   
                        </div>
                     
                        
                    )
                    
                })}
                    
                </div>
                
                }

                {/* Meet */ }
                { viewmeet && 
                   <div>
                       <h1>Library</h1>
                   </div>
                
                }
            </div>

        </div>
    );
}