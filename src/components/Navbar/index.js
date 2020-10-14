import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logosml.png";
import Togg from "../../components/LightDarkToggleSwitch/index";
import { Container, Col } from "react-bootstrap";

function Nav() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Col>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pstmn
          </Navbar.Brand>
        </Col>
        <Togg />
      </Navbar>
    </Container>
  );
}
export default Nav;
