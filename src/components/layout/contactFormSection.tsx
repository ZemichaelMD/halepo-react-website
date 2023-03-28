import React from 'react';

export default function ContactFormSection({ title, breadcrumbTitle }: {
  title?: any;
  breadcrumbTitle?: any;
}) {
  return (
    <div className="form-section section-inner-padding-150">
      <div className="box-wrapper">
        <div className="section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="section-content section-content-gap-80 text-center">
                  <h6 className="section-tag tag-orange">Drop Question</h6>
                  <h3 className="section-title">Asked question & Get answer</h3>
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
        <div className="contact-form-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1 col-12">
                <form
                  id="contact-form"
                  className="default-form"
                  action="http://whizthemes.com/mail-php/jaber/contact.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-20">
                      <div className="default-form-single-item">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="default-form-single-item">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="default-form-single-item">
                        <input
                          name="tel"
                          type="tel"
                          placeholder="Phone No."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="default-form-single-item">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-single-item">
                        <textarea
                          name="message"
                          placeholder="Write a message..."
                          rows={10}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-lg btn-default icon-right submit-btn"
                      >
                        Submit Now <i className="icofont-double-right"></i>
                      </button>
                    </div>
                    <p className="form-messege"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
