import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='Aboutus'element={<Aboutus/>}/>
        <Route path='Experience'element={<Experience/>}/>
        <Route path='Qualification'element={<Qualification/>}/>
        <Route path='Skills'element={<Skills/>}/>
        <Route path='Hobbies'element={<Hobbies/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
