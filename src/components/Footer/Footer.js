import React from 'react';
import './Footer.css'
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer>
            <p>Copyright &copy; All Rights Reserved {year}</p>
        </footer>
    );
};

export default Footer;