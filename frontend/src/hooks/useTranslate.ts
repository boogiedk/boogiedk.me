import { translations, Language } from "../i18n";

export function useTranslate(language: Language) {
    return function t(key: keyof typeof translations["en"]) {
        return translations[language][key];
    };
} 