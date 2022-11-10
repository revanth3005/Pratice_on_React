import React, { Component } from 'react';

class UpdateLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"sai-naidu"
        }
    }
    static getDerivedStateFromProps(){//=====1
        console.log('getDerivedStateFromProps');
        return null;
    }
    changeName=()=>{
        this.setState({
            name:'revanth'
        })
    }
    componentDidMount(){//====2
        console.log('componentDidMount');
        return null
    }
    getSnapshotBeforeUpdate(preProps,preState){//4
        console.log('getSnapshotBeforeUpdate');
        document.getElementById('oldvalue').innerHTML='old value is'+preState.name
        return null
    }
    componentDidUpdate(){//5
        console.log('componentDidUpdate');
        document.getElementById('newvalue').innerHTML='new Value'+this.state.name
        return null
    }
    
    
    render() {//3
        return (
            <div>
               <h1>{this.state.name}</h1>
               <button onClick={this.changeName}>click</button> 
               <p id='oldvalue'></p>
                <p id='newvalue'></p>
            </div>
        );
    }
}

export default UpdateLifeCycle;