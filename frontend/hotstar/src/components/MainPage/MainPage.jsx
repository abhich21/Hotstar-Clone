import Banner from "../Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardRows from "../CardRows/CardRows";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US`
      )
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      });
  };

  // const data = [
  //   {
  //     title : "Bheemla Nayak",
  //     genre : "Telugu . Action . 2022",
  //     img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1512/1161512-h-ebfa0d808596",
  //     overview : "An upright cop goes toe to toe with an ex-havildar over a petty case. As the quarrel between these egoistic men gets intense, how far will they go to win?"
  //   },
  //   {
  //     title : "Eeramaana Rojaavey 2",
  //     genre : "Star Vijay . Tamil . Drama",
  //     img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2505/1102505-h-3094b8b60c95",
  //     overview : "Kavya and Jeeva's love story takes a hit when destiny forces them to marry each other's elder siblings. How will these complicated relationships work?"
  //   },
  //   {
  //     title : "Neeya Naana",
  //     genre : "Star Vijay . Talk . Show",
  //     img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6797/986797-h",
  //     overview : "A talk show where two polarised groups of society are given the platform to share their views and see a different perspective on socially-relevant topics."
  //   },
  //   {
  //     title : "Naam Iruvar Namaku Iruvar",
  //     genre : "Star Vijay . Family",
  //     img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8870/1078870-h-4eac793d2a4d",
  //     overview : "In a twist of fate, a mischievous Mayan takes responsibility for his step-family. With a will to protect his loved ones, he braces himself for challenges."
  //   },
  //   {
  //     title : "Barathi Kannamma",
  //     genre : "Star Vijay . Drama",
  //     img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/845/1080845-h-f90b2b16d063",
  //     overview : "Barathi and Kannamma part ways, but with Soundarya's smart move both end up with one of their twin girls. Will the little angels be able reunite their parents?"
  //   },
  // ]

  const row_titles = [
    { category: "Popular Shows", language: "en" },
    { category: "Latest & Trending", language: "hi" },
    { category: "Shows Recommended For You", language: "ta" },
    { category: "Popular Movies", language: "ml" },
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
          id ={el.id}
            key={index}
            img={`${baseImgUrl}${el.backdrop_path}`}
            title={el.title}
            genre={el.genre}
            description={el.overview}
          />
        ))}
      </Carousel>
      {row_titles.map((el, index) => (
        <CardRows key={index} language={el.language} row_title={el.category} />
      ))}
    </div>
  );
}

export default MainPage;

//https://api.themoviedb.org/3/trending/all/week?api_key=3e3f0a46d6f2abc8e557d06b3fc21a77&language=en-US
