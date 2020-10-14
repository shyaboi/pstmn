import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Jumbotron,
  FormControl,
  InputGroup,
  Form,
  Dropdown,
  Button,
  SplitButton,
  ButtonGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: "Method",
      body: "{someExampleJSON:morjson}",
      response: "{example:JSON}",
      url: "https://openflags.net/rando"
    };
  }
  handleClick(positionClicked) {
    // this.state.picked = positionClicked;
    // console.log(this.state.picked + " was picked");
    // console.log("this is:", globalThing, positionClicked);
    this.setState({ picked: positionClicked });
  }

  urlChange = (e) => {
    this.setState({url: e.target.value});
    console.log(this.state.url)
 }
 getData = (muhData) => {
   // create a new XMLHttpRequest
   var xhr = new XMLHttpRequest();
   // get a callback when the server responds
   xhr.addEventListener("load", () => {
     // update the state of the component with the result here
     //   console.log(xhr.responseText);
     // console.log(JSON.parse(xhr.response));
     // let res = JSON.parse(xhr.response)
     const dinus = xhr.responseText;
     //   console.log(dinus);
     this.setState({ response: dinus });
    });
    muhData = this.state
      console.log(muhData)
    // open the request with the verb and the url
    xhr.open(this.state.picked, this.state.url);
    // send the request
    xhr.send(muhData);
  };

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
                <FormControl
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="https://openflags.net/rando"
                  defaultValue=''
                  onChange={this.urlChange} 
                />
              </InputGroup>
            </Col>
            <Col md={1}>
              <Button type="submit" value="Submit" size="lg" onClick={this.getData} >Submit</Button>
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
        <br />

        <Container>
          <div>
            <Jumbotron fluid id='jumbo'>
              <Container>
            <h1>Response From Server</h1>
                <p>
                  {this.state.response}
                </p>
              </Container>
            </Jumbotron>
          </div>
        </Container>
      </Container>
    );
  }
}
export default Main;
