import './Hot-Fuzz.scss'
import Photo from '../../Assets/Photos/Hot-Fuzz.jpg'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Shaun() {
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()

    const API = "http://localhost:8080/hotfuzz"


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


  return (
    <div className="home">
        <a className='home__link' href='https://www.youtube.com/watch?v=ayTnvVpj9t4&ab_channel=Movieclips'>
        <h1 className="home__title">{title}</h1>
        </a>
        <p className="home__tagline">{tagline}</p>
        <div className="content">
            <img className="content__pic" src={Photo} />
            <h2 className="content__ovT">Overview:</h2>
            <p className="content__info">{overview}</p>
        </div>

    </div>
  )
}

export default Shaun