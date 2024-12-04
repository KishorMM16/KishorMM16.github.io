import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Car_rentals from "../../Assets/Projects/Car_Rentals.png";
import editor from "../../Assets/Projects/codeEditor.png";
import SuryAI from "../../Assets/Projects/SuryAI.png";
import Social_media from "../../Assets/Projects/Social_media.png";
import Market_analysis from "../../Assets/Projects/Market_analysis.png";

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
              imgPath={SuryAI}
              isBlog={false}
              title="plant leaf disease detection using deep learning"
              description="Plant Leaf Disease Detection Using Deep Learning
This project's goals were to collect a dataset of plant leaf images, train and evaluate deep learning models, and analyze the models' performance."
              ghLink="https://github.com/KishorMM16/Plant-leaf-disease-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Market_analysis}
              isBlog={false}
              title="Market Analysis Tool"
              description="It is web scraping tool which scrapes the data from the web and then analyze the data to provide the user Price, Rating and reviws of a product user searchs online in a CSV sheet. It uses the data from the web to predict the future of the stock market."
              ghLink="https://github.com/KishorMM16/web-scraping"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Car_rentals}
              isBlog={false}
              title="Rental car system"
              description="Undergratuation project. It is a web application which is used to rent a car. It is a full stack project which is built using HTML, CSS, JS, PHP and MySQL. It is a simple project which is used to rent a car. User can Rent/Buy cars update user, admin and generate bills, maintain records"
              ghLink="https://github.com/KishorMM16/Rental-car-system"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
