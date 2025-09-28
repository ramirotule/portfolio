import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import { trackLanguageChange } from '../utils/analytics';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: 'English',
      abbreviation: 'EN',
      countryCode: 'GB'
    },
    {
      code: 'es', 
      name: 'Español',
      abbreviation: 'SP',
      countryCode: 'ES'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    // Trackear el cambio de idioma
    trackLanguageChange(languageCode === 'en' ? 'English' : 'Español');
  };

  return (
    <div className="language-selector">
      <Dropdown>
      <Dropdown.Toggle
        variant="outline-light"
        id="language-dropdown"
        className="d-flex align-items-center"
        style={{
          padding: '6px 12px',
          fontSize: '14px',
          borderRadius: '6px'
        }}
      >
        <FaGlobe className="d-none d-md-inline" style={{ marginRight: '8px', fontSize: '16px' }} />
        <span className="d-none d-md-inline">{currentLanguage.name}</span>
        <ReactCountryFlag 
          countryCode={currentLanguage.countryCode} 
          svg 
          className="d-md-none"
          style={{ fontSize: '1.2em' }}
          title={currentLanguage.name}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          borderRadius: '8px',
          padding: '6px 0',
          minWidth: '140px',
          maxWidth: '170px'
        }}
      >
        {languages.map((language) => (
          <Dropdown.Item
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            active={i18n.language === language.code}
            style={{
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              border: 'none',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              margin: '2px 6px',
              borderRadius: '3px'
            }}
          >
            <ReactCountryFlag 
              countryCode={language.countryCode} 
              svg 
              style={{ 
                marginRight: '10px',
                fontSize: '1.2em'
              }}
              title={language.name}
            />
            <span className="d-none d-md-inline">
              {language.name}
            </span>
            <span className="d-md-none">
              {language.abbreviation}
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default LanguageSelector;