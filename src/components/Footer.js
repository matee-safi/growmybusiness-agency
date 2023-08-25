import * as React from 'react'
import '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
        <div class="footer-location">
            <h2>Our Location</h2><br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d69.1782524!3d34.5360226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0rCwNDInNTIuMyIzOSc2OSc0MCdF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="300" height="200" style={{border: 0}} allowfullscreen="" loading="lazy" title="shahre-naow"></iframe>
        </div>
        <br />
        <h3>Join our social media group</h3><br />
        <ul>
            <a href="https://www.instagram.com/growmybusiness.agency/"><img src="/instagram.png" width="30" alt="instagram-icon" /></a>
            <a href="https://facebook.com/"><img src="/facebook.png" width="30" alt="facebook-icon" /></a>
            <a href="https://linkedin.com/"><img src="/linkedin.png" width="30" alt="linkedin-icon" /></a>
            <a href="https://twitter.com/_GrowMyBusiness"><img src="/twitter.png" width="30" alt="twitter-icon" /></a>
        </ul><br /><br />
        <h3>Let's Disscuss What's Next</h3>
        <p>Have any questions?</p>
        <p>We'd love to hear from you</p>
        <br />
        <h3>CONTACT</h3>
        <a href="mailto:growmybusiness.agency@gmail.com" target="blank">Growmybusiness.agency@gmail.com</a><br /><br />
    </footer>
  )
}