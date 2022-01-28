import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function schedule() {
  return (
    <section>
      <Container fluid className="schedule-section" id="schedule">
        
        <Container className="schedule-content">
          <Row>
            <Col md={7} className="schedule-header">
                <h1 className="heading-name">
                Schedule
                </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      
    </section>
  );
}

export default schedule;
