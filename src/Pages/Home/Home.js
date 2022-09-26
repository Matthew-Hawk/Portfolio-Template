import './Home.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Posters from '../../Assets/Movie-Posters/Posters'
import ShaunPoster from '../../Assets/Movie-Posters/Shaun of the dead poster.jpg'
import HotPoster from '../../Assets/Movie-Posters/Hot Fuzz poster.jpg'
import EndPoster from '../../Assets/Movie-Posters/Worlds end poster.jpg'
import BabyPoster from '../../Assets/Movie-Posters/Baby-Driver-Poster.jpg'
import ScottPoster from '../../Assets/Movie-Posters/Scott-Poster.jpg'
import LastPoster from '../../Assets/Movie-Posters/Last-Poster.jpg'

function Home() {

    const[width, setWidth] = useState()

    const car = useRef()

    useEffect(() =>{
        console.log(car.current.scrollWidth, car.current.offsetWidth)
        setWidth(car.current.scrollWidth - car.current.offsetWidth)
      }, [])

    useEffect(() =>{
        setWidth(car.current.scrollWidth - car.current.offsetWidth)
      }, [window.innerWidth])


  return (
    <div className="home">
      {/* <iframe src="https://giphy.com/embed/H62QNi23QLLlF8Ly9i" width="280" height="280" frameBorder="" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/workingtitlefilms-simon-pegg-shaun-of-the-dead-nick-frost-H62QNi23QLLlF8Ly9i"></a></p> */}
      <motion.div 
              ref={car} 
              whileTap={{cursor: "grabbing"}}
              className="carousel">
                    <motion.div
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className="carousel__inner">
                      {/* Shaun Poster */}
                      <motion.div className='carousel__poster'>
                        <Link  to='/shaun'>
                          <img src={ShaunPoster} />
                          <p className='arousel_title'>Shaun of the Dead</p>
                        </Link>
                        </motion.div>
                      {/* Hot Fuzz Poster */}
                      <motion.div className='carousel__poster'>
                        <Link to='/hotfuzz'>
                          <img src={HotPoster} />
                          <p className='carousel_title'>Hot Fuzz</p>
                        </Link>
                        </motion.div>
                      {/* The Worlds End Poster */}
                      <motion.div className='carousel__poster'>
                        <Link to='/worldsend'>
                          <img src={EndPoster} />
                          <h2 className='arousel_title'>The Worlds End</h2>
                        </Link>
                        </motion.div>
                      {/* Baby Driver Poster */}
                      <motion.div className='carousel__poster'>
                        <Link to='/babydriver'>
                          <img src={BabyPoster} />
                          <h2 className='arousel_title'>Baby Driver</h2>
                        </Link>
                      </motion.div>
                      {/* Scott Pilgrim Poster */}
                      <motion.div className='carousel__poster'>
                        <Link to='/scott'>
                          <img src={ScottPoster} />
                          <h2 className='arousel_title'>Scott Pilgrim</h2>
                        </Link>
                      </motion.div>
                      {/* Last Night in Soho Poster */}
                      <motion.div className='carousel__poster'>
                        <Link to='/last'>
                          <img src={LastPoster} />
                          <h2 className='arousel_title'>Last Night in Soho</h2>
                        </Link>
                      </motion.div>

                    </motion.div>
            </motion.div>
      <div className='button-div'>
        <Link to='/about'>
        <button className='button-div__btn'>About</button>
        </Link>
      </div>
    </div>
  )
}

export default Home