import React from 'react';
import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';

const NotFoundContent = () => {
  return (
    <div className="error-section section-top-gap-150">
      <div className="box-wrapper">
        <div className="error-img-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="error-img">
                  <img
                    className="img-fluid"
                    src="assets/images/section-image/error-404.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="error-wrapper section-inner-padding-150 error-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <div className="faq-content text-center">
                  <h3 className="title">
                    Sorry, <span>page not found.</span>
                  </h3>
                  <p>
                    There are many variations of passages of lorem ipsum
                    available
                  </p>
                  <Link to={'/'} className="btn btn-lg btn-default icon-left">
                  <i className="icofont-double-left"></i>Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NotFound() {
  return (
    <PagesLayout pageTitle="Not Found" breadCrumbTitle="404_not_found">
      <NotFoundContent />
    </PagesLayout>
  );
}
