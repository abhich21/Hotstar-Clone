import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import IndividualPage from "./components/IndividualPage/IndividualPage";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./components/videoPage/VideoPage";
import { WatchList } from "./components/Watchlist/WatchList";

function AllRoutes() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/:category" element={<MainPage key={Date.now().toString}></MainPage>} ></Route>
        <Route  path={`/:category/:id`}  element={<IndividualPage key={Date.now().toString} ></IndividualPage>} ></Route>
        <Route path="/:category/:id/video" element={<VideoPage></VideoPage>}></Route>
        <Route path="/watchlist" element={<WatchList/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default AllRoutes;
