import React, { Component } from 'react';
import './pratice.css'
class ComponentName extends Component {
    constructor() {
      super();
      this.state = {
         name:"Revanth",
         age:22
      }
    }
    updateName=()=>{
        this.setState({
            name:"Sai Revanth",
            age:20
        })
    }
    render() {
        return (
            <div className={'main-container'}> 
                My name is {this.state.name} and my age is {this.state.age}
                <br />
                <p>Click here for Full Name</p>
                <button onClick={this.updateName} className={'bt'}>Click Here</button>
            </div>
        );
    }
}

export default ComponentName;