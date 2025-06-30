"use client"

import { useRef, useState, useEffect, useContext } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import Image from "next/image";

function Hero_Section() {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [imageChange, setImageChange] = useState(false);

  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );
    observer.observe(targetRef.current);
  }, []);

  return (
    <>
      <Element name="About" className="About">
        <section className="container mx-auto p-8 mt-10 xl:px-28">
          <div className="flex flex-col-reverse items-center justify-around md:flex-row">
            <div className="mt-8 md:w-2/3 2xl:w-2/4" data-aos="fade-right">
              <h3 className="mb-3 font-bold text-3xl font-sans-serif text-[#DDDDDD] sm:text-4xl md:text-3xl lg:text-4xl 2xl:text-[36px]">
                I am Hassanjavaid
              </h3>
              <h1 className="heading_title font-bold text-[65px] text-uppercase sm:leading-normal md:text-4xl md:leading-normal lg:text-5xl lg:leading-normal 2xl:text-[65px] 2xl:leading-normal">
                Frontend React + <br /> NextJS Developer
              </h1>

              <p className="text-[20px] font-[300] text-[#D6D6D7] mt-5">
                I break down complex user experience problems to create
                integrity focused solutions that connect people.
              </p>
              <div className="resume_social flex items-center gap-9 space-y-[23] mt-8">
                <div className="flex items-center gap-[1.1rem] z-40">
                  <a
                    href="https://www.linkedin.com/in/hassan-javaid-aa7610290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svg_icon"
                  >
                    {" "}
                    <FaLinkedinIn className="icon" />
                  </a>
                  <a
                    href="https://github.com/Hassanjavaid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svg_icon"
                  >
                    {" "}
                    <FaGithub className="icon" />
                  </a>
                </div>
              </div>
            </div>

            <h1 className="hidden animated-text md:block">HI</h1>
            <div data-aos="fade-left" className="hero_pic relative">
              <Image
                src={imageChange ? "/hassanGlasses.jpg" : "/hassan.png"}
                alt="hassan"
                width={437}
                height={475}
                priority
                className="object-cover rounded-[30px] border-2 border-[#9c6cff5e] transition-all hover:border-[#7f4ae7] transform rotate-2 hover:rotate-0"
                onMouseEnter={() => setImageChange(true)}
                onMouseOut={() => setImageChange(false)}
              />
            </div>
          </div>
          <div
            ref={targetRef}
            className="hero_counter flex items-center flex-wrap gap-8 mt-5rem pb-8 mt-20 md:justify-around"
          >
            {isIntersecting && (
              <>
                <h4 className="about_hero text-[#DDDDDD]  text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold">
                  <CountUp end={1} />+
                  <span className="counter_text text-[1rem] opacity-90 ">
                    Years of <br /> Experience
                  </span>
                </h4>
                <h4 className="about_hero  text-[#DDDDDD]  text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold">
                  <CountUp end={parseFloat(9)} />+
                  <span className="counter_text text-[1rem] opacity-90 ">
                    Projects <br /> Completed
                  </span>
                </h4>
                <h4 className="about_hero text-[#DDDDDD]  text-7xl flex items-center justify-center font-sans-serif gap-2 sm:font-semibold">
                  <CountUp end={1} />{" "}
                  <span className="counter_text text-[1rem] opacity-90">
                    Internship <br />
                    Completed
                  </span>
                </h4>
              </>
            )}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Hero_Section;
