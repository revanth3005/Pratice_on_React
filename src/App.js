// import HomeRoute from "./Dynamic-Routing/HomeRoute";
// import Invalid from "../src/Dynamic-Routing/Invalid";
// import { Route, Routes } from "react-router-dom";
// import DataDisplay from "./Dynamic-Routing/DataDisplay";


import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Address from './wallet_Address/Address';

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

           <Address/>
            
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
