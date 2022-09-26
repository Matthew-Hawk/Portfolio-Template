import "./Header.scss"
import { NavLink } from "react-router-dom";


function Header() {
    return (
      <div className="header">
        <div className="title">
         <NavLink to='/' className="title__link">
          <p className="title__name">Edgar Wright</p>
         </NavLink>
        </div>
     </div>
    );
  }
  
  export default Header;
  