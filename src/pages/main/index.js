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
import { CallPage } from "twilio/lib/rest/api/v2010/account/call";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: "Method",
      body: '{"someExampleJSON":"morjson"}',
      responseType:"Example JSON",
      response: "{example:JSON}",
      url: "https://openflags.net/rando"
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



startTimer = ()=> {
  let time = 0
var  ok =  setInterval(() => {
    time++
    console.log(time)
  }, 10);
  setTimeout(() => {
    clearInterval(ok)
    
  }, 2000);
}

//  getData = (muhData) => {
//    // create a new XMLHttpRequest
//    var xhr = new XMLHttpRequest();
//    // get a callback when the server responds
//    xhr.addEventListener("load", () => {
//      // update the state of the component with the result here
//      //   console.log(xhr.responseText);
//      // console.log(JSON.parse(xhr.response));
//      // let res = JSON.parse(xhr.response)
//      const response = xhr.responseText;
//      //   console.log(dinus);
//      this.setState({ body: this.state.body });
//      this.setState({ response: response });

//     });
//     muhData = this.state.body
//     console.log(muhData)
//     // open the request with the verb and the url
//     xhr.open(this.state.picked, this.state.url);
//     // send the request
//     xhr.send();
//   };
  
  postData = ()=> {
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
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
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

  
    
    postData('https://getwomanserver.herokuapp.com/', { body: this.state })
    .then(data => {
      const dataType = typeof(data)
      if(typeof(data)==='string'){
        var strang = JSON.stringify(data)
      }
      if(typeof(data)==='object'){
      var strang = <ReactJson src={data} />
      }
      this.setState({ responseType: dataType });
      this.setState({ response: strang });

      console.log(data); // JSON data parsed by `data.json()` call
    });
  }

  // theDecideor(){
  //   const meth = this.state.picked
  //   if (meth=="Post"||"POST") {
  //     this.postData()
  //     console.log('twas a post')
  //   } else {
      
  //   }
  // }
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
                  placeholder="https://openflags.net/rando"
                  defaultValue=''
                  onChange={this.urlChange} 
                />
              </InputGroup>
            </Col>
            <Col md={1}>
              <Button type="submit" value="Submit" size="lg" onClick={this.postData, this.startTimer} >Submit</Button>
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
