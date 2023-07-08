import {Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';

const App=()=> {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
