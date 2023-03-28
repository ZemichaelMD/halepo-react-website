import { Link } from 'react-router-dom'

export default function ClientSupport() {
  return (
    <div className="content-display-section  section-top-gap-150 section-fluid-200">
        <div className="box-wrapper custom-box-wrapper pos-relative">
          <div className="content-inner-img content-inner-img-right">
            <img
              className="img-fluid"
              src="assets/images/section-image/section-image-2.png"
              alt=""
            />
          </div>
          <div className="section-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-12 pos-relative">
                  <div className="custom-section-content custom-section-content-left">
                    <div className="section-content section-content-gap-50 ">
                      <h6 className="section-tag tag-orange">
                        Client’s Support
                      </h6>
                      <h3 className="section-title">
                        You can get 100% support from our help desk.
                      </h3>
                    </div>
                    <p>
                      There are many variations passages available sheets but
                      majority have versions have year suffered alteration some
                      form humour.
                    </p>
                    <p>
                      There are many variations passages available sheets but
                      majority have versions have year suffered
                    </p>

                    <Link to={"contact"} className="btn btn-lg btn-default icon-right"
                    >
                      Get Started <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
