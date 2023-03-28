import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';

const ServicesDetailContent = () => {
  return (
        <div className="service-details-section section-top-gap-150">
            <div className="box-wrapper">
                <div className="service-details-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="custome-container-with-sidebar d-flex flex-column-reverse flex-lg-row">
                                    <div className="container-width-37 sidebar-leftside">
                                        <div className="sidebar-wrapper">
                                            
                                            <div className="sidebar-widget-singel-item widget-box-bg gray-bg">
                                                <h4 className="title">Category</h4>
                                                <ul className="widget-catagory">
                                                    <li><Link to={""}> <i className="icofont-double-right"></i>Creative Solution</Link></li>
                                                    <li><Link to={""}> <i className="icofont-double-right"></i>Website Development</Link></li>
                                                    <li><Link to={""}> <i className="icofont-double-right"></i>Product Development</Link></li>
                                                    <li><Link to={""}> <i className="icofont-double-right"></i>Data Visualization</Link></li>
                                                </ul>
                                            </div>
                                            

                                            
                                            <div className="sidebar-widget-singel-item sidebar-banner">
                                                <div className="image text-center">
                                                    <img className="img-fluid" src="assets/images/background/banner-img-1.png" alt=""/>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <Link to={"contact"} className="btn btn-lg btn-default-alt icon-right">Get Started <i className="icofont-double-right"></i></Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="container-width-63">
                                        <div className="default-text-content">
                                            <div className="default-content-hero-image">
                                                <img className="img-fluid" src="assets/images/service/service-details-hero-img.jpg" alt=""/>
                                            </div>

                                            <h2 className="subtitle">Good digital marketer understand the importance
                                                of ever changing the guidelines.</h2>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesettng industry. Lorem psum has beenert
                                                industry's standard dummy text ever since the 1500s when an unknown prnters took and galley offer
                                                scrambled it to make a type specimen booked. It has survived not only five centuries and but
                                                into electronic typesetting and remaining essentially unchanged.
                                            </p>

                                            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting and industrys. Lorem Ipsume
                                                industry's standard dummy text ever since the 1500 when an unknown prnters took a galley offe
                                                scrambled it to make a type specimen booked.</strong></p>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesettng industry. Lorem psum has beenert
                                                industry's standard dummy text ever since the 1500s when an unknown prnters took and galley offer
                                                scrambled it to make a type specimen booked. It has survived not only five centuries and but
                                                into electronic typesetting and remaining essentially unchanged.</p>

                                            <ul className="default-iconic-item">
                                                <li>
                                                    <div className="icon">
                                                        <img src="assets/images/icons/promo/cyber-security.png" alt=""/>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="smalltitle">Secure & Private</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the prnting and typesetting
                                                            industrys standard dummy text ever since the 1500s when an unknown
                                                            scrambled to make type specimen booked.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <img src="assets/images/icons/promo/budget.png" alt=""/>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="smalltitle">Revenue Generation</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the prnting and typesetting
                                                            industrys standard dummy text ever since the 1500s when an unknown
                                                            scrambled to make type specimen booked.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <img src="assets/images/icons/promo/puzzle.png" alt=""/>
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="smalltitle">Business Collaboration</h4>
                                                        <p>Lorem Ipsum is simply dummy text of the prnting and typesetting
                                                            industrys standard dummy text ever since the 1500s when an unknown
                                                            scrambled to make type specimen booked.</p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting and industrys. Lorem Ipsume
                                                industry's standard dummy text ever since the 1500 when an unknown prnters took a galley offe
                                                scrambled it to make a type specimen booked.</strong></p>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesettng industry. Lorem psum has beenert
                                                industry's standard dummy text ever since the 1500s when an unknown prnters took and galley offer
                                                scrambled it to make a type specimen booked. It has survived not only five centuries and but
                                                into electronic typesetting and remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default function ServicesDetail() {
  return (
    <PagesLayout pageTitle="ServicesDetail" breadCrumbTitle="services_detail">
      <ServicesDetailContent />
    </PagesLayout>
  );
}
