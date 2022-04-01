import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import IndividualPage from "./components/IndividualPage/IndividualPage";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import VideoPage from "./components/videoPage/VideoPage";

function AllRoutes() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/:category" element={<MainPage ></MainPage>} ></Route>
        <Route  path={`/:category/:id`}  element={<IndividualPage  ></IndividualPage>} ></Route>
        <Route path="/:category/:id/video" element={<VideoPage></VideoPage>}></Route>
        
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default AllRoutes;
