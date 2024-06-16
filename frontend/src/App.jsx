import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Compiler from './Components/Compiler';
import Blogs from './Components/Blogs';
import { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pageIndex,setPageIndex]=useState("home");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Router>
        <div>
          <Navbar pageIndex={pageIndex} setPageIndex={setPageIndex} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/compiler" element={<Compiler/>} />
          <Route path="/blogs" element={<Blogs/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
