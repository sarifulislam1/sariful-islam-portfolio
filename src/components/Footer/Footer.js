import React from 'react';
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer >
            <p>&copy; All Rights Reserved {year}</p>
            <div>
                <a className='hs-s' href="https://www.linkedin.com/in/sariful-islam1/" target='_blank'>{<BsLinkedin />}</a>
                <a className='hs-s' href="https://github.com/sarifulislam1" target='_blank'>{<FaGithub />}</a>
                <a className='hs-s' href="https://www.facebook.com/profile.php?id=100008036208579" target='_blank'>{<BsFacebook />}</a>
            </div>
        </footer>
    );
};

export default Footer;