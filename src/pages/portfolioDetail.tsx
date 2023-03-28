import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';
import SubscribeSection from '../components/layout/subscribeSection';

const PortfolioDetailContent = () => {
  return (
    <>
      <div className="portfolio-details-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="portfolio-details-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row-reverse">
                    <div className="container-width-37 sidebar-rightside">
                      <div className="sidebar-wrapper">
                        <div className="sidebar-widget-singel-item widget-box-bg portfolio-project-widget-box">
                          <ul className="widget-project">
                            <li>
                              <h4 className="text-tag">Client:</h4>
                              <span>Rosalinda Hairston</span>
                            </li>
                            <li>
                              <h4 className="text-tag">Category:</h4>
                              <span>Marketing, Brand</span>
                            </li>
                            <li>
                              <h4 className="text-tag">Location:</h4>
                              <span>
                                48 Fauver Mine Rd Raphine, Virginia(VA), 24472
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="sidebar-widget-singel-item widget-box-bg gradient-bg contact-widget-box">
                          <div className="widget-contact">
                            <h6 className="title">Call Us Now:</h6>
                            <Link to={"tel:+0123456789"}>+012 345 6789</Link>
                            <img
                              className="img-fluid"
                              src="assets/images/icons/telephone.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-width-63">
                      <div className="project-large-slider">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="project-large-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-slider-large-img-1.jpg"
                                alt=""
                              />
                            </div>

                            <div className="project-large-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-slider-large-img-2.jpg"
                                alt=""
                              />
                            </div>

                            <div className="project-large-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-slider-large-img-3.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="project-thumb-slider">
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="projects-single-thumb-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-thumb-img-1.jpg"
                                alt=""
                              />
                            </div>

                            <div className="projects-single-thumb-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-thumb-img-2.jpg"
                                alt=""
                              />
                            </div>

                            <div className="projects-single-thumb-item swiper-slide img-responsive">
                              <img
                                src="assets/images/projects/project-thumb-img-3.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="default-text-content">
                    <h2 className="title">Brand Identity Design</h2>

                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is ple
                      because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor agan is there and anyone or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances.
                    </p>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes,avoids pleasure itself, because it is ple because
                      those who do not know how to pursue pleasure rationally
                      encounter consequences that are extremely painful. Nor
                      aganthere and anyone or desires to obtain pain of itself,
                      because it is pain, but because occasionally
                      circumstances.
                    </p>

                    <div className="block-quote">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master builder of human happiness.
                    </div>

                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is ple
                      because those who do not know how to pursue pleasure
                      rationally encounter consequences that are extremely
                      painful. Nor agan is there and anyone or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances.
                    </p>
                    <p>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes,avoids pleasure itself, because it is ple because
                      those who do not know how to pursue pleasure rationally
                      encounter consequences that are extremely painful. Nor
                      aganthere and anyone or desires to obtain pain of itself,
                      because it is pain, but because occasionally
                      circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-project-section section-top-gap-150">
        <div className="box-wrapper">
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 offset-xl-3">
                  <div className="section-content section-content-gap-80 text-center">
                    <h6 className="section-tag tag-orange">Complete Work</h6>
                    <h3 className="section-title">Related Project</h3>
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
          <div className="recent-project-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="project-slider default-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <Link
                          to={"portfolio-details"} className="project-single-item swiper-slide"
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

                        <Link
                          to={"portfolio-details"}    className="project-single-item swiper-slide"
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

                        <Link
                          to={"portfolio-details"}    className="project-single-item swiper-slide"
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

                    <div className="default-slider-buttons">
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
          </div>
        </div>
      </div>

      <SubscribeSection />
    </>
  );
};

export default function PortfolioDetail() {
  return (
    <PagesLayout pageTitle="PortfolioDetail" breadCrumbTitle="services_detail">
      <PortfolioDetailContent />
    </PagesLayout>
  );
}
