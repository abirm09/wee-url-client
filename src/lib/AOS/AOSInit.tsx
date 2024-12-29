"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const initAOS = () => {
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: "ease-out-cubic", // Easing style
    offset: 50, // Offset from the element's position
    delay: 100, // Delay between animations
    once: true, // Whether animation should happen only once
  });
};

const AOSInit = () => {
  useEffect(() => {
    initAOS();
  });

  return null;
};

export default AOSInit;
