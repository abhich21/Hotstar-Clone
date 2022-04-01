import "./footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
      <div className="mid">
    <div className="foot">
    <div className="foot-left">
        
    <div><a href="https://www.hotstar.com/in/about-us">About  Disney + Hotstar</a></div>
        <div><a href="https://www.hotstar.com/in/terms-of-use">Terms of Use</a></div>
        <div><a href="https://www.hotstar.com/in/privacy-policy">Privacy Policy</a></div>
        <div><a href="https://help.hotstar.com/in/en/support/home">FAQ</a></div>
        <div><a href="https://help.hotstar.com/in/en/support/tickets/new">Feedback</a></div>
        <div><a href="https://jobs.lever.co/hotstar">Careers</a></div>
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

