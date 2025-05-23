
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Courses from './components/Courses';
import  Home  from './components/Home';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>} />
        <Route path="/course" element={<><Header/><Courses/></>} />
        <Route path="/Signup" element={<><Header/><SignUp/></>} /> 
        <Route path="/login" element={<><Header/><Login/></>} /> 
        <Route path="/profile" element={<><Header/><Profile/></>} /> 
      </Routes>
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
    </>
  )
}

export default App
