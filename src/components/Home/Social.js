import React from 'react'

function Social() {
  return (
    <div className='home__social'>
        <a href="https://www.instagram.com/sagor_always" target="_blank" className="home__social-icon" rel="noreferrer">
        <i className="uil uil-instagram-alt"></i>
        </a>
        <a href="https://twitter.com/sagoralways" target='_blank' className="home__social-icon" rel="noreferrer">
        <i className="uil uil-twitter"></i>
        </a>
        <a href="https://github.com/sagoralways" target='_blank' className="home__social-icon" rel="noreferrer">
        <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social