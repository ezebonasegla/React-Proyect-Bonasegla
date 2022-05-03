import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navegation/Navbar'
import Inicio from './components/pages/Inicio'
import AboutUs from './components/pages/AboutUs'
import Shop from './components/pages/Shop'
import Cart from './components/pages/Cart'

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={<Inicio data={data} />}></Route>
          <Route path='/aboutUs' exact component={<AboutUs />}></Route>
          <Route path='/shop' exact component={<Shop />}></Route>
          <Route path='/cart' exact component={<Cart />}></Route>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
