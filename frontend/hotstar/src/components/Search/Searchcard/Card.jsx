import "./Card.css";

export const Card=({path,title})=>{
    if(path==null)
    return null;
    let baseImgUrl = 'https://image.tmdb.org/t/p/original';

    
    return <div className="smalldiv">
        <img height="70px" width="140px" src={`${baseImgUrl+path}`}/>
        <h1>{title}</h1>
    </div>
}