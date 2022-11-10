import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const FunctionComp = () => {
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState({ id: "", name: "", address: "" });
  const [edit, setEdit] = useState({ id: "", name: "", address: "" });
  const [render, setRender] = useState(false);

  useEffect(() => {
    const url = "http://localhost:4000/Student";
    axios
      .get(url)
      .then((response) => {
        //student=response.data
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const onClickDel = (id) => {
    const url = "http://localhost:4000/Student/";
    axios
      .delete(url + id)
      .then((response) => {
        console.log("user deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeHandel = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/Student";
    axios
      .post(url, user)
      .then((response) => {
        console.log("user created");
        setUser({ id: "", name: "", address: "" })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //editing

  const onEdit = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const onClickEdit = (id) => {
    setRender(true);

    const url = "http://localhost:4000/Student/";
    axios
      .get(url + id)
      .then((response) => {
        setEdit(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/Student/" + edit.id, edit)
      .then((res) => {
        console.log(res);
        setRender(false);
      })
      .catch((er) => console.log(er));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="form" onSubmit={onSubmitForm}>
              <div className="col-md-4">
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Id"
                  value={user.id}
                  className="form-control"
                  onChange={onChangeHandel}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={user.name}
                  className="form-control"
                  onChange={onChangeHandel}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={user.address}
                  className="form-control"
                  onChange={onChangeHandel}
                  required
                />
              </div>
              <div className="col-md-4">
               <input type="submit" value='Create-user' className="btn btn-primary" />
              </div>
            </form>

            {render ? (
              <form className="form">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="id"
                    id="id"
                    placeholder="Id"
                    value={edit.id}
                    className="form-control"
                    onChange={onEdit}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={edit.name}
                    className="form-control"
                    onChange={onEdit}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={edit.address}
                    className="form-control"
                    onChange={onEdit}
                  />
                </div>
                <div className="col-md-4">
                  <button onClick={onUpdate} className="btn btn-secondary">
                    Update-User
                  </button>
                </div>
              </form>
            ) : null}

            <table className="table">
              <thead>
                <tr>
                  <td>
                    <strong>Sno</strong>
                  </td>
                  <td>
                    <strong>name</strong>
                  </td>
                  <td>
                    <strong>address</strong>
                  </td>
                  <td>
                    <strong>Action</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                {student.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.address}</td>
                      <td>
                        <button
                          onClick={() => onClickDel(data.id)}
                          className="btn btn-danger"
                        >
                          Del
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-secondary"
                          onClick={() => onClickEdit(data.id)}
                        >
                          edit
                        </button>
                      </td>
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

export default FunctionComp;
