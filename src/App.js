import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Inicio from './components/pages/Inicio.js';
import AboutUs from './components/pages/AboutUs.js';
import Shop from './components/pages/Shop.js';
import NavBar from './components/navegation/Navbar.js';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBar /> }>
    <Route index element={ <Inicio /> } />
    <Route path='aboutUs' element={ <AboutUs /> } />
    <Route path='shop' element={ <Shop /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
