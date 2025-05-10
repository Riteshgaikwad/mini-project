import React from 'react';
import { Button } from 'react-bootstrap';

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
        </div>
        <Button type="submit" className="btn btn-primary">Send Message</Button>
      </form>
    </div>
  );
}

export default Contact;