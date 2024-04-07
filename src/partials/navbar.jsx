import React from 'react';
import "../App.css";
import '../images/hospital.png';
import '../images/india-flag.svg'

const Navbar = () => {
  return (
    <nav className="bg-lightBlue300">
      <div className="relative w-[1080px] mx-auto flex items-center justify-between ">
          <a href="/" className="cursor-pointer py-7 pr-7">
              <img
              src={require("../images/hospital.png")}
              width="125px"
              height="30px"/>
          </a>

          <ul className="flex space-x-6">
              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">About us</a>

              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">Features</a>

              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>
              </li>


              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">Doctors</a>
              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>

              </li>


              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">AI Assistant</a>
              

              </li>


              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">Resources</a>

              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>
              </li>


              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">Support</a>

              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>
              </li>
              

              <li className="text-white font-mullish py-7 hover:text-deepBlue cursor-pointer
               transition-all duration-200 relative group hidden lg:block">
              <a href="#">Premium</a>

              <div className="absolute bottom-0 w-full h-1 bg-deepBlue hidden group-hover:block
              transition-all duration-200" ></div>
              </li>
          </ul>

          <div className="flex space-x-6">
              <img
                  src={require("../images/india-flag.svg")}
                  width="28px"
                  height="20px"
                  className="hidden lg:block"
                  />
              <button className="py-3 px-5 font-mullish text-white border-deepBlue border
              rounded-sm text-sm  font-bold">Log in</button>
              <button className="py-3 px-4 font-mullish rounded-sm text-sm font-bold
              bg-white text-lightBlue300 border transition-all duration-200
              hover:text-lightBlue500 hidden lg:flex">Sign Up
              <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-3"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg></button>
          </div>


      </div>
  </nav>

  );
}

export default Navbar;
