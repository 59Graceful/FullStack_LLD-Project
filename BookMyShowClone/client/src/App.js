import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/index';
import Admin from './pages/Admin/index';
import TheatresForMovie from './pages/TheatresForMovie';
import PaymentSuccess from './pages/PaymentSuccess/paymentSuccess';
import BookShow from './pages/BookShow';
import "./stylesheets/alignment.css"
import "./stylesheets/custom.css";
import "./stylesheets/form-element.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";
import ProtectedRoute from "./Components/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path = "/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path = "/login" element={<Login />}/>
        <Route path = "/register" element={<Register />}/>
        <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path = '/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
        <Route path = "/movie/:id" element={<ProtectedRoute><TheatresForMovie /></ProtectedRoute>}/>
        <Route path = "/book-show/:id" element={<ProtectedRoute><BookShow /></ProtectedRoute>}/>
        <Route path = "/payment-success" element={<ProtectedRoute><PaymentSuccess /></ProtectedRoute>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
