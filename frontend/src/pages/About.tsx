import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container">
            <header>
                <div className="photo">
                    <img src="https://via.placeholder.com/150" alt="Photo"/>
                    <div className="contacts">
                    <p>Telegram: <a href="https://t.me/boogiedk" target="_blank">@boogiedk</a></p>
                    <p>E-mail: boogiedkjob@gmail.com</p>
                    <p>Github: <a href="https://github.com/boogiedk" target="_blank">github.com/boogiedk</a></p>
                    </div>
                    </div>
                <div className="header-info">
                    <h1>Dmitry K.</h1>
                    <p>Software Engineer</p>
                    <br/>
                    <p><b>Age</b>: 25 years old</p>
                    <p><b>Location</b>: Russia, Moscow</p>
                <div className="description">
                    <p><b>About me:</b></p>
                   <p>I’m a software developer with 4+ years of experience in commercial software development.
                  Microservices, SRE, build application architecture and web application development.</p>
                </div>
                </div>
            </header>

            <hr className={"hr-sections"}/>

            <section className="section">
                <div className="section-heading">
                    <h2 className="section-title">Experience</h2>
                </div>
                <ul>
                    <li>
                        <div>
                            <h3>MTS Digital, September 2021 until now</h3>
                            <p><b>Location:</b> Russia, Moscow, moskva.mts.ru/</p>
                            <p><b>Domain:</b> Information technology, systems integration, internet</p>
                            <p><b>Job title:</b> Senior Backend Developer</p>
                            <br/>
                            <p>Served as a lead backend developer in the MasterHub team, where we created an information system for subscribing to our own MTS services and partner services such as Spotify, Youtube, Tinder, and OZON. The project consisted entirely of microservices (about 30) on Net Core 3.1 - Net 5.0. My contributions included implementing features such as basic authentication for sending notifications to partners, developing mutually exclusive groups for the convergent service,
                                and
                                optimizing SQL queries in Dapper. Additionally, I resolved technical debt, conducted deadlock investigations, and launched a device installment purchase service. Our technology stack includes ELK, Docker, K8S, RabbitMQ, MS SQL, and Dapper.</p>
                        </div>
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <h3>TOPCASE, October 2019 to August 2021</h3>
                        <p><b>Location:</b> Russia, Moscow, www.itopcase.ru/</p>
                        <p><b>Domain:</b> Systems integration, automation of technological and business processes of enterprises, IT consulting</p>
                        <p><b>Job title:</b> Middle FullStack Developer</p>
                        <br/>
                        <p>Worked on the Supplier Portal project aimed at automating the activities of participants in the placement of state orders and certain categories of legal entities and individuals in concluding transactions. The project was built using .Net Core 2.2 - 3.1, Ef Core/NHibernate, React + Typescript, Hangfire, MS SQL, ElasticSearch, and RabbitMQ/MassTransit. My tasks included creating functionality for administrators and moderators of the portal, and I made significant
                            contributions to the Integration Journal development. From March 2020, I worked remotely.</p>
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <h3>IML, July 2018 to Febrary 2019</h3>
                        <p><b>Location:</b> Russia, Moscow, iml.ru/</p>
                        <p><b>Domain:</b> Transportation, logistics, warehouse, foreign economic activity, Courier, postal delivery</p>
                        <p><b>Job title:</b> Junior Fullstack Developer</p>
                        <br/>
                        <p>Developed and implemented new functionality for the fiscalization service and made contributions to the courier workplace project. Also briefly worked with WebForms, maintained the mobile application written in Java, and developed and optimized internal API services.</p>
                    </li>
                </ul>
            </section>

            <hr className={"hr-sections"}/>

            <div className="section">
                <h2>Education</h2>
                <ul>
                    <li>
                        <b>Degree:</b> Master's degree in Information Systems and Technologies, 2020-2022<br/>
                        <b>University:</b> Russian Technological University, Moscow <br/>
                        <b>Departament:</b> Institute of Complex Security and Special Instrumentation
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <b>Degree:</b> Bachelor's degree in Information Security, 2016-2020<br/>
                       <b>University:</b> Russian Technological University, Moscow <br/>
                       <b>Departament:</b> Institute of Complex Security and Special Instrumentation
                    </li>
                </ul>
            </div>

            <hr className={"hr-sections"}/>

            <section>
                <h2>Other resources</h2>
                <ul>
                    <li>
                        <p>Habr: <a href="https://habr.com/ru/users/boogiedk" target="_blank">Dmitry K. @boogiedk</a></p>
                    </li>
                    <li>
                        <p>LeetCode: <a href="https://leetcode.com/" target="_blank">boogiedk</a></p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default About;
