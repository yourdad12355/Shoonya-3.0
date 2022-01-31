import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Sponsors() {

  return (
    <Container fluid className="sponsor-section" >
      <Container>
        <Row className="sponsor">
          <Col md={6} className="sponsor-left">
          <h1 className="sponsor-heading">
          Title Sponsors
        </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Sponsors;
