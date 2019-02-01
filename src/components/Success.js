import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue=(e)=>{
    e.preventDefault();
    this.props.nextPageNumb();
  }

  back=(e)=>{
    e.preventDefault();
    this.props.prevPageNumb();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"/>
          <h1>Thank You For Your Time</h1>
          <p>You will get email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}



export default Success