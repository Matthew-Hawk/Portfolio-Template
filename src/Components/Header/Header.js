import "./Header.scss"
import { Link, NavLink } from "react-router-dom";


function Header() {
    return (
      <div className="header">
        <div className="logo">
         <NavLink to='/' className="__link">
          <p className="logo__1">FLICK</p>
          <p className="logo__2">FINDER</p>
         </NavLink>
        </div>
        <div className="contact">
         <NavLink to='/contact' className="header__link">
          <navl className="contact__text">CONTACT</navl>
         </NavLink>
        </div>
     </div>
    );
  }
  
  export default Header;
  