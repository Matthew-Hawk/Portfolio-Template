import './Home.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Posters from '../../Assets/Movie-Posters/Posters'


function Home() {
    const[width, setWidth] = useState()

    const caroesel = useRef()

    useEffect(() =>{
        console.log(caroesel.current.scrollWidth, caroesel.current.offsetWidth)
        setWidth(caroesel.current.scrollWidth - caroesel.current.offsetWidth)
      }, [])
  return (
    <div className="home">
      {/* <iframe src="https://giphy.com/embed/H62QNi23QLLlF8Ly9i" width="280" height="280" frameBorder="" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/workingtitlefilms-simon-pegg-shaun-of-the-dead-nick-frost-H62QNi23QLLlF8Ly9i"></a></p> */}
      <motion.div 
                ref={caroesel} 
                whileTap={{cursor: "grabbing"}}
                className="carousel">
                    <motion.div
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className="carousel__inner">
                        {Posters.map(pic => {
                            return(
                                <motion.div className="carousel__poster">
                                    <img src={pic} alt='photo taken from movie' />
                                    <h1>title</h1>
                                </motion.div>
                            )
                        })}
                    </motion.div>
            </motion.div>
      <div className='button-div'>
        <Link to='/about'>
        <button className='button-div__btn'>About</button>
        </Link>
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