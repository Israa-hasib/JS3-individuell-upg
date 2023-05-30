import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Add from './pages/Add'
import Footer from './components/Footer/Footer'
import Update from './pages/Update'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<Home />} />
          <Route path='product-details/:id' element={<ProductDetails />} />
          <Route path='login' element={<Login />} />
          <Route path='add' element={<Add />} />
          <Route path='update/:id' element={<Update />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App