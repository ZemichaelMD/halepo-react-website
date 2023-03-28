import React from 'react';

export default function MapSection({ title, breadcrumbTitle }: {
  title?: any;
  breadcrumbTitle?: any;
}) {
  return (
    <div className="map-section">
      <div className="box-wrapper">
        <div className="map-wrapper">
          <div className="gmap-box">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
