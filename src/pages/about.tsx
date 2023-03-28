import React from 'react';
import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';

const AboutContent = () => {
  return (
    <>
      <div className="content-display-section section-top-gap-150">
        <div className="box-wrapper custom-box-wrapper about-box-wrapper pos-relative">
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
                  <div className="custom-section-content custom-section-content-about custom-section-content-right">
                    <div className="section-content section-content-gap-50 ">
                      <h3 className="section-title">
                        We are best and experienced startup agency.
                      </h3>
                    </div>
                    <p>
                      There are many variations passages and available sheets
                      but majority have agency versions have years suffer
                      alteration some form humour.
                    </p>

                    <ul className="default-iconic-item-2">
                      <li>
                        <div className="icon">
                          <i className="icofont-check"></i>
                        </div>
                        <div className="content">
                          <h4 className="smalltitle">Mission & Vission</h4>
                          <p>
                            There many variations passages available sheets but
                            majority have versions have years alteration some
                            form humour.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="icofont-check"></i>
                        </div>
                        <div className="content">
                          <h4 className="smalltitle">Company Value</h4>
                          <p>
                            There many variations passages available sheets but
                            majority have versions have years alteration some
                            form humour.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <Link to={"#"} className="btn btn-lg btn-default icon-right">
                      Get Started <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="count-display section-fluid-200 section-top-gap-150 section-inner-padding-100 section-inner-bg">
        <div className="box-wrapper">
          <div className="count-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <ul className="counter-items counter-items-style-2">
                    <li className="counter-single-item">
                      <div className="count-box">
                        <img
                          src="assets/images/icons/count-shape-blue.png"
                          alt=""
                        />
                        <p className="text">
                          <span className="counter">76</span>%
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
                          <span className="counter">98</span>%
                        </p>
                      </div>
                      <h6 className="title">Projects Done</h6>
                    </li>

                    <li className="counter-single-item">
                      <div className="count-box">
                        <img
                          src="assets/images/icons/count-shape-pink.png"
                          alt=""
                        />
                        <p className="text">
                          <span className="counter">85</span>%
                        </p>
                      </div>
                      <h6 className="title">Professional Skills</h6>
                    </li>

                    <li className="counter-single-item">
                      <div className="count-box">
                        <img
                          src="assets/images/icons/count-shape-yellow.png"
                          alt=""
                        />
                        <p className="text">
                          <span className="counter">75</span>%
                        </p>
                      </div>
                      <h6 className="title">Business Growth</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-display section-top-gap-150">
        <div className="box-wrapper">
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <div className="section-content section-content-gap-80 text-center">
                    <h6 className="section-tag tag-orange">Team Member</h6>
                    <h3 className="section-title">
                      Meet our awesome & dedicated team member’s
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
          <div className="team-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="team-slider default-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="team-single-item swiper-slide">
                          <div className="top">
                            <div className="image img-responsive">
                              <img
                                src="assets/images/team/team-img-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h4 className="name">Simone Rhoades</h4>
                              <span className="profession">Marketing Manager</span>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="content">
                              <h4 className="name">Simone Rhoades</h4>
                              <span className="profession">Marketing Manager</span>
                            </div>
                            <ul className="social-link">
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-skype"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-dribbble"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-behance"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="team-single-item swiper-slide">
                          <div className="top">
                            <div className="image img-responsive">
                              <img
                                src="assets/images/team/team-img-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h4 className="name">Marline Patino</h4>
                              <span className="profession">UI/UX Designer</span>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="content">
                              <h4 className="name">Marline Patino</h4>
                              <span className="profession">UI/UX Designer</span>
                            </div>
                            <ul className="social-link">
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-skype"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-dribbble"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-behance"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="team-single-item swiper-slide">
                          <div className="top">
                            <div className="image img-responsive">
                              <img
                                src="assets/images/team/team-img-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <h4 className="name">Rosanne Theriau</h4>
                              <span className="profession">Web Developer</span>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="content">
                              <h4 className="name">Rosanne Theriau</h4>
                              <span className="profession">Web Developer</span>
                            </div>
                            <ul className="social-link">
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-skype"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-dribbble"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to={"https://example.com"}>
                                  <i className="icofont-behance"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="default-slider-buttons">
                      <div className="slider-button button-prev">
                        <i className="icofont-long-arrow-left"></i>
                      </div>
                      <div className="slider-button button-next">
                        <i className="icofont-long-arrow-right"></i>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <Link to={""}
                      className="btn btn-lg btn-default-outline btn-section-bottom icon-right"
                    >
                      Join Now <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="testimonial-display-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2">
                  <div className="section-content section-content-gap-80 text-center">
                    <h6 className="section-tag tag-blue">Client Feedback</h6>
                    <h3 className="section-title">
                      This is some of strane honorable customer feedback.
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
          <div className="testimonial-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="testimonial-content-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="testimonial-single-content-item swiper-slide">
                          <p>
                            There are many variations of passages of available
                            majority have suffered alteration in some form by
                            injected humour and randomised words which don't
                            look evening believable are going to use passage.
                          </p>
                          <ul className="review-star">
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="blank">
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="testimonial-single-content-item swiper-slide">
                          <p>
                            There are many variations of passages of available
                            majority have suffered alteration in some form by
                            injected humour and randomised words which don't
                            look evening believable are going to use passage.
                          </p>
                          <ul className="review-star">
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="blank">
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>

                        <div className="testimonial-single-content-item swiper-slide">
                          <p>
                            There are many variations of passages of available
                            majority have suffered alteration in some form by
                            injected humour and randomised words which don't
                            look evening believable are going to use passage.
                          </p>
                          <ul className="review-star">
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="fill">
                              <i className="icofont-star"></i>
                            </li>
                            <li className="blank">
                              <i className="icofont-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-thumb-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <div className="testimonilal-single-thumb-item swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/user/testimonial-user-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="name">Melvina Bolton</h4>
                            <p>
                              <span className="profession">Founder</span>
                              <span className="company-name">Pixelz Studio</span>
                            </p>
                          </div>
                        </div>

                        <div className="testimonilal-single-thumb-item swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/user/testimonial-user-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="name">Melvina Bolton</h4>
                            <p>
                              <span className="profession">Founder</span>
                              <span className="company-name">Pixelz Studio</span>
                            </p>
                          </div>
                        </div>

                        <div className="testimonilal-single-thumb-item swiper-slide">
                          <div className="image">
                            <img
                              src="assets/images/user/testimonial-user-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h4 className="name">Melvina Bolton</h4>
                            <p>
                              <span className="profession">Founder</span>
                              <span className="company-name">Pixelz Studio</span>
                            </p>
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
      </div>
    </>
  );
};

export default function About() {
  return (
    <PagesLayout pageTitle="About" breadCrumbTitle="about">
      <AboutContent />
    </PagesLayout>
  );
}
