import './App.css';
import Headerlinkssection from './Components/Headerlinkssection';
import Aboutsection from './Aboutsection';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <div className='Header-component'>
        <Headerlinkssection/>
      </div>
      <div className='About-component'>
     <Aboutsection/>
      </div>
      <div className='services-component'>
        <Services/>
      </div>
    </div>
  );
}

export default App;
