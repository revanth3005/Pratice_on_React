import axios from 'axios'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Createdata extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            name: "",
            address: ""
        }
    }
    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handelOnSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/Student', this.state)
            .then((res) => {
                console.log('data inserted...')
                alert('data Inserted Succesfully')
            })
            .catch((err) => {
                console.error(err)
                alert('Insertion Failed')
            })
    }
    render() {
        const { id, name, address } = this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Create New Student Data</h3>
                            <form onSubmit={this.handelOnSubmit}>
                                <div className='mb-3'>
                                    <input type="text" className="form-control"  name='id' value={id} onChange={this.onChangeValue} placeholder='ID' />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name='name' className="form-control" value={name} onChange={this.onChangeValue} placeholder='Name' />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name='address' className="form-control" value={address} onChange={this.onChangeValue} placeholder='Address' />
                                </div>
                                <div className='mb-3'>
                                    <input type="submit" value="Submit"  className='btn btn-primary'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

