import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
import Certifications from './Pages/Certifications';
import Workshops from './Pages/Workshops';
import Project from './Pages/Project';
import Contactme from './Pages/Contact me';
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
        <Route path='Certifications'element={<Certifications/>}/>
        <Route path='Workshops'element={<Workshops/>}/>
        <Route path='Contactme'element={<Contactme/>}/>
        <Route path='Project'element={<Project/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
