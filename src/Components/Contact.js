import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2" xl="3"></Col>
          <Col className="mt-4 text-center" xs="12" md="12" lg="8" xl="6">
            <Image
              src="https://www.zohotechs.com/images/Contact.jpg"
              alt="img"
              fluid
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 text-center">
            <p className="h5"><i className="bi bi-geo-alt"></i> No.44
            1st Floor,<br />
             Mahalakshmi Nagar,<br />
              OMR Sholingnallur, <br />
              TamilNadu-600001 <br />
            </p>
            <p className="h5"><i className="bi bi-phone"></i> +91 987654321</p>
            <p className="h5"><i className="bi bi-envelope"></i> hr@onepercentagecoding</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
