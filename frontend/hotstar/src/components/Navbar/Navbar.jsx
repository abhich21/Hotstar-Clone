import "./Navbar.css";
import { Link, useParams } from "react-router-dom";
import "../Login/test.css";
import Test from "../Login/Test";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search/Search";
import axios from 'axios'
import GoogleLogin from 'react-google-login';

function Navbar() {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  const{category} = useParams()
  const [buttonPopup, setButtonPopup] = useState(false);
  const [otpPopup, setOtpPopup] = useState(false);
  const navigate = useNavigate()
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "1234") {
        setOtpPopup(false);
        navigate("/");
      }
      else alert("enter valid")
    }
  }
  
  const logOutUser = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    navigate('/')
  }
  const handleLogin = async (googleData)=>{
    // const res2 = await axios.post('http://localhost:7000/google/login',{
    const res2 = await axios.post('https://hotstar-v.herokuapp.com/google/login',{
      token : googleData.tokenId
    })
    localStorage.setItem('user', JSON.stringify(res2.data))
    setAuth(true)
    setButtonPopup(false)
    navigate('/profile')
  }
  const handleFailure = (err)=>{
    // console.log({ failure : err})
    alert(`Login failed`)
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
            <Link className="link" to="/tv" >TV</Link>
            <ul>
              <li><Link to={"/tv/en/individual"}>Other Shows</Link></li>
              <li><Link to={"/tv/hi/individual"}>Hotstar Specials</Link></li>
              <li><Link to={"/tv/te/individual"}>Star Plus</Link></li>
              <li><Link to={"/tv/ml/individual"}>Star Vijay</Link></li>
              <li><Link to={"/tv/ta/individual"}>Asianet</Link></li>
            </ul>
          </div>

          <div className="dropdown">
            <Link className="link" to="/movie">Movies</Link>
            <ul>
              <li><Link to={"/movies/hi"}>Hindi</Link></li>
              <li><Link to={"/movies/bn"}>Bengali</Link></li>
              <li><Link to={"/movies/te"}>Telugu</Link></li>
              <li><Link to={"/movies/ml"}>Malayalam</Link></li>
              <li><Link to={"/movies/ta"}>Tamil</Link></li>
              <li><Link to={"/movies/kn"}>Kannada</Link></li>
            </ul>
          </div>
          <div className="dropdown">
            <Link className="link" to="/sports">Sports</Link>
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
          <div classaName="small">
            <Link to="/disney+">Disney+</Link>
          </div>
        </div>
        <div className="nav-right">
          <Search />
          { auth ? <div className="dropdown">
            <div className="link" to="/sports">PROFILE</div>
            <ul>
              <li><Link to="/watchlist">WatchList</Link></li>
              <li><Link to="/profile">My Account</Link></li>
              <li onClick={logOutUser}>Log Out</li>
            </ul>
          </div> : <div onClick={() => setButtonPopup(true)}>LOGIN</div>}
          
        </div>
      </div>
      <div>
      <Test trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login to continue</p>
        <br></br>
        <div 
        className="googleBtn">
          <GoogleLogin
        clientId={"470082525240-e74jps4n35c7d8kufu3ujo6veg77bi3k.apps.googleusercontent.com"}
        // clientId="920450409324-dr6oficri8basjuvt765sag2njgub8du.apps.googleusercontent.com"
        buttonText="Sign In With Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        /></div>
        <br></br>
        <p style={{
          marginLeft: "45%"
        }}>or</p>
        <br></br>
        <div className="input-div">
          <p>+91|</p><input type="text" className="input" placeholder="Enter your mobile number" required />
          <button onClick={() => {
            setOtpPopup(true);
            setButtonPopup(false)
          }} className="otp-btn">send</button>
        </div>
      </Test>
      <Test otpTrigger={otpPopup} setOtpTrigger={setOtpPopup} setTrigger={setButtonPopup}>
        <p className="text">Enter the OTP</p>
        <input type="text" className="otp-inp" placeholder="Enter OTP" onKeyDown={handleKeyDown} />
      </Test>
      </div> 
      
    </>
  );
}

export default Navbar;

{/* <div className="epField">
<input onChange={handleInput} className="email" name="email" type="text" placeholder="Enter Your Email" /><br />
<input onChange={handleInput} className="password" name="password" type="text" placeholder="Enter Your Password" />
</div>
<div className="loginBtn">
<button onClick={signUp}>SignUp</button>
<button onClick={signIn}>SignIn</button>
</div>
<br></br>
<p style={{
  marginLeft: "45%"
}}>or</p>
<button className="btn">Have a Facebook/Email Account?</button> */}
// const signUp = async () => {
  //   const a = await axios.post(`http://localhost:7000/signup`, user)
  //   if (a.data.status) {
    //     alert("Successfull")
    //     return
    //   }
    //   else
    //     return alert('failed')
    // }
    // const signIn = async () => {
      //   const a = await axios.post(`http://localhost:7000/signin`, user)
      //   if (a.data.status) {
        //     const { token } = a.data
//     localStorage.setItem('user', JSON.stringify(token))
//     setAuth(true)
//     navigate('/profile')
//     return
//   }
//   else
//     return alert('failed')


// const dummyUser = {
//   email: "",
//   password: ""
// }
// const [user, setUser] = useState(dummyUser)
// function handleInput(e) {
//   let { name, value } = e.target
//   setUser({ ...user, [name]: value })
// }
// // }