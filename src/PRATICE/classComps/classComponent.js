import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {// passing the values through state values in class components through constructor
        super()
        this.state = {
           name:'sai',
           age:20
        }
      }
      // updateing the state values bu onclick event by clicking the changeName function will trigger in that we will use this.setState 
      //to update the state values by passing.
      changeName=()=>{ 
        this.setState({
            name:"revanth",
            age:22
        })
      }
    render() {
        return (
            <div>
                Welcome to {this.state.name} age is {this.state.age}
                <button onClick={this.changeName}>update</button>
            </div>
        );
    }
}

export default ClassComponent;
