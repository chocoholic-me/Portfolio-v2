import React from 'react';
import { useState } from 'react';
import Loader from './Components/Loader/Loader';
import HomePage from './Components/HomePage/HomePage';
import ReactGA from 'react-ga';
import './Resources/Colors.css'
import './App.css';

//Initialize Google Analytics
function initializeAnalytics() {
  const trackingId = ""; // Add your Google Analytics Token here
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/HomePage');
}

function App() {
  initializeAnalytics();
  const [ Loaded, setLoaded ] = useState(false);
  setTimeout( () => {
    setLoaded(true)
  },
  5100 )
  return (
    <div className="App">
      {
        Loaded ? <HomePage /> : <Loader />
      }
    </div>
  );
}

export default App;
