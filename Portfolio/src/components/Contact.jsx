import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="heading">Contact Me</h2>
      <form className="desktop-tab">
        <div className="input-div">
          <label htmlFor="username" className="label-name">Name </label>
          <input type="text" className="field" id="username" placeholder="Name" />  
        </div>
        <div className="input-div">
          <label htmlFor="email" className="label-name">Email </label>
          <input type="text" className="field" id="email" placeholder="Email" /> 
        </div>
        <div className="input-div">
          <label htmlFor="message" className="label-name">Message </label>
          <textarea name="message" className="field msg" cols="30" rows="10" placeholder="Write Here..." />          
        </div>
        <div className="sumbit-div">
          <button>Send Message</button>
        </div>
      </form>
      <form className="mobile">
        <div className="input-div">
          <label htmlFor="username" className="label-name">Name </label>
          <input type="text" className="field" id="username" placeholder="Name" />  
        </div>
        <div className="input-div">
          <label htmlFor="email" className="label-name">Email </label>
          <input type="text" className="field" id="email" placeholder="Email" /> 
        </div>
        <div className="input-div">
          <label htmlFor="message" className="label-name">Message </label>
          <textarea name="message" className="field msg" cols="30" rows="10" placeholder="Write Here..." />          
        </div>
        <div className="sumbit-div">
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
