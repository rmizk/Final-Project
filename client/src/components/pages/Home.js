import React from "react";

import ibis from "../images/ibis.png";
import biat from "../images/biat.png";
import safi from "../images/safi.png";
import a109 from "../images/a109.png";
import sopal from "../images/sopal.png";
import mokador from "../images/mokador.png";
import diwen from "../images/diwen.png";

import "./Home.css";
import Slider from "../Slider/Slider";


const Home = () => {
  return (
    <div className="container">
      <div className="background">
        <div className="slogan">
          <div className="logo"></div>
          {/* <h1 className="h1-1">Sfax El Mezyena</h1> */}
          <h1 className="h1-2"> Vision .. Mission .. Valeurs </h1>
        </div>
      </div>


      <div>
        <h1>PHOTOS</h1>
          <hr />
          <div className="photo_container">

          <Slider />

          </div>


      </div>

      <div>
        <h1>SPONSORS</h1>
        <hr />
        <div className="logo_container">
          <div className="logos"> <img src={a109} alt="" />  </div>
          <div className="logos"> <img src={biat} alt="" /></div>
          <div className="logos"> <img src={ibis} alt="" /></div>
          <div className="logos"> <img src={safi} alt="" /></div>
          <div className="logos"> <img src={sopal} alt="" /></div>
          <div className="logos"> <img src={mokador} alt="" /></div>
          <div className="logos"> <img src={diwen} alt="" /></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
