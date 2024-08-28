import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aravinthan S </span>
            from <span className="purple"> Tamil nadu, India.</span>
            <br />
           
            <br />
            I’m a B.Tech CSBS student with a passion for frontend development. Skilled in HTML, CSS, and JavaScript, I enjoy building responsive, user-friendly web interfaces and am eager to grow my skills in a dynamic environment.
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aravinthan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
