import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiJavascript1, DiSass } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiBlueprint,
  SiMui,
  SiJest,
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
        <p className="tech-text">React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React Native" />
        <p className="tech-text">React Native</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
        <p className="tech-text">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
        <p className="tech-text">TypeScript</p>
      </Col>

      {/* Styling */}

      <Col xs={4} md={2} className="tech-icons">
        <DiSass title="Sass" />
        <p className="tech-text">Sass</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind" />
        <p className="tech-text">Tailwind</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents title="Styled Components" />
        <p className="tech-text">Styled Components</p>
      </Col>

      {/* UI Components */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBlueprint title="Blueprint JS" />
        <p className="tech-text">Blueprint JS</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMui title="Material UI" />
        <p className="tech-text">Material UI</p>
      </Col>

      {/* Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJest title="Jest" />
        <p className="tech-text">Jest</p>
      </Col>
    </Row>
  );
}

export default Techstack;
