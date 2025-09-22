import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useTranslation();
  return (
    <Container fluid className="footer" style={{ background: 'var(--section-background-color)' }}>
      <Row style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        background: 'var(--section-background-color)',
        margin: 0,
        padding: '20px 0'
      }}>
        <Col md="4" className="footer-copywright" style={{ textAlign: 'center' }}>
          <h3>{t('footer.designed')} {t('footer.rights')}</h3>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: 'center' }}>
          <h3>{t('footer.copyright')} {year} {t('footer.rights')}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
