import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Course = () => {
  return (
    <Container>
      <Row>
        
        <Col md={6} xl={3} lg={4}>
          <div className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src=" https://www.devopsschool.com/blog/wp-content/uploads/2022/03/html.jpg"
              />
              <Card.Body>
                <Card.Title>Learn HTML-5</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={6} xs={10} lg={4} xl={3}>
          <div className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxPW995UB1hSxk2Am-wv47AEjREyWLaeC0A&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Learn CSS-3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col md={6} xs={10} lg={4} xl={3}>
          <div className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5C_-qT_x0hZ-bo-1Nv2kQFjVfmcduqL5rcQ&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Learn Bootstrap</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col md={6} xs={10} lg={4} xl={3}>
          <div className="mt-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcIcchlrxO3kf11OR-TzIMdfMmGDe26a30A&usqp=CAU"
              />
              <Card.Body>
                <Card.Title>Learn Javascript</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
