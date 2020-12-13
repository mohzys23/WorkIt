import React from 'react';
import '../Styles/contact.scss';
import TextareaAutosize from 'react-textarea-autosize';


export default function Contact() {
    return(
        <div className="contact">
            <h1>Get in touch with us</h1>
            <form>
                <label>Name: <input type="text" /></label>
                <label className="input">Email: <input type="email" /></label>
                <br />
                <label className="textarea_label">Message: <TextareaAutosize  className="textarea" /></label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}
