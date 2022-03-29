import Banner from "../Banner/Banner";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card  from "../CardRows/CardRows";
import CardRows from "../CardRows/CardRows";

function MainPage() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//to be replaced 
  return (
    <div>
      <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showIndicators={false} transitionTime={700}>
        {data.map((el) => <Banner></Banner>)}
      </Carousel>
      <CardRows></CardRows>
      <CardRows></CardRows>
      <CardRows></CardRows>
    </div>
  );
}

export default MainPage;
