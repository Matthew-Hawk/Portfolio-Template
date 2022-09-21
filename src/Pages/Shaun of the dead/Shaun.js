import "./Shaun.scss"
import Couch from "../../Assets/Photos/05-couch.png"
import axios from 'axios'
import {useState, useEffect} from "react"

function Shaun() {
    const[title, setTitle] = useState()
    const[poster, setPoster] = useState()

    useEffect((req,res) =>{
        axios.get("https://api.themoviedb.org/3/movie/747?api_key=1982fd1af252ec342c42890ca80f692a&language=en-US")
        .then((res) => {
            console.log(res.data)
            setTitle(res.data.original_title)
            setPoster(res.data.poster_path)
        })
    }, [])


  return (
    <div className="home">
        <h1 className="home__title">
            {title}
        </h1>
        <div className="content-div">
        <img className="content-div__pic" src={Couch} />
        </div>

    </div>
  )
}

export default Shaun