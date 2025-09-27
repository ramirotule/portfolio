import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

function Home2() {
  const { currentAvatar } = useTheme();
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home.home2.letMeIntroduce').split(' ').slice(0, 2).join(' ')} <span className="purple"> {t('home.home2.letMeIntroduce').split(' ').slice(2).join(' ')} </span>
            </h1>
            <p className="home-about-body">
              {t('home.home2.experience')}
              <br />
              <br />{t('home.home2.technologies').split('React.js')[0]}
              <i>
                <b className="purple">
                  {t('home.home2.techHighlight1')}
                  <span className="white-normal">{t('home.home2.techConnector1')}</span>
                  {t('home.home2.techHighlight2')}
                  <span className="white-normal">{t('home.home2.techConnector2')}</span>
                  {t('home.home2.techHighlight3')}
                  <span className="white-normal">{t('home.home2.techConnector3')}</span>
                </b>
              </i>
              <br />
              <br />
              {t('home.home2.personality')}
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={currentAvatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', textAlign: 'right' }}>
            <h1>{t('home.findMe')}</h1>
         
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ramirotule"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramirotoulemonde"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ramiro.toulemonde@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
               <p>
              {t('home.feelFree')} <span className="purple">{t('home.connect')} </span>{t('home.withMe')}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
