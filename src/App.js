import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GeneralHomePage from './pages/generalHome/GeneralHomePage';
import About from './components/about/About'
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralHomePage/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
