import { useParams } from "react-router-dom"
import Banner from "../Banner/Banner"
import {useEffect, useState} from "react"
import axios from "axios"
import CardRows from "../CardRows/CardRows";
import CheckIcon from '@mui/icons-material/Check';

function IndividualPage(props) {
  const[Status,setStatus]=useState(false);
  const[wishid,setWishid]=useState("");
  const {id, category} = useParams()
  useEffect(() => { getData() }, [id])

  const [ wishdata , setWishData ] = useState([])

    async function getWishlist(){
            const userToken = localStorage.getItem('token')
            const token = JSON.parse(userToken)
            // const a = await fetch('http://localhost:7000/watchlist',{
            const a = await fetch('https://hotstar-v.herokuapp.com/watchlist',{
                method : "GET",
                headers : {
                  "content-type" : "application/json",
                  Authentication : `Bearer ${token}`
                }
              })
              const b = await a.json()
              setWishData(b)
            }
    useEffect(()=>{ getWishlist()},[])
  
  const [data, setData] = useState({})
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
    const a = await axios.get(url)
    setData(a.data)
  }

useEffect(()=>{
  for(let i=0;i<wishdata.length;i++){
    if(data.original_title==wishdata[i].title){
      setStatus(true);
      setWishid(wishdata[i]._id)
    }
  }
});

// console.log(wishdata);

  let baseImgUrl = 'https://image.tmdb.org/t/p/original'

  
  return (
    
    <div key={props.pageId}>
      <Banner Status={Status} id={id} did={wishid} setStatus={setStatus} img={`${baseImgUrl}${data.backdrop_path}`  } title={data.original_title || data.name} description={data.overview}></Banner>
      <CardRows language={data.original_language} row_title="More Like This"></CardRows>
    </div>
  )
}

export default IndividualPage