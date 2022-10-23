import React from 'react';
import ServiceComponent from "./ServiceComponent";

function ServiceListComponent() {
    return (
        <div className="ServicesPage">
           <ServiceComponent 
               name="Student Assistant" 
               description="Student Assistant - this is a web service with an open source project. The created for a convenient and flexible way to monitor the study schedule." 
               serviceLink="http://localhost:54968"
               serviceLogo={"https://raw.githubusercontent.com/boogiedk/StudentAssistant/master/StudentAssistant.Frontend/ClientApp/public/icon.ico"}
               serviceState={1} />
            <ServiceComponent 
                name="AvaRaspberry"
                description="AvaRaspberry is cross platform desktop application which provide screen with helpful widgets."
                serviceLink="http://localhost:54900"
                serviceLogo={"https://raw.githubusercontent.com/boogiedk/AvaRaspberry/master/Resources/main-window.png"}
                serviceState={3} />
            <ServiceComponent 
                name="GGenerator" 
                description="GGenerator - tool for a generating GUID string with a flexible configuration and formatting." 
                serviceLink="http://localhost:54999" 
                serviceState={2} />
        </div>
    );
}

export default ServiceListComponent;
