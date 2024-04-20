import React from 'react';
import "../App.css";
import "../images/animation.jpg"

const About = () => {
    return (
    <section className="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]">

    <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row">


      <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16">
        <h2 className="font-mullish font-bold text-2xl text-deepBlueHead"
        >About us
        </h2>
        <div className="w-6 h-1 bg-lightBlue500  my-4 mb-10"></div>
        <p className="font-mullish opacity-80">Founded with a commitment to revolutionize healthcare administration, Hosnipet is a leading innovator in the field. Our comprehensive platform is designed to address the intricate challenges faced by healthcare facilities globally. From appointment scheduling to billing and reporting, we provide a seamless experience for healthcare professionals and patients alike.</p>
        <p className="font-mullish mt-6 opacity-80"> With a focus on efficiency, empowerment, and superior patient outcomes, we're dedicated to shaping the future of healthcare management. Join us in building healthier communities, one efficient system at a time.
        </p>
      </div>

      <div className="h-[500px] w-[500px] relative overflow-y-hidden mx-auto">
        <div
        className="absolute w-full h-[150px] top-0 z-50">    </div>

        <img src={require("../images/animation.jpg")} alt=""
        className="absolute  h-auto object-cover companiesList" />

        <div
        className="absolute w-full h-[150px] bottom-0 z-50">

        </div>
      </div>

    </div>

  </section>
  

    )

}

export default About;