import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import HomePage from './pages/homePage/HomePage';
import ServicePage from './pages/servicePage/ServicePage';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutPage/>
      <ServicePage/>
    </div>
  );
}

export default App;
