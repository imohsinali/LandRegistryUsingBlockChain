import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard/Dashboard";
import LandGallery from "./components/Dasboard/LandGallery";
import Layout from "./components/Dasboard/Layout";
import { useState } from "react";
import Protected from "./components/Protected";
function App() {
  // return <LandGallery />;
  const [login, setLogin] = useState(false);
  console.log(login);
  console.log(localStorage.getItem("login"));
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Protected Component={Dashboard} />} />
        <Route
          path="/profile"
          element={<Protected Component={Registration} />}
        />
        <Route
          path="/landgallery"
          element={<Protected Component={LandGallery} />}
        />
        {/* <Route path="/logout" element={<Protected />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
