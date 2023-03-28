import React from 'react'
import { Link } from 'react-router-dom'

export default function WhyUs() {
  return (
    <div className="content-display-section section-top-gap-150">
    <div className="box-wrapper custom-box-wrapper pos-relative">
      <div className="content-inner-img content-inner-img-left">
        <img
          className="img-fluid"
          src="assets/images/section-image/section-image-1.png"
          alt=""
        />
      </div>
      <div className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 pos-relative">
              <div className="custom-section-content custom-section-content-right">
                <div className="section-content section-content-gap-50">
                  <h6 className="section-tag tag-blue">Why Choose Us</h6>
                  <h3 className="section-title">
                    Increase business profit with strane agency.
                  </h3>
                </div>
                <p>
                  There are many variations passages available sheets but
                  majority have versions have years suffereds alteration
                  some form humour.
                </p>

                <ul className="content-lists">
                  <li>
                    <i className="icofont-check"></i> Secure & private
                  </li>
                  <li>
                    <i className="icofont-check"></i> Right Solution
                  </li>
                  <li>
                    <i className="icofont-check"></i> Highly Skills
                  </li>
                  <li>
                    <i className="icofont-check"></i> Client’s Support
                  </li>
                </ul>

                <Link
                  to={"contact.html"}
                  className="btn btn-lg btn-default icon-right"
                >
                  Get Started <i className="icofont-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
