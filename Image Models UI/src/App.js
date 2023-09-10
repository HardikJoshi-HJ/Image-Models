import './App.css';
import Navbar from './components/Navbar';
import Carausel from './components/Carausel';
import PhotoGallary from './components/PhotoGallary';
import Footer from './components/Footer';
import Login from './components/Login';
import {Switch, BrowserRouter as Router, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">

{/* <Router>
      <Switch>
        <Router exact path="/Login">
        <Login/>
        </Router>
      </Switch>
</Router> */}
      <Navbar/>
      <Carausel/>
      <PhotoGallary/>
      <Footer/>
    
    </div>
  );
}

export default App;
