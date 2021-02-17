import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactJson from 'react-json-view'

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
      body: '{"someExampleJSON":"morjson"}',
      responseType:"Example JSON",
      response: "{example:JSON}",
      url: "https://openflags.net/api/usa/california"
    };
  }
  handleClick(positionClicked) {
    // console.log(this.state.picked + " was picked");
    this.setState({ picked: positionClicked });
  }

urlChange = (e) => {
    this.setState({url: e.target.value});
    // console.log(this.state.url)
 }
 bodyChange = (e) => {
  this.setState({body: e.target.value});
  console.log(this.state.body)
}

  postData = ()=> {
    console.time('init')
    // Example POST method implementation:
    this.setState({ body: this.state.body });
    // const bod = this.state.body
    // console.log(JSON.stringify(bod))
    const meth = this.state.picked
    console.log(meth)
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

  
    
    postData('http://localhost:4444', { body: this.state })
    .then(data => {
      const dataType = typeof(data)
      if(typeof(data)==='string'){
        var strang = JSON.stringify(data)
        this.setState({ response: strang });
      }
      if(typeof(data)==='object'){
      var strangJSON = <ReactJson src={data} />
      this.setState({ response: strangJSON });

      }
      this.setState({ responseType: dataType });
      console.timeEnd('init')

      console.log(data);
    });
  }


  render() {
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
                    eventKey="GET"
                    onClick={() => this.handleClick("GET")}
                  >
                    Get
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="POST"
                    onClick={() => this.handleClick("POST")}
                  >
                    Post
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                    eventKey="PUT"
                    onClick={() => this.handleClick("PUT")}
                  >
                    Put
                  </Dropdown.Item> */}
                </DropdownType>
              ))}
            </Col>
            <Col md={10}>
              <InputGroup className="mb-3" size="lg">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon3">
                    URL to {this.state.picked}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Example: https://openflags.net/api/json/ISO3166/US-OR"
                  defaultValue=''
                  onChange={this.urlChange} 
                />
              </InputGroup>
            </Col>
            <Col md={1}>
              <Button type="submit" value="Submit" size="lg" onClick={this.postData} >Submit</Button>
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
              onChange={this.bodyChange} 

            />
          </Form.Group>
        </Container>
        <br />

        <Container>
          <div>
            <Jumbotron fluid id='jumbo'>
              <Container>
            <h1>Response From Server</h1>
            <h2>
              {this.state.responseType}
            </h2>
                <Container>
                  {this.state.response}
                </Container>
              </Container>
            </Jumbotron>
          </div>
        </Container>
      </Container>
    );
  }
}
export default Main;
