import './Footer.scss'
import GitHub from "../../Assets/Icons/logo-github.svg"
import LinkedIn from "../../Assets/Icons/logo-linkedin.svg"

function Footer() {


  return (
    <div className='footer'>
        <a href="https://www.linkedin.com/in/matthew-hawk/">
        <img className='footer__logo' src={LinkedIn}></img>
        </a>
        <a href="https://github.com/Ados4453">
        <img className='footer__logo' src={GitHub}></img>
        </a>
    </div>
  )
}

export default Footer