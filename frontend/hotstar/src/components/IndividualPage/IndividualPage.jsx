import { useParams } from "react-router-dom"
import Banner from "../Banner/Banner"
import {useEffect, useState} from "react"
import axios from "axios"
import CardRows from "../CardRows/CardRows"

function IndividualPage() {
  useEffect(() => { getData() }, [])
  const {id} = useParams()
  const [data, setData] = useState({})
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
    const a = await axios.get(url)
    setData(a.data)
    console.log(a.data)

  }

  let baseImgUrl = 'https://image.tmdb.org/t/p/original'

  

   
  return (
    
    <div><Banner img={`${baseImgUrl}${data.backdrop_path}`} title={data.original_title} description={data.overview}></Banner>
      <CardRows  movie={data} row_title="More Like This"></CardRows>
     
    </div>
  )
}

export default IndividualPage