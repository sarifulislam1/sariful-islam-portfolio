
import React from 'react';
import './Project.css'
const Project = () => {
    return (
        <section id='project' >
            <h2>Projects</h2>
            <div className='projects'>
                <div className='project-div'>
                    <img src="https://images.thdstatic.com/productImages/999c939c-c111-4d1c-bc7e-6b4b1e44c088/svn/paint-roller-frames-hd-mt-200-11-6-64_1000.jpg" alt="" />
                    <h3>PH - Tools</h3>
                    <p>Admin Email: abc@def.com | Admin Password: 123456</p>
                    <p>● PH - Tools is a manufacturer website. Where you can order a specific amount of quantity.</p>
                    <p>● This website also has a dashboard where customers can see what they order. This website
                        also has a payment method. If a customer wants to, they can review the service.</p>
                    <p>● An admin can add new tools also have the power to make a new admin from all users</p>
                    <a className='link-btn' href="https://github.com/sarifulislam1/-manufacturer-website-client-side" target='_blank'>Code</a>
                    <a className='link-btn' href="https://manufacturer-website-86122.web.app/" target='_blank'>Live Site</a>
                </div>
                <div className='project-div'>
                    <img src="https://doeel.com/images/promotion/3/healthy-groceries-1525213305.jpg" alt="" />
                    <h3>Warehouse Management</h3>
                    <p>● Grocery warehouse where you can store your items and you can add new items. It takes
                        7 days to build this website.</p>
                    <p>● If you want, you can update the item quantity and you are also able to delete the item.</p>
                    <p>● You can also check which specific items you added. This website is protected without
                        login, you cannot use any feature.</p>
                    <a className='link-btn' href="https://github.com/sarifulislam1/warehouse-management" target='_blank'>Code</a>
                    <a className='link-btn' href="https://fresh-grocery-c4276.web.app/" target='_blank'>Live Site</a>
                </div>
                <div className='project-div'>

                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2021/12/61aa1823c0fa7.jpg" alt="" />
                    <h3>Independent Service Provider</h3>
                    <p>● This website is for an independent photographer. It takes 2 days to build this website.</p>
                    <p>● This is a single page application which also has a login system. The checkout page is
                        protected. Without login you can't go to this page.</p>
                    <a className='link-btn' href="https://github.com/sarifulislam1/independent-service-provider" target='_blank'>Code</a>
                    <a className='link-btn' href="https://independent-photographer.web.app/" target='_blank' >Live Site</a>
                </div>
            </div>

        </section>
    );
};

export default Project;