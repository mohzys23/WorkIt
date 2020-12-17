import React, { useState } from 'react';
import {Link} from "react-router-dom";
import '../Styles/Routers.scss';
import './Library2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Logo from '../Assets/logo.png';
// import { useHistory } from "react-router-dom";


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

    // const [loginusername, setLoginUserName] = useState();
    // const [loginpassword, setLoginPassword] = useState();



    // Login 
    // const changeLoginUserName = (event) => {
    //     setLoginUserName(event.target.value);
    // }
    // const changeLogininPassword = (event) => {
    //     setLoginPassword(event.target.value);
    // }

//    const Message = (event) => {
//        if (Signup) {
//            alert(`Login successful`);
//           event.preventDefault();
//        } else {
//            alert(`Please signup`);
//            event.preventDefault();
//        }
       
//    }


//    const [signupfullname, setSignupFullname] = useState();
//    const [signupemail, setSignupEmail] = useState();
//    const [signupusername, setSignupUsername] = useState();
//    const [signuppassword, setSignupPassword] = useState();


   //Signup 

//     const changeSignupFullName = (event) => {
//         setSignupFullname(event.target.value);
//     }
//     const changeSignupEmial = (event) => {
//         setSignupEmail(event.target.value);
//     }
//     const changeSignupUsername = (event) => {
//         setSignupUsername(event.target.value);
//     }
//     const changeSignupPassword = (event) => {
//         setSignupPassword(event.target.value);
//     }
//    const onSignup = (event) => {
//        alert(`Hello, sign in with username as: ${signupusername}. \nand Password as: ${signuppassword} to access the dashboard`);
//       event.preventDefault();
      
//    }



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage ,setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
   
   const Login  = (e) => {
       e.preventDefault();
       const data = {
           email: email,
           password: password
       }

       if (Login === true) {
           alert('Success');
       }

        // HTTP Verbs: GET, POST, PUT, DELETE, PATCH, etc
    axios.post('http://localhost:5000/login/login', data)
    .then(response=> console.log(response.data))
    .catch(exception=> {
      setEmailErrorMessage(exception.response.data.email);
      setPasswordErrorMessage(exception.response.data.password);
    })
  //.then(function (response) { 
//        console.log(response.data)
//        const person = {
//             name: "Obaseki Nosa",
//             location: "Lagos",
//         }
//         window.localStorage.setItem('user', JSON.stringify(person));
//    })
   }

   

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [firstnameErrorMessage ,setFirstNameErrorMessage] = useState("");
  const [lastnameErrorMessage ,setLastNameErrorMessage] = useState("");
   
   const Signup  = (e) => {
       e.preventDefault();
      const data = {
           firstname: firstname,
           lastname: lastname,
           email: email,
           password: password
       }

      
        // HTTP Verbs: GET, POST, PUT, DELETE, PATCH, etc
    axios.post('http://localhost:5000/signup/signup', data)
    .then(response=> console.log(response.data))
    .catch(exception=> {
      setFirstNameErrorMessage(exception.response.data.firstname);
      setLastNameErrorMessage(exception.response.data.plastname);
      setEmailErrorMessage(exception.response.data.email);
      setPasswordErrorMessage(exception.response.data.password);
    })
  
   }

   
    return(
        <div className="routers">

            <div className="logo">
                 <Link to="/"><img src={Logo} alt="" /></Link>                    
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
               <form onSubmit={Login}>
                    <h4>Login</h4>
                        <input type="email" aria-label="Email" placeholder="Email" onChange={e=> setEmail(e.target.value)} value={email} />
                           <p>{emailErrorMessage}</p>
                   
                           <br />
                        <input type="password" aria-label="Password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password} />
                         <p>{passwordErrorMessage}</p>
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
               <form onSubmit={Signup} >
                       <h4>Signup</h4>
                  
                   
                   <input type="text" aria-label="firstname" placeholder="Firstname" onChange={e=> setFirstName(e.target.value)} value={firstname}/>
                   <p>{firstnameErrorMessage}</p>
                   <br />
                   <input type="text" aria-label="lastname" placeholder="Lastname" onChange={e=> setLastName(e.target.value)} value={lastname}/>
                   <p>{lastnameErrorMessage}</p>
                   <br />
                   <input type="email" aria-label="email" placeholder="Email" onChange={e=> setEmail(e.target.value)} value={email}/>
                   <p>{emailErrorMessage}</p>
                   <br />
                   <input type="password" aria-label="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
                   <p>{passwordErrorMessage}</p>
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

