import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Routers.scss';
import './Library2';
import Login from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';




export default function Router() {


    const [show, setShow] = useState(false);

    const login = () => {
        if (!show) {
            setShow(true)
        } else {
            setShow(false)
        }
    } 

    return(
        <div className="routers">

            <div className="logo">
                 <Link to="/"><h1>WORKIIBOOK</h1></Link>                    
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
            {show && 
            
            <div className="login-form">
               <form>
                       <h4>Login</h4>
                   <label className="label" for="username">Username</label>
                   <br />
                   <input type="text" />
                   <br />
                   <label>Password</label>
                   <br />
                   <input type="password" />
                   <br />
                   <p><input type="checkbox" />Remember me</p>
                   <h6>Don't have an account? <span>Signup</span></h6>
                   <br />
                   <button>Submit</button>
                       
               </form>

            </div>   }
           
</div>
        </div>
    );
}