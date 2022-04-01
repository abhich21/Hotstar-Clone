import { useParams } from "react-router-dom"
import Banner from "../Banner/Banner"
import {useEffect, useState} from "react"
import axios from "axios"
import CardRows from "../CardRows/CardRows"

function IndividualPage(props) {
  const {id, category} = useParams()
  useEffect(() => { getData() }, [id])
  
  const [data, setData] = useState({})
  useEffect(() => { getData() }, [id])
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
    const a = await axios.get(url)
    setData(a.data)
  }

  let baseImgUrl = 'https://image.tmdb.org/t/p/original'

  
  return (
    
    <div key={props.pageId}>
      <Banner img={`${baseImgUrl}${data.backdrop_path}`  } title={data.original_title || data.name} description={data.overview}></Banner>
      <CardRows language={data.original_language} row_title="More Like This"></CardRows>
    </div>
  )
}

export default IndividualPage