import "./Header.scss"
import { Link } from "react-router-dom";


function Header() {
    return (
      <div className="header">
        <div className="logo">
         <Link to='/' className="header__link">
          <p className="logo__1">FLICK</p>
          <p className="logo__2">FINDER</p>
         </Link>
        </div>
        <div className="contact">
         <Link to='/contact' className="header__link">
          <p className="contact-text">CONTACT</p>
         </Link>
        </div>
     </div>
    );
  }
  
  export default Header;
  