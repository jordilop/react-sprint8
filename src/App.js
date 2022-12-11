import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import StarShips from './components/StarShips/StarShips';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/starships" element={<StarShips />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
