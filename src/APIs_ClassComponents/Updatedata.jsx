import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Updatedata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentData: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:2000/Student')
            .then((res) => {
                this.setState({
                    studentData: res.data,
                    id: '',
                    name: '',
                    address: '',
                    display: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    deleteDataHandel(id) {
        axios.delete('http://localhost:2000/Student/' + id)
            .then((res) => {
                alert(id + " deleted Succesfully")
            })
            .catch((error) => {
                console.error(error);
                alert(id + "Not Found or Not Deleted")
            })
    }
    editDataHandel(id) {
        axios.get('http://localhost:2000/Student/' + id)
            .then((res) => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    address: res.data.address,
                    display: true
                })
            })
    }
    handelchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handelOnSubmitUpdate = (e) => {
        const { id, name, address } = this.state
        e.preventDefault()
        axios.put('http://localhost:2000/Student/' + id, { id, name, address })
            .then((res) => {
                alert(`updated Succesfully.. for ${id}`)
            })
            .catch((error) => {
                console.error(error)
                alert(`update Failed for ${id}`)
            })

    }
    render() {
        let { studentData, id, name, address } = this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Student Details </h1>
                            {this.state.display ?
                                <form onSubmit={this.handelOnSubmitUpdate}>
                                    <input type="text" name='id' value={id} onChange={this.handelchange} />
                                    <input type="text " name='name' value={name} onChange={this.handelchange} />
                                    <input type="text" name='address' value={address} onChange={this.handelchange} />
                                    <input type="submit" value="Update" />
                                </form>
                                : <p></p>}
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td><strong>Sno</strong></td>
                                        <td><strong>Name</strong></td>
                                        <td><strong>Address</strong></td>
                                        <td><strong>Action</strong></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentData.map((data) => {
                                            return (
                                                <tr key={data.id}>
                                                    <td>
                                                        {data.id}
                                                    </td>
                                                    <td>
                                                        {data.name}
                                                    </td>
                                                    <td>
                                                        {data.address}
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => this.deleteDataHandel(data.id)}><i className="fa-solid fa-trash"></i></button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        <button className='btn btn-secondary' onClick={() => this.editDataHandel(data.id)}><i className="fa-solid fa-pencil"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
