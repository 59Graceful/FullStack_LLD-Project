import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import "./stylesheets/alignment.css"
import "./stylesheets/custom.css";
import "./stylesheets/form-element.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = "/" element={<Home />}/>
        <Route path = "/login" element={<Login />}/>
        <Route path = "/register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
