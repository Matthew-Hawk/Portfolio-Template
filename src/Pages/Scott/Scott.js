import "../Movie-Styles/Movie-Styles.scss"
import axios from 'axios'
import {useRef, useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Photos from '../../Assets/Scott/Scott'

function Shaun() {
    //state list
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()
    const[width, setWidth] = useState()
    //variable list
    const caroesel = useRef()
    const API = "http://localhost:8080/scott"
    const trailer = "https://www.youtube.com/watch?v=7wd5KEaOtm4"

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
        // console.log(caroesel.current.scrollWidth, caroesel.current.offsetWidth)
        setWidth(caroesel.current.scrollWidth - caroesel.current.offsetWidth)
    }, [])

  return (
    <div className="movie">
        <a className="movie__link" href={trailer}>
            <h1 className="movie__title">{title}</h1>
        </a>
        <p className="movie__tagline">{tagline}</p>
        <div className="overview">
            <motion.div ref={caroesel} whileTap={{cursor: "grabbing"}} className="carousel">
                    <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="carousel__inner">
                        {Photos.map(pic => {
                            return(
                                <motion.div className="carousel__item"> 
                                    <img src={pic} alt='photo taken from movie' />
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