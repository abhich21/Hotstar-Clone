import "./Banner.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios";
import { useState } from "react";

function Banner({Status,did,setStatus,title, year, genre, description, img, idm, mediaType }) {
  const { id, category } = useParams();
  console.log("checker");

  async function addWatchList(){
    const userToken = localStorage.getItem('token')
    {setStatus(true)}
    if(userToken)
    {
      const token = JSON.parse(userToken)
      const a = await fetch('http://localhost:7000/watchlist',{
        method : "POST",
        body : JSON.stringify({
          imageUrl : img,
          title :title,
          overview : description
        }),
        headers : {
          "content-type" : "application/json",
          Authentication : `Bearer ${token}`
        }
      })
      const b = await a.json()
    }
    else
      alert('Please SignIn to add this movie in your watchlist')

  }

  async function deleteWatchList(){
    {
      const a = await fetch(`http://localhost:7000/watchlist/${did}`,{
        method : "DELETE",
      });
    }
  }
  return (
    <Link  to={`/movie/${id}`}>
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
                <div>
                  {Status?<CheckIcon fontSize="large" color="red"  ></CheckIcon>:<AddIcon  onClick={addWatchList} fontSize="large"></AddIcon>}
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
