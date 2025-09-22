import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useTheme } from "../../hooks/useTheme";

function Home() {
  const { getCurrentPalette } = useTheme();
  const { t } = useTranslation();
  const primaryColor = getCurrentPalette().primary;
  const homeLogo = getCurrentPalette().homeMain;
  return (
    <section style={{
      width: "100%",
      minHeight: "100vh",
      padding: 0,
      margin: 0,
      overflowX: "hidden",
      background: "var(--section-background-color)",
    }}>
      <Container fluid id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t('home.greeting')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  {t('home.wave')}
                </span>
              </h1>
              <h1 className="heading-name">
                {t('home.introduction')}
                <strong className="main-name" style={{ color: primaryColor }}> {t('home.name')}</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  <Home2 />
    </section>
  );
}

export default Home;