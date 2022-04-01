import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import IndividualPage from "./components/IndividualPage/IndividualPage";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";

function AllRoutes() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/:category" element={<MainPage key={Date.now().toString}></MainPage>} ></Route>
        <Route  path={`/:category/:id`}  element={<IndividualPage key={Date.now().toString} ></IndividualPage>} ></Route>
        
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default AllRoutes;
