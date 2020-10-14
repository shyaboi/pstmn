import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../src/components/Navbar/index'
import { Dropdown, SplitButton, ButtonGroup, Container } from "react-bootstrap";
function App() {
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
                title="Method"
              >
                <Dropdown.Item eventKey="1">Post</Dropdown.Item>
                <Dropdown.Item eventKey="2">Get</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
            ))}
          </div>
        </header>
      </div>
    </Container>
    </Container>

  );
}

export default App;
