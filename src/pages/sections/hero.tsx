import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero-display-section section-fluid-200">
        <div className="box-wrappr">
          <div className="hero-wrapper">
            <div className="hero-content">
              <span className="title-tag">In a few minutes</span>
              <h2 className="title">
                Start <span>& Manage</span> your best choice startup.
              </h2>
              <p>
                The business standard to since the printer took a gallery
                scrambled it to make specimen book.
              </p>
              <Link
                to={"service-list"}
                className="btn btn-lg btn-default icon-right"
              >
                All Service’s <i className="icofont-double-right"></i>
              </Link>
            </div>
            <div className="hero-image">
              <img
                className="img-fluid"
                src="assets/images/hero/hero.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
  )
}
