import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { MdPalette } from "react-icons/md";
import { useThemeContext } from "../context/ThemeContext.jsx";
import LanguageSelector from "./LanguageSelector";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { currentLogo, currentTheme } = useThemeContext();
  const { t } = useTranslation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
        {currentLogo && (
          <img
            src={`${currentLogo}?v=${currentTheme}`}
            alt="brand"
            className="navbar-logo-responsive"
            key={currentTheme}
          />
        )}


          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        
        {/* Language selector visible en mobile - fuera del collapse */}
        <div className="d-flex align-items-center d-md-none">
          <LanguageSelector />
        </div>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('navbar.home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('navbar.about')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t('navbar.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t('navbar.resume')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/customize"
                onClick={() => updateExpanded(false)}
              >
                <MdPalette style={{ marginBottom: "2px" }} /> {t('navbar.customize')}
              </Nav.Link>
            </Nav.Item>

            {/* Selector de idioma - solo visible en desktop */}
            <Nav.Item className="d-none d-md-flex align-items-center" style={{ marginLeft: '20px' }}>
              <LanguageSelector />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
