import dynamic from "next/dynamic";
import { Suspense } from "react";
import Preloader from "./components/Preloader";
const Navbar = dynamic(() => import("./components/Navbar"));
const Hero_Section = dynamic(() => import("./components/HeroSection"));
const Mywork = dynamic(() => import("./components/Mywork"));
const MySkills = dynamic(() => import("./components/MySkills"));
const Certification = dynamic(() => import("./components/Certification"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
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
      </Suspense>
    </>
  );
}
