import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  FormControl,
  InputGroup,
  Form,
  Dropdown,
  SplitButton,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picked: "Method", body: "{someExampleJSON:morjson}" };
  }
  handleClick(positionClicked) {
    // this.state.picked = positionClicked;
    // console.log(this.state.picked + " was picked");
    // console.log("this is:", globalThing, positionClicked);
    this.setState({ picked: positionClicked });
  }
  render() {
    // const thing = globalThing;
    return (
      <Container fluid>
        <Container fluid>
          <Row>
            <Col md={1}>
              {[SplitButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="lg"
                  title={this.state.picked}
                >
                  <Dropdown.Item
                    eventKey="POST"
                    onClick={() => this.handleClick("POST")}
                  >
                    Post
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="GET"
                    onClick={() => this.handleClick("GET")}
                  >
                    Get
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="PUT"
                    onClick={() => this.handleClick("PUT")}
                  >
                    Put
                  </Dropdown.Item>
                </DropdownType>
              ))}
            </Col>
            <Col md={10}>
              <InputGroup className="mb-3" size="lg">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    URL to {this.state.picked} https://openflags.net/rando
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl id="basic-url" aria-describedby="basic-addon3" />
              </InputGroup>
            </Col>
            <Col md={1}>
              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h1>Enter JSON body(if needed)</h1>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder={this.state.body}
            />
          </Form.Group>
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
export default Main;
