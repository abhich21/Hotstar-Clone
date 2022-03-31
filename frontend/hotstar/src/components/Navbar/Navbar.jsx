import "./Navbar.css"
import {Link} from "react-router-dom"
import {Search} from "../Search/Search";

function Navbar() {
  return (
    <div className="nav">
    <div className="nav-left">
        <div>
           <Link to="/"><img className="disney-img" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" /></Link> 
        </div>
        <div><Link to="/tv">TV</Link></div>
        <div><Link to="/movies">MOVIES</Link></div>
        <div><Link to="/sports">SPORTS</Link></div>
        <div><Link to="/disney+">DISNEY+</Link></div>
    </div>
    <div className="nav-right">
        <Search/>
        <div>LOGIN</div>
    </div>
    </div>
  )
}

export default Navbar