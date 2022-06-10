import React from 'react';
import ghome from '../../../images/G-home.png'
import glogin from '../../../images/G-login.png'
import gaddItem from '../../../images/G-New-item.png'

const Grocery = () => {
    return (
        <div>
            <h1 className='container p-5'>Grocery warehouse</h1>
            <div>
                <div className='row mx-auto'>

                    <img className='ph-home g-img mx-auto mb-2  img-fluid col-lg-4 clo-sm-12' src={glogin} alt="" />
                    <img className='ph-home g-img mx-auto  mb-2  img-fluid col-lg-2  clo-sm-12' src={ghome} alt="" />
                    <img className='ph-home g-img mx-auto  mb-2  img-fluid col-lg-4 clo-sm-12' src={gaddItem} alt="" />

                </div>
                <a className='link-btn' href="https://fresh-grocery-c4276.web.app/" target='_blank'>Live Site</a>
                <a className='link-btn' href="https://github.com/sarifulislam1/warehouse-management-server" target='_blank'>Server Code</a>
                <a className='link-btn' href="https://github.com/sarifulislam1/warehouse-management" target='_blank'>Client Code</a>
                <div className='text-start p-5 ms-5'>

                    <p>● Grocery warehouse where you can store your items and you can add new item.
                    </p>
                    <p>● If you want, you can update the item quantity and you are also able to delete the item.                 </p>
                    <p>● You can also check which specific items you added. This website is protected without
                        login, you cannot use any feature.
                    </p>
                    <h4>Technology : JavaScript, React, Firebase Authentication , MongoDB, JWT, React Router ,
                        Firebase Hosting, Bootstrap 5</h4>
                </div>
            </div>
        </div>

    );
};

export default Grocery;