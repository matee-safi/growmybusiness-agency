import React, { useState } from 'react';
import * as styles from '../styles/contactform.module.css';
import '../styles/contactform.module.css';
import Check from '../../static/check.png';

const ContactForm = ({ buttonLabel }) => {
  const [isFormVisible, setFormVisibility] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/mwkdozyv', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      setFormVisibility(false);
      setSuccess(true);
    }
    setIsPending(false);
  };

  return (
    <div className='popup-container'>
      <button className={`email-btn ${isSuccess ? 'success' : ''}`} onClick={() => setFormVisibility(true)}>
        {isSuccess ? <img src={Check} width={50} alt="success check" /> : buttonLabel}
      </button>
      {isFormVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button className={styles.closeBtn} onClick={() => setFormVisibility(false)}>
              &times;
            </button>
            <h3>Get in Touch</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={5} required />
              <button type="submit" className={styles.sendButton}>
                {isPending ? 'Submitting...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
