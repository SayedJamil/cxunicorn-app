
import { useEffect, useState } from 'react';
import './App.css';
import VideoComponent from './components/videocomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoFullPage from './components/VideoFullPage';
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fullvideo" element={<VideoFullPage />} />
      </Routes>
    </div>
  );
}

export default App;
