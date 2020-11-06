import React from 'react';
import '../Styles/Subscribe.scss';


export default function Subscribe() {
    return(
        <div className="subscribe">
            <h4>Subscribe Here!!!</h4>
            <p>Get news on new publications and events right in your email.</p>
            <button>Subscribe</button><input placeholder="Example@yahoo.com" type="text" />
        </div>
    );
}