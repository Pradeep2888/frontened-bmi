import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<h1>welcome to home</h1>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
     </Routes>
    </div>
  );
}

export default App;
