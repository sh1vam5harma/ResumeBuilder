import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Resume from './components/Resume';
import NonExistentPage from './components/NonExistentPage';
import PromptUser from './components/PromptUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';


const converter = require('number-to-words')
function App() {
  const [userInfo, setUserInfo] = useState({});
  const [source, setSource] = useState('');
  const random_number = Math.floor(Math.random() * 10e4); // Generates a number from 0 to 9999
  const random_alpha_num = converter.toWords(random_number); // Converts number to words if using `number-to-words` package
  const getRandomNumber = (randNum) => {

    return converter.toWords(randNum)
  }
  const generateImage = () => {
    setSource('https://robohash.org/stefan-${random_alpha_num}')
    console.log(source)
  }
  useEffect(() => {
    generateImage();
  }, []);

  function handleChange(e) {
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value
    }));
  }
  // ✅ Define handleButtonClick to fix the error
  function handleButtonClick() {
    alert(`WINDOWS DIMENSION: ${window.innerWidth}, ${window.innerHeight}`);
    window.location.href = "/resume"; // Or use navigate() if inside a routed component
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PromptUser userobject={userInfo} imagesource={source} onButtonClick={handleButtonClick} handleChange={handleChange} />}
        />
        <Route
          path="/resume"
          element={<Resume userObject={userInfo || {}} imageSource={source || "https://via.placeholder.com/150"} />}
        />
        <Route
          path="*"
          element={<NonExistentPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
