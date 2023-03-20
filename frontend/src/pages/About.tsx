import React from 'react';
import './About.css';

function About() {
    return (
        <div className="container">
            <header>
                <div className="photo">
                    <img src="https://via.placeholder.com/150" alt="Фото"/>
                </div>
                <div className="header-info">
                    <h1>Kulkin Dmitry</h1>
                    <p>Software Developer</p>
                    <p>Tg: @boogiedk</p>
                    <p>Email: boogiedkjob@gmail.com</p>
                </div>
            </header>

            <hr/>
            
                <section className="section">
                    <div className="section-heading">
                        <h2 className="section-title">Experience</h2>
                    </div>
                    <ul>
                        <li>
                            <h3>MTS Digital</h3>
                            <p>Moscow, moskva.mts.ru/</p>
                            <p>Information technology, systems integration, internet</p>
                            <p>Development of software</p>
                            <p>Middle Backend .Net Developer</p>
                            <p>Served as a lead backend developer in the MasterHub team, where we created an information system for subscribing to our own MTS services and partner services such as Spotify, Youtube, Tinder, and OZON. The project consisted entirely of microservices (about 30) on Net Core 3.1 - Net 5.0. My contributions included implementing features such as basic authentication for sending notifications to partners, developing mutually exclusive groups for the convergent service, and optimizing SQL queries in Dapper. Additionally, I resolved technical debt, conducted deadlock investigations, and launched a device installment purchase service. Our technology stack includes ELK, Docker, K8S, RabbitMQ, MS SQL, and Dapper.</p>
                        </li>
                        <li>
                            <h3>TOPCASE</h3>
                            <p>Moscow, www.itopcase.ru/</p>
                            <p>Information technology, systems integration, internet</p>
                            <p>Systems integration, automation of technological and business processes of enterprises, IT consulting</p>
                            <p>Middle FullStack .Net Developer</p>
                            <p>Worked on the Supplier Portal project aimed at automating the activities of participants in the placement of state orders and certain categories of legal entities and individuals in concluding transactions. The project was built using .Net Core 2.2 - 3.1, Ef Core/NHibernate, React + Typescript, Hangfire, MS SQL, ElasticSearch, and RabbitMQ/MassTransit. My tasks included creating functionality for administrators and moderators of the portal, and I made significant contributions to the Integration Journal development. From March 2020, I worked remotely.</p>
                        </li>
                        <li>
                            <h3>IML</h3>
                            <p>Moscow, iml.ru/</p>
                            <p>Transportation, logistics, warehouse, foreign economic activity</p>
                            <p>Courier, postal delivery</p>
                            <p>Junior .Net Developer</p>
                            <p>Developed and implemented new functionality for the fiscalization service and made contributions to the courier workplace project. Also briefly worked with WebForms, maintained the mobile application written in Java, and developed and optimized internal API services. From March 2020, I worked remotely.</p>
                        </li>
                    </ul>
                </section>

            <hr/>

            <section>
                <h2>Skills</h2>
                <ul>
                    <li>.NET Core 2.2 - 3.1</li>
                    <li>Entity Framework Core/NHibernate</li>
                    <li>React + Typescript</li>
                    <li>Dapper</li>
                    <li>MS SQL</li>
                    <li>ElasticSearch</li>
                    <li>RabbitMQ/MassTransit</li>
                    <li>Docker/K8S</li>
                    <li>ELK</li>
                    <li>SignalR</li>
                </ul>
            </section>

            <hr/>

            <div className="section">
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Master's degree in Information Systems and Technologies</strong><br/>
                        Russian Technological University, Moscow (2022)<br/>
                        Institute of Complex Security and Special Instrumentation
                    </li>
                    <li>
                        <strong>Bachelor's degree in Information Security</strong><br/>
                        Russian Technological University, Moscow (2020)<br/>
                        Institute of Complex Security and Special Instrumentation
                    </li>
                </ul>
            </div>

            <hr/>

            <section>
                <h2>Contacts</h2>
                <ul>
                    <li>
                        <p>Telegram: @boogiedk</p>
                    </li>
                    <li>
                        <p>Email: boogiedkjob@gmail.com</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default About;
