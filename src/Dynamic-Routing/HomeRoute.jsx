import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const HomeRoute = () => {

    const [data,setData]=useState([])
    useEffect(() => {
        const url = "http://localhost:4000/Student";
        axios
          .get(url)
          .then((response) => {
            //student=response.data
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
                        <div >
                            {
                                data.map((val)=>{
                                    return(
                                        <NavLink to={`/DataDisplay/${val.id}`} key={val.id}>
                                            <button className="btn"  >{val.id}</button>
                                        </NavLink>
                                    )
                                })
                            }
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomeRoute;
