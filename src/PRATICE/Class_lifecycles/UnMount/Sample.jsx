import React, { Component } from 'react';

class Sample extends Component {
    componentWillUnmount(){
        alert('These data will be deleted')
    }
    render() {
        return (
            <div>
                <h1>Hello I will hide when the delete data button is clicked</h1>
            </div>
        );
    }
}

export default Sample;
