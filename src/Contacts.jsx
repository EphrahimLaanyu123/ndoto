// Contact.jsx

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contacts.css"; // Import CSS file for Contact styling

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_fb2vx9p',
        'template_pu7eff1',
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "elaanyu@gmail.com",
          message: form.message,
        },
        'x-E3iB2oglnWz4XmL'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
      
      <div className={`contact-container`}>
        <div className='contact-form'>
          <h2 className='contact-heading'>Contact Us</h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='form'
          >
            <div className='form-group'>
              <label htmlFor='name' className='form-label'>Your Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>Your Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message' className='form-label'>Your Message</label>
              <textarea
                id='message'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Enter your message'
                className='form-textarea'
              />
            </div>

            <button
              type='submit'
              className='form-button'
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
