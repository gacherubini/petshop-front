import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

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
    </Routes>
    </main>
    <footer> 
      <Footer/> 
    </footer>
  </BrowserRouter>
  )
}

export default App
