import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dasboard/Dashboard";
import LandGallery from "./components/Dasboard/LandGallery";
import Layout from "./components/Dasboard/Layout";
function App() {
  // return <LandGallery />;
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Layout co={<Dashboard />} title={"DashBoard"} />}
        />
        <Route
          path="/landgallery"
          element={<Layout co={<LandGallery />} title={"LandGallery"} />}
        />
        <Route
          path="/profile"
          element={<Layout co={<Registration />} title={"Profile"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
