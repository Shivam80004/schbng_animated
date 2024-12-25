import React from "react";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import HowWork from "./components/HowWork";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App(){
  return(
    <>
       <Hero />
       <ImageGallery />
       <HowWork />
       <Partners />
       <Footer />
    </>
  )
}

export default App;