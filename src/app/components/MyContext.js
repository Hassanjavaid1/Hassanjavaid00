"use client";

import { client } from "@/sanity/lib/client";
import { useParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const ContextApi = createContext();

function MyContext({ children }) {
  const [project, setProject] = useState([]);
  const [caseStudy, setCaseStudy] = useState([]);
  const [caseStudyLoader, setCaseStudyLoader] = useState(true);

  const fetchProjectsOverview = async () => {
    try {
      const query = `*[_type == "post"]{_id,title,"thumbnail": thumbnail.asset->url,overview,}`;
      const data = await client.fetch(query);
      setProject(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjectsOverview();
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
      setTimeout(() => {
        setCaseStudyLoader(false);
      }, 1000);
    } catch (err) {
      console.log(err);
      setCaseStudyLoader(true);
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
      {children}
    </ContextApi.Provider>
  );
}

export default MyContext;
