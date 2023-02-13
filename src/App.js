import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GeneralHomePage from './pages/generalHome/GeneralHomePage';
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Services from './components/service/Services';
import Project from './components/project/Project';
// import Thanks from './components/contact/Thanks';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralHomePage/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='/thanks' element={<Thanks/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
