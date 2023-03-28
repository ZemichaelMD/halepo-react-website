import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';
import SubscribeSection from '../components/layout/subscribeSection';

const BlogListContent = () => {
  return (
    <>
      <div className="blog-list-section section-top-gap-150">
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
                              <Link to={''}>
                                <i className="icofont-double-right"></i>Creative
                                Solution
                              </Link>
                            </li>
                            <li>
                              <Link to={''}>
                                <i className="icofont-double-right"></i>Website
                                Development
                              </Link>
                            </li>
                            <li>
                              <Link to={''}>
                                <i className="icofont-double-right"></i>Product
                                Development
                              </Link>
                            </li>
                            <li>
                              <Link to={''}>
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
                            <Link to={"contact"}
                              className="btn btn-lg btn-default-alt icon-right"
                            >
                              Get Started <i className="icofont-double-right"></i>
                            </Link>
                          </div>
                        </div>

                        <div className="sidebar-widget-singel-item widget-box-bg">
                          <h4 className="title">popular tags</h4>
                          <ul className="widget-tags">
                            <li>
                              <Link to={''}>Agency</Link>
                            </li>
                            <li>
                              <Link to={''}>Company</Link>
                            </li>
                            <li>
                              <Link to={''}>Business</Link>
                            </li>
                            <li>
                              <Link to={''}>Startup</Link>
                            </li>
                            <li>
                              <Link to={''}>Marketing</Link>
                            </li>
                            <li>
                              <Link to={''}>Cleaner</Link>
                            </li>

                            <li>
                              <Link to={''}>Corporate</Link>
                            </li>
                            <li>
                              <Link to={''}>Brand</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="container-width-63">
                      <div className="blog-list-items">
                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-1.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Walter Houston</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                All of these amazing features come at an
                                affordable price!
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>03 April, 2022</span>
                              <span>10 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-2.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Patrick Bade</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                With WooLentor's drag-and drop interface for
                                creating
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>05 April, 2022</span>
                              <span>6 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Janet Harbin</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                Don't Waste Time! 6 Facts Until You Reach Your
                                Portfolio
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>11 April, 2022</span>
                              <span>13 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-4.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}> Jennifer Johnson</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                Make your store stand out from the others by
                                converting
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>12 April, 2022</span>
                              <span>08 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-5.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Phyllis Garcia</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                These Secrets Tips Will Make Your Portfolio Look
                                Amazing
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>17 April, 2022</span>
                              <span>09 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-6.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Mario Stitt</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                Take Advantage Of Portfolio - Read These 6 Tips
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>21 April, 2022</span>
                              <span>16 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-7.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Danielle Davis</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                Think About These 6 Ways To Change Your
                                Portfolio
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>23 April, 2022</span>
                              <span>11 min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="blog-list-single-item">
                          <Link to={"/blogD"} className="image">
                            <img
                              src="assets/images/blog/blog-list/blog-list-single-item-img-8.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="content">
                            <span className="author">
                              By<Link to={''}>Ermelinda Robison</Link>
                            </span>
                            <h5 className="title">
                              <Link to={"/blogD"}>
                                Enticing Ways To Improve Your Portfolio Skills
                              </Link>
                            </h5>
                            <p>
                              Lorem Ipsum is simply dummy text themes industry
                              orem epsum has been them industry also the loep
                              into type setting.
                            </p>

                            <div className="post-info">
                              <span>27 April, 2022</span>
                              <span>15 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="page-pagination">
                        <li className="active">
                          <Link to={''}>1</Link>
                        </li>
                        <li>
                          <Link to={''}>2</Link>
                        </li>
                        <li>
                          <Link to={''}>3</Link>
                        </li>
                        <li>
                          <Link to={''}>4</Link>
                        </li>
                        <li className="next">
                          <Link to={''}>
                            <i className="icofont-long-arrow-right"></i>
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
      </div>
      <SubscribeSection />
    </>
  );
};

export default function BlogList() {
  return (
    <PagesLayout pageTitle="Blog" breadCrumbTitle="blog">
      <BlogListContent />
    </PagesLayout>
  );
}
