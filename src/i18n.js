import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Carga las traducciones desde archivos
  .use(HttpApi)
  // Conecta con React
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    // Idioma por defecto
    fallbackLng: 'en',
    
    // Idiomas disponibles
    supportedLngs: ['en', 'es'],
    
    // Configuración de detección de idioma
    detection: {
      // Orden de detección de idioma
      order: [
        'localStorage',      // Primero busca en localStorage
        'navigator',         // Luego en configuración del navegador
        'htmlTag',          // Luego en el tag HTML
        'path',             // Luego en la URL
        'subdomain'         // Finalmente en subdominio
      ],
      
      // Cache en localStorage
      caches: ['localStorage'],
      
      // Clave para guardar en localStorage
      lookupLocalStorage: 'i18nextLng',
      
      // No detectar desde query string
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },

    // Configuración del backend para cargar archivos
    backend: {
      // Ruta donde están los archivos de traducción
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Configuración de React
    react: {
      // Suspense para carga asíncrona
      useSuspense: false,
    },

    // Configuración general
    interpolation: {
      // React ya escapa por defecto
      escapeValue: false,
    },

    // Debug en desarrollo
    debug: process.env.NODE_ENV === 'development',

    // Namespace por defecto
    defaultNS: 'translation',
    ns: ['translation'],

    // Configuración de carga
    load: 'languageOnly', // Solo 'en' no 'en-US'
    
    // Configuración de limpieza de código de idioma
    cleanCode: true,
  });

export default i18n;