import { Link } from 'react-router-dom'

export default function BlogFeed() {
  return (
    <div className="blog-feed-display-section section-inner-padding-150 section-top-gap-150 blog-feed-dispaly-bg">
    <div className="box-wrapper">
      <div className="section-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-content section-content-gap-80">
                <h6 className="section-tag tag-blue">Latest News</h6>
                <h3 className="section-title">
                  Check popular startup related article from news feed.
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
      <div className="blgo-feed-slider">
        <div className="container">
          <div className="row">
            <div className="col-12 pos-relative">
              <div className="blog-feed-slider blog-feed-slider-style-1 default-slider">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <div className="blog-list-single-item swiper-slide">
                      <Link to={"blog-details-full-width"}  className="image"
                      >
                        <img
                          src="assets/images/blog/blog-list/blog-list-single-item-img-1.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="content">
                        <span className="author">
                          By<Link to={""}> Walter Houston</Link>
                        </span>
                        <h5 className="title">
                          <Link to={"blog-details-full-width"}>
                            With WooLentor's drag-and drop interface for
                            creating...
                          </Link>
                        </h5>

                        <div className="post-info">
                          <span>03 April, 2022</span>
                          <span>10 min read</span>
                        </div>
                      </div>
                    </div>

                    <div className="blog-list-single-item swiper-slide">
                      <Link to={"blog-details-full-width"}  className="image"
                      >
                        <img
                          src="assets/images/blog/blog-list/blog-list-single-item-img-2.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="content">
                        <span className="author">
                          By<Link to={""}> Walter Houston</Link>
                        </span>
                        <h5 className="title">
                          <Link to={"blog-details-full-width"}>
                            Make your store stand out from the others by
                            converting.
                          </Link>
                        </h5>

                        <div className="post-info">
                          <span>03 April, 2022</span>
                          <span>10 min read</span>
                        </div>
                      </div>
                    </div>

                    <div className="blog-list-single-item swiper-slide">
                      <Link to={"blog-details-full-width"}  className="image"
                      >
                        <img
                          src="assets/images/blog/blog-list/blog-list-single-item-img-3.jpg"
                          alt=""
                        />
                      </Link>
                      <div className="content">
                        <span className="author">
                          By<Link to={""}> Walter Houston</Link>
                        </span>
                        <h5 className="title">
                          <Link to={"blog-details-full-width"}>
                            All of these amazing features come at an
                            affordable price.
                          </Link>
                        </h5>

                        <div className="post-info">
                          <span>03 April, 2022</span>
                          <span>10 min read</span>
                        </div>
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

              <div className="subscribe-banner subscribe-banner-overflow section-top-gap-150 section-fluid-100">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-8 col-xl-8">
                    <div className="content">
                      <h6 className="big-text">
                        Stay connect with us, get daily & weekly update.
                      </h6>
                    </div>
                  </div>
                  <div className="col-auto">
                    <Link to={"contact"} className="btn btn-lg btn-default icon-right"
                    >
                      Subscribe Now <i className="icofont-double-right"></i>
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
  )
}
