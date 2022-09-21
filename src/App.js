//Style Sheet
import './App.scss'
// other important stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
   </>
  );
}

export default App;
