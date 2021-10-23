import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Matching = () => {
  return (
    <div className="nav-margin pageheight">
      <Container className={`nav-margin`}>
        <Row>
          <Col>
            <h4>Please select Jd to genrate matching score: </h4>
          </Col>
          <Col className>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Select aria-label="Default select example" id="jd">
                  <option>Open this select JD</option>
                  <option value="Java">Java Developer</option>
                  <option value="C">C Developer</option>
                  <option value="Python">Python Developer</option>
                </Form.Select>
              </Form.Group>
            </Form>
            <button type="submit">Submit</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Matching;
