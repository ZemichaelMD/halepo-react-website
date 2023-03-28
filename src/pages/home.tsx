import React from 'react';
import HomeLayout from '../components/layout/homeLayout';
import BlogFeed from './sections/blogFeed';
import ClientSupport from './sections/clientSupport';
import CompanyLogos from './sections/companyLogos';
import Counts from './sections/counts';
import Hero from './sections/hero';
import Projects from './sections/projects';
import Promo from './sections/promo';
import Services from './sections/services';
import WhyUs from './sections/whyUs';

const HomeContent = () => {
  return (
    <>
      <Hero />
      <Counts />
      <Promo />
      <Services />
      <WhyUs />
      <ClientSupport />
      <Projects />
      <CompanyLogos />
      <BlogFeed />
    </>
  );
};

export default function Home() {
  return (
    <HomeLayout>
      <HomeContent />
    </HomeLayout>
  );
}
