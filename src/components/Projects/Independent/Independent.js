import React from 'react';
import ihome from '../../../images/I-home.png'
import ilogin from '../../../images/I-login.png'
const Independent = () => {
    return (
        <div>
            <h2>Independent Service</h2>
            <div>
                <div className='row mx-auto'>

                    <img className='ph-home g-img mx-auto mb-2  img-fluid col-lg-6 clo-sm-12' src={ihome} alt="" />
                    <img className='ph-home g-img mx-auto  mb-2  img-fluid col-lg-6  clo-sm-12' src={ilogin} alt="" />


                </div>
                <a className='link-btn' href="https://independent-photographer.web.app/" target='_blank'>Live Site</a>
                <a className='link-btn' href="https://github.com/sarifulislam1/independent-service-provider" target='_blank'>Code</a>
                <div className='text-start p-5 ms-5'>

                    <p>● This website is for an independent photographer. It takes 2 days to build this website
                    </p>
                    <p>● This is a single page application which also has a login system. The checkout page is
                        protected. Without login you can't go to this page.
                    </p>
                    <h4>Technology : JavaScript, React, Firebase Authentication , React Router , Firebase Hosting,
                        Bootstrap 5</h4>
                </div>
            </div>
        </div>
    );
};

export default Independent;