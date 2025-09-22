import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flex: 1 }}>
          {props.description}
        </Card.Text>
        
        {/* Contenedor para los botones que siempre estará en la parte inferior */}
        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && !props.inprogress && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          
          {!props.isBlog && props.inprogress && (
            <Button
              variant="secondary"
              disabled
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Under Construction"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
    
  );
}
export default ProjectCards;
