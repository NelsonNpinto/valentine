import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import SplashScreen from './screens/SplashScreen.jsx';
import Question from './screens/Question.jsx';
import MessageYes from './screens/MessageYes.jsx';
import MessageNo from './screens/MessageNo.jsx';
import SpinWheel from './screens/SpinWheel.jsx';
import Coupons from './screens/Coupons.jsx';
import LetterClosed from './screens/LetterClosed.jsx';
import LetterOpen from './screens/LetterOpen.jsx';

function AppContent() {
  const navigate = useNavigate();
  const [spinsLeft, setSpinsLeft] = useState(3);
  const [wonCoupons, setWonCoupons] = useState([]);

  const resetState = () => {
    setSpinsLeft(3);
    setWonCoupons([]);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<SplashScreen navigate={navigate} />} />
        <Route path="/question" element={<Question />} />
        <Route path="/message-yes" element={<MessageYes />} />
        <Route path="/message-no" element={<MessageNo />} />
        <Route 
          path="/spin-wheel" 
          element={
            <SpinWheel 
              spinsLeft={spinsLeft} 
              setSpinsLeft={setSpinsLeft}
              wonCoupons={wonCoupons}
              setWonCoupons={setWonCoupons}
            />
          } 
        />
        <Route path="/coupons" element={<Coupons wonCoupons={wonCoupons} />} />
        <Route path="/letter-closed" element={<LetterClosed />} />
        <Route path="/letter-open" element={<LetterOpen resetState={resetState} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
