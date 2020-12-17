// 

import React from "react";
import '../Styles/contact.scss';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="contact">
        <h1>Thank you for reaching out. What can we do for you?</h1>
           <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mvovwlbl"
        method="POST"
      >
         <label>Fullname:</label>
        <input type="text" name="fullname" className="input" />

        <label>Email:</label>
        <input type="email" name="email"  />
        <br />
        <label>Message:</label>
        <textarea type="text" name="message" rows="9" cols="50" className="textarea" />
        <br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
        </div>
     
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}