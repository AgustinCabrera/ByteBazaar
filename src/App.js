import './App.css';
import {NavBar} from './components/NavBar';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" />
            <Route path = "/cart" />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
