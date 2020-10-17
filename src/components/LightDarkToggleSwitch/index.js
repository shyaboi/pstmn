import React, { Component } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

class Togg extends Component {
  constructor() {
    super();
    this.state = { toggleActive: true };
    this.onToggle = this.onToggle.bind(this);
  }
 
  onToggle() {
    console.log("something")
    this.setState({ toggleActive: !this.state.toggleActive });
  }
 
  render() {
const lightMode = ()=> {
  document.querySelector("#root").style.color = '#242424 ';
  // document.querySelector("#responseBox").style.color = '#242424 ';
  document.querySelector("#root").style.background = '#F7F7F7';
  document.querySelector("html").style.background = '#F7F7F7';
  // document.querySelector("#jumbo").style.background = '#E0E0E0';
}

const darkMode = ()=> {
  document.querySelector("#root").style.color = '#FFFFFF';
  document.querySelector("#root").style.background = '#4E4E4E';
  document.querySelector("html").style.background = '#4E4E4E';
  // if (document.querySelector('#responseBox')== !null) {
  //   console.log('got the not nullyfe')
  //   document.querySelector("#responseBox").style.color = '#242424 ';
  // }
  

  
  console.log('darkmode')}

const modeCheck = ()=> { 
  console.log(this.state.toggleActive)
  if (this.state.toggleActive === false) {
   
    lightMode()
    // document.querySelector("#urlBox").style.background = '0x242424';
    
    console.log('lightmode ')
  }
  if (this.state.toggleActive === true){
    darkMode()
   }
}

    return (
      <BootstrapSwitchButton onlabel="Dark" offlabel="Light" width='88' checked={true} onChange={(checked) => {
        this.setState({ toggleActive: checked })
    }} onstyle={"dark"} offstyle="light" style="border" onClick = {modeCheck()} />

    )
  }
 
}

export default Togg;
