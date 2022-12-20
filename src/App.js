import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import StarShipList from './components/StarShipList/StarShipList';
import StarShip from './components/StarShip/StarShip';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/starships/:id" element={<StarShip />} />
            <Route path="/starships" element={<StarShipList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
