"use client";

import dynamic from "next/dynamic";
import React, { Suspense, useEffect, useRef } from "react";
import Preloader from "./components/Preloader";
import Aos from "aos";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./components/Navbar";
import Hero_Section from "./components/HeroSection";
import Mywork from "./components/Mywork";
import MySkills from "./components/MySkills";
import CircularProgress from "./components/CircularProgress";

const Certification = dynamic(() => import("./components/Certification"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-sine",
      once: true,
      offset: 15,
    });

    Aos.refresh();

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current, // Required: Your scroll container
      smooth: true, // Enable smooth scrolling for desktop
      smoothMobile: true, // Enable smooth scrolling for mobile
      inertia: 0.75, // Adjust scroll inertia
      getDirection: true, // Track scroll direction (optional)
      gestureDirection: "vertical", // Vertical scrolling
      scrollFromAnywhere: true, // Allow scrolling from anywhere
      resetNativeScroll: true, // Prevent native scroll issues
      reloadOnContextChange: true, // Reload scroll on DOM changes
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
        <div ref={scrollContainerRef}>
          <div className="hero_background" data-scroll>
            <Navbar />
            <Hero_Section />
          </div>
          <div className="mywork" data-scroll>
            <Mywork />
          </div>
          <div className="myskills" data-scroll>
            <MySkills />
          </div>
          <div className="certificates" data-scroll>
            <Certification />
          </div>
          <div className="contact" data-scroll>
            <Contact />
          </div>
          <CircularProgress />
        </div>
    </>
  );
}
