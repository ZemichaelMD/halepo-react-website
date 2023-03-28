import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadcrumbSection({ title, breadcrumbTitle }: {
    title: any;
    breadcrumbTitle: any;
}) {
  return (
    <div className="breadcrumb-section">
      <div className="box-wrapper">
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h2 className="breadcrumb-title">{breadcrumbTitle}</h2>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link to={""}> Pages</Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
