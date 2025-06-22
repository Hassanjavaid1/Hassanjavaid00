"use client";

import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import Preloader from "./Preloader";
import Aos from "aos";

export const ContextApi = createContext();

function MyContext({ children }) {
  const [project, setProject] = useState([]);
  const [caseStudy, setCaseStudy] = useState([]);
  const [caseStudyLoader, setCaseStudyLoader] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchProjectsOverview = async () => {
    try {
      setLoading(true);
      const query = `*[_type == "post"]{_id,title,"thumbnail": thumbnail.asset->url,overview,}`;
      const data = await client.fetch(query);
      setProject(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjectsOverview();

    //AOS Init
    Aos.init({
      duration: 600,
      easing: "ease-in-sine",
      once: true,
      offset: 15,
    });

    Aos.refresh();
  }, []);

  // Fetch Project By ID

  const param = useParams();
  const id = param.id;

  const fetchProjectByID = async () => {
    try {
      setCaseStudyLoader(true);
      const url = await fetch(`/api/project/${id}`);
      const data = await url.json();
      setCaseStudy(Array.isArray(data) ? data : [data]);
      setCaseStudyLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ContextApi.Provider
      value={{
        project,
        setProject,
        fetchProjectByID,
        caseStudy,
        caseStudyLoader,
        setCaseStudyLoader,
      }}
    >
      {loading ? <Preloader /> : children}
    </ContextApi.Provider>
  );
}

export default MyContext;
