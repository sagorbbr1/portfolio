import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    const notify = () => toast("Message submited!");
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vc1xrkm', 'template_0iextna', form.current, 'Q5LpSBb9Rfe74T2Su')
      e.target.reset()
  };

  return (
    <section className="section contact" id="contact">
         <h2 className="section__title">Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                    Talk to me
                </h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className='bx bx-mail-send contact__card-icon'></i>
                        <div className="contact__card-title">Email</div>
                        <span className='contact__card-data'>sagor.always@gmail.com</span>
                        <a href="mailto:sagor.always@gmail.com" className="contact__button">
                            Write me
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className='bx bxl-whatsapp contact__card-icon'></i>
                        <div className="contact__card-title">WhatsApp</div>
                        <span className='contact__card-data'>+8801610035926</span>
                        <a href="https://api.whatsapp.com/send?phone=+8801610035926&text=Hello, more information!
" className="contact__button"> Write me
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className='bx bxl-messenger contact__card-icon'></i>
                        <div className="contact__card-title">Messenger</div>
                        <span className='contact__card-data'>sagoralways</span>
                        <a href="https://m.me/sagoralways" className="contact__button">
                            Write me
                            <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">
                    Write me your project
                </h3>
                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                    <div className="contact__form-div">
                        <label className='contact__form-tag'>Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name' />
                    </div>
                    <div className="contact__form-div">
                        <label className='contact__form-tag'>Email</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your e-mail' />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className='contact__form-tag'>Project</label>
                        <textarea name="project" className='contact__form-input' cols="30" rows="10" placeholder='Write your project'></textarea>
                    </div>
                    <button onClick={notify} href="#contact" className="button button--flex">Send Message
        <i className='bx bxs-send home__send'></i> </button>
        <ToastContainer />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact