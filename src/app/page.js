"use client";
import React, { useEffect, useState } from "react";
import "./globals.css";

/**
 * RJC Contracting single-page React component.
 *
 * Asset setup:
 * - Upload images to a public Vercel-hosted location, such as Vercel Blob.
 * - Add this environment variable in Vercel / .env.local:
 *   NEXT_PUBLIC_RJC_ASSET_BASE_URL=https://your-public-asset-base-url
 *
 * Example result:
 *   https://your-public-asset-base-url/RJC_Logo.png
 */

const ASSET_BASE_URL = process.env.NEXT_PUBLIC_RJC_ASSET_BASE_URL || "";

function assetPath(filename) {
  const cleanBase = ASSET_BASE_URL.replace(/\/$/, "");
  const encodedFilename = filename
    .split("/")
    .map(encodeURIComponent)
    .join("/");

  return `${cleanBase}/${encodedFilename}`;
}

const ASSETS = {
  logo: assetPath("RJC_Logo.png"),
  hero: assetPath("logo-2.png"),
  project1: assetPath("1607 Day 1 Photo 2.jpg"),
  project2: assetPath("2012-08-27 08.51.04.jpg"),
  project3: assetPath("2012-08-27 09.17.15.jpg"),
  project4: assetPath("2012-10-18 11.05.47.jpg"),
  project5: assetPath("DSC04380.jpg"),
  project6: assetPath("Feb 24 2016 3.jpg"),
  project7: assetPath("IMG_3540.jpg"),
  project8: assetPath("IMG_6169.jpg"),
  project9: assetPath("Sky Harbor Security Wall.jpg"),
  project10: assetPath("Liberty Parking Garage Phase III.jpg"),
  project11: assetPath("BCS Demo Fascia Removal Sky Harbor.jpg"),
  project12: assetPath("2015-04-16_07-46-16_166.jpg"),
  project13: assetPath("2014-12-16_14-15-32_958.jpg"),
  project14: assetPath("IMG_4609.jpeg"),
  project15: assetPath("IMG_6185 (3).jpeg"),
  project17: assetPath("Liberty Parking Garage Phase III.jpg"),
  project18: assetPath("IMG_3022.jpeg"),
 about: assetPath("about.jpg"),
};


const services = [
  {
    title: "Concrete Structures",
    text:
      "Bridges, retaining walls, culverts, tilt-up panels, and complex formed structures. We handle the full scope — form, pour, and finish.",
  },
  {
    title: "Onsite Supervision",
    text:
      "Experienced project supervision providing quality control, schedule management, and daily oversight for civil and structural construction.",
  },
  {
    title: "Engineering Consulting",
    text:
      "Technical consulting services including reviews, plans, project troubleshooting, and expert guidance for public and private clients.",
  },
];

const serviceDetails = [
  {
    num: "01",
    title: "Concrete Structures",
    paragraphs: [
      "RJC has built a reputation across Arizona and the Southwest for delivering high-complexity concrete structures on time and to spec. Our crews have the experience to tackle challenging pours, complex formwork systems, and precision-critical structural elements that other contractors avoid.",
      "From transportation infrastructure to commercial and public facilities, we bring the tools, workforce, and engineering knowledge to deliver results.",
    ],
    tags: [
      "Bridge Structures",
      "Architectural & Civil Precast Structure Erecting",
      "Culverts & Drainage",
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

const projectPreview = [
  { image: ASSETS.project1, label: "Concrete Experts", tall: true },
  { image: ASSETS.project2, label: "30 Years of Excellence" },
  { image: ASSETS.project3, label: "Professionals in the Field" },
];

const projects = [
  { image: ASSETS.project1},
  { image: ASSETS.project2},
  { image: ASSETS.project3},
  { image: ASSETS.project4},
  { image: ASSETS.project5},
  { image: ASSETS.project6},
  { image: ASSETS.project7},
  { image: ASSETS.project8},
  { image: ASSETS.project9},
  { image: ASSETS.project10}, 
  { image: ASSETS.project11},
  { image: ASSETS.project12},
  { image: ASSETS.project13},
  { image: ASSETS.project14},
  { image: ASSETS.project15},
  { image: ASSETS.project17},
  { image: ASSETS.project18},
];

const values = [
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

function SectionHeader({ tag, title, light = false, children }) {
  return (
    <>
      <span className="section-tag">{tag}</span>
      <h2 className={`section-title ${light ? "light" : ""}`}>{title}</h2>
      <div className="divider" />
      {children}
    </>
  );
}

function PageHero({ tag, title, text }) {
  return (
    <div className="page-hero">
      <div className="container">
        <span className="section-tag page-hero-tag">{tag}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function RjcContracting() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && ["home", "services", "about", "projects", "contact"].includes(hash)) {
      setPage(hash);
    }
  }, []);

  function navigate(nextPage) {
    setPage(nextPage);
    setMenuOpen(false);
    window.history.pushState(null, "", `#${nextPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `RJC Quote Request — ${data.get("firstName") || ""} ${data.get("lastName") || ""}`
    );

    const body = encodeURIComponent(
      "QUOTE REQUEST FROM WEBSITE\n" +
        "================================\n\n" +
        `Name: ${data.get("firstName")} ${data.get("lastName")}\n` +
        `Email: ${data.get("email")}\n` +
        `Phone: ${data.get("phone") || "Not provided"}\n` +
        `Company: ${data.get("company") || "Not provided"}\n` +
        `Service Needed: ${data.get("service")}\n` +
        `Project Location: ${data.get("location") || "Not provided"}\n\n` +
        "PROJECT DESCRIPTION:\n" +
        data.get("description")
    );

    window.location.href = `mailto:kristi@rjccontracting.com?subject=${subject}&body=${body}`;
    setFormSent(true);
  }

  return (
    <div className="rjc-site">
      <nav>
        <ul className="nav-links">
          <li><button type="button" onClick={() => navigate("home")}>Home</button></li>
          <li><button type="button" onClick={() => navigate("services")}>Services</button></li>
          <li><button type="button" onClick={() => navigate("about")}>About</button></li>
          <li><button type="button" onClick={() => navigate("projects")}>Projects</button></li>
          <li><button type="button" className="nav-cta" onClick={() => navigate("contact")}>Request a Quote</button></li>
        </ul>

        <button className="hamburger" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["home", "services", "about", "projects", "contact"].map((item) => (
          <button key={item} type="button" onClick={() => navigate(item)}>
            {item === "contact" ? "Request a Quote" : item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {page === "home" && (
        <main className="page active">
          <div className="hero">
            <div className="hero-bg" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
            <div className="hero-content">
              <p className="hero-tag animate">Civil Engineering Specialists</p>
              <h1 className="animate delay-1">
                30 Years of <em>Excellence</em><br />
              </h1>
              <p className="animate delay-2">
                RJC Contracting, Inc. delivers expert civil engineering, concrete construction, and consulting services — with decades of proven results on complex, high-stakes projects.
              </p>
              <div className="animate delay-3">
                <button className="btn-primary" type="button" onClick={() => navigate("contact")}>Request a Quote</button>
                <button className="btn-outline" type="button" onClick={() => navigate("projects")}>View Projects</button>
              </div>
            </div>
          </div>

          <div className="stats-bar">
            <div className="stat"><span className="stat-num">30+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat"><span className="stat-num">100+</span><span className="stat-label">Projects Completed</span></div>
            <div className="stat"><span className="stat-num">3</span><span className="stat-label">Core Specialties</span></div>
            <div className="stat"><span className="stat-num">AZ</span><span className="stat-label">Licensed & Insured</span></div>
          </div>

          <section className="services-preview">
            <div className="container">
              <SectionHeader tag="What We Do" title={<>Civil Engineering<br />Built for Complexity</>}>
                <p className="lede">From foundation to finish, RJC Contracting brings engineering expertise and field experience to every project. We specialize in work that demands precision, accountability, and deep technical knowledge.</p>
              </SectionHeader>

              <div className="services-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </article>
                ))}
              </div>

              <div className="center spaced">
                <button className="btn-primary" type="button" onClick={() => navigate("services")}>View All Services</button>
              </div>
            </div>
          </section>

          <section className="projects-preview">
            <div className="container">
              <SectionHeader tag="Recent Work" title={<>Projects That Speak<br />for Themselves</>} light />

              <div className="proj-grid">
                {projectPreview.map((project) => (
                  <div className={`proj-item ${project.tall ? "tall" : ""}`} key={project.label}>
                    <img src={project.image} alt={project.label} />
                    <div className="proj-overlay"><span className="proj-label">{project.label}</span></div>
                  </div>
                ))}
              </div>

              <div className="center spaced">
                <button className="btn-outline" type="button" onClick={() => navigate("projects")}>See All Projects</button>
              </div>
            </div>
          </section>

          <CallToAction navigate={navigate} />
        </main>
      )}

      {page === "services" && (
        <main className="page active">
          <PageHero
            tag="Our Expertise"
            title="Services & Capabilities"
            text="RJC Contracting specializes in civil engineering and concrete construction services that demand experience, precision, and professional accountability."
          />

          <section className="services-detail">
            <div className="container">
              {serviceDetails.map((service) => (
                <article className="service-row" key={service.title}>
                  <div className="service-row-num">{service.num}</div>
                  <div>
                    <h3>{service.title}</h3>
                    {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <div className="service-tags">
                      {service.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
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
        <main className="page active">
          <PageHero
            tag="Our Story"
            title="About RJC Contracting"
            text="A Mesa, Arizona-based civil engineering and construction firm built on integrity, technical expertise, and a commitment to engineered excellence."
          />

          <section>
            <div className="container">
              <div className="about-layout">
                <div className="about-img-wrap">
                  <img src={ASSETS.project2} alt="RJC Contracting project work" />
                </div>

                <div className="about-text">
                  <span className="section-tag">Who We Are</span>
                  <h2>Decades of Experience. Built Right.</h2>
                  <div className="divider" />
                  <p>RJC Contracting, Inc. was founded on the belief that great construction starts with great engineering — and that the two should never be separated. Based in Mesa, Arizona, we have spent decades building some of the most technically demanding concrete and civil structures in the Southwest.</p>
                  <p>Our motto is simple: do it right the first time. From major transportation projects to complex vertical construction, RJC has earned its reputation one project at a time.</p>
                  <p>We work with public agencies, general contractors, developers, and engineers who need a partner they can trust — someone who shows up, knows the work, and delivers what was promised.</p>
                  <button className="btn-primary" type="button" onClick={() => navigate("contact")}>Get in Touch</button>
                </div>
              </div>
            </div>
          </section>

          <div className="values-grid">
            <div className="container">
              <SectionHeader tag="Our Foundation" title="What We Stand For" light />
              <div className="values-cards">
                {values.map((value) => (
                  <article className="value-card" key={value.title}>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {page === "projects" && (
        <main className="page active">
          <PageHero
            tag="Portfolio"
            title="Past Projects"
            text="A selection of civil engineering and concrete construction projects completed by the RJC Contracting team."
          />

          <section>
            <div className="container">
              <div className="projects-full-grid">
                {projects.map((project, index) => {
                  const sizeClass =
                    index % 7 === 0
                      ? "large"
                      : index % 5 === 0
                      ? "wide"
                      : index % 3 === 0
                      ? "tall"
                      : "";

                  return (
                    <article
                      className={`proj-full-item ${sizeClass}`}
                      key={project.title}
                    >
                      <img src={project.image} alt={project.title} />
                    </article>
                  );
                })}
              </div>

              <div className="center spaced-large">
                <p className="muted">Interested in working with RJC on your next project?</p>
                <button className="btn-primary" type="button" onClick={() => navigate("contact")}>Request a Quote</button>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "contact" && (
        <main className="page active">
          <PageHero
            tag="Contact"
            title="Request a Quote"
            text="Tell us about your project and we’ll get back to you promptly to discuss how RJC can help."
          />

          <section>
            <div className="container">
              <div className="contact-layout">
                <div className="contact-info">
                  <h2>Let’s Talk About Your Project</h2>
                  <p>Whether you have a fully scoped project or just an early concept, we’re happy to have a conversation. RJC Contracting brings decades of civil engineering experience to every inquiry — no project is too complex.</p>

                  <ContactItem icon="✉️" label="Email" text={<a href="mailto:kristi@rjccontracting.com">kristi@rjccontracting.com</a>} />
                  <ContactItem icon="🗓️" label="Response Time" text="We aim to respond to all inquiries within 1–2 business days." />

                  <div className="quote-note">
                    <p><strong>“Engineered Excellence”</strong><br />RJC Contracting, Inc. has built its reputation on technical precision, field experience, and honest communication. We look forward to hearing from you.</p>
                  </div>
                </div>

                <div className="quote-form">
                  <h3 className="form-title">Project Quote Request</h3>
                  <p className="form-subtitle">Fill out the form below and we’ll be in touch shortly.</p>

                  {!formSent ? (
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <FormInput label="First Name *" name="firstName" required placeholder="Jane" />
                        <FormInput label="Last Name *" name="lastName" required placeholder="Smith" />
                      </div>

                      <div className="form-row">
                        <FormInput label="Email *" name="email" type="email" required placeholder="jane@company.com" />
                        <FormInput label="Phone" name="phone" type="tel" placeholder="(480) 555-0100" />
                      </div>

                      <FormInput label="Company / Organization" name="company" placeholder="Your company name" />

                      <div className="form-group">
                        <label htmlFor="service">Service Needed *</label>
                        <select id="service" name="service" required defaultValue="">
                          <option value="" disabled>— Select a service —</option>
                          <option>Concrete Structures</option>
                          <option>Onsite Supervision</option>
                          <option>Engineering Consulting</option>
                          <option>Multiple / Unsure</option>
                        </select>
                      </div>

                      <FormInput label="Project Location" name="location" placeholder="City, State" />

                      <div className="form-group">
                        <label htmlFor="description">Project Description *</label>
                        <textarea id="description" name="description" required placeholder="Please describe your project, scope, and any relevant details..." />
                      </div>

                      <p className="form-note">* Required fields. Submitting this form will open an email addressed to kristi@rjccontracting.com.</p>
                      <button type="submit" className="submit-btn">Send Quote Request</button>
                    </form>
                  ) : (
                    <div className="form-success show">
                      <h3>✓ Message Ready</h3>
                      <p>Your email app should open with the quote request filled out.</p>
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

function FormInput({ label, name, type = "text", required = false, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} name={name} required={required} placeholder={placeholder} />
    </div>
  );
}

function ContactItem({ icon, label, text }) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-item-text">
        <h4>{label}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CallToAction({ navigate, title = "“Engineered Excellence”", text = "Ready to bring your project to life? Let’s talk about what RJC can do for you." }) {
  return (
    <div className="cta-band">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <button className="btn-dark" type="button" onClick={() => navigate("contact")}>Request a Free Quote</button>
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src={ASSETS.logo} alt="RJC Contracting logo" />
            <p className="footer-tagline">Civil engineering, concrete construction, and consulting services delivered with precision and professionalism.</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {["home", "services", "about", "projects", "contact"].map((item) => (
                <li key={item}>
                  <button type="button" onClick={() => navigate(item)}>
                    {item === "contact" ? "Request a Quote" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:kristi@rjccontracting.com">kristi@rjccontracting.com</a></li>
              <li>Mesa, Arizona</li>
              <li>Licensed & Insured</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 RJC Contracting, Inc. All rights reserved.</span>
          <span className="footer-loc">
              Website built by{" "}
              <a href="mailto:racecarpenter@gmail.com?subject=Build%20my%20website">
                Race Carpenter
              </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
