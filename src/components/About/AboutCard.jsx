import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { getCurrentPalette } = useTheme();
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about.description1')}{" "}
            <span className="purple">{t('about.name')} </span>
            {t('about.location').split('ARGENTINA')[0]}<span className="purple">ARGENTINA.</span>
            <br />
            {t('about.description2')}
            <br />
            {t('about.description3')}
            <br />
            <br />
            {t('about.description4').split('Temperies')[0]}
            <a 
              href="https://www.temperies.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: getCurrentPalette().primary, textDecoration: 'none' }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Temperies
            </a>
            {t('about.description4').includes('.') ? '.' : ''}
            <br />
            <br />
            {t('about.activities')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity1')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity2')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about.activity3')}
            </li>
          </ul>

          <p style={{ color: getCurrentPalette().accent }}>
            {t('about.quote')}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
