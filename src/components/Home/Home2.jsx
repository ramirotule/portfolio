import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

function Home2() {
  const { currentAvatar } = useTheme();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have been developing web applications for more than 5 years,
              specializing exclusively in Frontend development
              <br />
              <br />I have long experience working with Technologies likes
              <i>
                <b className="purple">
                  {" "}
                  React.js <span className="white-normal"> & </span> React
                  Native,{" "}
                  <span className="white-normal">most of the time using </span>
                  TypeScript{" "}
                  <span className="white-normal">
                    as the main programming language.
                  </span>{" "}
                </b>
              </i>
              <br />
              <br />
              I consider myself a proactive professional with excellent soft
              skills, always eager to learn and ready to take on new challenges.
              My passion lies in creating clean, scalable, and user-friendly
              interfaces, delivering great user experiences while constantly
              improving my technical skills.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <b className="purple">
                Next.js <span className="white-normal"> (Learning) </span>
              </b>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
                  href="https://www.instagram.com/ramirotoulemonde"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ramirotoulemonde@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
