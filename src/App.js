import logo from './logo.svg';
import './App.css';
import Home from './views/app/pages/home';
import Explore from './views/app/pages/explore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewAll from './components/pages/viewAll';
import AuthLayouts from './layouts/authlayouts';
import AppLayouts from './layouts/applayouts';
import Login from './views/auth/login';
import CartPage from './components/pages/cartPage';
import Payment from './components/pages/payment';
import Success from './components/pages/success';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="login" element={<AuthLayouts />}>
          <Route  element={<Login/>} />
        </Route>
        <Route  path="/" element={<AppLayouts />}>
        <Route path='/'  element={<Home/>}/>
        <Route path='/home'  element={<Home/>}/>
        <Route path='/explore'  element={<Explore/>}/>
        <Route path="view" element={<ViewAll/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="check" element={<Payment/>}/>
        <Route path="success" element={<Success/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
