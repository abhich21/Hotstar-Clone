import "./Card.css";

export const Card=({path,title})=>{
    let baseImgUrl = 'https://image.tmdb.org/t/p/original';

    
    return <div className="smalldiv">
        <img height="80px" width="200px" src={`${baseImgUrl+path}`}/>
        <h1>{title}</h1>
    </div>
}