import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.png";
import '../styles/global.css';

const IndexPage = () => {
  return (
    <main>
      <Navbar />

      <Helmet>
        <link rel="icon" href={favicon} />
        <title>GrowMyBusiness</title>
      </Helmet>

      <div className="main-section">
        <h2>AMPLIFY YOUR SALES</h2>
        <h1>With Digital Marketing</h1>
        <p>Elevate your online presence without the hassle.<br />We understand that maintaining an impactful online image can be both frustrating and time-consuming.</p>
        <p>But fear not, with our dedicated team of professionals, the process becomes seamless, efficient, and tailored to your brand's success.</p>
        <ContactForm buttonLabel={
          <div>
            <h2>Get in Touch</h2>
            <small>Email Us For Inquiries</small>
          </div>
        } className="email-btn" />
      </div>
            
      <div className="about-us-section">
        <div className="img-container">
          <img src="/AI-bot.png" alt="AI bot saying Hi" />
        </div>
        <div>
          <h1>Our Approach</h1><br />
          <p>At GrowMyBusiness, we're more than just a digital marketing agency. We are pioneers in using the latest AI technologies to propel your business into the digital future.</p>
          <p>Our mission is clear: to empower businesses like yours with cutting-edge digital strategies that not only establish a strong online presence but also ensure your long-term success.</p>
          <p>With our dedicated team of experts and a commitment to innovation, we craft tailored solutions that drive growth, engagement, and brand recognition.</p>
          <p>Join us on this exciting journey as we leverage the power of AI and digital marketing to transform your business.</p>
        </div>
      </div><br /><br />

      <h1>SERVICES</h1>
      <div className="services-container">
        <div className="service-card">
            <h2>Social Media Marketing</h2>
            <p>Boost your brand's online presence and engagement through strategic social media campaigns and content.</p>
        </div>
        <div className="service-card">
            <h2>Website Design & Development</h2>
            <p>Create visually appealing and functional websites tailored to your business needs, enhancing user experience.</p>
        </div>
        <div className="service-card">
            <h2>Content Marketing</h2>
            <p>Drive audience engagement and organic growth by delivering valuable and relevant content across various channels.</p>
        </div>
        <div className="service-card">
            <h2>Video Production</h2>
            <p>Capture your audience's attention with professionally crafted videos that convey your message effectively.</p>
        </div>
        <div className="service-card">
            <h2>Copywriting</h2>
            <p>Create compelling content that resonates with your audience and drives engagement. Our skilled copywriters craft messages that convey your brand's unique voice.</p>
        </div>
        <div className="service-card">
            <h2>Market Research</h2>
            <p>Gain insights into your industry, competitors, and audience preferences to make informed business decisions.</p>
        </div>
      </div>

      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq">
          <h3>How much does your service cost?</h3>
          <p>Our pricing varies based on your business's scale and type. Monthly costs typically range between $1000 and $8000, tailored to meet your specific needs.</p>
        </div>
        <div className="faq">
          <h3>When will I see results for my business?</h3>
          <p>Your journey to growth begins within 6-12 months. From there, the possibilities for exponential expansion become reality.</p>
        </div>
        <div className="faq">
            <h3>Why are your services so expensive?</h3>
            <p>Yes our services are expensive and that's due to the complexity of our services, and considering the fact that we can grow your business from 2 to 10 times higher, our prices should seem reasonable.</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default IndexPage