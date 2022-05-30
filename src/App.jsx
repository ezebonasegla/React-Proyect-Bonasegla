import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Inicio from './components/pages/Inicio.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import Shop from './components/pages/Shop.jsx';
import Cart from './components/Cart/Cart.jsx';
import NavBar from './components/navegation/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Inicio />} />
              <Route path='aboutUs' element={<AboutUs />} />
              <Route path='shop' element={<Shop />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='*' element={<Navigate replace to="/" />} />
              <Route path="/detail/:id/:name" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
