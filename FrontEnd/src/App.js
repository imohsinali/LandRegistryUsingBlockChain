import Dashboard from "./components/Dasboard/Dashboard";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandGallery from "./components/Dasboard/LandGallery";
function App() {
  // return <Registration />;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/landgallery"
          element={<Dashboard props={<LandGallery />} />}
        />
        <Route
          path="/profile"
          element={<Dashboard props={<Registration />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
