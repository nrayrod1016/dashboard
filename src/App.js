
import './App.css';
import Reviews from './reviews'
import Ratings from './ratings'
import Analysis from './Analysis'
import Visitors from './visitors'

function App() {
  return (
    <div className="app"> 
        <div className="sidebar">
              <h4 className='items'> Dashboard </h4>
              <h4 className='items'> Widget </h4>
              <h4 className='items'>Review </h4>
              <h4 className='items'> Customers </h4>
              <h4 className='items'> Online Analysis</h4>
              <h4 className='items'> Settings</h4>
        </div>
        <div className="board"> 
            <div className="top-bar">
                <Reviews />
                <Ratings />
                <Analysis />
              </div>
             <div className="bottom-bar">
                <Visitors />
              </div>
        </div>
        
       
    </div>

  );
}

export default App;
