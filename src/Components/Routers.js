import React from 'react';
import {Link} from "react-router-dom";
import './Routers.scss';



export default function Router() {
    return(
        <div>

            <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
            
        </div>
    );
}