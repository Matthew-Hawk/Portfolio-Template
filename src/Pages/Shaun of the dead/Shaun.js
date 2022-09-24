import "./Shaun.scss"
import axios from 'axios'
import { useRef, useState, useEffect} from "react"
import { motion } from 'framer-motion'
import images from '../../Assets/Shaun/Shaun-Img'


function Shaun() {
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()
    const[width, setWidth] = useState(0)

    const carousel = useRef()
    const API = "http://localhost:8080/shaun"
    const trailer = "https://www.youtube.com/watch?v=f9XZqB6pI5E&ab_channel=thecoolidge"

    

    useEffect(() =>{
        axios.get(API)
        .then((response) => {
            // console.log(response.data)
            setTitle(response.data.original_title)
            setOverview(response.data.overview)
            setTagline(response.data.tagline)
            // console.log(response.data)
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
        <div className="cont">
            <motion.div 
            ref={carousel} 
            whileTap={{cursor: "grabbing"}}
            className="carousel">
                <motion.div
                 drag='x'
                  dragConstraints={{right: 0, left: -width}}
                   className="carousel__inner">
                    {images.map(pic => {
                        return(
                            <motion.div
                             className="carousel__item">
                                <motion.img src={pic} alt='photo taken from movie' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <h2 className="cont__ovT">Overview:</h2>
            <p className="cont__info">{overview}</p>
        </div>

    </div>
  )
}

export default Shaun