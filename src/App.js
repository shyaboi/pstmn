import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../src/components/Navbar/index'
import { Form, Dropdown, SplitButton, ButtonGroup, Container } from "react-bootstrap";

var globalThing = 'benis'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {picked: "Method", body: "{someExampleJSON:morjson}"};
  }
  handleClick(positionClicked) {
    this.state.picked = positionClicked
    console.log(this.state.picked+" was picked")
    console.log('this is:', globalThing, positionClicked);
    this.setState(this.state)
  }
  render() {
    // const thing = globalThing;
  return (
    <Container>
      <Navbar />
    <Container>

      <div className="App">
        <header className="App-header">
          <div className="mb-2">
            {[SplitButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup}
                key={idx}
                id={`dropdown-button-drop-${idx}`}
                size="lg"
                title={this.state.picked}
                >

                
                <Dropdown.Item eventKey="Post" onClick={() => this.handleClick("Post")}>Post</Dropdown.Item>
                <Dropdown.Item eventKey="Get" onClick={() => this.handleClick("Get")}>Get</Dropdown.Item>
                <Dropdown.Item eventKey="3" onClick={() => this.handleClick("Another Thing")}>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4" onClick={() => this.handleClick(4)}>Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
        </header>
      </div>
    </Container>
    <Container>
      <div>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label><h1>Enter JSON body</h1></Form.Label>
    <Form.Control as="textarea" rows="3" placeholder={this.state.body} />
  </Form.Group>
      
      </div>
    </Container>
    <Container>
      <div>
        <h1>Response From Server</h1>
      </div>
    </Container>
    </Container>

  );
}
}
export default App;
