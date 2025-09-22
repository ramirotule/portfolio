import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import raminformaticaImg from "../../assets/Projects/ecommerce-ram.png";
import clickFraganciasImg from "../../assets/Projects/ecommerce-clickfragancias.png";
import alkilaImg from "../../assets/Projects/alkila.png";
import carsaleImg from "../../assets/Projects/carsale.png";
import tablaPeriodicaImg from "../../assets/Projects/tablaperiodica.png";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          {t('projects.title')} <strong className="purple">{t('projects.highlight')} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.description')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", display: "flex", alignItems: "stretch" }}>
          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={raminformaticaImg}
              isBlog={false}
              title={t('projects.ramInformatica.title')}
              description={t('projects.ramInformatica.description')}
              ghLink="https://github.com/ramirotule/ecommerce-ram"
              demoLink="https://www.raminformatica.com.ar"
              inprogress={false}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={tablaPeriodicaImg}
              isBlog={false}
              title={t('projects.tablaPeriodicsa.title')}
              description={t('projects.tablaPeriodicsa.description')}
              ghLink="https://github.com/ramirotule/tablaperiodica"
              demoLink="https://tablaperiodica-nine.vercel.app/"
              inprogress={false}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={clickFraganciasImg}
              isBlog={false}
              title="Clickfragancias"
              description="ClickFragancias is an e-commerce platform specialized in the sale of perfumes, cosmetics, and beauty products. The website is designed to provide customers with a smooth and enjoyable shopping experience, featuring an intuitive interface, organized product catalog, and secure checkout process.
              The platform focuses on offering a wide variety of fragrances and beauty essentials, making it easy for users to browse by categories, brands, and price ranges. With a modern and responsive design, ClickFragancias ensures accessibility across all devices, while building trust and convenience for customers looking to shop online."
              ghLink="https://github.com/ramirotule/ecommerce-clickfragancias"
              demoLink="https://ecommerce-clickfragancias.vercel.app/"
              inprogress={false}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={carsaleImg}
              isBlog={false}
              title="Carsale"
              description="Carsale is a management platform designed for car dealerships to simplify and optimize their daily operations. The system provides tools to manage vehicle inventory, keep track of stock in real time, and streamline sales processes.
              One of its key features is the ability to automatically generate and publish posts on Instagram, showcasing available vehicles with their details such as model, price, and features. This automation not only saves time but also enhances the dealership’s online presence and marketing strategy.
              By combining stock management with social media integration, Carsale offers dealerships an efficient way to control inventory, reach potential customers, and improve sales performance through digital channels."
              ghLink="https://github.com/ramirotule/carsale"
              // demoLink="https://ecommerce-clickfragancias.vercel.app/"
              inprogress={true}
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={alkilaImg}
              isBlog={false}
              title="Alkila"
              description="Alkila is a web platform designed to make property rentals more accessible for people in my city. The application allows users to search and explore available rentals with customizable filters, such as price range, number of rooms, property type, and more.
              The goal of Alkila is to simplify the process of finding a home by offering an intuitive interface, smart search options, and real-time listings. With a focus on usability and performance, the platform provides a modern solution for connecting property owners and renters, making the local housing market more transparent and efficient."
              ghLink="https://github.com/ramirotule/alkila"
              demoLink="https://alkila.com.ar"
              inprogress={true}

            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;