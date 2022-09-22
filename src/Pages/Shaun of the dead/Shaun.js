import "./Shaun.scss"
import Couch from "../../Assets/Photos/05-couch.png"
import axios from 'axios'
import {useState, useEffect} from "react"

function Shaun() {
    const[title, setTitle] = useState()
    const[overview, setOverview] = useState()
    const[tagline, setTagline] = useState()

    const API = "http://localhost:8080/shaun"


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
    <div className="shaun">
        <a className="shaun__link" href="https://www.youtube.com/watch?v=f9XZqB6pI5E&ab_channel=thecoolidge">
            <h1 className="shaun__title">{title}</h1>
        </a>
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