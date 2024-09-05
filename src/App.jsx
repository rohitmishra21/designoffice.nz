import React from "react";
import "./index.css";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Work from "./components/Work";
import Three from "./components/Three";
import Four from "./components/Four";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      
      <Loader /> 
       <Main /> 
       <Work />
      <Three />
      <Four />
      <Footer />  
    </>
  );
};

export default App;
