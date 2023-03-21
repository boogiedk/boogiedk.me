import React from 'react';
import './Services.css';
import ServiceListComponent from "../components/ServiceListComponent";

function Services() {
  return (
      <div className="ServicesPage">
          <div>
              <h1>Services</h1>
          </div>
      <div>
          <ServiceListComponent />
      </div>
      </div>
  );
}

export default Services;
