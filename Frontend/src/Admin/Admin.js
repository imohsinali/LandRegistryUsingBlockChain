import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Protected from "./Protected";
import Home from "../Home";
import AddLandInspector from "./AddLandInspector";
import AllLandInspector from "./AllLandInspector";

function Admin() {
  const login =localStorage.getItem("login")
  // let login= false
  
  return (
    <Router>
      <Routes>
       {/* <Route  path="/" element={<Home />} /> */}
      
     <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Protected Component={Dashboard} />} />
      
      <Route
        path="alllandinspector" element={<Protected Component={AllLandInspector} />}

      />
      <Route
        path="addlandinspector"
        element={<Protected Component={AddLandInspector} />}
      />
      
    </Routes>
      
    </Router>
  );
}

export default Admin;
