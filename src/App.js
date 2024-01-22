import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Genres from './pages/Genres';
import Albums from './pages/Albums';
import ArtistSearchBox from './components/ArtistSearchBox';

function App() {
  return (
    <div className="App">
      <Navbar className="--main-nav" />
      <div className="--routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artistnametest" element={<ArtistSearchBox onArtistClick={c => console.log(c)} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
