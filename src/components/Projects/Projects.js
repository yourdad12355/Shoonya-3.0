import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/flutterworkshops.png";
import emotion from "../../Assets/Projects/anotherevent.png";
import editor from "../../Assets/Projects/websetgo.png";
import chatify from "../../Assets/imageevent1.png";
import suicide from "../../Assets/Projects/Askmeanything.png";
import bitsOfCode from "../../Assets/Projects/shoonya.png";

function Projects() {
  return (
    <Container fluid className="project-section">
    
      <Container>
        <h1 className="project-heading">
          Our<strong className="purple">Events</strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 1"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt. 
             
              "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 2"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="EVENT 3"
              description="Lörem ipsum fysans hackathon och dedade. Sars nynt att dissade as. Denylig belogi airbaghjälm osågt. Kapselbryggare exol de jitt, att grit. Neogam blinga kulturell appropriering apofas nesa. Kosläpp dialig med tädobel. 
              Antisocial voras miment, respektive hadat. Tebel konfili. Orys frisparkssprej, nyns. Käprefav idisade posttologi premusam. Muvor vav liksom sode. Pongar mansskatt."
              
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
