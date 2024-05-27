import 'devextreme/dist/css/dx.light.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NavBar from "./Components/NavBar";
import Hostel from "./Pages/Hostel/Hostel";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Complain from "./Pages/Complain";
import Mess from "./Pages/Mess/Mess";
import Footer from "./Components/Footer";
import Attendance from "./Pages/Hostel/Attendance";
import SideBar from "./Components/SideBar";
import Apply from "./Pages/Hostel/Apply";
import Profile from "./Pages/Hostel/Profile";
import Particlesbg from "./Components/Particlesbg";

const WrapContent=()=>{
  const location=useLocation();
  const ActiveParticles=location.pathname==="/login"||location.pathname==="/register";

  return (
    <>
    {ActiveParticles && <Particlesbg/>}
    
             <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route exact path="/register" element={<Register />} />
               <Route exact path="/login" element={<Login />} />
               <Route exact path="/complain" element={<Complain />} />
               <Route exact path="/hostel/apply" element={<Apply />} />
               <Route exact path="/hostel/attendance" element={<Attendance/>} />
               <Route exact path="/mess" element={<Mess />} />
               <Route exact path="/hostel/profile" element={<Profile/>}/>
             </Routes>
          
    </>
  );
};
const App=()=>{
  return(
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
          <WrapContent/>
           </div>
         </div>
         <div className="footer">
           <Footer />
         </div>
       </div>
     </Router>
  )
}

export default App;
