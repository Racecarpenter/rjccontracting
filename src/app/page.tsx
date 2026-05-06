"use client";

import React, { FormEvent, ReactNode, useEffect, useState } from "react";
import "./globals.css";

type Page = "home" | "services" | "about" | "projects" | "contact";

type Service = {
  title: string;
  text: string;
};

type ServiceDetail = {
  num: string;
  title: string;
  paragraphs: string[];
  tags: string[];
};

type ProjectPreview = {
  image: string;
  label: string;
  tall?: boolean;
};

type Project = {
  image: string;
  title: string;
  category: string;
};

type Value = {
  title: string;
  text: string;
};

const PAGES: Page[] = ["home", "services", "about", "projects", "contact"];

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_RJC_ASSET_BASE_URL ?? "";

function assetPath(filename: string): string {
  const encodedFilename = filename
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");

  return ASSET_BASE_URL
    ? `${ASSET_BASE_URL.replace(/\/$/, "")}/${encodedFilename}`
    : `/assets/${encodedFilename}`;
}

const ASSETS = {
  logo: assetPath("RJC_Logo.png"),
  hero: assetPath("RJC_Logo.png"),
  project1: assetPath("1607 Day 1 Photo 2.jpg"),
  project2: assetPath("2012-08-27 08.51.04.jpg"),
  project3: assetPath("2012-08-27 09.17.15.jpg"),
  project4: assetPath("2012-10-18 11.05.47.jpg"),
  project5: assetPath("DSC04380.jpg"),
  project6: assetPath("Feb 24 2016 3.jpg"),
  project7: assetPath("IMG_3540.jpg"),
  project8: assetPath("IMG_6169.jpg"),
  project9: assetPath("Sky Harbor Security Wall.jpg"),
  about: assetPath("about.jpg"),
};

const styles = {
  nav: "fixed left-0 right-0 top-0 z-[1000] flex h-[72px] items-center justify-between border-b border-tan/30 bg-rjc-black/95 px-10 backdrop-blur-md max-[600px]:px-5",
  navLinks: "m-0 flex list-none items-center gap-8 p-0 max-[900px]:hidden",
  navButton: "border-0 bg-transparent text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-rjc-concrete transition-colors hover:text-tan",
  navCta: "bg-tan px-5 py-2 text-rjc-black hover:bg-tan-light hover:text-rjc-black",
  hamburger: "hidden flex-col gap-[5px] border-0 bg-transparent p-1 max-[900px]:flex",
  hamburgerLine: "block h-[2px] w-6 bg-rjc-concrete transition",
  mobileMenu: "fixed bottom-0 left-0 right-0 top-[72px] z-[999] hidden flex-col items-center justify-center gap-8 bg-rjc-black",
  mobileMenuOpen: "flex",
  mobileMenuButton: "border-0 bg-transparent font-serif text-2xl font-bold text-rjc-white",
  container: "mx-auto max-w-[1200px] px-8 max-[600px]:px-5",
  page: "block",
  hero: "relative flex h-screen min-h-[600px] items-end overflow-hidden pb-24 pl-24 max-[900px]:px-8 max-[900px]:pb-20",
  heroBg: "absolute inset-0 bg-[#f8f5ef] bg-contain bg-center bg-no-repeat after:absolute after:inset-0 after:bg-gradient-to-r after:from-rjc-black/85 after:via-rjc-black/50 after:to-transparent max-[900px]:after:bg-gradient-to-t max-[900px]:after:from-rjc-black/90 max-[900px]:after:to-rjc-black/40",
  heroContent: "relative z-[2] max-w-[600px]",
  tag: "mb-3 block text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-tan",
  heroTitle: "m-0 mb-6 font-serif text-[clamp(2.8rem,5vw,4.5rem)] font-black leading-[1.1] text-rjc-white",
  heroText: "mb-10 max-w-[480px] text-[1.1rem] text-rjc-concrete",
  buttonPrimary: "inline-block border-0 bg-tan px-9 py-3.5 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-rjc-black no-underline transition-all hover:bg-tan-light",
  buttonOutline: "ml-4 inline-block border border-tan bg-transparent px-9 py-3.5 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-tan no-underline transition-all hover:bg-tan hover:text-rjc-black max-[600px]:ml-0 max-[600px]:mt-4",
  buttonDark: "inline-block whitespace-nowrap border-0 bg-rjc-black px-9 py-3.5 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-rjc-white no-underline transition-all hover:bg-rjc-dark",
  statsBar: "flex justify-center border-t-2 border-tan bg-rjc-dark max-[900px]:flex-wrap",
  stat: "max-w-[220px] flex-1 border-r border-tan/15 px-4 py-10 text-center last:border-r-0 max-[900px]:min-w-[50%] max-[900px]:flex-none",
  statNum: "block font-serif text-[2.8rem] font-bold leading-none text-tan",
  statLabel: "mt-1.5 block text-[0.75rem] uppercase tracking-[0.15em] text-rjc-concreteDark",
  section: "py-24 max-[600px]:py-16",
  sectionTitle: "m-0 mb-6 font-serif text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.2] text-rjc-black",
  sectionTitleLight: "text-rjc-white",
  divider: "mb-6 h-[3px] w-12 bg-tan",
  lede: "max-w-[600px] text-rjc-mid",
  servicesPreview: "bg-rjc-offWhite",
  servicesGrid: "mt-12 grid grid-cols-3 gap-[2px] max-[900px]:grid-cols-1",
  serviceCard: "border-t-[3px] border-transparent bg-rjc-white p-10 transition-all hover:-translate-y-1 hover:border-tan",
  serviceTitle: "m-0 mb-3 font-serif text-[1.3rem] font-bold text-rjc-black",
  serviceText: "m-0 text-[0.95rem] text-rjc-mid",
  center: "text-center",
  spaced: "mt-12",
  spacedLarge: "mt-16",
  projectsPreview: "relative overflow-hidden bg-rjc-black py-20 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-tan",
  projectGrid: "mt-12 grid grid-cols-2 grid-rows-[300px_300px] gap-1 max-[900px]:grid-cols-1 max-[900px]:grid-rows-none",
  projectItem: "group relative overflow-hidden max-[900px]:min-h-[300px]",
  projectTall: "row-span-2 max-[900px]:row-span-1",
  projectImage: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
  projectOverlay: "absolute inset-0 flex items-end bg-gradient-to-t from-rjc-black/85 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100 max-[900px]:opacity-100",
  projectLabel: "text-[0.85rem] uppercase tracking-[0.1em] text-rjc-white",
  ctaBand: "bg-tan py-16",
  ctaInner: "flex items-center justify-between max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:text-center",
  ctaTitle: "m-0 font-serif text-2xl font-bold text-rjc-black",
  ctaText: "mt-2 text-rjc-dark",
  pageHero: "relative overflow-hidden bg-rjc-dark pb-20 pt-40 after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-tan",
  pageHeroTitle: "m-0 mb-4 font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-black text-rjc-white",
  pageHeroText: "max-w-[600px] text-[1.1rem] text-rjc-concrete",
  servicesDetail: "py-20",
  serviceRow: "grid grid-cols-[1fr_2fr] gap-16 border-b border-rjc-concrete py-14 last:border-b-0 max-[900px]:grid-cols-1 max-[900px]:gap-4",
  serviceRowNum: "self-start pt-2 font-serif text-7xl font-black leading-none text-tan-light max-[900px]:text-5xl",
  serviceRowTitle: "m-0 mb-4 font-serif text-[1.8rem] font-bold text-rjc-black",
  serviceRowText: "mb-4 text-rjc-mid",
  serviceTags: "mt-4 flex flex-wrap gap-2",
  tagPill: "border border-rjc-concrete bg-rjc-offWhite px-3 py-1 text-[0.8rem] uppercase tracking-[0.08em] text-rjc-mid",
  twoColLayout: "grid grid-cols-2 items-center gap-24 py-20 max-[900px]:grid-cols-1",
  aboutImageWrap: "relative before:absolute before:-left-6 before:-top-6 before:bottom-6 before:right-6 before:-z-10 before:border-2 before:border-tan",
  aboutImage: "aspect-[4/5] w-full object-cover object-top",
  textTitle: "m-0 mb-6 font-serif text-[clamp(2rem,3vw,2.8rem)] font-bold leading-[1.2] text-rjc-black",
  bodyText: "text-rjc-mid",
  valuesGrid: "bg-rjc-dark py-20",
  valuesCards: "mt-12 grid grid-cols-4 gap-[2px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1",
  valueCard: "border-t-2 border-tan bg-rjc-black p-8",
  valueTitle: "m-0 mb-3 font-serif text-[1.1rem] text-rjc-white",
  valueText: "m-0 text-[0.9rem] text-rjc-concreteDark",
  projectsFullGrid: "grid grid-cols-3 gap-[3px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1",
  projectFullItem: "group relative aspect-[4/3] overflow-hidden",
  projectFullLabel: "text-rjc-white",
  projectFullTitle: "m-0 mb-1 font-serif text-[1.1rem]",
  projectFullCategory: "text-[0.75rem] uppercase tracking-[0.1em] text-tan",
  contactLayout: "grid grid-cols-[1fr_1.6fr] items-start gap-24 py-20 max-[900px]:grid-cols-1",
  contactItem: "mb-6 flex items-start gap-4",
  contactIcon: "flex h-10 w-10 shrink-0 items-center justify-center border border-rjc-concrete bg-rjc-offWhite",
  contactLabel: "m-0 mb-1 text-[0.9rem] uppercase tracking-[0.05em] text-rjc-black",
  contactText: "m-0 text-rjc-mid [&_a]:text-tan [&_a]:no-underline hover:[&_a]:underline",
  quoteNote: "mt-10 border-l-[3px] border-tan bg-rjc-offWhite p-6",
  quoteNoteText: "m-0 text-[0.9rem] text-rjc-mid",
  quoteForm: "",
  formTitle: "m-0 mb-2 font-serif text-[1.8rem] text-rjc-black",
  formSubtitle: "m-0 mb-8 text-rjc-mid",
  formRow: "grid grid-cols-2 gap-4 max-[600px]:grid-cols-1",
  formGroup: "mb-4",
  formLabel: "mb-1.5 block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-rjc-dark",
  formField: "w-full border border-rjc-concrete bg-rjc-offWhite px-4 py-3 text-rjc-black outline-none transition-colors focus:border-tan",
  textarea: "min-h-[140px] resize-y",
  formNote: "mb-6 text-[0.8rem] text-rjc-concreteDark",
  submitButton: "w-full border-0 bg-rjc-black px-9 py-3.5 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-rjc-white transition-all hover:bg-tan hover:text-rjc-black",
  formSuccess: "border border-tan bg-rjc-offWhite p-8 text-center",
  formSuccessTitle: "m-0 mb-2 font-serif text-2xl text-rjc-black",
  formSuccessText: "m-0 text-rjc-mid",
  footer: "border-t-2 border-tan bg-rjc-black pb-8 pt-16",
  footerGrid: "mb-12 grid grid-cols-[2fr_1fr_1fr] gap-16 max-[900px]:grid-cols-1",
  footerLogo: "mb-4 h-[100px] brightness-90",
  footerTagline: "text-[0.9rem] text-rjc-concreteDark",
  footerHeading: "mb-5 text-[0.75rem] uppercase tracking-[0.2em] text-tan",
  footerList: "m-0 list-none p-0",
  footerListItem: "mb-2 text-[0.9rem] text-rjc-concreteDark",
  footerButton: "border-0 bg-transparent p-0 text-[0.85rem] font-semibold uppercase tracking-[0.12em] text-rjc-concrete transition-colors hover:text-tan",
  footerLink: "text-rjc-concreteDark no-underline hover:text-tan",
  footerBottom: "flex items-center justify-between border-t border-tan/15 pt-8 max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:text-center",
  footerCopy: "text-[0.8rem] text-rjc-mid",
  footerLoc: "text-[0.8rem] text-rjc-concreteDark [&_a]:text-tan [&_a]:no-underline hover:[&_a]:underline",
  muted: "text-rjc-mid",
};

const services: Service[] = [
  {
    title: "Concrete Structures",
    text: "Bridges, retaining walls, culverts, tilt-up panels, and complex formed structures. We handle the full scope — form, pour, and finish.",
  },
  {
    title: "Onsite Supervision",
    text: "Experienced project supervision providing quality control, schedule management, and daily oversight for civil and structural construction.",
  },
  {
    title: "Engineering Consulting",
    text: "Technical consulting services including reviews, plans, project troubleshooting, and expert guidance for public and private clients.",
  },
];

const serviceDetails: ServiceDetail[] = [
  {
    num: "01",
    title: "Concrete Structures",
    paragraphs: [
      "RJC has built a reputation across Arizona and the Southwest for delivering high-complexity concrete structures on time and to spec. Our crews have the experience to tackle challenging pours, complex formwork systems, and precision-critical structural elements that other contractors avoid.",
      "From transportation infrastructure to commercial and public facilities, we bring the tools, workforce, and engineering knowledge to deliver results.",
    ],
    tags: [
      "Bridge Structures",
      "Retaining Walls",
      "Culverts & Drainage",
      "Tilt-Up Construction",
      "Stadium Seating",
      "Formed Concrete",
      "Foundation Systems",
    ],
  },
  {
    num: "02",
    title: "Onsite Supervision",
    paragraphs: [
      "Experienced field leadership is the difference between a project that stays on schedule and one that doesn’t. RJC provides seasoned superintendents and foremen available for embedded project support — whether as owner’s representatives, construction managers, or subcontractor oversight.",
      "Our supervisors have decades of hands-on experience with large public works, transportation, and vertical construction projects throughout Arizona.",
    ],
    tags: [
      "Project Superintendents",
      "Quality Control",
      "Schedule Management",
      "Safety Oversight",
      "Owner’s Representative",
      "Subcontractor Coordination",
    ],
  },
  {
    num: "03",
    title: "Engineering Consulting",
    paragraphs: [
      "Drawing on decades of civil engineering and hands-on construction experience, RJC provides technical consulting services to contractors, developers, municipalities, and engineers of record. We bring practical field knowledge to projects that need more than just paper solutions.",
    ],
    tags: [
      "Constructability Reviews",
      "Sequencing & Scheduling",
      "Expert Witness",
      "Project Troubleshooting",
      "Value Engineering",
      "Technical Documentation",
    ],
  },
];

const projectPreview: ProjectPreview[] = [
  { image: ASSETS.project1, label: "Concrete Structures", tall: true },
  { image: ASSETS.project2, label: "Stadium Seating" },
  { image: ASSETS.project3, label: "Sky Harbor Security Wall" },
];

const projects: Project[] = [
  { image: ASSETS.project1, title: "Foundation Concrete Pour", category: "Concrete Structures" },
  { image: ASSETS.project2, title: "Sky Harbor Security Wall", category: "Onsite Supervision" },
  { image: ASSETS.project3, title: "Concrete Forming Work", category: "Concrete Structures" },
  { image: ASSETS.project4, title: "Stadium Seating Structure", category: "Concrete Structures" },
  { image: ASSETS.project5, title: "Bridge Beam Placement", category: "Concrete Structures" },
  { image: ASSETS.project6, title: "Tilt-Up Concrete Panels", category: "Concrete Structures" },
  { image: ASSETS.project7, title: "Stadium Construction", category: "Concrete Structures" },
  { image: ASSETS.project8, title: "Drainage Structure", category: "Concrete Structures" },
  { image: ASSETS.project9, title: "Civil Site Work", category: "Consulting" },
];

const values: Value[] = [
  {
    title: "Integrity",
    text: "We say what we’ll do and do what we say. Every estimate, every schedule, every promise.",
  },
  {
    title: "Precision",
    text: "Civil engineering demands zero tolerance for error. Our field experience means we get it right the first time.",
  },
  {
    title: "Experience",
    text: "Decades of complex project history give our team insight that no textbook can provide.",
  },
  {
    title: "Partnership",
    text: "We treat clients as partners, not transactions. Long-term relationships are how we measure success.",
  },
];

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

type NavigateFn = (page: Page) => void;

type SectionHeaderProps = {
  tag: string;
  title: ReactNode;
  light?: boolean;
  children?: ReactNode;
};

function SectionHeader({ tag, title, light = false, children }: SectionHeaderProps) {
  return (
    <>
      <span className={styles.tag}>{tag}</span>
      <h2 className={cx(styles.sectionTitle, light && styles.sectionTitleLight)}>{title}</h2>
      <div className={styles.divider} />
      {children}
    </>
  );
}

type PageHeroProps = {
  tag: string;
  title: string;
  text: string;
};

function PageHero({ tag, title, text }: PageHeroProps) {
  return (
    <div className={styles.pageHero}>
      <div className={styles.container}>
        <span className={styles.tag}>{tag}</span>
        <h1 className={styles.pageHeroTitle}>{title}</h1>
        <p className={styles.pageHeroText}>{text}</p>
      </div>
    </div>
  );
}

export default function RjcContracting() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Page;

    if (PAGES.includes(hash)) {
      setPage(hash);
    }
  }, []);

  function navigate(nextPage: Page) {
    setPage(nextPage);
    setMenuOpen(false);
    window.history.pushState(null, "", `#${nextPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getFormValue(data: FormData, key: string): string {
    const value = data.get(key);
    return typeof value === "string" ? value : "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstName = getFormValue(data, "firstName");
    const lastName = getFormValue(data, "lastName");
    const email = getFormValue(data, "email");
    const phone = getFormValue(data, "phone") || "Not provided";
    const company = getFormValue(data, "company") || "Not provided";
    const service = getFormValue(data, "service");
    const location = getFormValue(data, "location") || "Not provided";
    const description = getFormValue(data, "description");

    const subject = encodeURIComponent(`RJC Quote Request — ${firstName} ${lastName}`);

    const body = encodeURIComponent(
      "QUOTE REQUEST FROM WEBSITE\n" +
        "================================\n\n" +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Company: ${company}\n` +
        `Service Needed: ${service}\n` +
        `Project Location: ${location}\n\n` +
        "PROJECT DESCRIPTION:\n" +
        description
    );

    window.location.href = `mailto:kristi@rjccontracting.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  }

  return (
    <div className="bg-rjc-white text-rjc-black">
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><button className={styles.navButton} type="button" onClick={() => navigate("home")}>Home</button></li>
          <li><button className={styles.navButton} type="button" onClick={() => navigate("services")}>Services</button></li>
          <li><button className={styles.navButton} type="button" onClick={() => navigate("about")}>About</button></li>
          <li><button className={styles.navButton} type="button" onClick={() => navigate("projects")}>Projects</button></li>
          <li><button className={cx(styles.navButton, styles.navCta)} type="button" onClick={() => navigate("contact")}>Request a Quote</button></li>
        </ul>

        <button className={styles.hamburger} type="button" onClick={() => setMenuOpen((current) => !current)} aria-label="Menu">
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      <div className={cx(styles.mobileMenu, menuOpen && styles.mobileMenuOpen)}>
        {PAGES.map((item) => (
          <button className={styles.mobileMenuButton} key={item} type="button" onClick={() => navigate(item)}>
            {item === "contact" ? "Request a Quote" : item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {page === "home" && (
        <main className={styles.page}>
          <div className={styles.hero}>
            <div className={styles.heroBg} style={{ backgroundImage: `url(${ASSETS.hero})` }} />
            <div className={styles.heroContent}>
              <p className={cx(styles.tag, "animate-fadeUp")}>Civil Engineering Specialists</p>
              <h1 className={cx(styles.heroTitle, "animate-fadeUp [animation-delay:0.15s]")}>Engineered<em className="text-tan"> Excellence</em><br /></h1>
              <p className={cx(styles.heroText, "animate-fadeUp [animation-delay:0.3s]")}>RJC Contracting, Inc. delivers expert civil engineering, concrete construction, and consulting services — with decades of proven results on complex, high-stakes projects.</p>
              <div className="animate-fadeUp [animation-delay:0.45s]">
                <button className={styles.buttonPrimary} type="button" onClick={() => navigate("contact")}>Request a Quote</button>
                <button className={styles.buttonOutline} type="button" onClick={() => navigate("projects")}>View Projects</button>
              </div>
            </div>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.stat}><span className={styles.statNum}>30+</span><span className={styles.statLabel}>Years Experience</span></div>
            <div className={styles.stat}><span className={styles.statNum}>100+</span><span className={styles.statLabel}>Projects Completed</span></div>
            <div className={styles.stat}><span className={styles.statNum}>3</span><span className={styles.statLabel}>Core Specialties</span></div>
            <div className={styles.stat}><span className={styles.statNum}>AZ</span><span className={styles.statLabel}>Licensed & Insured</span></div>
          </div>

          <section className={cx(styles.section, styles.servicesPreview)}>
            <div className={styles.container}>
              <SectionHeader tag="What We Do" title={<>Civil Engineering<br />Built for Complexity</>}>
                <p className={styles.lede}>From foundation to finish, RJC Contracting brings engineering expertise and field experience to every project. We specialize in work that demands precision, accountability, and deep technical knowledge.</p>
              </SectionHeader>

              <div className={styles.servicesGrid}>
                {services.map((service) => (
                  <article className={styles.serviceCard} key={service.title}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceText}>{service.text}</p>
                  </article>
                ))}
              </div>

              <div className={cx(styles.center, styles.spaced)}>
                <button className={styles.buttonPrimary} type="button" onClick={() => navigate("services")}>View All Services</button>
              </div>
            </div>
          </section>

          <section className={styles.projectsPreview}>
            <div className={styles.container}>
              <SectionHeader tag="Recent Work" title={<>Projects That Speak<br />for Themselves</>} light />

              <div className={styles.projectGrid}>
                {projectPreview.map((project) => (
                  <div className={cx(styles.projectItem, project.tall && styles.projectTall)} key={project.label}>
                    <img className={styles.projectImage} src={project.image} alt={project.label} />
                    <div className={styles.projectOverlay}><span className={styles.projectLabel}>{project.label}</span></div>
                  </div>
                ))}
              </div>

              <div className={cx(styles.center, styles.spaced)}>
                <button className={styles.buttonOutline} type="button" onClick={() => navigate("projects")}>See All Projects</button>
              </div>
            </div>
          </section>

          <CallToAction navigate={navigate} />
        </main>
      )}

      {page === "services" && (
        <main className={styles.page}>
          <PageHero tag="Our Expertise" title="Services & Capabilities" text="RJC Contracting specializes in civil engineering and concrete construction services that demand experience, precision, and professional accountability." />

          <section className={styles.servicesDetail}>
            <div className={styles.container}>
              {serviceDetails.map((service) => (
                <article className={styles.serviceRow} key={service.title}>
                  <div className={styles.serviceRowNum}>{service.num}</div>
                  <div>
                    <h3 className={styles.serviceRowTitle}>{service.title}</h3>
                    {service.paragraphs.map((paragraph) => <p className={styles.serviceRowText} key={paragraph}>{paragraph}</p>)}
                    <div className={styles.serviceTags}>
                      {service.tags.map((tag) => <span className={styles.tagPill} key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <CallToAction navigate={navigate} title="Have a Project in Mind?" text="Contact us to discuss scope, timeline, and how RJC can help." />
        </main>
      )}

      {page === "about" && (
        <main className={styles.page}>
          <PageHero tag="Our Story" title="About RJC Contracting" text="A Mesa, Arizona-based civil engineering and construction firm built on integrity, technical expertise, and a commitment to engineered excellence." />

          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.twoColLayout}>
                <div className={styles.aboutImageWrap}>
                  <img className={styles.aboutImage} src={ASSETS.about} alt="RJC Contracting project work" />
                </div>

                <div>
                  <span className={styles.tag}>Who We Are</span>
                  <h2 className={styles.textTitle}>Decades of Experience. Built Right.</h2>
                  <div className={styles.divider} />
                  <p className={styles.bodyText}>RJC Contracting, Inc. was founded on the belief that great construction starts with great engineering — and that the two should never be separated. Based in Mesa, Arizona, we have spent decades building some of the most technically demanding concrete and civil structures in the Southwest.</p>
                  <p className={styles.bodyText}>Our motto is simple: do it right the first time. From major transportation projects to complex vertical construction, RJC has earned its reputation one project at a time.</p>
                  <p className={styles.bodyText}>We work with public agencies, general contractors, developers, and engineers who need a partner they can trust — someone who shows up, knows the work, and delivers what was promised.</p>
                  <button className={styles.buttonPrimary} type="button" onClick={() => navigate("contact")}>Get in Touch</button>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.valuesGrid}>
            <div className={styles.container}>
              <SectionHeader tag="Our Foundation" title="What We Stand For" light />
              <div className={styles.valuesCards}>
                {values.map((value) => (
                  <article className={styles.valueCard} key={value.title}>
                    <h4 className={styles.valueTitle}>{value.title}</h4>
                    <p className={styles.valueText}>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {page === "projects" && (
        <main className={styles.page}>
          <PageHero tag="Portfolio" title="Past Projects" text="A selection of civil engineering and concrete construction projects completed by the RJC Contracting team." />

          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.projectsFullGrid}>
                {projects.map((project) => (
                  <article className={styles.projectFullItem} key={project.title}>
                    <img className={styles.projectImage} src={project.image} alt={project.title} />
                    <div className={styles.projectOverlay}>
                      <div className={styles.projectFullLabel}>
                        <h4 className={styles.projectFullTitle}>{project.title}</h4>
                        <span className={styles.projectFullCategory}>{project.category}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className={cx(styles.center, styles.spacedLarge)}>
                <p className={styles.muted}>Interested in working with RJC on your next project?</p>
                <button className={styles.buttonPrimary} type="button" onClick={() => navigate("contact")}>Request a Quote</button>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "contact" && (
        <main className={styles.page}>
          <PageHero tag="Contact" title="Request a Quote" text="Tell us about your project and we’ll get back to you promptly to discuss how RJC can help." />

          <section className={styles.section}>
            <div className={styles.container}>
              <div className={styles.contactLayout}>
                <div>
                  <h2 className={styles.textTitle}>Let’s Talk About Your Project</h2>
                  <p className={styles.bodyText}>Whether you have a fully scoped project or just an early concept, we’re happy to have a conversation. RJC Contracting brings decades of civil engineering experience to every inquiry — no project is too complex.</p>

                  <ContactItem icon="✉️" label="Email" text={<a href="mailto:kristi@rjccontracting.com">kristi@rjccontracting.com</a>} />
                  <ContactItem icon="🗓️" label="Response Time" text="We aim to respond to all inquiries within 1–2 business days." />

                  <div className={styles.quoteNote}>
                    <p className={styles.quoteNoteText}><strong>“Engineered Excellence”</strong><br />RJC Contracting, Inc. has built its reputation on technical precision, field experience, and honest communication. We look forward to hearing from you.</p>
                  </div>
                </div>

                <div className={styles.quoteForm}>
                  <h3 className={styles.formTitle}>Project Quote Request</h3>
                  <p className={styles.formSubtitle}>Fill out the form below and we’ll be in touch shortly.</p>

                  {!formSent ? (
                    <form onSubmit={handleSubmit}>
                      <div className={styles.formRow}>
                        <FormInput label="First Name *" name="firstName" required placeholder="Jane" />
                        <FormInput label="Last Name *" name="lastName" required placeholder="Smith" />
                      </div>

                      <div className={styles.formRow}>
                        <FormInput label="Email *" name="email" type="email" required placeholder="jane@company.com" />
                        <FormInput label="Phone" name="phone" type="tel" placeholder="(480) 555-0100" />
                      </div>

                      <FormInput label="Company / Organization" name="company" placeholder="Your company name" />

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="service">Service Needed *</label>
                        <select className={styles.formField} id="service" name="service" required defaultValue="">
                          <option value="" disabled>— Select a service —</option>
                          <option>Concrete Structures</option>
                          <option>Onsite Supervision</option>
                          <option>Engineering Consulting</option>
                          <option>Multiple / Unsure</option>
                        </select>
                      </div>

                      <FormInput label="Project Location" name="location" placeholder="City, State" />

                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="description">Project Description *</label>
                        <textarea className={cx(styles.formField, styles.textarea)} id="description" name="description" required placeholder="Please describe your project, scope, and any relevant details..." />
                      </div>

                      <p className={styles.formNote}>* Required fields. Submitting this form will open an email addressed to kristi@rjccontracting.com.</p>
                      <button type="submit" className={styles.submitButton}>Send Quote Request</button>
                    </form>
                  ) : (
                    <div className={styles.formSuccess}>
                      <h3 className={styles.formSuccessTitle}>✓ Message Ready</h3>
                      <p className={styles.formSuccessText}>Your email app should open with the quote request filled out.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer navigate={navigate} />
    </div>
  );
}

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function FormInput({ label, name, type = "text", required = false, placeholder }: FormInputProps) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel} htmlFor={name}>{label}</label>
      <input className={styles.formField} id={name} type={type} name={name} required={required} placeholder={placeholder} />
    </div>
  );
}

type ContactItemProps = {
  icon: string;
  label: string;
  text: ReactNode;
};

function ContactItem({ icon, label, text }: ContactItemProps) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactIcon}>{icon}</div>
      <div>
        <h4 className={styles.contactLabel}>{label}</h4>
        <p className={styles.contactText}>{text}</p>
      </div>
    </div>
  );
}

type CallToActionProps = {
  navigate: NavigateFn;
  title?: string;
  text?: string;
};

function CallToAction({ navigate, title = "“Engineered Excellence”", text = "Ready to bring your project to life? Let’s talk about what RJC can do for you." }: CallToActionProps) {
  return (
    <div className={styles.ctaBand}>
      <div className={cx(styles.container, styles.ctaInner)}>
        <div>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaText}>{text}</p>
        </div>
        <button className={styles.buttonDark} type="button" onClick={() => navigate("contact")}>Request a Free Quote</button>
      </div>
    </div>
  );
}

type FooterProps = {
  navigate: NavigateFn;
};

function Footer({ navigate }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <img className={styles.footerLogo} src={ASSETS.logo} alt="RJC Contracting logo" />
            <p className={styles.footerTagline}>Civil engineering, concrete construction, and consulting services delivered with precision and professionalism.</p>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Navigation</h4>
            <ul className={styles.footerList}>
              {PAGES.map((item) => (
                <li className={styles.footerListItem} key={item}>
                  <button className={styles.footerButton} type="button" onClick={() => navigate(item)}>
                    {item === "contact" ? "Request a Quote" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}><a className={styles.footerLink} href="mailto:kristi@rjccontracting.com">kristi@rjccontracting.com</a></li>
              <li className={styles.footerListItem}>Mesa, Arizona</li>
              <li className={styles.footerListItem}>Licensed & Insured</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>© 2025 RJC Contracting, Inc. All rights reserved.</span>
          <span className={styles.footerLoc}>
            Website built by{" "}
            <a href="mailto:racecarpenter@gmail.com?subject=Build%20my%20website">Race Carpenter</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
