import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="project-display-section section-inner-padding-150 section-top-gap-150 project-dispaly-bg">
    <div className="box-wrapper">
      <div className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="section-content section-content-gap-80 text-center">
                <h6 className="section-tag tag-orange">Complete Work</h6>
                <h3 className="section-title">
                  Complete work for client latest work here
                </h3>
                <span className="icon-seperator">
                  <img
                    src="assets/images/icons/section-seperator-shape.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="project-item">
                <div className="row mb-n25">
                  <div className="col-xl-6 col-md-6 mb-25">
                    <Link
                      to={"portfolio-details"}
                      className="project-single-item"
                    >
                      <div className="image img-responsive">
                        <img
                          src="assets/images/projects/project-wide-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="text">
                            <h4 className="title">Brand Identity</h4>
                            <span className="catagory">Brand, Product</span>
                          </div>
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src="assets/images/icons/right-arrow-white.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-xl-6 col-md-6 mb-25">
                    <Link
                      to={"portfolio-details"}
                      className="project-single-item"
                    >
                      <div className="image img-responsive">
                        <img
                          src="assets/images/projects/project-wide-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="text">
                            <h4 className="title">Brand Identity</h4>
                            <span className="catagory">Brand, Product</span>
                          </div>
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src="assets/images/icons/right-arrow-white.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-xl-4 col-md-6 mb-25">
                    <Link
                      to={"portfolio-details"}
                      className="project-single-item"
                    >
                      <div className="image img-responsive">
                        <img
                          src="assets/images/projects/project-square-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="text">
                            <h4 className="title">Brand Identity</h4>
                            <span className="catagory">Brand, Product</span>
                          </div>
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src="assets/images/icons/right-arrow-white.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-xl-4 col-md-6 mb-25">
                    <Link
                      to={"portfolio-details"}
                      className="project-single-item"
                    >
                      <div className="image img-responsive">
                        <img
                          src="assets/images/projects/project-square-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="text">
                            <h4 className="title">Brand Identity</h4>
                            <span className="catagory">Brand, Product</span>
                          </div>
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src="assets/images/icons/right-arrow-white.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-xl-4 col-md-6 mb-25">
                    <Link
                      to={"portfolio-details"}
                      className="project-single-item"
                    >
                      <div className="image img-responsive">
                        <img
                          src="assets/images/projects/project-square-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="inner">
                          <div className="text">
                            <h4 className="title">Brand Identity</h4>
                            <span className="catagory">Brand, Product</span>
                          </div>
                          <div className="icon">
                            <img
                              className="img-fluid"
                              src="assets/images/icons/right-arrow-white.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <Link
                    to={"portfolio-list"}
                    className="btn btn-lg btn-default btn-section-bottom"
                  >
                    Other’s Project
                  </Link>
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
