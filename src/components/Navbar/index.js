import React from "react";
import Navbar from "react-bootstrap/Navbar"
import logo from  '../../images/logosml.png'

function Nav() {
    return (
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Postmn
    </Navbar.Brand>
  </Navbar>
    )}
export default Nav;