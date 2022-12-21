import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import StarShipList from './components/StarShipList/StarShipList';
import StarShip from './components/StarShip/StarShip';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {

  const [isAutheticated, setIsAutheticated] = useState(false);

  useEffect(() => {
    console.log(`loggedInUser: ${isAutheticated}`);
  }, [isAutheticated]);

  return (
    <div className="App">
      <Router>
        <Nav isAutheticated={isAutheticated} setIsAutheticated={setIsAutheticated} />
        <div className="container">
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login isAutheticated={isAutheticated} setIsAutheticated={setIsAutheticated} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/starships/:id" element={isAutheticated ? <StarShip /> : <Navigate to="/login" />} />
            <Route path="/starships" element={isAutheticated ? <StarShipList /> : <Navigate to="/login" />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
