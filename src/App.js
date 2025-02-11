import './App.css';
import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import NonExistentPage from './components/NonExistentPage';
import PromptUser from './components/PromptUser';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

const converter = require('number-to-words');

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [source, setSource] = useState('');

  // Generate a random number and convert it to words
  const random_number = Math.floor(Math.random() * 10000); // Generates a number from 0 to 9999
  const random_alpha_num = converter.toWords(random_number);

  // Function to generate a unique image URL
  const generateImage = () => {
    const imageUrl = `https://robohash.org/stefan-${random_alpha_num}`;
    setSource(imageUrl);
    console.log("Generated Image Source:", imageUrl);
  };

  useEffect(() => {
    generateImage();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setUserInfo(prevInfo => ({
      ...prevInfo, // ✅ Preserves existing user data
      [name]: value // ✅ Updates only the changed field
    }));
  }



  // ✅ Use `useNavigate` inside a component wrapper
  function NavigateWrapper() {
    const navigate = useNavigate();

    function handleButtonClick() {
      alert(`WINDOWS DIMENSION: ${window.innerWidth}, ${window.innerHeight}`);
      navigate('/resume');
    }

    return (
      <Routes>
        <Route
          path="/"
          element={<PromptUser userobject={userInfo} imageSource={source} onButtonClick={handleButtonClick} handleChange={handleChange} />}
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
    );
  }

  return (
    <Router>
      <NavigateWrapper />
    </Router>
  );
}

export default App;
