import React from 'react';
import "../App.css";
import "../images/hospital.png"

const Footer = () => {
    return (
    <footer className="bg-white dark:bg-lightBlue300">
    <div className="mx-auto w-full max-w-screen-xl p-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="cursor-pointer py-7 pr-7">
                <img
                src={require("../images/hospital.png")}
                width="125px"
                height="30px" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Login</h2>
                  <ul className=" text-white font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Sign-up</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Premium</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About-us</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline ">Other</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Other 2</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Lwll</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Plorem</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">ikp</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-deepBlue sm:mx-auto dark:border-gray-700" />
     <h3 className="text-lightBlue500 flex justify-center">Hospinet@2024</h3>
    </div>
</footer>
    )

}

export default Footer;