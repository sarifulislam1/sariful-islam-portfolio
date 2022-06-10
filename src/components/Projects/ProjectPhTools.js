import React from 'react';
import './ProjectPhTools.css'
import PHhome from '../../images/PH-home.png'
import PHLogin from '../../images/ph-loghin.png'
import PHAdmin from '../../images/PH-admin.png'

const ProjectPhTools = () => {
    return (
        <div>
            <h1>PH-Tools</h1>
            <div>
                <div>
                    <img className='ph-home m-2 img-fluid' src={PHLogin} alt="" />
                    <img className='ph-home m-2 ' src={PHhome} alt="" />
                    <img className='ph-home m-2 img-fluid' src={PHAdmin} alt="" />

                </div>
                <a className='link-btn' href="https://manufacturer-website-86122.web.app/" target='_blank'>Live Site</a>
                <a className='link-btn' href="https://github.com/sarifulislam1/manufacturer-website-server-side" target='_blank'>Server Code</a>
                <a className='link-btn' href="https://github.com/sarifulislam1/-manufacturer-website-client-side" target='_blank'>Client Code</a>
                <div className='text-start p-5 ms-5'>
                    <h3>Admin Email: abc@def.com  | Admin Password: 123456</h3>
                    <p>● PH - Tools is a manufacturer website. Where you can order a specific amount of quantity</p>
                    <p>● This website also has a dashboard where customers can see what they order.This website also has a payment method. If a customer wants to, they can review the service.
                    </p>
                    <p>● An admin can add new tools also have the power to make a new admin from all users</p>
                    <h4>Technology : JavaScript, React, Firebase Authentication , MongoDB, JWT, React Router ,
                        Firebase Hosting, Tailwind, Daisy.ui, Stripe</h4>
                </div>
            </div>
        </div>
    );
};

export default ProjectPhTools;