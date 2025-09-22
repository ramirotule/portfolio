import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdPalette } from "react-icons/md";
import Particle from "../Particle";
import { useThemeContext } from "../../context/ThemeContext.jsx";
import { useTranslation } from "react-i18next";

function Customize() {
  const { currentTheme, changeTheme, colorPalettes } = useThemeContext();
  const { t } = useTranslation();

  return (
    <Container fluid className="customize-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify", marginTop: "80px" }}>
                    {t('customize.customizeDescription')} <strong>{t('customize.availableOptions')}</strong>{t('customize.optionsDetail')}
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="customize-content">
            <h3 className="project-heading">
              <strong className="purple">{t('customize.colorPalettes')}</strong>
            </h3>
            <p style={{ color: "white" }}>
              {t('customize.selectFavorite')}
            </p>
            
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {Object.entries(colorPalettes).map(([key, palette]) => (
                <Col md={3} lg={3} xl={2} className="customize-card" key={key}>
                  <Card 
                    className={`customize-card-view ${currentTheme === key ? 'active-theme' : ''}`}
                    onClick={() => changeTheme(key)}
                    style={{ cursor: 'pointer', marginBottom: '20px' }}
                  >
                    <Card.Body>
                      <div className="logo-preview" style={{ marginBottom: '15px' }}>
                        <img 
                          src={palette.logo} 
                          alt={`${palette.name} logo`}
                          style={{ 
                            height: '40px', 
                            width: 'auto',
                            filter: currentTheme === key ? 'none' : 'grayscale(50%)'
                          }}
                        />
                      </div>
                      <div className="color-preview">
                        <div 
                          className="color-sample primary"
                          style={{ backgroundColor: palette.primary }}
                        ></div>
                        <div 
                          className="color-sample secondary"
                          style={{ backgroundColor: palette.secondary }}
                        ></div>
                        <div 
                          className="color-sample accent"
                          style={{ backgroundColor: palette.accent }}
                        ></div>
                      </div>
                      <h5 style={{ color: 'white', textAlign: 'center', marginTop: '15px' }}>
                        {palette.name}
                      </h5>
                      {currentTheme === key && (
                        <p style={{ color: palette.primary, textAlign: 'center', fontSize: '0.9em' }}>
                          <MdPalette /> {t('customize.active')}
                        </p>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
              <Col md={8}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9em' }}>
                    💡 <strong>{t('customize.tip')}</strong> {t('customize.tipDescription')}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Customize;
