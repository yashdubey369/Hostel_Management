import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import SideNav from './Components/SideNav';
import Hostel from './Pages/Hostel';
import Mess from './Pages/Mess';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <SideNav/>
      <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/hostel" element={<Hostel/>}/>
            <Route exact path="/mess" element={<Mess/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
