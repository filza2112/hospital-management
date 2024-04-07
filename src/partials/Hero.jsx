import React, { useDeferredValue } from 'react';
import "../App.css";
import "../images/hero-shape.png"
import "../images/hero.png"

const Hero = () => {
    return (
        <section class="relative bg-lightBlue300"> 

  <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto ">
      <div className="space-y-8">
          <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Connecting Health, Empowering Wellness: Your Online Hospital Hub</h1>
          <div className="w-6 h-1 bg-lightBlue500"></div>
          <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
            Transforming Healthcare Management with Innovative Solutions: Empowering Providers, 
            Enhancing Patient Care, and Driving Sustainable Growth.
          </p>
          <button
          className="bg-lightBlue500 text-white  py-[14px] px-[18px] rounded-md font-mullish font-bold
          hover:bg-lightBlue500 transition-all duration-200"
          >Sign Up Now</button>
      </div>
      <img 
      src={require("../images/hero.png")} alt=""
      className="w-full max-w-[680px]" />
  </div>

  <div className="w-[103%] absolute left-0 right-0">
      <img src={require("../images/hero-shape.png")} alt=""
      className="w-full object-fill " />
  </div>

  </section>

    )

}

export default Hero;