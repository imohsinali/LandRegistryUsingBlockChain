import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard/Dashboard";
import LandGallery from "./components/Dasboard/LandGallery";
import Protected from "./components/Protected";
import Home from "./Home";
function App() {
  const login =localStorage.getItem("login")
  // let login= false
  
  return (
    <Router>
      <Routes>
       <Route  path="/" element={<Home />} />
      
       <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Protected Component={Dashboard} />} />
      <Route
        path="profile"
        element={<Protected Component={Registration} />}
      />
      <Route
        path="landgallery"
        element={<Protected Component={LandGallery} />}
      />
    </Routes>
      
    </Router>
  );
}

export default App;
