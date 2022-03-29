
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <div className="banner-details">
          <h1>Title</h1>
          <div>
            <span>year . </span> <span> genre</span>
          </div>
          <p className="banner-descr">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            reprehenderit, eligendi saepe ipsum non nisi cum eaque aliquam
            similique odio, maiores recusandae aperiam nesciunt corrupti ab amet
            cupiditate officia distinctio.
          </p>
        </div>
      </div>
      <div className="banner-right">
        <div></div>
      </div>
    </div>
  );
}

export default Banner;