import { Col, Row } from "react-bootstrap";
import { useTheme } from "../../hooks/useTheme";
import ReactCountryFlag from "react-country-flag"
import { useTranslation } from "react-i18next";

function Languages() {
  const { getCurrentPalette } = useTheme();
  const { t } = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactCountryFlag countryCode="AR" svg style={{ fontSize: '2.5em', marginBottom: 6 }} title={t('about.languageSkills.spanish')} />
          <p className="tech-text">{t('about.languageSkills.spanish')}</p>
          <p style={{ fontSize: "1rem", color: getCurrentPalette().primary }}>{t('about.languageSkills.native')}</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactCountryFlag countryCode="GB" svg style={{ fontSize: '2.5em', marginBottom: 6 }} title={t('about.languageSkills.english')} />
          <p className="tech-text">{t('about.languageSkills.english')}</p>
          <p style={{ fontSize: "1rem", color: getCurrentPalette().primary }}>
            {t('about.languageSkills.upperIntermediate')}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Languages;
