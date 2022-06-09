import React from 'react';
import './Contact.css'
import { MdEmail } from 'react-icons/md'
import { SiMessenger } from 'react-icons/si'
// import { RiWhatsappFill } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c82doi3', 'template_9yfkgnf', form.current, 'QodjBxYpvuh-lbAky')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully Send Your Message')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h1>Contact</h1>
            <div className='contact-div'>
                <div>
                    <article className='article-css'>
                        <MdEmail />
                        <h4>Email</h4>
                        <h5>sarifulislam8280@gmail.com</h5>
                        <a href="mailto:sarifulislam8280@gmail.com" target='_blank'>Send A Message</a>
                    </article >
                    {/* <article className='article-css'>
                        <RiWhatsappFill />
                        <h4>Whatsapp</h4>
                        <h5>Sariful Islam</h5>
                        <a href="https://api.whatsapp.com/send?phone=+8801626548280" target='_blank'>Send A Message</a>
                    </article> */}
                    <article className='article-css'>
                        <SiMessenger />
                        <h4>Messenger</h4>
                        <h5>Sariful Islam</h5>
                        <a href="https://m.me/100008036208579" target='_blank'>Send A Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button className='msg-btn'>Send Message</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;