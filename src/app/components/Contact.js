"use client";
import { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  useEffect(() => {
    emailjs.init("IgWv_Fy9rpTWllcJV");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_vqh5h3f", "template_9ov7kld", form.current).then(
      (res) => {
        toast.success("Message sent successfully!");
      },
      (error) => {
        console.log(error);
        toast.error("Message failed! Please try again.");
      }
    );
  };

  return (
    <>
      <Element
        name="Contact"
        className="container mx-auto px-2 py-12 sm:w-11/12 md:py-16 lg:py-20 xl:px-28"
      >
        <div className="flex flex-col-reverse justify-around gap-6 md:flex-row md:items-center 2xl:gap-10">
          <div
            className="contact_form bg-[#140C1C] p-4 rounded-2xl sm:p-8"
            data-aos="fade-up"
          >
            <h1 className="heading_title text-4xl font-bold !leading-normal sm:text-[45px]">
              Let’s work together!
            </h1>
            <p className="mt-4 text-[#dddddd] text-[16px] font-[400]">
              I turn vision into stunning designs and seamless code.
              <br />
              Let’s create something extraordinary together!
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-[1rem] mt-[1rem] gap-x-10 font-[400]"
            >
              <input
                type="text"
                placeholder="Good Name"
                className="input_field w-full"
                name="name"
                required
              />
              <div className="flex flex-col input_flex w-full lg:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input_field"
                  name="email"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input_field"
                  name="number"
                />
              </div>
              <select name="service" className="input_field text-[1.1rem]">
                <option value="No Service Selected" className="option">
                  Choose Services
                </option>
                <option
                  value="Looking For Frontend Developer"
                  className="option"
                >
                  Looking For Frontend Developer
                </option>
                <option
                  value="Looking For ReactJS Developer"
                  className="option"
                >
                  Looking For ReactJS Developer
                </option>
                <option value="Other" className="option">
                  Other
                </option>
              </select>
              <textarea
                cols="8"
                rows="6"
                placeholder="Message"
                className="input_field h-[185px]"
                name="message"
              ></textarea>
              <button className="btn w-fit py-4 px-6 rounded-[50px]  cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
          <div className="my_detail flex flex-col gap-6 2xl:w-1/2">
            <div
              data-aos="fade-up"
              className="info flex items-center gap-4 leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <FaLinkedinIn />
              </div>
              <div className="flex flex-col">
                <span className="font-sans capitalize opacity-90  sm:text-lg">
                  Linkedin
                </span>
                <a
                  href="https://linkedin.com/in/hassan-javaid159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-900 hover:text-[#6650F7] font-sans sm:text-xl"
                >
                  Visit Linkedin
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="info flex items-center gap-4 leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col">
                <span className="font-sans capitalize opacity-90 sm:text-lg">
                  Email
                </span>
                <a
                  href="mailto:hassanjavaid159@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition-all duration-900 hover:text-[#6650F7] font-sans sm:text-xl"
                >
                  hassanjavaid159@gmail.com
                </a>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="info flex items-center gap-4 leading-[1.8rem]"
            >
              <div className="contact_svg w-fit">
                <IoLocationOutline />
              </div>
              <div className="flex flex-col">
                <span className="font-sans capitalize opacity-[0.9] sm:text-lg">
                  Address
                </span>
                <a
                  href="https://maps.app.goo.gl/p5dP5EZUx9xBP2ySA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-6 transition-all duration-900 hover:text-[#6650F7] font-sans text-xl"
                >
                  Karachi Pakistan
                </a>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{
            background:
              "linear-gradient(45deg, rgb(26 17 46 / 96%), rgb(111 50 157))",
            color: "#ffffff",
            borderRadius: "8px",
          }}
        />{" "}
      </Element>
    </>
  );
}

export default Contact;
