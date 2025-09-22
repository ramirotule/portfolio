import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'es', 
      name: 'Español',
      flag: '🇪🇸'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
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
        <FaGlobe style={{ marginRight: '8px', fontSize: '16px' }} />
        <span className="d-none d-md-inline">{currentLanguage.name}</span>
        <span className="d-md-none">{currentLanguage.flag}</span>
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
            <span style={{ marginRight: '10px', fontSize: '18px' }}>
              {language.flag}
            </span>
            <span>
              {language.name}
            </span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default LanguageSelector;