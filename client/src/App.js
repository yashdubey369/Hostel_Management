import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SideNav/>
      <HomePage/>
    </div>
  );
}

export default App;
