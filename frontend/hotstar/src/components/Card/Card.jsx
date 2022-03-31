import "./Card.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Card = ({id,title, discription,imageUrl}) => {
    let baseImgUrl = 'https://image.tmdb.org/t/p/original'// + imageUrl

    const [data, setData] = useState({})
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
      const a = await axios.get(url)
      setData(a.data)
    }
    
    useEffect(() => { getData() }, []) 
    return <Link to={`/movie/${id}`}><div 
       style={{
            backgroundImage: `url(${baseImgUrl+data.poster_path})`,
        }}
        className="row-card"
    >
        <div className="wrap">
            <div className="card-gradient"> 
                <div className="card-content">
                    <h3>{data.title}</h3>
                    <p>{data.tagline} </p>
                </div>
            </div>
        </div>
    </div>
    </Link>
} 


//discription : 'https://api.themoviedb.org/3/movie/852659?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US'