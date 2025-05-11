import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Navbar from './components/Navbar'; // Import the Navbar
import Footer from './components/Footer'; // Import the Footer


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          {/* main div  */}
        <Navbar /> 
        {/* main content div start after nav */}
        <div className="container mt-4  "> {/* Add some margin for content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
        {/* main div end here  */}
        <Footer /> 
        
      </div>
      {/* main div end  */}
    </BrowserRouter>
  );
}

export default App;