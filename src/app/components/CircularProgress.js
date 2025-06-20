"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress() {
  const [scrollPercentage, setscrollPercentage] = useState(0);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      let scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setscrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="container mx-auto section_scroll" onClick={handleClick}>
        {scrollPercentage < 0.1 ? (
          ""
        ) : (
          <CircularProgressbar
            value={scrollPercentage}
            text={"↑"}
            strokeWidth={4}
            styles={buildStyles({
              textSize: "3.8rem",
              pathTransitionDuration: 0.1,
              pathColor: `#7e3aff`,
              textColor: "#7e3aff",
              trailColor: "#2b2338",
            })}
            className="h-[3.2rem] fixed right-7 top-[90vh] z-[1000] cursor-pointer !w-min xl:top-[87vh] xl:right-20"
          />
        )}
      </div>
    </>
  );
}

export default CircularProgress;
