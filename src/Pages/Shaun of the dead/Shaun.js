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
    <div className="shaun">
        <h1 className="shaun__title">
            {title}
        </h1>
        <p className="shaun__tagline">{tagline}</p>
        <div className="cont">
            <img className="cont__pic" src={Couch} />
            <h2 className="cont__ovT">Overview:</h2>
            <p className="cont__info">{overview}</p>
        </div>

    </div>
  )
}

export default Shaun