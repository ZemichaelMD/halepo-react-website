import React from 'react';
import PagesLayout from '../components/layout/pagesLayout';
import {Link} from 'react-router-dom'

const BlogDetailContent = () => {
  return (
    <>
      <div className="blog-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="blog-list-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row">
                    <div className="container-width-37 sidebar-leftside">
                      <div className="sidebar-wrapper">
                        <div className="sidebar-widget-singel-item widget-box-bg gray-bg">
                          <h4 className="title">Search</h4>
                          <form className="widget-search" action="#" method="post">
                            <input
                              type="search"
                              placeholder="Search here"
                              required
                            />
                            <button type="submit">
                              <i className="icofont-search-1"></i>
                            </button>
                          </form>
                        </div>

                        <div className="sidebar-widget-singel-item widget-box-bg gray-bg">
                          <h4 className="title">Category</h4>
                          <ul className="widget-catagory">
                            <li>
                              <Link to={""}>
                                <i className="icofont-double-right"></i>Creative
                                Solution
                              </Link>
                            </li>
                            <li>
                              <Link to={""}>
                                <i className="icofont-double-right"></i>Website
                                Development
                              </Link>
                            </li>
                            <li>
                              <Link to={""}>
                                <i className="icofont-double-right"></i>Product
                                Development
                              </Link>
                            </li>
                            <li>
                              <Link to={""}>
                                <i className="icofont-double-right"></i>Data
                                Visualization
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="sidebar-widget-singel-item sidebar-banner">
                          <div className="image text-center">
                            <img
                              className="img-fluid"
                              src="assets/images/background/banner-img-1.png"
                              alt=""
                            />
                          </div>
                          <div className="d-flex justify-content-center">
                            <Link
                              to={"contact"}        className="btn btn-lg btn-default-alt icon-right"
                            >
                              Get Started <i className="icofont-double-right"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="sidebar-widget-singel-item widget-box-bg">
                          <h4 className="title">popular tags</h4>
                          <ul className="widget-tags">
                            <li>
                              <Link to={""}>Agency</Link>
                            </li>
                            <li>
                              <Link to={""}>Company</Link>
                            </li>
                            <li>
                              <Link to={""}>Business</Link>
                            </li>
                            <li>
                              <Link to={""}>Startup</Link>
                            </li>
                            <li>
                              <Link to={""}>Marketing</Link>
                            </li>
                            <li>
                              <Link to={""}>Cleaner</Link>
                            </li>

                            <li>
                              <Link to={""}>Corporate</Link>
                            </li>
                            <li>
                              <Link to={""}>Brand</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="container-width-63">
                      <div className="blog-details-section">
                        <div className="box-wrapper">
                          <div className="blog-details-wrapper">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="blog-details-top text-center">
                                    <div className="post-meata">
                                      <span className="author">
                                        By<Link to={""}>Harold Leonard </Link>
                                      </span>
                                      <span>03 April, 2022</span>
                                      <span>10 min read</span>
                                    </div>
                                    <h2 className="title">
                                      Startup founder, one of your primary
                                      concerns is making a business out of your
                                      service
                                    </h2>
                                    <ul className="blog-tag">
                                      <li>
                                        <Link to={""}>Charity</Link>
                                      </li>
                                      <li>
                                        <Link to={""}>Human</Link>
                                      </li>
                                      <li>
                                        <Link to={""}>Animal’s</Link>
                                      </li>
                                      <li>
                                        <Link to={""}>Forest</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="blog-details-hero-image mb-20">
                                    <img
                                      className="img-fluid"
                                      src="assets/images/blog/blog-details/blog-details-hero-img.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="blog-details-content-wrapper default-text-content">
                                    <h4 className="subtitle">
                                      Make your store stand out from the others
                                      by converting more shoppers into buyers!
                                    </h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry has been
                                      industry standard dummy text ever since
                                      the 150 a galley of type and scrambe make
                                      type specimen book has survived not only
                                      five centuries text of the printing and
                                      typesetin industry standard dummy text
                                      ever since the 1500s, when an unknown
                                      printer.
                                    </p>

                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <h4 className="subtitle">Table of Content:</h4>
                                    <ul className="default-item-list">
                                      <li>
                                        <span className="icon">
                                          <i className="icofont-double-right"></i>
                                        </span>
                                        <span className="text">
                                          It was popularised in the 1960s with
                                          the release of Letraset sheets
                                          containing
                                        </span>
                                      </li>
                                      <li>
                                        <span className="icon">
                                          <i className="icofont-double-right"></i>
                                        </span>
                                        <span className="text">
                                          Many desktop publishing packages and
                                          web page editors now use
                                        </span>
                                      </li>
                                      <li>
                                        <span className="icon">
                                          <i className="icofont-double-right"></i>
                                        </span>
                                        <span className="text">
                                          It was popularised in the 1960s with
                                          the release of Letraset sheets
                                          containing
                                        </span>
                                      </li>
                                      <li>
                                        <span className="icon">
                                          <i className="icofont-double-right"></i>
                                        </span>
                                        <span className="text">
                                          Many desktop publishing packages and
                                          web page editors now use
                                        </span>
                                      </li>
                                      <li>
                                        <span className="icon">
                                          <i className="icofont-double-right"></i>
                                        </span>
                                        <span className="text">
                                          It was popularised in the 1960s with
                                          the release of Letraset sheets
                                          containing
                                        </span>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <h4 className="subtitle">
                                      Our company fails the real world test in
                                      all kinds of ways.
                                    </h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting.
                                    </p>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <div className="default-content-image img-responsive">
                                      <img
                                        src="assets/images/blog/blog-details/blog-details-content-img.jpg"
                                        alt=""
                                      />
                                    </div>

                                    <h4 className="subtitle">
                                      Well, that wasn’t the only unconventional
                                      thing 37Signals did on their way up.
                                    </h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <div className="content-banner">
                                      <strong>2,83k People</strong> Receive Our
                                      Weekly WordPress Related Newsletter.
                                    </div>

                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>

                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy tex ever since the 1500s, when an
                                      unknown printer took a galley of type and
                                      scirambled it to make a type specimen
                                      book. It has survived only five centuries,
                                      but also the leap into electronic
                                      typesetting, remaining the essentially
                                      unchanged. It was popularised in the 1960s
                                      the release of Letraset sheets containing
                                      Lorem Ipsum passages, and more recently
                                      with desktop publishing crambled it to
                                      make specimen book. It has survived nots
                                      only five centuries, but also the leap
                                      into.
                                    </p>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="blog-share ">
                                    <div className="text">Share this article:</div>
                                    <ul className="social-link">
                                      <li>
                                        <Link to="https://example.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="icofont-facebook"></i>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://example.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="icofont-skype"></i>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://example.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="icofont-twitter"></i>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="https://example.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          <i className="icofont-linkedin"></i>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="blog-feed-display-section mt-80 section-inner-bg section-inner-padding-80">
                        <div className="box-wrapper">
                          <div className="section-wrapper ">
                            <div className="container">
                              <div className="row justify-content-center">
                                <div className="col-12 pos-relative d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                  <div className="section-content">
                                    <h2 className="section-subtitle">
                                      You may also like
                                    </h2>
                                  </div>

                                  <div className="top-slider-buttons">
                                    <div className="slider-button button-prev">
                                      <i className="icofont-long-arrow-left"></i>
                                    </div>
                                    <div className="slider-button button-next">
                                      <i className="icofont-long-arrow-right"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="blog-feed-wrapper">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="blog-feed-slider blog-feed-slider-style-2">
                                    <div className="swiper-container">
                                      <div className="swiper-wrapper">
                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to="blogD"
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-1.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}>Walter Houston</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                All of these amazing features
                                                come at an affordable price!
                                              </Link>
                                            </h5>

                                            <div className="post-info">
                                              <span>03 April, 2022</span>
                                              <span>10 min read</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to={"blogD"}
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-2.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}>Patrick Bade</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                With WooLentor's drag-and drop
                                                interface for creating
                                              </Link>
                                            </h5>

                                            <div className="post-info">
                                              <span>05 April, 2022</span>
                                              <span>6 min read</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to="blogD"
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-3.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}>Janet Harbin</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                Don't Waste Time! 6 Facts Until
                                                You Reach Your Portfolio
                                              </Link>
                                            </h5>

                                            <div className="post-info">
                                              <span>11 April, 2022</span>
                                              <span>13 min read</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to="blogD"
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-4.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}> Jennifer Johnson</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                Make your store stand out from
                                                the others by converting
                                              </Link>
                                            </h5>

                                            <div className="post-info">
                                              <span>12 April, 2022</span>
                                              <span>08 min read</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to="blogD"
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-5.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}>Phyllis Garcia</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                These Secrets Tips Will Make
                                                Your Portfolio Look Amazing
                                              </Link>
                                            </h5>

                                            <div className="post-info">
                                              <span>17 April, 2022</span>
                                              <span>09 min read</span>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="blog-list-single-item swiper-slide">
                                          <Link to="blogD"
                                            className="image"
                                          >
                                            <img
                                              src="assets/images/blog/blog-list/blog-list-single-item-img-6.jpg"
                                              alt=""
                                            />
                                          </Link>
                                          <div className="content">
                                            <span className="author">
                                              By<Link to={""}>Mario Stitt</Link>
                                            </span>
                                            <h5 className="title">
                                              <Link to={"blogD"}>
                                                Take Advantage Of Portfolio -
                                                Read These 6 Tips
                                              </Link>
                                            </h5>
                                            <div className="post-info">
                                              <span>21 April, 2022</span>
                                              <span>16 min read</span>
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
                      </div>

                      <div className="blog-comment-section section-top-gap-100">
                        <div className="box-wrappper">
                          <div className="comment-wrapper">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="comment-area">
                                    <h4 className="title">Comments (03)</h4>

                                    <ul className="comment-list-items">
                                      <li className="comment-list-single-item">
                                        <div className="comment-list-single-wrap">
                                          <div className="top">
                                            <div className="user-details">
                                              <div className="image">
                                                <img
                                                  src="assets/images/user/user-1.jpg"
                                                  alt=""
                                                />
                                              </div>
                                              <div className="user-info">
                                                <h5 className="name">
                                                  Sara Alexander
                                                </h5>
                                                <div className="user-info-details">
                                                  <span className="profession">
                                                    Product Designer, USA{' '}
                                                  </span>
                                                  <span className="time">
                                                    35 minutes ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>

                                            <button className="reply-btn">
                                              <i className="icofont-reply"></i>{' '}
                                              Reply
                                            </button>
                                          </div>
                                          <div className="bottom">
                                            <p>
                                              There are many variations of
                                              passages of Lorem Ipsum available,
                                              but the majority have suffered
                                              alteration in some form humour, or
                                              randomised words which don't look
                                              even slightly believable. If you
                                              are going to use a passage of orem
                                              psum to be sure there isn't
                                              anything embarrassing.
                                            </p>
                                          </div>
                                        </div>

                                        <ul className="has-reply">
                                          <li className="comment-list-single-item">
                                            <div className="comment-list-single-wrap">
                                              <div className="top">
                                                <div className="user-details">
                                                  <div className="image">
                                                    <img
                                                      src="assets/images/user/user-2.jpg"
                                                      alt=""
                                                    />
                                                  </div>
                                                  <div className="user-info">
                                                    <h5 className="name">
                                                      Robert Morgan
                                                    </h5>
                                                    <div className="user-info-details">
                                                      <span className="profession">
                                                        Product Designer, USA{' '}
                                                      </span>
                                                      <span className="time">
                                                        22 minutes ago
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>

                                                <button className="reply-btn">
                                                  <i className="icofont-reply"></i>{' '}
                                                  Reply
                                                </button>
                                              </div>
                                              <div className="bottom">
                                                <p>
                                                  There are many variations of
                                                  passages of Lorem Ipsum
                                                  available, but the majority
                                                  have suffered alteration in
                                                  some form humour, or
                                                  randomised words which don't
                                                  look even slightly believable.
                                                  If you are going to use a
                                                  passage of orem psum to be
                                                  sure there isn't anything
                                                  embarrassing.
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>

                                      <li className="comment-list-single-item">
                                        <div className="comment-list-single-wrap">
                                          <div className="top">
                                            <div className="user-details">
                                              <div className="image">
                                                <img
                                                  src="assets/images/user/user-3.jpg"
                                                  alt=""
                                                />
                                              </div>
                                              <div className="user-info">
                                                <h5 className="name">
                                                  Rochelle Hunt
                                                </h5>
                                                <div className="user-info-details">
                                                  <span className="profession">
                                                    Product Designer, USA{' '}
                                                  </span>
                                                  <span className="time">
                                                    09 minutes ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>

                                            <button className="reply-btn">
                                              <i className="icofont-reply"></i>{' '}
                                              Reply
                                            </button>
                                          </div>
                                          <div className="bottom">
                                            <p>
                                              There are many variations of
                                              passages of Lorem Ipsum available,
                                              but the majority have suffered
                                              alteration in some form humour, or
                                              randomised words which don't look
                                              even slightly believable. If you
                                              are going to use a passage of orem
                                              psum to be sure there isn't
                                              anything embarrassing.
                                            </p>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="blog-form-section section-top-gap-70">
                        <div className="box-wrappper">
                          <div className="form-wrapper">
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="comment-area">
                                    <h4 className="title mb-30">Leave a comment</h4>
                                    <form
                                      className="default-form"
                                      action="#"
                                      method="post"
                                    >
                                      <div className="row">
                                        <div className="col-lg-6 mb-20">
                                          <div className="default-form-single-item">
                                            <input
                                              type="text"
                                              placeholder="Name"
                                              required
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-6 mb-20">
                                          <div className="default-form-single-item">
                                            <input
                                              type="email"
                                              placeholder="Email"
                                              required
                                            />
                                          </div>
                                        </div>
                                        <div className="col-lg-12">
                                          <div className="default-form-single-item">
                                            <textarea
                                              placeholder="Massage"
                                              rows={10}
                                            ></textarea>
                                          </div>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                          <button
                                            type="submit"
                                            className="btn btn-lg btn-default icon-right submit-btn"
                                          >
                                            Submit Now{' '}
                                            <i className="icofont-double-right"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </form>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BlogDetail() {
  return (
    <PagesLayout pageTitle="Blog Detail" breadCrumbTitle="blog_detail">
      <BlogDetailContent />
    </PagesLayout>
  );
}
