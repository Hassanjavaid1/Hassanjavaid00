"use client";

import { Element } from "react-scroll";
import { certifications } from "../../../public/CustomApi.js";
import Image from "next/image.js";

function Certification() {
  return (
    <>
      <Element
        name="Certifications"
        className="container mx-auto px-3 py-12 relative z-0 xl:px-28"
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
          {/* Certificate */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 xl:flex-nowrap">
            {certifications.map(
              ({
                title,
                img,
                dateOfIssue,
                providerLogo,
                providerName,
                demo,
              }) => (
                <div
                  key={title}
                  className="w-[550px] relative overflow-hidden rounded-[22px] group cursor-pointer lg:min-w-[430px] lg:w-[430px]"
                >
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={img}
                      alt={title}
                      height={800}
                      width={500}
                      loading="lazy"
                      className="min-h-[370px] w-[550px] object-cover duration-600 group-hover:scale-110 lg:min-h-[320px] lg:h-[320px] lg:min-w-[430px]"
                    />
                    <span className="absolute top-3 left-3 duration-200 bg-[#8750f7] hover:bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-[22px] py-1 px-2 text-sm">
                      {dateOfIssue}
                    </span>

                    <div className=" absolute bottom-3 left-3 right-3 overflow-hidden text-left z-10 duration-200 bg-[#2a1454] group-hover:bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-xl p-3">
                      <div className="flex items-center gap-1">
                        <Image
                          src={providerLogo}
                          alt={providerName}
                          width={30}
                          height={20}
                          loading="lazy"
                          className="h-auto w-auto object-cover"
                        />
                        <h4 className="text-[#9d71f3] group-hover:text-white font-normal">
                          {providerName}
                        </h4>
                      </div>
                      <h2 className="text-[22px]">{title}</h2>
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
