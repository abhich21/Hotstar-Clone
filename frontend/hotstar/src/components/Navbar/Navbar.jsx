import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="nav">
      <div className="nav-left">
        <div>
          <Link to="/">
            <img
              className="disney-img"
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt=""
            />
          </Link>
        </div>
        
        <div className="dropdown">
          <Link className="link" to="/tv">TV</Link>
          <ul>
            <li><Link to={"#"}>Other Shows</Link></li>
            <li><Link to={"#"}>Hotstar Specials</Link></li>
            <li><Link to={"#"}>Star Plus</Link></li>
            <li><Link to={"#"}>Star Vijay</Link></li>
            <li><Link to={"#"}>Asianet</Link></li>
          </ul>
        </div>
    
        <div className="dropdown">
          <Link className="link" to="/movies">MOVIES</Link>
          <ul>
            <li><Link to={"#"}>Hindi</Link></li>
            <li><Link to={"#"}>Bengali</Link></li>
            <li><Link to={"#"}>Telugu</Link></li>
            <li><Link to={"#"}>Malayalam</Link></li>
            <li><Link to={"#"}>Tamil</Link></li>
            <li><Link to={"#"}>Kannada</Link></li>
          </ul>
        </div>
        <div className="dropdown">
          <Link className="link" to="/sports">SPORTS</Link>
          <ul>
            <li><Link to={"#"}>Cricket</Link></li>
            <li><Link to={"#"}>Football</Link></li>
            <li><Link to={"#"}>Hockey</Link></li>
            <li><Link to={"#"}>Formula one</Link></li>
            <li><Link to={"#"}>Tennis</Link></li>
            <li><Link to={"#"}>Golf</Link></li>
            <li><Link to={"#"}>Kabaddi</Link></li>
          </ul>
        </div>
        <div>
          <Link to="/disney+">DISNEY+</Link>
        </div>
      </div>
      <div className="nav-right">
        <div>LOGIN</div>
      </div>
    </div>
  );
}

export default Navbar;
