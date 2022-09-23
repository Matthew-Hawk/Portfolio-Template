import './Hot-Fuzz.scss'
import axios from 'axios'
import {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import images from '../../Assets/Hot-Fuzz/Hot-img.js'

function Shaun() {
    //state list
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()
    const[width, setWidth] = useState()
    //variable list
    const caroesel = useRef()
    const API = "http://localhost:8080/hotfuzz"
    const trailer = "https://www.youtube.com/watch?v=ayTnvVpj9t4&ab_channel=Movieclips"

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
        // console.log(caroesel.current.scrollWidth, caroesel.current.offsetWidth)
        setWidth(caroesel.current.scrollWidth - caroesel.current.offsetWidth)
    }, [])

  return (
    <div className="movie">
        <a className="movie__link" href={trailer}>
            <h1 className="movie__title">{title}</h1>
        </a>
        <p className="movie__tagline">{tagline}</p>
        <div className="cont">
            <motion.div 
                ref={caroesel} 
                whileTap={{cursor: "grabbing"}}
                className="carousel">
                    <motion.div
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className="carousel__inner">
                        {images.map(pic => {
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
            <h2 className="cont__ovT">Overview:</h2>
            <p className="cont__info">{overview}</p>
        </div>
    </div>
  )
}

export default Shaun