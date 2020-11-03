import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Routers.scss';
import './Library2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';




export default function Router() {


    const [show, setShow] = useState(false);

    const login = () => {
        if (!show) {
            setShow(true)
        } else {
            setShow(false)
        }
    } 

    const [showsignup, setShowSignup] = useState(false);

    const signup = () => {
        if (!showsignup) {
            setShowSignup(true)
        } else {
            setShowSignup(false)
        }
    }

    return(
        <div className="routers">

            <div className="logo">
                 <Link to="/"><h1>WORKIIBOOK</h1></Link>                    
            </div>

            <div className="search-bar">
            <div className="search-wrap">
                 <input type="search" placeholder="Search..." ariel-label="search-bar" />
                  <FontAwesomeIcon icon={faSearch}  className="search-icon" />
            </div>
            </div>

            <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/books">Books</Link></li>
              </ul>
            </nav>

        <div>
 <FontAwesomeIcon icon={faUser} size="lg" className="icon" onClick={login} />
             
             {/*
             This is the login form 
             */}

            {show && 
            
            <div className="login-form">
               <form>
                       <h4>Login</h4>
                  
                   
                   <input type="text" aria-label="username" placeholder="Username" />
                   
                   <br />
                   <input type="password" aria-label="assword" placeholder="Password"/>
                   <br />
                   <div className="check-login">
                   <label><input type="checkbox" arial-label="checkbox" />Remember me</label>
                   </div>
                   <h6>Don't have an account? <span onClick={signup}>Signup</span></h6>
                   <br />
                   <button>Login</button>
                       
               </form>

            </div>   }

            {
              /*
                This is the signup form....
               */
            }

            { showsignup &&  

            <div className="login-form">
               <form>
                       <h4>Signup</h4>
                  
                   
                   <input type="text" aria-label="Full Name" placeholder="Full Name" />
                   <br />
                   <input type="email" aria-label="email" placeholder="Email"/>
                   <br />
                   <input type="tel" aria-label="telephone" placeholder="Tel"/>
                   <br />
                   <input type="password" aria-label="assword" placeholder="Password"/>
                   <br />
                   <div className="check-login">
                   <label><input type="checkbox" arial-label="checkbox" />Remember me</label>
                   </div>
                   <h6>Have an account? <span onClick={login}>Login</span></h6>
                   {show && login}
                   <br />
                   <button>Signup</button>
                       
               </form>
            </div>  }
           
</div>
        </div>
    );
}