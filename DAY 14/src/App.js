import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import Home from './Components/Login/Register/Home';
import Aboutus from './Components/Login/Aboutus';
import { Provider } from 'react-redux';
import store from './Components/Login/Store';
import Reduxlist from './Components/Login/Register/Reduxlist';
import Dashboard from './Components/Login/Dashboard';
import FAQ from './Components/Login/Faq';
import Footer from './Components/Login/Footer';
import Privacy from './Components/Login/Privacy';
import Donarlog from './Components/Login/Donarlog';
import ContactUs from './Components/Login/ContactUs';
import Donorsta from './Components/Login/Donorsta';
import Feedback from './Components/Login/Feedback';
import Terms from './Components/Login/Terms';
import AdminPanel from './Components/Login/Panel';
import Admin from './Components/Login/Admin';
import DonarRegister from './Components/Login/DonarRegister';
import Reg from './Components/Login/Reg';

const App = () => {
    return (
      <Provider store={store}>
        
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/list" element={<Reduxlist/>}/>
      < Route path="/faq" element={<FAQ/>}/>
      < Route path="/footer" element={<Footer/>}/>
      < Route path="/privacy" element={<Privacy/>}/>
      < Route path="/dolo" element={<Donarlog/>}/>
      < Route path="/contact" element={<ContactUs/>}/>
      < Route path="/donorsta" element={<Donorsta/>}/>
      < Route path="/feedback" element={<Feedback/>}/>
      < Route path="/terms" element={<Terms/>}/>
      < Route path="/panel" element={<AdminPanel/>}/>
      < Route path="/admin" element={<Admin/>}/>
      < Route path="/DonarRegister" element={<DonarRegister/>}/>
      < Route path="/Reg" element={<Reg/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    );
};

export default App;
