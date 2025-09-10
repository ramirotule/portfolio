import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTheme } from "../../hooks/useTheme";

function AboutCard() {
  const { getCurrentPalette } = useTheme();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ramiro Santiago Toulemonde </span>
            from <span className="white-normal">
              {" "}
              Santa Rosa, La Pampa,{" "}
            </span>{" "}
            <span className="purple">ARGENTINA.</span>
            <br />
            I graduated as a Systems Analyst in 2012.
            <br />
            I have been working in the private IT sector for 3 and a half years since 2022 to present. Prior to this, I gained 6 years of experience in the IT field within a governmental organization, where I took my first steps in frontend development.
            <br />
            <br />
            I am currently employed as a software developer at Temperies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Intrustruments (Piano and Guitar)
            </li>
            <li className="about-activity">
              <ImPointRight /> Restore old cars
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling with my family
            </li>
          </ul>

          <p style={{ color: getCurrentPalette().accent }}>

            "My favorite quote is: "The only thing impossible is what you don't try.!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
