import React from 'react'
import Portfolios from './Portfolios'
import './portfolio.css';
function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className='section__subtitle'>Most recent works</span>
    
    <Portfolios />
    </section>
  )
}

export default Portfolio