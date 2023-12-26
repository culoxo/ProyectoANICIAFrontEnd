import locale_es from "../i18n/locales/es.json";

export const locales = {
  'es': locale_es
};

export const languages = [{
    code: 'es',
    name: 'Castellano'
  }  
];

export const getLanguage = (locale) => {
  return languages.filter((language) => language.code === locale)[0];
};