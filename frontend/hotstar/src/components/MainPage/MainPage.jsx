import Banner from "../Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardRows from "../CardRows/CardRows";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MainPage() {
  
  const {category,language} = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [category,language]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${category=="tv"?"tv":category=="movie"?"movie":"all"}/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
      )
      .then((res) => {
        setData(res.data.results);
      });
  };

  
  const row_titles = [
    { category: "Popular Shows", language: "en" },
    { category: "Latest & Trending", language: "hi" },
    { category: "Shows Recommended For You", language: "ta" },
    { category: "Action", language: "ml" },
    { category: "Movies Recommended For You", language: "te" },
  ];
  let baseImgUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        transitionTime={700}
        showThumbs={false}
        >
        {data.map((el, index) => (
          <Banner
          idm ={el.id}
          key={index}
          img={`${baseImgUrl}${el.backdrop_path}`}
          title={el.title || el.name}
          genre={el.genre}
          description={el.overview}
          mediaType = {el.media_type}
          
          
          />
          ))}
      </Carousel>
      <CardRows row_title={`Latest & Trending`} ></CardRows>
      {row_titles.map((el, index) => (
        <CardRows key={index} language={el.language} row_title={el.category} />
        ))}
    </div>
  );
}

export default MainPage;

