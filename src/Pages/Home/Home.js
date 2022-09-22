import './Home.scss'
import Photo1 from "../../Assets/Photos/05-couch.png"
import Photo2 from "../../Assets/Photos/01 (900).jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="home">
      <iframe src="https://giphy.com/embed/H62QNi23QLLlF8Ly9i" width="280" height="280" frameBorder="" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/workingtitlefilms-simon-pegg-shaun-of-the-dead-nick-frost-H62QNi23QLLlF8Ly9i"></a></p>
      <div className='button-div'>
        <button className='button-div__btn'>About</button>
        <Link to='/shaun'>
          <button className='button-div__btn'>Shaun of the Dead</button>
        </Link>
        <Link to='/hotfuzz'>
          <button className='button-div__btn'>Hot Fuzz</button>
        </Link>
        <Link to='/worldsend'>
          <button className='button-div__btn'>Worlds End</button>
        </Link>
      </div>
    </div>
  )
}

export default Home