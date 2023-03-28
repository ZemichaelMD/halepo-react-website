import React from 'react'
import ContactFormSection from '../components/layout/contactFormSection';
import PagesLayout from '../components/layout/pagesLayout';



const FaqContent = () => {
  return (
    <div className="faq-section section-inner-padding-150 faq-inner-bg">
    <div className="box-wrapper">
        
        <div className="faq-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-12">
                        <div className="faq-accordian-style-1 accordion" id="accordion-1">
                            
                            <div className="accordian-single-item accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#demo-1">
                                        Do you know digital buying in house or third party?
                                    </button>
                                </h2>
                                <div id="demo-1" className="accordion-collapse collapse show" data-bs-parent="#accordion-1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing and typeseing industry lorem Ipsum has been the industry
                                        ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen
                                        only five centuries, but also the leap into electronic.
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="accordian-single-item accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#demo-2">
                                        In which advertising verticals/categories do you specialize?
                                    </button>
                                </h2>
                                <div id="demo-2" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing and typeseing industry lorem Ipsum has been the industry
                                        ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen
                                        only five centuries, but also the leap into electronic.
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="accordian-single-item accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#demo-3">
                                        What exactly do you mean by “white label”?
                                    </button>
                                </h2>
                                <div id="demo-3" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing and typeseing industry lorem Ipsum has been the industry
                                        ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen
                                        only five centuries, but also the leap into electronic.
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="accordian-single-item accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#demo-4">
                                        What if my clients have technical questions and need help?
                                    </button>
                                </h2>
                                <div id="demo-4" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing and typeseing industry lorem Ipsum has been the industry
                                        ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen
                                        only five centuries, but also the leap into electronic.
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="accordian-single-item accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#demo-5">
                                        Why should I work with Vici and not another digital provider?
                                    </button>
                                </h2>
                                <div id="demo-5" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                    <div className="accordion-body">
                                        Lorem Ipsum is simply dummy text of the printing and typeseing industry lorem Ipsum has been the industry
                                        ever since the 1500s, when an unknown printer took a galley of type and scirambled it to make a type specimen
                                        only five centuries, but also the leap into electronic.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}


export default function Faq() {
    return (
      <PagesLayout pageTitle="Frequently Asked Questions" breadCrumbTitle="faq">
        <FaqContent />
        <ContactFormSection/>
      </PagesLayout>
    );
  }