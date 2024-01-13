import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Carrinho from './components/Carrinho';
import Login from './components/Login';

import './app.css'


function App() {
  return (
    <BrowserRouter>
    <header>
        <Header/>
    </header>
    <main> 
    <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/carrinho" element = {<Carrinho/>} />
                <Route path="/login" element = {<Login/>} />
    </Routes>
    </main>
    <footer> 
      <Footer/> 
    </footer>
  </BrowserRouter>
  )
}

export default App
