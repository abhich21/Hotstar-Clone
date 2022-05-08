import "./CardRows.css";

import React from "react";
import { width } from "@mui/system";
import { Card } from "../Card/Card";
import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'; 
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


function CardRows({ row_title, language }) { 
  const ref = useRef(null);

const scroll = (offset) => {
  console.log(ref.current)
  ref.current.scrollLeft += offset;
};
  const{id, category} = useParams()
  const [data, setData] = useState([])

  const getData = async () => {
    const url = id?`https://api.themoviedb.org/3/${category}/${id}/similar?api_key=3d63cba818eb8bc583a23f643a655a3d`:!language?`https://api.themoviedb.org/3/trending/${category=="tv"?"tv":category=="movie"?"movie":"all"}/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`:`https://hotstar-v.herokuapp.com/movies?language=${language}`
    const a = await axios.get(url)
    setData(a.data.results)
  }
  useEffect(() => { getData() }, [id,category])
  return (
    <div className="row-title">
      <h3>{row_title}</h3>
      <div className="card-container" ref={ref}>
        <ArrowForwardIosRoundedIcon onClick={()=>{scroll(1700)}} className="right-btn"></ArrowForwardIosRoundedIcon>
        <ArrowBackIosRoundedIcon  onClick={()=>{scroll(-1700)}} className="left-btn"></ArrowBackIosRoundedIcon>
        
        {data.map(el => <Card
          key={el.id}
          id={el.id}
          title={el.title}
          media_type={el.media_type}
          imageUrl={el.poster_path}
          description={`Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Optio incidunt voluptas ipsam delectus sequi temporibus.`}
        />
        )}
        
      </div>
    </div>
  );
}

export default CardRows;


// {
//   { "adult": false, 
//   "backdrop_path": "/d5UMzVEfXlYOAcvNNlWixVk4GL6.jpg", 
//   "belongs_to_collection": null, 
//   "budget": 0, 
//   "genres": [{ "id": 18, "name": "Drama" }], 
//   "homepage": "https://www.sonyliv.com/movies/homecoming-1000159528", 
//   "id": 852659, 
//   "imdb_id": "tt14767926", 
//   "original_language": "hi", 
//   "original_title": "#Homecoming", 
//   "overview": "A group of \"friends\" and \"misfits\", who had formed a popular yet short-lived youth theatre group, reunite for the first time after seven years on an eventful Durga Pujo night at their old rehearsal space, a bungalow which is about to be converted into Kolkata's first five-star heritage hotel by the Ganges.", "popularity": 0.923, "poster_path": "/7dhnxOv4kyhljRjAe5QOTtYozxg.jpg", "production_companies": [{ "id": 157704, "logo_path": null, "name": "Lok", "origin_country": "" }], "production_countries": [{ "iso_3166_1": "IN", "name": "India" }], "release_date": "2022-02-17", "revenue": 0, "runtime": 0, "spoken_languages": [{ "english_name": "Bengali", "iso_639_1": "bn", "name": "বাংলা" }, { "english_name": "English", "iso_639_1": "en", "name": "English" }, { "english_name": "Hindi", "iso_639_1": "hi", "name": "हिन्दी" }], "status": "Released", "tagline": "", "title": "#Homecoming", "video": false, "vote_average": 0.0, "vote_count": 0 }
// }