import logo from './logo.svg';
import './App.css';
import Component from './Component';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Component1 from './Component1';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Component/>}/>
            <Route path='Component1' element={<Component1/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
