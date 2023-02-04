import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Trendz"
              description=" A clone of E-commerce applications such as Amazon, Flipkart where users log in and can view a list of products with the capability of searching, filtering, sorting, etc.. technologies used like React JS , Javascript  , CSS , API Calls,MUI,NPM " // ghLink=""
              demoLink="https://viveknxttndz.ccbp.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Wikipedia"
              description="Developed custom Wikipedia search application where users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result Fetched search results from a server asynchronously using fetch GET HTTP API call. " // ghLink=""
              demoLink="https://wikipediaweb183.ccbp.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
