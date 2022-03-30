import "./footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
      <div className="mid">
    <div className="foot">
    <div className="foot-left">
        
        <div><Link to="/about">About  Disney + Hotstar</Link></div>
        <div><Link to="/terms">Terms of Use</Link></div>
        <div><Link to="/policy">Privacy Policy</Link></div>
        <div><Link to="/FAQ">FAQ</Link></div>
        <div><Link to="/feedback">Feedback</Link></div>
        <div><Link to="/career">Careers</Link></div>
    </div>
    {/* <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p> */}

    <div className="foot-mid">
        <div >Connect with us</div>
        <span><img src="https://cdn-icons-png.flaticon.com/128/1384/1384049.png"></img></span><span><img src="https://cdn-icons-png.flaticon.com/128/1384/1384021.png"></img></span>
        </div>
        <div className="foot-right">
        <div>Disney+Hotstar App</div>
        <span><img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-5.jpg"></img></span><span><img src="https://icon-library.com/images/download-on-the-app-store-icon/download-on-the-app-store-icon-13.jpg"></img></span>
    </div>
    
    </div>
        <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming </p>
        <p>visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
        </div>
  )
}

export default Footer

