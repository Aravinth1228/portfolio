import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";
import Brain from "../../Assets/Projects/brain.png";
import Block from "../../Assets/Projects/block.png";
import eye from "../../Assets/Projects/eye.png";
import erc20 from "../../Assets/Projects/erc20.png";


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
              ghLink="https://github.com/Aravinth1228/Virtual-mouse-using-Python8"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Block}
              isBlog={false}
              title="Blindly-Brilliant-using-Block-Chain"
              description="Blindly Brilliant is a blockchain-powered content distribution platform designed to make digital resources more accessible to the visually impaired. Users can upload content (like Braille files, audio, or text), which is stored on IPFS via Pinata, and tokenized as NFTs on the Ethereum blockchain."
              ghLink="https://github.com/Aravinth1228/Blindly-Brilliant-using-Block-Chain"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Decentralised voting system"
              description="Created a secure voting platform using blockchain to ensure tamper-proof records.
                                Implemented smart contracts for transparent vote verification."
              ghLink="https://github.com/aravinth1228"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Brain}
              isBlog={false}
              title="Brain-tumor-classification-using-CNN"
              description="A deep learning-based system for classifying brain tumors using Convolutional Neural Networks (CNN). This project uses MRI/CT scan images to automatically detect and categorize brain tumors, supporting early diagnosis and medical research"
              ghLink="https://github.com/Aravinth1228/Brain-tumor-classification-using-CNN"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erc20}
              isBlog={false}
              title="ERC20-transferFrom-Blockchain"
              description="A simple ERC20 token smart contract built using Solidity and OpenZeppelin standards, with full support for allowance, transfer, and minting."
              ghLink="https://github.com/Aravinth1228/ECR20-transferFrom-Blockchain"
              
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
