import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Hostel from "./Pages/Hostel/Hostel";
import Mess from "./Pages/Mess/Mess";
import Footer from "./Components/Footer";
import Attendance from "./Pages/Hostel/Attendance";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="header">
            <NavBar />
          </div>
          <div className="main">
            <div className="left">
              <SideBar/>
            </div>
            <div className="right">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/hostel" element={<Hostel />} />
                <Route exact path="/hostel/attendance" element={<Attendance/>} />
                <Route exact path="/mess" element={<Mess />} />
              </Routes>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
