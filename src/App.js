//Style Sheet
import './App.scss'
// other important stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Shaun from './Pages/Shaun of the dead/Shaun'
import Hot from './Pages/Hot Fuzz/Hot-Fuzz'
import End from './Pages/Worlds End/Worlds-End'
import Baby from './Pages/Baby Driver/Baby-Driver';
import Scott from './Pages/Scott/Scott'
import Last from './Pages/Last Night/Last-Night'
import About from './Pages/About/About';

function App() {
  return (
   <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/shaun' element={<Shaun />} />
        <Route path='/hotfuzz' element={<Hot />}/>
        <Route path='/worldsend' element={<End />}/>
        <Route path='/babydriver' element={<Baby />}/>
        <Route path='/scott' element={<Scott />}/>
        <Route path='/last' element={<Last />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
   </>
  );
}

export default App;
