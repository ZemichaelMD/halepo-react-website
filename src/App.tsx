import './styles/App.sass';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound';
import About from './pages/about';
import Services from './pages/services';
import ServicesDetail from './pages/servicesDetail';
import Faq from './pages/faq';
import Contact from './pages/contact';
import PortfolioDetail from './pages/portfolioDetail';
import PortfolioList from './pages/portfolioList';
import BlogDetail from './pages/blogDetail';
import BlogList from './pages/blogList';

// import "../public/assets/js/vendor/modernizr-3.11.2.min.js"
// import "../public/assets/js/vendor/jquery-3.6.0.min.js"
// import "../public/assets/js/vendor/jquery-migrate-3.3.2.min.js"
// import "../public/assets/js/vendor/bootstrap.bundle.min.js"
// import "../public/assets/js/vendor/jquery-ui.min.js"

// // <!--Plugins JS-->
// import "../public/assets/js/plugins/swiper-bundle.min.js"
// import "../public/assets/js/plugins/jquery.waypoints.js"
// import "../public/assets/js/plugins/counter.js"
// import "../public/assets/js/plugins/images-loaded.min.js"
// import "../public/assets/js/plugins/isotope.pkgd.min.js"
// import "../public/assets/js/plugins/ajax-mail.js"
// import "../public/assets/js/plugins/material-scrolltop.js"

// // <!--Main JS (Common Activation Codes)-->
// import "../public/assets/js/main.js"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/servicesD" element={<ServicesDetail />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolioD" element={<PortfolioDetail />} />
      <Route path="/portfolio-list" element={<PortfolioList />} />
      <Route path="/blogD" element={<BlogDetail />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;