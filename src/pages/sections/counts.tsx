import React from 'react'

export default function Counts() {
  return (
    <div className="count-display section-fluid-200 section-top-gap-150 section-inner-padding-100 section-inner-gray-gradient-bg-reverse">
    <div className="box-wrapper">
      <div className="count-wrapper pos-relative">
        <div className="container-fluid">
          <div className="row align-items-center justify-contents-between">
            <div className="col-xl-5 offset-xl-0 col-md-10 offset-md-1 col-sm-12">
              <div className="content text-lg-start text-center">
                <h3 className="title">
                  We’r <span>10,000</span> project complete &{' '}
                  <span>100%</span> client satisfaction.
                </h3>
              </div>
            </div>
            <div className="col">
              <ul className="counter-items counter-items-style-1">
                <li className="counter-single-item">
                  <div className="count-box">
                    <img
                      src="assets/images/icons/count-shape-blue.png"
                      alt=""
                    />
                    <p className="text">
                      <span
                        className="counter"
                        data-to="100"
                        data-speed="1500"
                      >
                        76
                      </span>
                      %
                    </p>
                  </div>
                  <h6 className="title">Happy Client’s</h6>
                </li>

                <li className="counter-single-item">
                  <div className="count-box">
                    <img
                      src="assets/images/icons/count-shape-orange.png"
                      alt=""
                    />
                    <p className="text">
                      <span className="counter">88</span>%
                    </p>
                  </div>
                  <h6 className="title">Positive Rating</h6>
                </li>

                <li className="counter-single-item">
                  <div className="count-box">
                    <img
                      src="assets/images/icons/count-shape-purple.png"
                      alt=""
                    />
                    <p className="text">
                      <span className="counter">92</span>%
                    </p>
                  </div>
                  <h6 className="title">Projects Done</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dotline-animate">
          <span className="blue"></span>
          <span className="orange"></span>
          <span className="blue"></span>
        </div>
      </div>
    </div>
  </div>
  )
}
