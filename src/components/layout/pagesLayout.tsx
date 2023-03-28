import BreadcrumbSection from './breadcrumbSection';
import Footer from './footer';
import Header from './header';

export default function PagesLayout({ children, pageTitle, breadCrumbTitle }: {
  children: any;
  pageTitle: any;
  breadCrumbTitle: any;
}) {
  return (
    <>
      <Header />
      <BreadcrumbSection   title={pageTitle} breadcrumbTitle={breadCrumbTitle}/>
      {children}
      <Footer />
    </>
  );
}
