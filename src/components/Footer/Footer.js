import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sagor</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.facebook.com/sagoralways" target="_blank" className="footer__social-link" rel="noreferrer">
        <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/sagoralways" target='_blank' className="footer__social-link" rel="noreferrer">
        <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://instagram.com/sagor_always" target='_blank' className="footer__social-link" rel="noreferrer">
        <i className="bx bxl-instagram"></i>
        </a>
            </div>
            <span className='footer__copy'>&#169; Sagor. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer;