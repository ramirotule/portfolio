import { Col, Row } from "react-bootstrap";
import { useTheme } from "../../hooks/useTheme";
import ReactCountryFlag from "react-country-flag"


function Languages() {
  const { getCurrentPalette } = useTheme();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactCountryFlag countryCode="AR" svg style={{ fontSize: '2.5em', marginBottom: 6 }} title="Spanish" />
          <p className="tech-text">Spanish</p>
          <p style={{ fontSize: "1rem", color: getCurrentPalette().primary }}>NATIVE</p>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReactCountryFlag countryCode="GB" svg style={{ fontSize: '2.5em', marginBottom: 6 }} title="English" />
          <p className="tech-text">English</p>
          <p style={{ fontSize: "1rem", color: getCurrentPalette().primary }}>
            B2 UPPER INTERMEDIATE
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Languages;
