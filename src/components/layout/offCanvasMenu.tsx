import { Link } from 'react-router-dom';

export default function OffCanvasMenu() {
  return (
    <>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="toggleMenu">
        <div className="offcanvas-header">
          <Link to={'/'} className="header-logo">
            <img src="assets/images/logo/logo.png" alt="" />
          </Link>

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-mobile-menu-wrapper">
            <div className="mobile-menu-bottom">
              <div className="offcanvas-menu">
                <ul>
                  <li>
                  <Link to={'/'} >
                    <span>Home</span>
                  </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span>Services</span>
                    </Link>
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to={"service-list"}>Service List</Link>
                      </li>
                      <li>
                        <Link to={"/servicesD"}>Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span>Portfolio</span>
                    </Link>
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to={"portfolio-list"}>Portfolio</Link>
                      </li>
                      <li>
                        <Link to={"portfolio-details"}>Portfolio Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span>Pages</span>
                    </Link>
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to={"about"}>
                          <span>About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"faq"}>FAQ</Link>
                      </li>
                      <li>
                        <Link to={"404-error"}>404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <span>Blogs</span>
                    </Link>
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to={"blog-list-left-sidebar"}>
                          Blog List Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blog-list-right-sidebar"}>
                          Blog List Right Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blog-list-full-width"}>
                          Blog List Full Width
                        </Link>
                      </li>
                      <li>
                        <Link to={"blog-details-left-sidebar"}>
                          Blog Details Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blog-details-right-sidebar"}>
                          Blog Details Right Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={"blog-details-full-width"}>
                          Blog Details Full Width
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"contact"}>
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mobile-contact-info text-center">
              <ul className="social-link">
                <li>
                  <Link to={"https://example.com"}>
                    <i className="icofont-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to={"https://example.com"}>
                    <i className="icofont-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to={"https://example.com"}>
                    <i className="icofont-skype"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay"></div>
    </>
  );
}
