import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class Togg extends Component {
  constructor() {
    super();
    this.state = { toggleActive: false };
    this.onToggle = this.onToggle.bind(this);
  }
 
  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }
 
  render() {
    return (
      <BootstrapSwitchButton onlabel="Dark" offlabel="Light" width='88' checked={true} onstyle="dark" offstyle="light" style="border"/>

    )
  }
 
}

export default Togg;
