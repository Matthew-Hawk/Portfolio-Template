import "./Shaun.scss"
import Couch from "../../Assets/Photos/05-couch.png"
import axios from 'axios'
import {useState, useEffect} from "react"

function Shaun() {
    const[title, setTitle] = useState()
    const[poster, setPoster] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()

    const API = "http://localhost:8080/shaun"


    useEffect(() =>{
        axios.get(API)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.original_title)
            setPoster(response.data.poster_path)
            setOverview(response.data.overview)
            setTagline(response.data.tagline)
            console.log(response.data)
        })
    }, [])


  return (
    <div className="home">
        <h1 className="home__title">
            {title}
        </h1>
        <p className="content__info">{tagline}</p>
        <div className="content">
        <img className="content__pic" src={Couch} />
        <p className="content__info">{overview}</p>
        </div>

    </div>
  )
}

export default Shaun