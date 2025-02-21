import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Company Logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sapiente in voluptatem inventore quidem nesciunt adipisci ad, dolor itaque optio voluptate non deserunt porro! Sunt quia aperiam cumque adipisci nobis?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>7305488113</li>
                    <li>2116012@saec.ac.in</li>
                </ul>
            </div>
        </div>

        {/* Google Map Embed */}
        <div className="footer-map">
            <h2>Our Location</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.681406403287!2d80.1966303!3d13.05594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzIxLjQiTiA4MMKwMTEnNDcuOSJF!5e0!3m2!1sen!2sin!4v1727202361514!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Map"
            ></iframe>
        </div>

        <hr />
        <p className="footer-copyright">Copyright 2024 @ milady.com - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;