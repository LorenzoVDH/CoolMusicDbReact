import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Genres from './pages/Genres';
import Albums from './pages/Albums';

function App() {
  return (
    <div className="App">
      <Navbar className="--main-nav" />
      <div className="--routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/albums" element={<Albums />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
