import React, { Component } from 'react';

class MountLifeCycle extends Component {
    constructor(props) {//1====
        super(props);
        this.state={
            name:'sai'
        }
    }
    static getDerivedStateFromProps(){//2===
        console.log('getderived');
        return null
    }
    componentDidMount(){//4====
        console.log('component did m ount');
        return null;
    }
    
    
    render() {//3===
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
            </div>
        );
    }
}

export default MountLifeCycle;

// the excution flow was explained by giving the number.