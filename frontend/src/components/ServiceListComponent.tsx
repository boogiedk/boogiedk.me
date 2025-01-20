import React from 'react';
import ServiceComponent from "./ServiceComponent";

function ServiceListComponent() {
    return (
        <div className="ServicesPage">
         <ServiceComponent 
             name={"Currency Chum"}
             serviceLink={"https://curchum.ru"}
             serviceState={1}
             description = {"Currency Chum is a service for converting currencies of CIS countries. "}
             stack = {"Net Core 7, C#, React, Typescript"}
         ></ServiceComponent>
            <ServiceComponent
                name={"Serf bot"}
                serviceLink={"https://github.com/boogiedk/SerfBot"}
                serviceState={1}
                description = {"A personal assistant written in F#, predominantly used as a client to the Open AI Api (ChatGPT)."}
                stack = {"Net Core 8, F#"}
            ></ServiceComponent>
            <ServiceComponent
                name={"Where are you? (alpha)"}
                serviceLink={"https://boogiedk.me/services/where-are-you"}
                serviceState={3}
                description = {"Service that allows you to show where your friends are and when they will arrive for a meeting."}
                stack = {"Net Core 8, C#, React, Typescript"}
            ></ServiceComponent>
        </div>
    );
}

export default ServiceListComponent;
