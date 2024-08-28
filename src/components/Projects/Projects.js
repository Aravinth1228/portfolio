import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

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
              title="Virtual Mouse"
              description="Enable mouse control for users with mobility impairments using eye tracking and facial expressions.
Real-time eye tracking, facial expression recognition, customization, accessibility."
              ghLink="https://github.com/aravinth1228"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Decentralised voting system"
              description="Created a secure voting platform using blockchain to ensure tamper-proof records.
                                Implemented smart contracts for transparent vote verification."
              ghLink="https://github.com/aravinth1228"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
