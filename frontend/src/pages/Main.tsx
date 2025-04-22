import React from 'react';
import './Main.css';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslate } from '../hooks/useTranslate';

function Main() {
    const { language } = useLanguage();
    const t = useTranslate(language);

    return (
        <div className="MainPage">
            <div>
                <h1>{t('welcome')}</h1>
            </div>
        </div>
    );
}

export default Main;
