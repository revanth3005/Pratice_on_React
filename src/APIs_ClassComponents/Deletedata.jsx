import axios from 'axios'
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Deletedata extends Component {
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
                    studentData: res.data
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    deleteDataHandel(id){
        //console.log(id);
        axios.delete('http://localhost:2000/Student/'+id)
        .then((res)=>{
            alert(id+" deleted Succesfully")
        })
        .catch((error)=>{
            console.error(error);
            alert(id+"Not Found or Not Deleted")
        })
    }

    render() {
        let { studentData } = this.state
        return (
            <div>
                <h2>Student Data</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Sno</td>
                                        <td>Name</td>
                                        <td>Address</td>
                                        <td>Action</td>
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
                                                        <button className='btn btn-danger' onClick={()=>this.deleteDataHandel(data.id)}><i className="fa-solid fa-trash"></i></button>
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
