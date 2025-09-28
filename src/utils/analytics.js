import ReactGA from 'react-ga4';

// Tu Measurement ID de Google Analytics desde variables de entorno
const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-M6N3X257Y9';
const isDevelopment = import.meta.env.DEV || false;
const environment = import.meta.env.VITE_NODE_ENV || (isDevelopment ? 'development' : 'production');

// Inicializar Google Analytics
export const initGA = () => {
  if (!TRACKING_ID) {
    console.warn('Google Analytics Tracking ID not found');
    return;
  }
  
  // No inicializar GA en entornos de test
  if (environment === 'test') {
    console.log('Google Analytics deshabilitado en entorno de test');
    return;
  }
  
  ReactGA.initialize(TRACKING_ID, {
    debug: isDevelopment,
    testMode: environment === 'test',
    gaOptions: {
      site_speed_sample_rate: isDevelopment ? 100 : 10,
      anonymize_ip: true, // Cumplir con GDPR
    }
  });
  
  console.log(`Google Analytics inicializado con ID: ${TRACKING_ID} (${environment})`);
};

// Trackear page views
export const trackPageView = (page) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: page || window.location.pathname + window.location.search 
  });
  
  console.log(`Página rastreada: ${page || window.location.pathname}`);
};

// Trackear eventos personalizados
export const trackEvent = (eventName, parameters = {}) => {
  ReactGA.event(eventName, parameters);
  
  console.log(`Evento rastreado: ${eventName}`, parameters);
};

// Eventos específicos para tu portfolio
export const trackDownloadCV = () => {
  trackEvent('download_cv', {
    event_category: 'engagement',
    event_label: 'CV Download',
    value: 1
  });
};

export const trackContactForm = () => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form',
    value: 1
  });
};

export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    event_category: 'engagement',
    event_label: projectName,
    value: 1
  });
};

export const trackLanguageChange = (language) => {
  trackEvent('language_change', {
    event_category: 'user_preference',
    event_label: language,
    value: 1
  });
};

export const trackThemeChange = (theme) => {
  trackEvent('theme_change', {
    event_category: 'user_preference',
    event_label: theme,
    value: 1
  });
};