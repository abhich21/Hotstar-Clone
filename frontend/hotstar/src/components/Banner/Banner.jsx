
import "./Banner.css";

function Banner({ title, year , genre, discription,img}) {
  return (
    <div className="banner-container">
      <div className="banner-left">
        <div className="banner-details">
          <h1>{title}</h1>
          <div>
            <span> {genre}</span>
          </div>
          <p className="banner-descr">
            {discription}
          </p>
        </div>
      </div>
      <div className="banner-right" style={{
        backgroundImage: `url(${img})`
      }}>
        <div></div>
      </div>
    </div>
  );
}

export default Banner;