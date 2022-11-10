import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const DataDisplay = () => {
    const {id}=useParams()// accessing the id from the params that were passed in HomeRoute components in Navlink
    const [data,setData]=useState([])  

    useEffect(() => {
        const url = `http://localhost:4000/Student/${id}`;
        axios
          .get(url)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },[]);

    return (
        <div>
             <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            {data.id}
                            {data.name}
                          {data.address}
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default DataDisplay;
