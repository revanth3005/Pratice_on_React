import React, { Component } from 'react'
import axios from 'axios'
export default class Getdata extends Component {
    constructor(props) {
        super(props);
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
            .catch((error) => {
                console.error(error);
            })
    }

    render() {
        let { studentData } = this.state
        return (
            <div>
                <h1>Student Data</h1>
                {
                    <table>
                        <thead>
                            <tr>
                                <td><strong>Id</strong></td>
                                <td><strong>Name</strong> </td>
                                <td><strong>Address</strong> </td>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((data) => {
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
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}
