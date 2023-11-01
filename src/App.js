import './App.css';
import Headerlinkssection from './Components/Headerlinkssection';
import Aboutsection from './Aboutsection';
import Services from './Components/Services';
import Myworks from './Components/Myworks';
import Contactme from './Components/Contactme';
import Getintouchsection from './Components/Getintouchsection';

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
      <div className='My-works-component'>
        <Myworks/>
      </div>
      <div className='Contactme-component'>
        <Contactme/>
      </div>
      <div className='Getintouchcomponent'>
  <Getintouchsection/>
      </div>
    </div>
  );
}

export default App;
