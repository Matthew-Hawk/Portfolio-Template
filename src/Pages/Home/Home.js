import './Home.scss'
import Photo1 from "../../Assets/Photos/05-couch.png"
import Photo2 from "../../Assets/Photos/01 (900).jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="home">
      <div className='button-div'>
        <button className='button-div__btn'>About</button>
        <Link to='/shaun'>
        <button className='button-div__btn'>Shaun of the Dead</button>
        </Link>
        <Link to='/hotfuzz'>
        <button className='button-div__btn'>Hot Fuzz</button>
        </Link>
        <button className='button-div__btn'>Worlds End</button>
      </div>
    </div>
  )
}

export default Home