import React from "react";
import { Container } from "react-bootstrap";
import "../Home.css";

const Home = () => {
  return (
    <div className="bgs">
      <Container className="d">
        <div>
          <h2 className="head">Best Training and Placements</h2>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
