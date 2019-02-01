import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Success from './Success';
import Confirm from './Confirm';

class UserForms extends Component {
  constructor(){
    super();
    this.state = {
      pageNumb: 0,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.nextPageNumb = this.nextPageNumb.bind(this)
    this.prevPageNumb = this.prevPageNumb.bind(this)
  }

  nextPageNumb(){
    const {pageNumb} = this.state
    this.setState({pageNumb: pageNumb + 1})
  }
  prevPageNumb(){
    const {pageNumb} = this.state
    this.setState({pageNumb: pageNumb - 1})
  }

  handleChange = function handleChange(input){
    const that = this;
    return function (event){
      const {value} = event.target
      that.setState({ [input]: value })
    }
  }

  render() {
    const {pageNumb} = this.state
    const {firstName, lastName, email, occupation, city, bio} = this.state
    const values = {firstName, lastName, email, occupation, city, bio}

    switch(pageNumb){
      case 0:
        return (
          <FormUserDetails 
            nextPageNumb={this.nextPageNumb}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <FormPersonalDetails
            nextPageNumb={this.nextPageNumb}
            prevPageNumb={this.prevPageNumb}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm 
            nextPageNumb={this.nextPageNumb}
            prevPageNumb={this.prevPageNumb}
            values={values}
          />
        );
      case 3:
        return (
          <Success/>
        );
    }
    
  }
}

export default UserForms;
