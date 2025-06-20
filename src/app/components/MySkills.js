"use client";
import { mySkills } from "../../../public/CustomApi";
import { Element } from "react-scroll";

function MySkills() {
  return (
    <>
      <div className="container mx-auto p-3 py-8 text-center md:py-20 lg:py-20 xl:px-28">
        <Element name="MYSkills" className="Skills">
          <h1
            className="heading_title text-4xl font-bold !leading-normal sm:text-[45px]"
            data-aos="fade-up"
          >
            My Skills
          </h1>
          <p
            className="mt-4 text-[#dddddd] text-[16px] font-[400]"
            data-aos="fade-up"
          >
            These skills transform your ideas and vision
            <br />
            into reality.
          </p>
          <section
            data-aos="fade-up"
            className="flex items-center justify-center flex-wrap mt-8 gap-y-6 gap-x-4 sm:py-10 2xl:gap-y-10 2xl:gap-x-6"
          >
            {mySkills.map(({ tech_img, name }) => (
              <div key={name} className="w-fit">
                <div className="flex items-center justify-center overflow-hidden group w-40 h-40 bg-[#37214d] py-12 px-14 rounded-3xl transition-colors hover:bg-[#2A1454] hover:grayscale-0 hover:border hover:border-[#8750f7]">
                  <div
                    className={`${tech_img} text-[4rem] grayscale-[1] duration-[.3s] group-hover:scale-[1.1] group-hover:grayscale-[0]`}
                  />
                </div>
                <p className="name text-[#8e27e5] text-[1.1rem] mt-[0.9rem] font-sans">
                  {name}
                </p>
              </div>
            ))}
          </section>
        </Element>
      </div>
    </>
  );
}

export default MySkills;
