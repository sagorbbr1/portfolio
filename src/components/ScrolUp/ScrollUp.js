import React from 'react'
import './scrollup.css'
function ScrollUp() {
    window.addEventListener('scroll', function () {
       const scrollup = document.querySelector('.scrollup');
        if(this.window.scrollY >= 560) {
            scrollup.classList.add('show-scroll');
        } else {
            scrollup.classList.remove('show-scroll');
        }
    })
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="scrollup">
        
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default ScrollUp