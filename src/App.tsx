import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projectFilters, projects, type ProjectCategory } from "./projects";

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "React Native", "Redux", "Tailwind CSS", "Material UI", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Express.js", "REST APIs", "GraphQL", "WebSockets", "JWT", "Role-Based Access Control"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Relational data modeling", "Indexing & query optimization"],
  },
  {
    title: "System Design",
    skills: [
      "System architecture",
      "API design",
      "Database schema design",
      "Business workflow design",
      "Authentication & authorization",
      "Payment & transaction workflows",
      "Real-time communication",
      "Data validation & integrity",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub", "Vercel", "Render", "CI/CD", "Jest", "React Testing Library"],
  },
  {
    title: "Integrations",
    skills: ["Flutterwave", "Mapbox", "Google Maps APIs", "Push notifications", "SMS integrations"],
  },
];

const experience = [
  {
    role: "Senior Full Stack Software Engineer / System Designer",
    company: "Castmax Technologies Limited",
    product: "SpeedGigz Platform",
    period: "2025 — Present",
    points: [
      "Develop marketplace applications and design databases and business workflows.",
      "Build wallet and payment infrastructure, including Flutterwave integration.",
      "Integrate GPS, mapping, real-time chat, and notification services.",
      "Develop REST APIs, authentication, and role-based authorization.",
      "Support production deployment and troubleshoot system issues.",
    ],
  },
  {
    role: "Frontend / Full Stack Developer",
    company: "MegaCog",
    product: "",
    period: "December 2023 — 2025",
    points: [
      "Build React and TypeScript applications with reusable component systems.",
      "Implement REST API integrations, authentication, and application state.",
      "Contribute frontend architecture and integrate with Go and Python services.",
      "Test, debug, and optimize application performance.",
    ],
  },
];

const certifications = [
  "Meta Front-End Developer Professional Certificate",
  "React Developer Certification — Coursera",
  "Full Stack Web Development Certification — Coursera",
  "Project Planning & Management Certification — UNZA",
  "Monitoring and Evaluation Certification — UNZA",
  "Business Marketing & Entrepreneurship Certification — UNZA",
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation.map(([, id]) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Kabwe Kabwe, home">
        <span className="brand-mark">K<span>.</span></span>
        <span className="brand-name">Kabwe Kabwe<small>Software Engineer</small></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="primary-navigation" className={`primary-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
        {navigation.map(([label, id]) => (
          <a
            className={activeSection === id ? "nav-active" : ""}
            href={`#${id}`}
            key={id}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
      </nav>
    </header>
  );
}

function SectionHeading({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <span className="section-label"><i />{label}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section page-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-intro"><span className="availability-dot" /> FULL STACK SOFTWARE ENGINEER <span className="intro-divider">/</span> LUSAKA, ZAMBIA</p>
        <h1 id="hero-title">Building Scalable Software.<br /><span>Solving Real-World Problems.</span></h1>
        <p className="hero-description">
          I design and build web and mobile applications, backend APIs, and data-driven systems. My work spans frontend engineering, backend development, database design, payment integrations, and production system architecture.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View My Projects <ArrowRight size={16} /></a>
          <a className="button button-secondary" href="mailto:kkabwe907@gmail.com?subject=Request%20for%20CV" aria-label="Request a copy of my CV by email">
            Request CV <ArrowUpRight size={15} />
          </a>
          <a className="button button-quiet" href="#contact">Contact Me <ArrowDownRight size={15} /></a>
        </div>
        <p className="resume-note">CV PDF isn&apos;t available in this project yet. Request a copy by email.</p>
        <div className="hero-tech" aria-label="Core technologies">
          <span>React</span><i /><span>TypeScript</span><i /><span>Node.js</span><i /><span>NestJS</span><i /><span>PostgreSQL</span><i /><span>React Native</span><i /><span>System Design</span>
        </div>
      </div>
      <div className="hero-art" aria-label="Software system illustration">
        <div className="hero-orbit orbit-outer" /><div className="hero-orbit orbit-inner" />
        <div className="hero-glow" />
        <div className="hero-core"><Code2 size={33} strokeWidth={1.5} /><span>BUILD / SHIP / IMPROVE</span></div>
        <div className="orbit-chip chip-react"><span className="chip-icon react-icon">◉</span>React</div>
        <div className="orbit-chip chip-api"><span className="chip-icon">↗</span>APIs</div>
        <div className="orbit-chip chip-data"><span className="chip-icon">▤</span>Data</div>
        <div className="orbit-chip chip-mobile"><span className="chip-icon">▯</span>Mobile</div>
        <div className="hero-art-caption"><span>01 — 06</span><span>Engineering across the stack</span></div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  );
}

function About() {
  return (
    <section className="section section-about" id="about">
      <div className="page-wrap">
        <SectionHeading label="A little about me" title="Engineering with the whole system in mind." />
        <div className="about-grid">
          <div className="about-lead">
            <p className="about-statement">I work across the <span>full software lifecycle</span> — from understanding the problem to supporting the system in production.</p>
            <p>My experience spans marketplace workflows, payment integrations, inventory operations, expense claims, delivery platforms, and property rental applications. I enjoy making complex processes clear and dependable for the people who use them.</p>
          </div>
          <div className="about-detail">
            <p>That means requirements analysis, system design, database modeling, API development, frontend and mobile implementation, testing, deployment, and production troubleshooting.</p>
            <p>I care about maintainable architecture, data integrity, secure APIs, and business logic that reflects how work actually gets done — practical engineering choices that make products easier to change and trust.</p>
            <div className="about-principles"><span><i />Maintainable by design</span><span><i />Reliable data flows</span><span><i />Built around real workflows</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All Projects");
  const visibleProjects = filter === "All Projects"
    ? projects
    : projects.filter((project) => project.categories.includes(filter as ProjectCategory));

  return (
    <section className="section section-projects" id="projects">
      <div className="page-wrap">
        <SectionHeading
          label="Selected work"
          title="Projects built around real-world needs."
          intro="A selection of web and mobile products, workflows, and system integrations I've worked on."
        />
        <div className="project-toolbar">
          <div className="filter-list" role="group" aria-label="Filter projects by category">
            {projectFilters.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? "filter-active" : ""}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">{String(visibleProjects.length).padStart(2, "0")} projects</span>
        </div>
        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project) => <ProjectCard key={project.name} project={project} featured={project.name === "SpeedGigz" || project.name === "NjiraAI"} />)}
          </div>
        ) : (
          <p className="empty-projects">No projects match this category yet.</p>
        )}
        <div className="additional-product">
          <div className="additional-icon"><BriefcaseBusiness size={19} /></div>
          <div><span className="eyebrow">Additional product experience</span><h3>Madison</h3><p>Project name and link provided; further purpose and implementation details are not independently verified here.</p></div>
          <a href="https://madison-nine.vercel.app/" target="_blank" rel="noreferrer">Visit Madison <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-skills" id="skills">
      <div className="page-wrap">
        <SectionHeading label="Technical toolkit" title="Tools for building dependable products." intro="A practical stack across interfaces, backend services, data, and delivery." />
        <div className="skills-grid">
          {skillGroups.map(({ title, skills }, index) => (
            <article className={`skill-card skill-card-${index + 1}`} key={title}>
              <div className="skill-card-heading"><span>0{index + 1}</span><h3>{title}</h3></div>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-experience" id="experience">
      <div className="page-wrap">
        <SectionHeading label="Experience & education" title="Work shaped by products in production." />
        <div className="experience-layout">
          <div className="timeline">
            <h3 className="subsection-title"><BriefcaseBusiness size={17} /> Experience</h3>
            {experience.map((job) => (
              <article className="timeline-item" key={job.company}>
                <span className="timeline-node" />
                <div className="timeline-meta"><span>{job.period}</span><span>{job.company}</span></div>
                <h4>{job.role}</h4>
                {job.product && <p className="timeline-product">{job.product}</p>}
                <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
          <aside className="education-column">
            <h3 className="subsection-title"><GraduationCap size={18} /> Education</h3>
            <article className="education-item">
              <span className="education-years">2020 — 2024</span>
              <h4>Bachelor of Medicine and Bachelor of Surgery (MBChB)</h4>
              <p>Levy Mwanawasa Medical University</p>
            </article>
            <article className="education-item">
              <span className="education-years">2014 — 2019</span>
              <h4>Bachelor of Science in Human Biology</h4>
              <p>Lusaka Apex Medical University</p>
            </article>
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>{certifications.map((certification) => <li key={certification}><Check size={13} />{certification}</li>)}</ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    if (String(data.get("website") ?? "").trim()) {
      setStatus({ type: "error", message: "Unable to prepare this message. Please email me directly instead." });
      return;
    }

    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));
    const message = String(data.get("message"));
    const body = `From: ${name} (${email})\n\n${message}`;
    const mailto = `mailto:kkabwe907@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: "success", message: "Your email app should open with a draft. This website has not sent the message." });
    window.location.href = mailto;
  }

  return (
    <section className="section section-contact" id="contact">
      <div className="page-wrap">
        <SectionHeading label="Get in touch" title="Have a problem worth solving?" intro="For engineering opportunities, product collaborations, or a conversation about building useful software." />
        <div className="contact-grid">
          <div className="contact-info">
            <a className="contact-item" href="mailto:kkabwe907@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>Email</small><b>kkabwe907@gmail.com</b></span><ArrowUpRight size={15} /></a>
            <a className="contact-item" href="tel:+260966288612"><span className="contact-icon"><Phone size={18} /></span><span><small>Phone</small><b>+260 966 288 612</b></span><ArrowUpRight size={15} /></a>
            <a className="contact-item" href="https://github.com/KKay24" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18} /></span><span><small>GitHub</small><b>github.com/KKay24</b></span><ArrowUpRight size={15} /></a>
            <div className="contact-item contact-location"><span className="contact-icon"><MapPin size={18} /></span><span><small>Based in</small><b>Lusaka, Zambia</b></span></div>
            <p className="form-notice">This form opens your email application with a draft. No message is sent or stored by this website.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required maxLength={100} /></label>
              <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
            </div>
            <label>Subject<input name="subject" type="text" placeholder="What would you like to discuss?" required maxLength={150} /></label>
            <label>Message<textarea name="message" placeholder="A little about what you have in mind..." required rows={5} maxLength={4000} /></label>
            <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
            <button className="button button-primary form-submit" type="submit">Open email draft <Send size={15} /></button>
            <p className={`form-status form-status-${status.type}`} aria-live="polite" role={status.type === "error" ? "alert" : "status"}>{status.message}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-inner">
        <a className="footer-brand" href="#home">Kabwe Kabwe<span>.</span></a>
        <p>Building thoughtful software in Lusaka, Zambia.</p>
        <div className="footer-links"><a href="https://github.com/KKay24" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="mailto:kkabwe907@gmail.com">Email <ArrowUpRight size={13} /></a></div>
        <span className="copyright">© {new Date().getFullYear()} Kabwe Kabwe</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
