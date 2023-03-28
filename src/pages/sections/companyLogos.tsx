import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyLogos() {
  return (
    <div className="company-logo-display-section section-fluid-135 company-logo-border">
    <div className="box-wrapper">
      <div className="company-logo-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="company-logo-slider">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="company-logo-single-item swiper-slide">
                      <Link to={""} className="image">
                        <img
                          src="assets/images/company-logo/company-logo-1.png"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="company-logo-single-item swiper-slide">
                      <Link to={""} className="image">
                        <img
                          src="assets/images/company-logo/company-logo-2.png"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="company-logo-single-item swiper-slide">
                      <Link to={""} className="image">
                        <img
                          src="assets/images/company-logo/company-logo-3.png"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="company-logo-single-item swiper-slide">
                      <Link to={""} className="image">
                        <img
                          src="assets/images/company-logo/company-logo-4.png"
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="company-logo-single-item swiper-slide">
                      <Link to={""} className="image">
                        <img
                          src="assets/images/company-logo/company-logo-5.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
