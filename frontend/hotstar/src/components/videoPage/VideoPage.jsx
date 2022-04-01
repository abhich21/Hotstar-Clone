import YouTube from 'react-youtube';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Videopage.css"

function VideoPage() {
    const {id, category}= useParams()
    const [data, setData] = useState("")
    const[urlId, setUrlId] = useState("")
    useEffect(()=>{
        handleVideo()
    },[])
    const handleVideo = (e)=>{
        axios.get(`https://api.themoviedb.org/3/${category}/${id}/videos?api_key=3d63cba818eb8bc583a23f643a655a3d`).then((response)=>{
          if(response.data.results.length!=0){
            setUrlId(response.data.results[0].key)
            console.log(urlId)
          }

    
        })
      }
      const opts = {
        height: '690',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <div>
        {urlId?<YouTube videoId={urlId} opts={opts}></YouTube>:<h1 className='error'>VIDEO NOT FOUND</h1>}
    </div>
  )
}

export default VideoPage