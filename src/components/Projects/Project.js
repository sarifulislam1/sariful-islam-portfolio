
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Project.css'
const Project = () => {
    const navigate = useNavigate()
    const PHTools = () => {
        navigate('/PH-Tools')
    }
    const grocery = () => {
        navigate('/grocery')
    }
    return (
        <section id='project' className='section-p'>
            <h2>Projects</h2>
            <div className='projects'>
                <div className='project-div'>
                    <img src="https://images.thdstatic.com/productImages/999c939c-c111-4d1c-bc7e-6b4b1e44c088/svn/paint-roller-frames-hd-mt-200-11-6-64_1000.jpg" alt="" />
                    <h3>PH - Tools</h3>
                    <p>● PH - Tools is a manufacturer website. </p>
                    <a className='link-btn' href="https://manufacturer-website-86122.web.app/" target='_blank'>Live Site</a>
                    <button className='btn' onClick={PHTools}>More Details</button>
                </div>
                <div className='project-div'>
                    <img src="https://doeel.com/images/promotion/3/healthy-groceries-1525213305.jpg" alt="" />
                    <h3>Grocery warehouse</h3>
                    <p>● Grocery warehouse where you can store your items and you can add new items.</p>
                    <a className='link-btn' href="https://fresh-grocery-c4276.web.app/" target='_blank'>Live Site</a>
                    <button className='btn' onClick={grocery}>More Details</button>
                </div>
                <div className='project-div'>
                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/61aa1823c0fa7.jpg" alt="" />
                    <h3>Independent Service Provider</h3>
                    <p>● This website is for an independent photographer.</p>
                    <a className='link-btn' href="https://independent-photographer.web.app/" target='_blank' >Live Site</a>
                    <button className='btn' >More Details</button>
                </div>
            </div>

        </section>
    );
};

export default Project;