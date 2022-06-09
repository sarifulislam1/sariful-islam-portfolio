import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Header.css'

const HeaderSocial = () => {
    return (
        <div className='h-socile'>
            <a className='hs-s' href="https://www.linkedin.com/in/sariful-islam1/" target='_blank'>{<BsLinkedin />}</a>
            <a className='hs-s' href="https://github.com/sarifulislam1" target='_blank'>{<FaGithub />}</a>

        </div>
    );
};

export default HeaderSocial;