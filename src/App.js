// import HomeRoute from "./Dynamic-Routing/HomeRoute";
// import Invalid from "../src/Dynamic-Routing/Invalid";
// import { Route, Routes } from "react-router-dom";
// import DataDisplay from "./Dynamic-Routing/DataDisplay";

// import DataTables from "./DataTables/DataTables";

// import "bootstrap/dist/css/bootstrap.min.css";
// import UseContext from "./Hooks/useContext/UseContext";
// import Usage from "./Hooks/useContext/Usage";
export default function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <nav aria-label="Large page navigation">
              <ul class="pagination pagination-lg">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <span class="page-link">2</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
            
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <Routes>
<Route path='/' element={<HomeRoute/>}/>
<Route path='/DataDisplay/:id' element={<DataDisplay/>} />
<Route path='*' element={<Invalid/>}/>
</Routes> */
}
