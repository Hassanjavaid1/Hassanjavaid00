import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero_Section from "./components/HeroSection";
import Mywork from "./components/Mywork";
import MySkills from "./components/MySkills";
import CircularProgress from "./components/CircularProgress";

const Certification = dynamic(() => import("./components/Certification"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  return (
    <>
      <div className="hero_background">
        <Navbar />
        <Hero_Section />
      </div>
      <div className="mywork">
        <Mywork />
      </div>
      <div className="myskills">
        <MySkills />
      </div>
      <div className="certificates">
        <Certification />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <CircularProgress />
    </>
  );
}
