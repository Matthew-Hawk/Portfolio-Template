import "../Movie-Styles/Movie-Styles.scss"
import axios from 'axios'
import {motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import Photos from '../../Assets/Worlds-End/Worlds'

function Shaun() {
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()
    const[width, setWidth] = useState(0)

    const carousel = useRef()
    const API = "http://localhost:8080/worldsend"
    const trailer = 'https://www.youtube.com/watch?v=n__1Y-N5tQk&ab_channel=RottenTomatoesTrailers'


    useEffect(() =>{
        axios.get(API)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.original_title)
            setOverview(response.data.overview)
            setTagline(response.data.tagline)
            console.log(response.data)
        })
    }, [])

    useEffect(() =>{
        // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])


  return (
    <div className="movie">
        <a className="movie__link" href={trailer}>
            <h1 className="movie__title">{title}</h1>
        </a>
        <p className="movie__tagline">{tagline}</p>
        <div className="overview">
            <motion.div 
                ref={carousel} 
                whileTap={{cursor: "grabbing"}}
                className="carousel">
                    <motion.div
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className="carousel__inner">
                        {Photos.map(pic => {
                            return(
                                <motion.div className="carousel__item">
                                    <a href="https://www.youtube.com/watch?v=f9XZqB6pI5E&ab_channel=thecoolidge"> 
                                    <img src={pic} alt='photo taken from movie' />
                                    </a>
                                </motion.div>
                            )
                        })}
                    </motion.div>
            </motion.div>
            <h2 className="overview__title">Overview:</h2>
            <p className="overview__info">{overview}</p>
        </div>
    </div>
  )
}

export default Shaun