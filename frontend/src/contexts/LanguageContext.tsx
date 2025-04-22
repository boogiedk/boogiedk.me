import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => {},
});

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const saved = localStorage.getItem("lang") as Language;
        if (saved === "en" || saved === "ru") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}; 