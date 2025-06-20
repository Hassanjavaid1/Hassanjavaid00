"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { Element } from "react-scroll";
import { certifications } from "../../../public/CustomApi.js";

function Certification() {
  return (
    <>
      <Element
        name="Certifications"
        className="container mx-auto px-3 py-12 relative z-0 md:py-20 lg:py-20 xl:px-28"
      >
        <section className="text-center">
          <h1
            className="heading_title text-3xl font-bold text-nowrap !leading-normal sm:text-[45px]"
            data-aos="fade-up"
          >
            Certifications
          </h1>
          <p
            className="mt-4 text-[#dddddd] text-[16px] font-[400]"
            data-aos="fade-up"
          >
            Top Certifications Earned Through Real-World Projects
          </p>
          <div className="hidden mywork_shadow md:block"></div>
          <div className="grid grid-cols-1 justify-center mx-auto mt-12 gap-6 md:grid-cols-2 md:gap-y-6 md:gap-x-0 xl:gap-y-8 xl:mt-16 2xl:gap-y-12">
            {certifications.map(
              ({
                title,
                demo,
                providerName,
                providerLogo,
                dateOfIssue,
                img,
              }) => (
                <div
                  key={title}
                  className="min-h-[25rem]  h-full relative flex flex-col sm:w-11/12 sm:mx-auto lg:h-full"
                >
                  <img
                    src={img}
                    alt={title}
                    className="h-full  object-cover p-6 pb-0 rounded-[15px] bg-[#140C1C] sm:p-5 sm:pb-0 sm:min-h-[35rem] md:min-h-fit lg:p-8 lg:pb-0 2xl:p-10 2xl:pb-0 xl:min-h-[30rem] lg:max-h-[30rem]"
                  />
                  <a
                    href={demo}
                    className=" h-[0]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" w-11/12 flex items-center m-auto absolute bottom-2 left-0 right-0 gap-3 p-2 text-left rounded-xl bg-gradient-to-br from-purple-600 to-[#320d4e] sm:p-3 xl:p-4">
                      <div className="flex flex-col items-baseline gap-2 overflow-hidden w-full">
                        <div className="flex items-center justify-between gap-2 w-full">
                          <div className="flex flex-col items-baseline gap-1">
                            <span className="font-semibold">{dateOfIssue}</span>
                            <button className="pro_title text-2xl font-sans font-bold whitespace-nowrap text-left sm:whitespace-normal xl:text-3xl">
                              {title}
                            </button>
                          </div>
                          <FaArrowRightLong className="text-2xl rotate-[330deg]" />
                        </div>
                        <div className="flex items-center gap-[.2rem]">
                          <img
                            src={providerLogo}
                            alt="logo"
                            className="object-cover w-8"
                          />
                          <span className="font-semibold">{providerName}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
        </section>
      </Element>
    </>
  );
}

export default Certification;
