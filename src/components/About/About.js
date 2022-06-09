import React from 'react';
import './About.css'
import meimg from '../../images/photo for linkedIn.png'
const About = () => {
    return (
        <section className='about-section' id='about' nav-section>
            <h5>Get To Know</h5>
            <h1>About Me</h1>
            <div className='about-main-div'>
                <div>
                    <img src={meimg} alt="" />
                </div>
                <div>
                    <p>Seeking employment as an Interactive Website Developer. Coming with certifications and vast experiences in JavaScript, HTML5, CSS3, React, ES6, React Router, Bootstrap, Tailwind, Node.js, Express.js, MongoDB, Firebase, MongoDB, Firebase, Heroku, Netlify, VS Code, Figma and a strong ability to effectively design, maintain, and manage the website.</p>
                </div>
            </div>
        </section>
    );
};

export default About;