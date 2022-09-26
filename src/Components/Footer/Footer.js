import './Footer.scss'
import GitHub from "../../Assets/Icons/logo-github.svg"
import LinkedIn from "../../Assets/Icons/logo-linkedin.svg"
import Logo from "../../Assets/TMDB_Logo/TMDB Logo.svg"

function Footer() {


  return (
    <div className='footer'>
      <a href="https://www.linkedin.com/in/matthew-hawk/">
        <img className='footer__logo' src={LinkedIn}></img>
        </a>
        <a href="https://github.com/Ados4453">
        <img className='footer__logo' src={GitHub}></img>
        </a>
        <img className='footer__api' src={Logo} />
    </div>
  )
}

export default Footer