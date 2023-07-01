import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Addproduct from './component/Addproduct';
import Test from './component/Test';
import Footer from './component/Footer';
import Login from './component/Login';
import EditProduct from './component/EditProduct';
import ProductDetail from './component/ProductDetail'
import Login1 from './component/Login1';

function App() {
  return (
    <>
    <Navbar /><Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<Addproduct/>} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/login1" element={<Login1 />} ></Route>
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/:id" element={<ProductDetail />} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App;
