import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bands from './components/bands';
import Header from './components/header';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Header />
            <Bands />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
