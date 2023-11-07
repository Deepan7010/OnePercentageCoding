import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Course from "./Course";
import Service from "./Service";
import Contact from "./Contact";

const Navbars = () => {
  return (
    <nav>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={require("../assert/logo.jpg")}
                alt="hi"
                width="50"
                height="50"
              />
            </Link>
            <Navbar.Brand />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" />
          <Navbar.Collapse className="justify-content-end" id="nav">
            <Nav>
              <Nav.Link>
                <Link className="text-decoration-none text-light active" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-light " to="/Course">
                  Course
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-light " to="/Service">
                  Services
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-light " to="/Contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </nav>
  );
};

export default Navbars;
