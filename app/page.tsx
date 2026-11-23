import { Fragment, type CSSProperties } from "react";
import { experience, profile, projects } from "../data/portfolio";
import { EmailLink, ThemeToggle } from "../components/Controls";
import { Motion } from "../components/Motion";

export default function Portfolio() {
  let order = 0;
  function words(text: string) {
    return text.split(/(\s+)/).map((word, i) => word.trim()
      ? <span className="intro-word" key={i} style={{ "--order": order++ } as CSSProperties}>{word}</span>
      : <Fragment key={i}>{word}</Fragment>);
  }
  return <>
    <Motion />
    <header id="page-top" tabIndex={-1} className="sticky top-0 z-10 flex items-center justify-between gap-1 py-5">
      <nav aria-label="Main" className="flex items-center gap-1">
        <a href="#work">Work</a><a href="#experience">Experience</a>
      </nav>
      <div className="flex items-center gap-1.5"><ThemeToggle /><a className="availability">Open to work</a></div>
    </header>
    <main>
      <section className="hero">
        <h1 aria-label={profile.role}>{profile.role.split(" ").map((word, i) =>
          <Fragment key={word}>{i > 0 && " "}<span aria-hidden="true" className="mask"><span>{word}</span></span></Fragment>)}</h1>
        <div className="intro ruler flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <p>{words(profile.intro)}<em>{words(profile.emphasis)}</em>{words(profile.outro)}</p>
          <aside className="min-w-48"><h2 className="text-muted">Expertise</h2>
            <ul className="mt-2 grid grid-cols-2 gap-x-4">{profile.expertise.map(skill =>
              <li className="border-t border-rule py-1" key={skill}>{skill}</li>)}</ul>
          </aside>
        </div>
      </section>
      <section id="work" className="section ruler">
        <h2 className="section-title border-b border-rule pb-4" data-reveal>My Work</h2>
        <div className="gallery grid items-start">{projects.map(p => {
          const content = <>
            <div className="flex items-end justify-between gap-3"><h3>{p.name}</h3>
              <p className="project-summary">{p.summary}</p></div>
            <img className="art" src={p.image} alt={p.alt} loading="lazy" />
            {p.url && <span className="visit">Visit project <i aria-hidden="true">↗</i></span>}
          </>;
          return p.url ? <a className="project" data-reveal key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">{content}</a>
            : <article className="project" data-reveal key={p.name}>{content}</article>;
        })}</div>
      </section>
      <section id="experience" className="section ruler"><h2 className="section-title" data-reveal>Experience</h2>
        {experience.map(job => <article key={job.company} className="job flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-5" data-reveal>
          <div><h3>{job.company}</h3><p className="text-muted">{job.role}</p></div>
          <p className="date text-muted">{job.dates}</p>
        </article>)}
      </section>
    </main>
    <footer className="ruler flex flex-wrap items-center gap-x-5 gap-y-3 overflow-hidden pb-9 pt-7">
      <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedinLabel}</a>
      <EmailLink email={profile.email} />
      <div className="signature w-full" aria-label={profile.name} role="img" data-reveal>{Array.from(profile.name, (c, i) =>
        <span key={i} aria-hidden="true" style={{ "--order": i } as CSSProperties}>{c}</span>)}</div>
      <a className="to-top ml-auto" href="#page-top">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </>;
}
