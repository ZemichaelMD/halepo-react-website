import Footer from './footer';
import Header from './header';

const HomeLayout = ({ children }: {
  children: any;
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default HomeLayout