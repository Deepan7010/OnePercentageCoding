import React from "react";
import { Container, Image } from "react-bootstrap";

const Service = () => {
  return (
    <div>
      <Container className="text-center">
        <h1 className="my-3">Training And Placement</h1>
        <Image
          src="https://www.zohotechs.com/images/training.png"
          alt="img"
          fluid
        ></Image>
        <p className="my-3">
          The freshers are most welcome to our placement training center to get
          an immense placement opportunity and we are taking more effort
          exclusively as much as possible. The enthusiastic and skillful group
          of Besant Technologies placement cell is recognized for their
          interview scheduling with the topmost IT companies. We have tie-ups
          with responsible countrywide and universal clients to provide 100%
          placement assistance for freshers.
        </p>
      </Container>
    </div>
  );
};

export default Service;
