import React from 'react';
import { Link } from 'react-router-dom';
import ContactFormSection from '../components/layout/contactFormSection';
import MapSection from '../components/layout/mapSection';
import PagesLayout from '../components/layout/pagesLayout';

const ContactContent = () => {
  return (
    <>
      <div className="contact-info-section section-inner-padding-150 section-inner-bg">
        <div className="box-wrapper">
          <div className="contact-box-info-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1 col-12">
                  <ul className="contact-box-info-items">
                    <li className="contact-box-info-single-item">
                      <h4 className="title">Head Quater:</h4>
                      <div className="contact-box-info-text">
                        <Link className="contact-box-info-text-single"
                          to={"tel:+0123456789"}
                        >
                          <span className="icon">
                            <i className="icofont-phone"></i>
                          </span>
                          <p>+(012) 345 6789</p>
                        </Link>
                        <Link className="contact-box-info-text-single"
                          to={"mailto:demo@example.com"}
                        >
                          <span className="icon">
                            <i className="icofont-envelope-open"></i>
                          </span>
                          <p>demo@example.com</p>
                        </Link>
                        <address className="contact-box-info-text-single">
                          <span className="icon">
                            <i className="icofont-location-pin"></i>
                          </span>
                          <p>Your address goes here.</p>
                        </address>
                      </div>
                    </li>

                    <li className="contact-box-info-single-item">
                      <h4 className="title">Branch-1</h4>
                      <div className="contact-box-info-text">
                        <Link className="contact-box-info-text-single"
                          to={"tel:+0123456789"}
                        >
                          <span className="icon">
                            <i className="icofont-phone"></i>
                          </span>
                          <p>+(012) 345 6789</p>
                        </Link>
                        <Link className="contact-box-info-text-single"
                          to={"mailto:demo@example.com"}
                        >
                          <span className="icon">
                            <i className="icofont-envelope-open"></i>
                          </span>
                          <p>demo@example.com</p>
                        </Link>
                        <address className="contact-box-info-text-single">
                          <span className="icon">
                            <i className="icofont-location-pin"></i>
                          </span>
                          <p>Your address goes here.</p>
                        </address>
                      </div>
                    </li>

                    <li className="contact-box-info-single-item">
                      <h4 className="title">Branch-2</h4>
                      <div className="contact-box-info-text">
                        <Link className="contact-box-info-text-single"
                          to={"tel:+0123456789"}
                        >
                          <span className="icon">
                            <i className="icofont-phone"></i>
                          </span>
                          <p>+(012) 345 6789</p>
                        </Link>
                        <Link className="contact-box-info-text-single"
                          to={"mailto:demo@example.com"}
                        >
                          <span className="icon">
                            <i className="icofont-envelope-open"></i>
                          </span>
                          <p>demo@example.com</p>
                        </Link>
                        <address className="contact-box-info-text-single">
                          <span className="icon">
                            <i className="icofont-location-pin"></i>
                          </span>
                          <p>Your address goes here.</p>
                        </address>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection />
      <MapSection />
    </>
  );
};

export default function Contact() {
  return (
    <PagesLayout pageTitle="Contact Us" breadCrumbTitle="contact">
      <ContactContent />
    </PagesLayout>
  );
}
