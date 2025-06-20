"use client";
import { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Element } from "react-scroll";
import { ContextApi } from "./MyContext";
import Link from "next/link";

function Mywork() {
  const { project, setProject } = useContext(ContextApi);
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <>
      <Element
        name="Portfolio"
        className="container mx-auto px-3 py-12 relative z-0 md:py-20 lg:py-20 xl:px-28"
      >
        <section className="text-center">
          <h1
            className="heading_title text-3xl font-bold text-nowrap !leading-normal sm:text-[45px]"
            data-aos="fade-up"
          >
            My Recent Works
          </h1>
          <p
            className="mt-4 text-[#dddddd] text-[16px] font-[400]"
            data-aos="fade-up"
          >
            I bring your ideas and vision to life through a distinctive web
            projects that inspires <br /> both you and your customers.
          </p>
          <div className="hidden mywork_shadow md:block"></div>
          <div className="grid grid-cols-1 justify-center mx-auto mt-12 gap-6 md:grid-cols-2 md:gap-y-6 md:gap-x-0 xl:gap-y-8 xl:mt-16 2xl:gap-y-12">
            {project.map(({ overview, thumbnail, title, _id }) => (
              <div
                key={_id}
                className="min-h-[25rem] mywork_parent h-full relative flex flex-col sm:w-11/12 sm:mx-auto lg:h-full"
              >
                <img
                  src={thumbnail}
                  alt={title}
                  className="h-full  object-cover p-6 pb-0 rounded-[15px] bg-[#140C1C] sm:p-5 sm:pb-0 sm:min-h-[35rem] md:min-h-fit lg:p-8 lg:pb-0 2xl:p-10 2xl:pb-0 xl:min-h-[30rem] lg:max-h-[30rem]"
                />
                <Link href={`/${title}/${_id}`} className=" h-[0]">
                  <div className="demo_box w-11/12 flex items-center m-auto absolute bottom-2 left-0 right-0 gap-3 p-2 text-left rounded-xl bg-gradient-to-br from-purple-600 to-[#320d4e] sm:p-3 xl:p-4">
                    <div className="demo_container overflow-hidden">
                      <button className="pro_title text-2xl font-sans font-bold whitespace-nowrap text-left sm:whitespace-normal xl:text-3xl">
                        {title}
                      </button>
                      <p className="project_desc font-sans opacity-[0.9] sm:whitespace-normal">
                        {screenWidth < 600
                          ? overview.slice(0, 80) + "..."
                          : overview.slice(0, 125) + "..."}
                      </p>
                    </div>
                    <div>
                      <FaArrowRightLong className="mywork_child text-2xl" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Mywork;
