import React from 'react';
import './Navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillProject } from 'react-icons/ai'
import { RiMessage2Fill } from 'react-icons/ri'
const Navbar = () => {
    return (
        <nav className='nav'>
            <a className='nav-a' href="#"><AiOutlineHome /></a>
            <a className='nav-a' href="#about"><AiOutlineUser /></a>
            <a className='nav-a' href="#project">< AiFillProject /></a>
            <a className='nav-a' href="#contact"><RiMessage2Fill /></a>
        </nav>
    );
};

export default Navbar;