import React, { Component } from 'react';
import Sample from './Sample';

class Unmount extends Component {
    constructor(props) {
        super(props);
        this.state={
            display:true
        }
    }
    display=()=>{
        this.setState({
            display:false
        })
    }
    render() {
        let msg;
        if(this.state.display){
            msg=<Sample/>
        }else{
            msg=""
        }
        return (
            <div>
                <div>
                    {msg}
                </div>
                <button onClick={this.display}>Delete data</button>
            </div>
        );
    }
}

export default Unmount;
