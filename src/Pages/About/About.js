import './About.scss'
import Photo from '../../Assets/Photos/Edgar_Wright.jpg'

function About() {
  return (
    <div className='about'>
        <div className='photo-div'>
            <img className='photo-div__pic' src={Photo} alt="Portrait of Edgar Wright"></img>
            <p className='photo-div__i'>(Edgar Wright)</p>
        </div>
        <p className='about__info'>Edgar Howard Wright (born 18 April 1974) is an English director, screenwriter, producer, and actor. He is best known for his comedic Three Flavours Cornetto film trilogy consisting of Shaun of the Dead (2004), Hot Fuzz (2007), and The World's End (2013), made with recurrent collaborators Simon Pegg, Nira Park and Nick Frost. He also collaborated with them as the director of the television series Spaced.</p>
    </div>
  )
}

export default About