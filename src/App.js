//Style Sheet
import './App.scss'
// other important stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header'

function App() {
  return (
   <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
