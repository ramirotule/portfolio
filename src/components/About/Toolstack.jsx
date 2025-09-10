import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiJira,
  SiAtlassian,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="JIRA" />
        <p className="tech-text">JIRA</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian title="Atlassian" />
        <p className="tech-text">Atlassian</p>
      </Col>
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
        <p className="tech-text">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-text">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p className="tech-text">Slack</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
