import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
