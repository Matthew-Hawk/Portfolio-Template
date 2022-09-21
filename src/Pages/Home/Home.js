import './Home.scss'
import Photo1 from "../../Assets/Photos/05-couch.png"
import Photo2 from "../../Assets/Photos/01 (900).jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';


function Home() {
  return (
    <div className="home">
      <div className='button-div'>
        <button className='button-div__btn'>About</button>
        <button className='button-div__btn'>Shaun of the Dead</button>
        <button className='button-div__btn'>Hot Fuzz</button>
        <button className='button-div__btn'>Worlds End</button>
      </div>
    </div>
  )
}

export default Home