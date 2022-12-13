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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/starships/:id" element={<StarShip />} />
          <Route path="/starships" element={<StarShipList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
