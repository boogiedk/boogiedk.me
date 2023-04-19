import React from 'react';
import ServiceComponent from "./ServiceComponent";

function ServiceListComponent() {
    return (
        <div className="ServicesPage">
         <ServiceComponent 
             name={"Currency Chum"}
             serviceLink={"https://curchum.ru"}
             serviceState={1}
             description=
                 {"Currency Chum is a service for converting currencies of CIS countries. " +
                 "The peculiarity of the service is to store the conversion history, as well as use the last current exchange rate of a particular currency stored on the user's device in order to be able to convert the currency regardless of whether there is Internet access or not. " +
                     "The service uses the official API of the state central banks."}
         ></ServiceComponent>
        </div>
    );
}

export default ServiceListComponent;
