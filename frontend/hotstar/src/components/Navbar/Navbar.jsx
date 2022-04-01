import "./Navbar.css";
import { Link } from "react-router-dom";
import "./test.css";
import Test from "./Test";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);
    const [otpPopup, setOtpPopup] = useState(false);
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        console.log("key",e)
        if (e.key === "Enter") {
            if (e.target.value === "1234") {
                //console.log("done");
              setOtpPopup(false);
              navigate("/");
            }
            else {
                console.log("enter valid");
            }
        }
    }

  return (
    <>
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
          <div onClick={()=> setButtonPopup(true)}>LOGIN</div>
      </div>
      </div>
      <Test trigger={buttonPopup} setTrigger={setButtonPopup}>
                <p style={{
                    fontSize: "18px",
                    wordSpacing:"1.4px"
                }} className="text">Login to continue</p>
                <br></br>
                <br></br>
                <button className="btn">Have a Facebook/Email Account?</button>
                <br></br>
                <p style={{
                    marginLeft:"50%"
                }}>or</p>
                <br></br>
                <div className="input-div">
                    <p>+91|</p><input type="number" className="input" placeholder="Enter your mobile number" required />
                    <button onClick={() => {
                            setOtpPopup(true);
                            setButtonPopup(false)
                    }} className="otp-btn">send</button>
                </div>
            </Test>
            <Test otpTrigger={otpPopup} setOtpTrigger={setOtpPopup} setTrigger={setButtonPopup}>
                <p className="text">Enter the OTP</p>
                <input type="number" className="otp-inp" placeholder="Enter OTP" onKeyDown={handleKeyDown} />
            </Test>
      </>
  );
}

export default Navbar;
