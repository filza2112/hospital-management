import React from 'react';
import "../App.css";
import "../images/feature-section1-dottedrows.png"
import "../images/small.svg"


const Feature = () => {
    return (
        <section className="relative mt-[190px] overflow-hidden">
        <img src={require("../images/feature-section1-dottedrows.png")} alt="" loading="lazy" 
        width="233"
        height="167"
        className="absolute -top-[8rem] left-[10rem] inline-block -z-10" />
  
        <img src={require("../images/feature-section1-dottedrows.png")} alt="" loading="lazy"
        width="233"
        height="167"
        className="absolute top-[3rem] right-0 inline-block rotate-180" />
  
        <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
  
            <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block">Our Key Features Highlight</h2>
            
            <h2 className="font-mullish text-center text-5xl leading-[1.2] font-extrabold  md:hidden">Take Benefit of our faetures</h2>
  
  
            <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
  

            <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
  
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
             
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                     
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Emergency Hospital Connect</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
              
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
                    </div>
    
                </div>
      
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
             
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
             
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
            
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Heath Tracker</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
                
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
    
                    </div>
    
                </div>
   
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
              
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
          
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
          
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Other</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
             
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
    
                    </div>
    
                </div>
      
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
             
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                 
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Feature</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
             
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
    
                    </div>
    
                </div>
         
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
            
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
          
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">Appointment Booking</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
              
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
    
                    </div>
    
                </div>
   
                <div className="w-full min-h-[15rem] relative cursor-pointer">
                    <img src={require("../images/small.svg")} alt=""
                    className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8]
                    transition-all duration-200" />
                    
                    <svg
                        viewBox="0 0 349.32501220703125 225"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                        style={{ strokeOpacity: 0.15 }}

                         >
                  <path
                        d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z"
                        fill="#fff"
                  ></path>
                    </svg>
    
         
                    <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
            
                        <div>
                            <h3 className="font-mullish font-bold text-deepBlueHead leading-[1.2] text-[1.375rem]">AI Assistant</h3>
                            <p className="font-mullish text-grayText mt-6">
                                Feature description not decided yet, work is under progress, keep working!</p>
                        </div>
    
              
                        <div className="flex items-center cursor-pointer group">
                            <a href="#" 
                            className="font-mullish font-bold text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"
                            >Know More</a>
                            <i
                            data-feather="chevron-right"
                            className="w-5 h-5 text-lightBlue500 
                            group-hover:text-grayBlue transition-all duration-200"></i>
                        </div>
    
                    </div>
    
                </div>
            </div>
  
        </div>
        </div>
        </section>

        
    )

}

export default Feature;