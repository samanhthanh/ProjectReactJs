import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Addproduct from './component/Addproduct';
import Test from './component/Test';
import Footer from './component/Footer';
import Login from './component/Login';

function App() {
  return (
    <>
    <Navbar /><Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<Addproduct/>} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/add/:id" element={<Addproduct />} />
      
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App;
