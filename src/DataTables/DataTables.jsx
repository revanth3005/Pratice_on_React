import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "jquery/dist/jquery.min.js";
import $, { error } from "jquery";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DataTables = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/Student")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));

    $(function(){
      setTimeout(()=>{
        $('#tab').DataTable()
      },1000)
    })

  
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Data Tables</h1>
            <table className="table table-bordered" id="tab">
              <thead>
                <tr>
                  <td>S-No</td>
                  <td>Name</td>
                  <td>Address</td>
                </tr>
              </thead>
              <tbody>
                {data.map((val) => {
                  return (
                    <tr key={val.id}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTables;
