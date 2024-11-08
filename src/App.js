import React from "react";
import Header from "./pages/Header/Header"
import Banner from "./Components/Banner/Banner";
import Items from "./Components/UnderBannerSection/Items";
import Footer from "./pages/Footer/Footer";
import Experiences from "./Components/Experiences/Experiences";
import GalleryPhotos from "./Components/Gallery/GalleryPhotos";
import Contactus from "./Components/Contact/Contactus";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Items />
      <Experiences />
      <GalleryPhotos />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
