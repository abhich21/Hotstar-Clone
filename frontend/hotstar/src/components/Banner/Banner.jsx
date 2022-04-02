import "./Banner.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import {useEffect} from "react";
import { useState } from "react";

function Banner({original_title, title, year, genre, description, img, idm, mediaType }) {
  const[Status,setStatus]=useState(false);
  const[wishid,setWishid]=useState("");
  const {id, category} = useParams();
  const [ wishdata , setWishData ] = useState([])
  console.log(wishid);

  async function getWishlist(){
    const userToken = localStorage.getItem('token')
    const token = JSON.parse(userToken)
    const a = await fetch('http://localhost:7000/watchlist',{
        method : "GET",
        headers : {
          "content-type" : "application/json",
          Authentication : `Bearer ${token}`
        }
      })
      const b = await a.json()
      setWishData(b);
    }
useEffect(()=>{ getWishlist()},[])

useEffect(()=>{
  for(let i=0;i<wishdata.length;i++){
    if(original_title==wishdata[i].title){
      console.log("coming");
      setStatus(true);
      setWishid(wishdata[i]._id)
    }
  }
},[wishdata]);

useEffect(()=>{
  setStatus(false)
},[id]);


  async function addWatchList(){
    const userToken = localStorage.getItem('token')
    {setStatus(true)}
    if(userToken)
    {
      const token = JSON.parse(userToken)
      const a = await fetch('http://localhost:7000/watchlist',{
        method : "POST",
        body : JSON.stringify({
          id:id,
          imageUrl : img,
          title :title,
          overview : description
        }),
        headers : {
          "content-type" : "application/json",
          Authentication : `Bearer ${token}`
        }
      });
      
      const b = await a.json()
      console.log("data from the post request",b)
      setWishid(b._id)
    }
    else
      alert('Please SignIn to add this movie in your watchlist')

  }

   async function deleteWatchList(){
     setStatus(false);
     console.log(Status,"working");
    {
      console.log(`http://localhost:7000/watchlist/${wishid}`)
      const a = await fetch(`http://localhost:7000/watchlist/${wishid}`,{
      
        method : "DELETE",
      });
    }
  }

  return (
    <Link  to={ mediaType=="tv"? `/tv/${idm}`:`/movie/${idm || id}`}>
      <div className="banner-container">
        <div className="banner-left">
          <div className="banner-details">
            <h1>{title}</h1>
            <div id="genre">
              <span> {genre}</span>
            </div>
            <p className="banner-descr">{description}</p>
          </div>
          {id ? (
            <div className="btns">
              <Link to={`/${category}/${id}/video`}>
              <div >
                <PlayArrowRoundedIcon
                  fontSize="large"
                  className="play-icon"
                ></PlayArrowRoundedIcon>

                <h2>Watch Movie</h2>
              </div>
              </Link>
              <div>
                <div className="playlist-btn">
                  {Status?<CheckIcon className="checkIcon" onClick={deleteWatchList} fontSize="large"></CheckIcon>:<AddIcon onClick={addWatchList} fontSize="large"></AddIcon>}
                  watchlist
                </div>
                <div>
                  <ShareRoundedIcon ></ShareRoundedIcon>
                  share
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="banner-right"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div></div>
        </div>
      </div>
    </Link>
  );
}

export default Banner;
