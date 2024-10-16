import React, { useState, useEffect } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import "../styles/topMain.css";
import ScrollAnimation from "react-animate-on-scroll";

const topMain = () => {
  const texts = [
    "Empowering artists around the globe",
    "Supporting independent creators",
    "A platform built for small artists",
    "Helping creative minds thrive",
    "Connecting the world through art",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFadeIn(true); // Fade back in with new text
      }, 1000); // Time for fade-out transition (should match the CSS)
    }, 4000); // Total duration between text changes
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="top-main" className="">
    {/* Scrolling Text at Bottom */}
    <div className="bottom-4 w-full md:w-full overflow-hidden whitespace-nowrap py-10">
      <div id="banner" className="animate-scroll inline-block">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mx-4 text-7xl md:text-8xl text-black">
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
            <b>✦ LYFE ✦</b>
            <span className="mx-4 text-5xl md:text-8xl"> BEYOND THE SCREEN </span>
          </span>
        ))}
      </div>
    </div>

    <div className="grid sm:grid-cols-1 lg:grid-cols-2 py-0 min-h-min relative" id="AI-Text-Component">
      <div className="flex flex-row justify-center items-center sm:px-4 md:px-0 mb-8 md:mb-0" id="Rotating-Text">
        <h1
          className={`w-1/2 text-4xl  sm:text-center md:text-5xl text-center md:text-center lg:text-left lg:text-7xl transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentText]}
        </h1>
      </div>

      <div className="relative mx-auto min-h-min" id="Image-Flexing">
        {/* Image1 with adjusted size */}
        <ScrollAnimation animateIn="backInUp">
          <div className="block md:relative mt-4 md:mt-0 -left-20 top-32 sm:top-24 z-0 w-52 sm:w-60 rounded-full overflow-hidden">
            <img
              src={Image1}
              alt="Image 1"
              className="object-cover w-full h-full"
            />
          </div>
        </ScrollAnimation>

        {/* Image2 with adjusted size */}
        <ScrollAnimation animateIn="backInRight">
          <div className="block md:relative mt-4 md:mt-0 left-36 top-0 z-20 w-52 sm:w-60 rounded-full overflow-hidden">
            <img
              src={Image2}
              alt="Image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </ScrollAnimation>

        {/* Image3 with adjusted size */}
        <ScrollAnimation animateIn="backInUp" offset={20}>
          <div className="block md:relative mt-4 md:mt-0 -left-16 sm:-left-24 sm:-top-40 top-24 z-10 w-52 sm:w-60 rounded-full overflow-hidden">
            <img
              src={Image3}
              alt="Image 3"
              className="object-cover w-full h-full"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
  );
};

export default topMain;
