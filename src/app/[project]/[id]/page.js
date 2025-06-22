"use client";

import { ContextApi } from "@/app/components/MyContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { VscSourceControl } from "react-icons/vsc";
import Preloader from "@/app/components/Preloader";
import Carousel from "@/app/components/Carousel";

function Page() {
  const { fetchProjectByID, caseStudy, caseStudyLoader } =
    useContext(ContextApi);

  useEffect(() => {
    fetchProjectByID();
  }, []);

  return (
    <>
      {caseStudyLoader ? (
        <Preloader />
      ) : (
        <div className="hero_background p-2 lg:p-8">
          <Link
            href={"/"}
            className="flex items-center gap-1 w-fit p-[0.7rem] rounded-[12px] bg-[#5e44913a] hover:bg-[#8850f7b9]  cursor-pointer"
          >
            <FaAngleLeft />
            Go Back
          </Link>
          {caseStudy[0] == null || caseStudy.length == 0 ? (
            <div className="h-[70vh] flex items-center justify-center">
              <h1 className="text-4xl ">No project found</h1>
            </div>
          ) : (
            <div className="container mx-auto p-2 lg:p-8">
              {caseStudy?.map(
                ({
                  title,
                  _id,
                  Images,
                  keyFeatures,
                  demo,
                  github,
                  overview,
                  problem,
                  solution,
                  technologies,
                  techHighlight,
                }) => (
                  <React.Fragment key={_id}>
                    <header className="flex items-baseline flex-col justify-between gap-y-4 py-5 lg:items-center lg:gap-2 lg:flex-row">
                      <h1 className="text-4xl lg:text-5xl font-[500]">
                        {title}
                      </h1>
                      <div className="flex items-center gap-3">
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 btn rounded-[12px] px-6 py-3"
                        >
                          Github
                          <VscSourceControl />
                        </a>
                        <a
                          href={demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 btn rounded-[12px] px-6 py-3"
                        >
                          Demo
                          <HiOutlineExternalLink />
                        </a>
                      </div>
                    </header>
                    {/* // Image slide section  */}
                    <section className="relative lg:p-4">
                      <Carousel Images={Images} title={title} />
                      {/* Technologies used */}
                      <ul className="py-6 flex items-center flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <li
                            key={tech}
                            className="text-sm font-[400] bg-[#8850f73a] rounded-full px-2 py-1 duration-100 border-transparent border-2 hover:border-[#8750F7]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      {/* Project Intro */}
                      <h2 className="text-3xl my-6">What is {title}?</h2>
                      <p className="font-[300] my-3 leading-relaxed">
                        {overview}
                      </p>
                      {/* Key Features Intro */}
                      <h2 className="text-3xl my-6 mt-12">Key Features</h2>
                      <ul className="list-disc list-outside pl-[1rem] font-[300] my-3 leading-relaxed ">
                        {keyFeatures.map((feature, indx) => (
                          <li key={indx}>{feature}</li>
                        ))}
                      </ul>
                      {/* Technical Highlights */}
                      <h2 className="text-3xl my-6 mt-12">
                        Technical Highlights
                      </h2>
                      <ul className="list-disc list-outside pl-[1rem] font-[300] my-3 leading-relaxed ">
                        {techHighlight.map((highlightPoint, indx) => (
                          <li key={indx}>{highlightPoint}</li>
                        ))}
                      </ul>
                      {/* The Challenge */}
                      <h2 className="text-3xl my-6">The Challenge</h2>
                      <p className="font-[300] leading-relaxed relative z-10">
                        {problem}
                      </p>
                      {/* The Solution */}
                      <h2 className="text-3xl my-6">The Solution</h2>
                      <p className="font-[300] leading-relaxed relative z-10">
                        {solution}
                      </p>
                      <div className="hidden style-shadow md:block"></div>
                    </section>
                  </React.Fragment>
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Page;
