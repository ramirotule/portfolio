import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Col md="4" className="footer-copywright" style={{ textAlign: 'center' }}>
          <h3>Designed and Developed by Ramiro Toulemonde</h3>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: 'center' }}>
          <h3>Copyright © {year} Ramiro Santiago Toulemonde</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
