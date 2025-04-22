export type Language = "en" | "ru";

interface Translations {
    about: string;
    experience: string;
    education: string;
    contact: string;
    home: string;
    services: string;
    welcome: string;
    age: string;
    location: string;
    yearsOld: string;
    yearsExperience: string;
    aboutMe: string;
    otherResources: string;
    whereAreYou: string;
    createMeet: string;
    joinMeet: string;
    softwareEngineer: string;
    mtsDigital: string;
    mtsDigitalPeriod: string;
    mtsDigitalLocation: string;
    mtsDigitalDomain: string;
    mtsDigitalRole: string;
    mtsDigitalDescription: string;
    topcase: string;
    topcasePeriod: string;
    topcaseLocation: string;
    topcaseDomain: string;
    topcaseRole: string;
    topcaseDescription: string;
    iml: string;
    imlPeriod: string;
    imlLocation: string;
    imlDomain: string;
    imlRole: string;
    imlDescription: string;
    mastersDegree: string;
    mastersPeriod: string;
    mastersUniversity: string;
    mastersDepartment: string;
    bachelorsDegree: string;
    bachelorsPeriod: string;
    bachelorsUniversity: string;
    bachelorsDepartment: string;
    domain: string;
    jobTitle: string;
    degree: string;
    university: string;
    department: string;
    developerDescription: string;
    developerSkills: string;
    switchToDarkMode: string;
    switchToLightMode: string;
    goldApple: string;
    goldApplePeriod: string;
    goldAppleLocation: string;
    goldAppleDomain: string;
    goldAppleRole: string;
    goldAppleDescription: string;
}

const translations: Record<Language, Translations> = {
    en: {
        about: "About Me",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        home: "Home",
        services: "Services",
        welcome: "Welcome!",
        age: "Age",
        location: "Location",
        yearsOld: "years old",
        yearsExperience: "years of experience",
        aboutMe: "About me:",
        otherResources: "Other resources",
        whereAreYou: "Where are you?",
        createMeet: "Create meet",
        joinMeet: "Join meet",
        softwareEngineer: "Software Engineer",
        mtsDigital: "MTS Digital",
        mtsDigitalPeriod: "September 2021 to December 2024",
        mtsDigitalLocation: "Russia, Moscow, moskva.mts.ru/",
        mtsDigitalDomain: "Information technology, systems integration, internet",
        mtsDigitalRole: "Senior Backend Developer",
        mtsDigitalDescription: "I worked on subscription service for MTS, integrating with partners like Spotify, YouTube, and Tinder, and developed core backend functionalities using a microservices architecture (.Net Core, Kafka, RabbitMQ, MSSQL/PostgreSQL). My work included implementing new features, optimizing database performance, and integrating with external systems to enhance the platform's capabilities. Later, as a Tech Lead/CTO, I led a team of 15 developers, managed migrations to cloud infrastructure, improved system observability, addressed technical debt, planned releases, and ensured the product's readiness for technical reviews and operational support.",
        topcase: "TOPCASE",
        topcasePeriod: "October 2019 to August 2021",
        topcaseLocation: "Russia, Moscow, www.itopcase.ru/",
        topcaseDomain: "Systems integration, automation of technological and business processes of enterprises, IT consulting",
        topcaseRole: "Middle FullStack Developer",
        topcaseDescription: "Worked on the Supplier Portal project aimed at automating the activities of participants in the placement of state orders and certain categories of legal entities and individuals in concluding transactions. The project was built using .Net Core 2.2 - 3.1, Ef Core/NHibernate, React + Typescript, Hangfire, MS SQL, ElasticSearch, and RabbitMQ/MassTransit. My tasks included creating functionality for administrators and moderators of the portal, and I made significant contributions to the Integration Journal development. From March 2020, I worked remotely.",
        iml: "IML",
        imlPeriod: "July 2018 to February 2019",
        imlLocation: "Russia, Moscow, iml.ru/",
        imlDomain: "Transportation, logistics, warehouse, foreign economic activity, Courier, postal delivery",
        imlRole: "Junior Fullstack Developer",
        imlDescription: "Developed and implemented new functionality for the fiscalization service and made contributions to the courier workplace project. Also briefly worked with WebForms, maintained the mobile application written in Java, and developed and optimized internal API services.",
        mastersDegree: "Master's degree in Information Systems and Technologies",
        mastersPeriod: "2020-2022",
        mastersUniversity: "Russian Technological University, Moscow",
        mastersDepartment: "Institute of Complex Security and Special Instrumentation",
        bachelorsDegree: "Bachelor's degree in Information Security",
        bachelorsPeriod: "2016-2020",
        bachelorsUniversity: "Russian Technological University, Moscow",
        bachelorsDepartment: "Institute of Complex Security and Special Instrumentation",
        domain: "Domain",
        jobTitle: "Job title",
        degree: "Degree",
        university: "University",
        department: "Department",
        developerDescription: "I'm a software developer with {years}+ years of experience in commercial software development.",
        developerSkills: "Microservices, SRE, build application architecture and web application development.",
        switchToDarkMode: "Switch to dark mode",
        switchToLightMode: "Switch to light mode",
        goldApple: "Gold Apple",
        goldApplePeriod: "February 2025 until now",
        goldAppleLocation: "Russia, Moscow, goldapple.ru",
        goldAppleDomain: "Perfumery Store, Beauty marketplace",
        goldAppleRole: ".Net Backend Developer",
        goldAppleDescription: "Working in the cart-checkout team, developing and maintaining backend services for the beauty marketplace platform."
    },
    ru: {
        about: "Обо мне",
        experience: "Опыт работы",
        education: "Образование",
        contact: "Контакты",
        home: "Главная",
        services: "Услуги",
        welcome: "Добро пожаловать!",
        age: "Возраст",
        location: "Местоположение",
        yearsOld: "лет",
        yearsExperience: "лет опыта",
        aboutMe: "Обо мне:",
        otherResources: "Другие ресурсы",
        whereAreYou: "Ты где?",
        createMeet: "Создать встречу",
        joinMeet: "Присоединиться к встрече",
        softwareEngineer: "Инженер-программист",
        mtsDigital: "МТС Диджитал",
        mtsDigitalPeriod: "Сентябрь 2021 - Декабрь 2024",
        mtsDigitalLocation: "Россия, Москва, moskva.mts.ru/",
        mtsDigitalDomain: "Информационные технологии, системная интеграция, интернет",
        mtsDigitalRole: "Старший Backend-разработчик",
        mtsDigitalDescription: "Работал над сервисом подписок МТС, интегрируясь с партнерами, такими как Spotify, YouTube и Tinder, и разрабатывал основные backend-функции, используя микросервисную архитектуру (.Net Core, Kafka, RabbitMQ, MSSQL/PostgreSQL). Моя работа включала реализацию новых функций, оптимизацию производительности базы данных и интеграцию с внешними системами для расширения возможностей платформы. Позже, в качестве Tech Lead/CTO, я руководил командой из 15 разработчиков, управлял миграцией в облачную инфраструктуру, улучшал наблюдаемость системы, решал проблемы технического долга, планировал релизы и обеспечивал готовность продукта к техническим проверкам и операционной поддержке.",
        topcase: "ТОПКЕЙС",
        topcasePeriod: "Октябрь 2019 - Август 2021",
        topcaseLocation: "Россия, Москва, www.itopcase.ru/",
        topcaseDomain: "Системная интеграция, автоматизация технологических и бизнес-процессов предприятий, ИТ-консалтинг",
        topcaseRole: "Middle FullStack-разработчик",
        topcaseDescription: "Работал над проектом Портал Поставщиков, направленным на автоматизацию деятельности участников размещения госзаказов и определенных категорий юридических лиц и физических лиц при заключении сделок. Проект был построен с использованием .Net Core 2.2 - 3.1, Ef Core/NHibernate, React + Typescript, Hangfire, MS SQL, ElasticSearch и RabbitMQ/MassTransit. Мои задачи включали создание функциональности для администраторов и модераторов портала, и я внес значительный вклад в разработку Журнала Интеграции. С марта 2020 года работал удаленно.",
        iml: "ИМЛ",
        imlPeriod: "Июль 2018 - Февраль 2019",
        imlLocation: "Россия, Москва, iml.ru/",
        imlDomain: "Транспорт, логистика, склад, внешнеэкономическая деятельность, Курьерская, почтовая доставка",
        imlRole: "Junior Fullstack-разработчик",
        imlDescription: "Разрабатывал и внедрял новую функциональность для сервиса фискализации и вносил вклад в проект рабочего места курьера. Также кратко работал с WebForms, поддерживал мобильное приложение на Java и разрабатывал и оптимизировал внутренние API-сервисы.",
        mastersDegree: "Магистр информационных систем и технологий",
        mastersPeriod: "2020-2022",
        mastersUniversity: "Российский технологический университет, Москва",
        mastersDepartment: "Институт комплексной безопасности и специального приборостроения",
        bachelorsDegree: "Бакалавр информационной безопасности",
        bachelorsPeriod: "2016-2020",
        bachelorsUniversity: "Российский технологический университет, Москва",
        bachelorsDepartment: "Институт комплексной безопасности и специального приборостроения",
        domain: "Сфера деятельности",
        jobTitle: "Должность",
        degree: "Степень",
        university: "Университет",
        department: "Факультет",
        developerDescription: "Я разработчик программного обеспечения с {years}+ годами опыта в коммерческой разработке.",
        developerSkills: "Микросервисы, SRE, построение архитектуры приложений и разработка веб-приложений.",
        switchToDarkMode: "Переключить на темную тему",
        switchToLightMode: "Переключить на светлую тему",
        goldApple: "Золотое Яблоко",
        goldApplePeriod: "Февраль 2025 по настоящее время",
        goldAppleLocation: "Россия, Москва, goldapple.ru",
        goldAppleDomain: "Парфюмерный магазин, маркетплейс beauty-товаров",
        goldAppleRole: ".Net Backend-разработчик",
        goldAppleDescription: "Работаю в команде cart-checkout, разрабатываю и поддерживаю backend-сервисы для маркетплейса бьюти товаров."
    }
};

export { translations }; 