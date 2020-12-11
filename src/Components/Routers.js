import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../Styles/Routers.scss';
import './Library2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';




export default function Router() {


    const [show, setShow] = useState(false);

    const login = () => {
        if (!show) {
            setShow(true)
            setShowSignup(false)
        } else {
            setShow(false)
        }
    } 

    const [showsignup, setShowSignup] = useState(false);

    const signup = () => {
        if (!showsignup) {
            setShowSignup(true)
            setShow(false)
        } else {
            setShowSignup(false)
        }
    }

    const [loginusername, setLoginUserName] = useState();
    const [loginpassword, setLoginPassword] = useState();



    // Login 
    const changeLoginUserName = (event) => {
        setLoginUserName(event.target.value);
    }
    const changeLogininPassword = (event) => {
        setLoginPassword(event.target.value);
    }

   const onLogin = (event) => {
       alert(`Login successful`);
      event.preventDefault();
   }


   const [signupfullname, setSignupFullname] = useState();
   const [signupemail, setSignupEmail] = useState();
   const [signupusername, setSignupUsername] = useState();
   const [signuppassword, setSignupPassword] = useState();


   //Signup 

    const changeSignupFullName = (event) => {
        setSignupFullname(event.target.value);
    }
    const changeSignupEmial = (event) => {
        setSignupEmail(event.target.value);
    }
    const changeSignupUsername = (event) => {
        setSignupUsername(event.target.value);
    }
    const changeSignupPassword = (event) => {
        setSignupPassword(event.target.value);
    }
   const onSignup = (event) => {
       alert(`Hello, sign in with username as: ${signupusername}. \nand Password as: ${signuppassword} to access the dashboard`);
      event.preventDefault();
      
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
                  <li><Link to="/contact">Contact</Link></li>
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
                  
                   
                   <input type="text" aria-label="username" placeholder="Username" onChange={changeLoginUserName} />
                   
                   <br />
                   <input type="password" aria-label="assword" placeholder="Password" onChange={changeLogininPassword} />
                   <br />
                   <div className="check-login">
                   <label><input type="checkbox" arial-label="checkbox" />Remember me</label>
                   </div>
                   <h6>Don't have an account? <span onClick={signup}>Signup</span></h6>
                   <br />
                   <button onClick={onLogin}>Login</button>
                       
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
                  
                   
                   <input type="text" aria-label="Fullname" placeholder="Full Name" onChange={changeSignupFullName} />
                   <br />
                   <input type="email" aria-label="email" placeholder="Email" onChange={changeSignupEmial} />
                   <br />
                   <input type="text" aria-label="tusername" placeholder="Username" onChange={changeSignupUsername} />
                   <br />
                   <input type="password" aria-label="password" placeholder="Password" onChange={changeSignupPassword} />
                   <br />
                   <div className="check-login">
                   <label><input type="checkbox" arial-label="checkbox" />Remember me</label>
                   </div>
                   <h6>Have an account? <span onClick={login}>Login</span></h6>
                   {show && login}
                   <br />
                   <button onClick={onSignup}>Signup</button>
                       
               </form>
            </div>  }
           
</div>
        </div>
    );
}