import { Link } from 'react-router-dom';
import PagesLayout from '../components/layout/pagesLayout';
import SubscribeSection from '../components/layout/subscribeSection';

const PortfolioListContent = () => {
  return (
    <>
      <div className="project-section section-top-gap-150">
            <div className="box-wrapper">
                <div className="project-filter-wrapper section-fluid-170">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="projects-gallery-filter-nav">
                                    <button className="btn active" data-filter="*">All</button>
                                    <button className="btn" data-filter="">Branding</button>
                                    <button className="btn" data-filter=".wordpress">Marketing</button>
                                    <button className="btn" data-filter=".shopify">Corporate</button>
                                    <button className="btn" data-filter=".seo">Agency</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-item-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-items mb-n25">
                                    <div className="row">
                                        
                                        <div className="col-xl-6 col-md-6 mb-25 filter-item html">
                                            <Link to={"/portfolioD"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-wide-1.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-6 col-md-6 mb-25 filter-item wordpress">
                                            <Link to={"/portfolioD"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-wide-2.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-4 col-md-6 mb-25 filter-item shopify">
                                            <Link to={"/portfolioD"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-square-1.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-4 col-md-6 mb-25 filter-item seo">
                                            <Link to={"/portfolioD"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-square-2.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-4 col-md-6 mb-25 filter-item html">
                                            <Link to={"portfolio-details"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-square-3.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-6 col-md-6 mb-25 filter-item wordpress">
                                            <Link to={"portfolio-details"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-wide-3.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        
                                        <div className="col-xl-6 col-md-6 mb-25 filter-item shopify">
                                            <Link to={"portfolio-details"} className="project-single-item">
                                                <div className="image img-responsive"><img src="assets/images/projects/project-wide-2.jpg" alt=""/></div>
                                                <div className="content">
                                                    <div className="inner">
                                                        <div className="text">
                                                            <h4 className="title">Brand Identity</h4>
                                                            <span className="catagory">Brand, Product</span>
                                                        </div>
                                                        <div className="icon"><img className="img-fluid" src="assets/images/icons/right-arrow-white.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        

                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to={"portfolio-list"} className="btn btn-lg btn-default btn-section-bottom">Other’s
                                        Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <SubscribeSection/>
    </>
  );
};

export default function PortfolioList() {
  return (
    <PagesLayout pageTitle="Portfolio" breadCrumbTitle="portfolio">
      <PortfolioListContent />
    </PagesLayout>
  );
}
