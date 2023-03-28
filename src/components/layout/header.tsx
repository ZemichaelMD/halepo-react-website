import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MaterialScrollTopButton from '../materialScrollTopButton';
import OffCanvasMenu from './offCanvasMenu';

export default function Header() {
  return (
    <>
      <header className="header-section sticky-header d-none d-lg-block section-fluid-200">
        <div className="header-wrapper">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <Link to={'/'} className="header-logo">
                  <img src="assets/images/logo/logo.png" alt="" />
                </Link>
              </div>
              <div className="col-auto d-flex align-items-center">
                <ul className="header-nav">
                  <li>
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li className="has-dropdown">
                    <Link to={'/services'}>Service</Link>
                    <ul className="submenu">
                      <li>
                        <Link to={'/services'}>Services</Link>
                      </li>
                      <li>
                        <Link to={'/servicesD'}>Service Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={'/portfolio-list'}>Project</Link>
                    <ul className="submenu">
                      <li>
                        <Link to={'/portfolio-list'}>Project</Link>
                      </li>
                      <li>
                        <Link to={'/portfolioD'}>Project Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={'/'}>Pages</Link>
                    <ul className="submenu">
                      <li>
                        <Link to={'/about'}>About Us</Link>
                      </li>
                      <li>
                        <Link to={'/faq'}>FAQ</Link>
                      </li>
                      <li>
                        <Link to={'/not-found'}>404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <Link to={'/blog'}>Blogs</Link>
                    <ul className="submenu">
                      <li>
                        <Link to={'/blog'}>Blog List Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to={'/blog'}>Blog List Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to={'/blog'}>Blog List Full Width</Link>
                      </li>
                      <li>
                        <Link to={'/blogD'}>Blog Details Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to={'/blogD'}>Blog Details Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to={'/blogD'}>Blog Details Full Width</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-auto">
                <div className="header-btn-link">
                  <Link to={'/contact'} className="btn btn-lg btn-default">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header d-block d-lg-none">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="mobile-logo">
                <Link to={'/'}>
                  <img src="assets/images/logo/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <div className="mobile-action-link text-end">
                <Link data-bs-toggle="offcanvas" to={"#toggleMenu"} role="button">
                  <i className="icofont-navigation-menu"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OffCanvasMenu />
      <MaterialScrollTopButton />
    </>
  );
}
