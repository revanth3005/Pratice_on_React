import React, { Component } from 'react'

export default class ClassCompConditionRender extends Component {
  constructor() {
    super()
    this.state = {
       login:true
    }
  }
  
  // In this when ever the constructor invokes it true based on that the return statement will excute
  // render() {
  //   if(this.state.login){
  //     return(
  //       <h1>
  //         welcome to the page
  //       </h1>
  //     )
  //   }else{
  //     return(
  //       <h1>
  //         not a user
  //       </h1>
  //     )
  //   }
  // }


  // Another method storing
  // render(){
  //   let response;
  //   if(this.state.login) response=<h1>Welcome User</h1>
  //   else response=<h1>not User</h1>
  //   return response;
  // }


  //Another method by terinary method
  // render(){
  //   let response
  //   (this.state.login) ? response=<h1>Welcome User</h1> : response=<h1>Not User</h1>
  //   return response
  // }


  // if we want to excute only the true means 
  render(){
    return (this.state.login) && <h1>Welcome</h1>
  }
}
