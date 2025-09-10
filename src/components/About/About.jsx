import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import fotoPerfil from "../../assets/foto_perfil.png";
import Toolstack from "./Toolstack";
import Languages from "./Languages";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
  <Row style={{ justifyContent: "center", padding: "10px", alignItems: "stretch", display: "flex" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
            className="about-img about-img-col"
          >
            <img src={fotoPerfil} alt="about" className="img-fluid about-img-innovative" style={{ height: "100%", width: "auto", maxHeight: "400px", minHeight: "200px", objectFit: "cover" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Languages</strong> I speak
        </h1>
        <Languages/>
      </Container>
    </Container>
  );
}

export default About;
