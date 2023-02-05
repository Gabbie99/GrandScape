import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GeneralHomePage from './pages/generalHome/GeneralHomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralHomePage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
