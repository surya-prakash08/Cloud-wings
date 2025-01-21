import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <div className="contact-item">
                    <strong>Name:</strong>
                    <p>Surya Prakash</p>
                </div>
                <div className="contact-item">
                    <strong>Email:</strong>
                    <p>spsurya392@gmail.com</p>
                </div>
                <div className="contact-item">
                    <strong>LinkedIn:</strong>
                    <p>
                        <a href="https://www.linkedin.com/in/ersuryait/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/surya-prakash
                        </a>
                    </p>
                </div>
                <div className="contact-item">
                    <strong>GitHub:</strong>
                    <p>
                        <a href="https://github.com/surya-prakash08?tab=repositories" target="_blank" rel="noopener noreferrer">
                            github.com/surya-prakash
                        </a>
                    </p>
                </div>
                <div className="contact-item">
                    <strong>Phone Number:</strong>
                    <p>+91-7003740773</p>
                </div>
            </div>
            <p style={{marginTop:"40px",marginBottom :"10px",padding:"0 7px", paddingTop:"10px",paddingBottom:"10px",  textAlign:"center", height:"auto", border:'1px solid black', borderRadius:'10px'}}>Made with ❤️ By Surya Prakash</p>
        </div>
    );
}

export default Contact
