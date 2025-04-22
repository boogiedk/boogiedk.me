import React from 'react';
import './About.css';
import {getWorkExperience, getYearsOld} from "../infrastructure/globalVariables";
import avatar from "../images/anonymous-avatar-icon.png"
import { useLanguage } from '../hooks/useLanguage';
import { useTranslate } from '../hooks/useTranslate';

function About() {
    const { language } = useLanguage();
    const t = useTranslate(language);

    return (
        <div className="container">
            <header>
                <div className="photo">
                    <img src={avatar} alt="Photo"/>
                    <div className="contacts">
                    <p>Telegram: <a href="https://t.me/boogiedk" target="_blank">@boogiedk</a></p>
                    <p>E-mail: boogiedkjob@gmail.com</p>
                    <p>Github: <a href="https://github.com/boogiedk" target="_blank">github.com/boogiedk</a></p>
                    </div>
                    </div>
                <div className="header-info">
                    <h1>Dmitry K.</h1>
                    <p>{t('softwareEngineer')}</p>
                    <br/>
                    <p><b>{t('age')}</b>: {getYearsOld()} {t('yearsOld')}</p>
                    <p><b>{t('location')}</b>: Russia, Moscow</p>
                <div className="description">
                    <p><b>{t('aboutMe')}</b></p>
                    <p>{t('developerDescription').replace('{years}', getWorkExperience().toString())}</p>
                    <p>{t('developerSkills')}</p>
                </div>
                </div>
            </header>

            <hr className={"hr-sections"}/>

            <section className="section">
                <div className="section-heading">
                    <h2 className="section-title">{t('experience')}</h2>
                </div>
                <ul>
                    <li>
                        <div>
                            <h3>{t('goldApple')}, {t('goldApplePeriod')}</h3>
                            <p><b>{t('location')}:</b> {t('goldAppleLocation')}</p>
                            <p><b>{t('domain')}:</b> {t('goldAppleDomain')}</p>
                            <p><b>{t('jobTitle')}:</b> {t('goldAppleRole')}</p>
                            <br/>
                            <p>{t('goldAppleDescription')}</p>
                        </div>
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <div>
                            <h3>{t('mtsDigital')}, {t('mtsDigitalPeriod')}</h3>
                            <p><b>{t('location')}:</b> {t('mtsDigitalLocation')}</p>
                            <p><b>{t('domain')}:</b> {t('mtsDigitalDomain')}</p>
                            <p><b>{t('jobTitle')}:</b> {t('mtsDigitalRole')}</p>
                            <br/>
                            <p>{t('mtsDigitalDescription')}</p>
                        </div>
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <h3>{t('topcase')}, {t('topcasePeriod')}</h3>
                        <p><b>{t('location')}:</b> {t('topcaseLocation')}</p>
                        <p><b>{t('domain')}:</b> {t('topcaseDomain')}</p>
                        <p><b>{t('jobTitle')}:</b> {t('topcaseRole')}</p>
                        <br/>
                        <p>{t('topcaseDescription')}</p>
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <h3>{t('iml')}, {t('imlPeriod')}</h3>
                        <p><b>{t('location')}:</b> {t('imlLocation')}</p>
                        <p><b>{t('domain')}:</b> {t('imlDomain')}</p>
                        <p><b>{t('jobTitle')}:</b> {t('imlRole')}</p>
                        <br/>
                        <p>{t('imlDescription')}</p>
                    </li>
                </ul>
            </section>

            <hr className={"hr-sections"}/>

            <div className="section">
                <h2>{t('education')}</h2>
                <ul>
                    <li>
                        <b>{t('degree')}:</b> {t('mastersDegree')}, {t('mastersPeriod')}<br/>
                        <b>{t('university')}:</b> {t('mastersUniversity')} <br/>
                        <b>{t('department')}:</b> {t('mastersDepartment')}
                    </li>
                    <hr className={"hr-experience"}/>
                    <li>
                        <b>{t('degree')}:</b> {t('bachelorsDegree')}, {t('bachelorsPeriod')}<br/>
                        <b>{t('university')}:</b> {t('bachelorsUniversity')} <br/>
                        <b>{t('department')}:</b> {t('bachelorsDepartment')}
                    </li>
                </ul>
            </div>

            <hr className={"hr-sections"}/>

            <section>
                <h2>{t('otherResources')}</h2>
                <ul>
                    <li>
                        <p>Habr: <a href="https://habr.com/ru/users/boogiedk" target="_blank">Dmitry K. @boogiedk</a></p>
                    </li>
                    <li>
                        <p>LeetCode: <a href="https://leetcode.com/boogiedk/" target="_blank">boogiedk</a></p>
                    </li>
                    <li>
                        <p>Linkedin: <a href="https://www.linkedin.com/in/dmitry-kulkin-a3640818b/" target="_blank">Dmitry K.</a></p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default About;
