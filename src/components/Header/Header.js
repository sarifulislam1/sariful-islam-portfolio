import React from 'react';
import './Header.css'
import cv from '../../images/Sariful_Islam_Resume (2).pdf'
import me from '../../images/PORTFOLIO-removebg-preview.png'
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header>
            <div>
                <div className='h-text'>
                    <h5>Hello I'm</h5>
                    <h1 className='name'>Sariful Islam</h1>
                    <h5>Front-End Developer</h5>
                </div>
                <div>
                    <a className='h-ancore' href={cv} download>Download CV</a>
                    <a className='h-ancore' href="#contact">Let's Talk</a>
                </div>
                <HeaderSocial ></HeaderSocial>
                <div >
                    <img className='me' src={me} alt="" />
                </div>

            </div>

        </header>
    );
};

export default Header;