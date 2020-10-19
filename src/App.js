import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar/index";
import Main from '../src/pages/main/index'

import {
  Container,
  // Row,
  // Col,
} from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const thing = globalThing;
    return (
      <Container fluid>
        <Navbar />
        <br />
       <Main />
      </Container>
    );
  }
}
export default App;
