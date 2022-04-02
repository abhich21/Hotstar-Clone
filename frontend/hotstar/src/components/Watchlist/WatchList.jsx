import { useEffect, useState } from "react"
import { Card } from "../WatchlistCard/Card"
import './watchlist.css'



export function WatchList(){
    
    const [ data , setData ] = useState([])

    async function getWishlist(){
            const user = JSON.parse(localStorage.getItem('user'))
            const {token }= user
            const a = await fetch('http://localhost:7000/watchlist',{
                method : "GET",
                headers : {
                  "content-type" : "application/json",
                  Authentication : `Bearer ${token}`
                }
              })
              const b = await a.json()
              console.log({b})
              setData(b)
            }
    useEffect(()=>{ getWishlist()},[])
    return (
        <div>
          <h3>Watchlist</h3>
           <div className="watchListRes">
                {  data.map(el=> <Card key={el.id} id={el.id}  title={el.title} description={el.description} imageUrl={el.imageUrl} />)}
           </div> 
        </div>
    )
}