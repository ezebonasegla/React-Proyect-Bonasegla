import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Inicio from './components/pages/Inicio.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import Shop from './components/pages/Shop.jsx';
import NavBar from './components/navegation/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Inicio />} />
            <Route path='aboutUs' element={<AboutUs />} />
            <Route path='shop' element={<Shop />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={'Hola soy el ItemListContainer'} />
    </div>
  );
}

export default App;
