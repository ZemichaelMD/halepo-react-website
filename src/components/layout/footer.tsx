import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-section section-top-gap-0">
        <div className="box-wrapper">
            <div className="footer-top footer-top-style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-top-box">
                                <div className="footer-top-left">
                                    <div className="footer-single-widget footer-about">
                                    <Link to={'/'} className="footer-logo">
                                        <img src="assets/images/logo/logo-dark.png" alt=""/>
                                    </Link>
                                        <p>There are many variation popular sheet
                                            containing available have version software
                                            like available.</p>
                                        <address>Your address goes here.</address>
                                    </div>
                                </div>
                                <div className="footer-top-right">
                                    <div className="footer-single-widget footer-menu">
                                        <h5 className="footer-title">Company</h5>
                                        <ul className="footer-nav">
                                            <li><Link to={'about'}>About Us</Link></li>
                                            <li><Link to={'contact'}>Contact Us</Link></li>
                                            <li><Link to={''}>Print Ads</Link></li>
                                            <li><Link to={'faq'}>FAQ’s</Link></li>
                                            <li><Link to={''}>Careers</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-single-widget footer-menu">
                                        <h5 className="footer-title">Quick Links</h5>
                                        <ul className="footer-nav">
                                            <li><Link to={''}>Privacy Policy</Link></li>
                                            <li><Link to={''}>Discussion</Link></li>
                                            <li><Link to={''}>Terms & Conditions</Link></li>
                                            <li><Link to={''}> Customer Support</Link></li>
                                            <li><Link to={''}>Course FAQ’s</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-single-widget footer-menu">
                                        <h5 className="footer-title">Product</h5>
                                        <ul className="footer-nav">
                                            <li><Link to={''}>Presentation</Link></li>
                                            <li><Link to={''}>E-Books</Link></li>
                                            <li><Link to={''}>Management Tool</Link></li>
                                            <li><Link to={''}>Dashboard</Link></li>
                                            <li><Link to={''}>Event Organizer</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-center justify-content-md-between align-items-center">
                        <div className="col-auto">
                            <p className="copytight-text">&copy; 2022 Strane. Made with <i className="icofont-heart"></i> by <Link to={'https://hasthemes.com/'} target="_blank" rel="noopener noreferrer">HasThemes</Link></p>
                        </div>

                        <div className="col-auto">
                            <ul className="footer-bottom-link">
                                <li> <Link to={''}>Terms of Service </Link></li>
                                <li><Link to={''}>Privacy Policy</Link></li>
                                <li><Link to={''}>Sitemap</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}