//Style Sheet
import './App.scss'
// other important stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Shaun from './Pages/Shaun of the dead/Shaun'

function App() {
  return (
   <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shaun' element={<Shaun />} />

      </Routes>
    </BrowserRouter>
    <Footer />
   </>
  );
}

export default App;
