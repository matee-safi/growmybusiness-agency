import * as React from "react"
import Navbar from "../components/Navbar"
import '../styles/global.css'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-section">
        <h2>BOOST YOUR SALES</h2>
        <h1>With Digital Marketing</h1>
        <p>Are you familiar with Digital Marketing?</p><br/><br/>
        <p>Don't worry about it, we'll take care of <span>Everything</span> for you!</p>
      </div>
      <h1>SERVICES</h1>
      <div class="services-container">
        <div class="service-card">
            <h2>Social Media Marketing</h2>
            <p>Boost your brand's online presence and engagement through strategic social media campaigns and content.</p>
        </div>
        <div class="service-card">
            <h2>Website Design & Development</h2>
            <p>Create visually appealing and functional websites tailored to your business needs, enhancing user experience.</p>
        </div>
        <div class="service-card">
            <h2>Content Marketing</h2>
            <p>Drive audience engagement and organic growth by delivering valuable and relevant content across various channels.</p>
        </div>
        <div class="service-card">
            <h2>Video Production</h2>
            <p>Capture your audience's attention with professionally crafted videos that convey your message effectively.</p>
        </div>
        <div class="service-card">
            <h2>Email Marketing</h2>
            <p>Reach your target audience directly through targeted email campaigns, promoting your products or services.</p>
        </div>
        <div class="service-card">
            <h2>Market Research</h2>
            <p>Gain insights into your industry, competitors, and audience preferences to make informed business decisions.</p>
        </div>
      </div>
      <div class="faq-container">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <div class="faq">
            <h3>How much does your services cost?</h3>
            <p>That depends on the scale and type of your business and it could cost you between $1000 - $8000 per month.</p>
        </div>
        <div class="faq">
            <h3>How soon will my business grow?</h3>
            <p>This could take 6-12 months but can grow exponentially from that point onwards.</p>
        </div>
        <div class="faq">
            <h3>Why are your services so expensive?</h3>
            <p>I agree our services are expensive and that's due to the complexity of our services, and considering the fact that we can grow your business from 2 to 10 times higher, our prices should seem reasonable.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
