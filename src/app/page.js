import Link from "next/link";
import {
  ASSETS,
  services,
  projectPreview,
  SectionHeader,
  CallToAction,
} from "./components/RjcShared";

export const metadata = {
  title:
    "RJC Contracting | Civil Engineering & Concrete Construction in Arizona",
  description:
    "RJC Contracting provides civil engineering, concrete construction, onsite supervision, and consulting services throughout Mesa, Phoenix, and Arizona.",
};

export default function HomePage() {
  return (
    <main className="page active">
      <div className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${ASSETS.hero})` }}
        />

        <div className="hero-content">
          <p className="hero-tag animate">
            LICENSED, BONDED, AND INSURED
          </p>

          <h1 className="animate delay-1">
            30 Years of <em>Excellence</em>
            <br />
          </h1>

          <p className="animate delay-2">
            RJC Contracting, Inc. delivers expert civil engineering,
            concrete construction, and consulting services — with
            decades of proven results on complex, high-stakes projects.
          </p>

          <div className="animate delay-3">
            <Link className="btn-primary" href="/contact">
              Request a Quote
            </Link>

            <Link className="btn-outline" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-num">30+</span>
          <span className="stat-label">Years Experience</span>
        </div>

        <div className="stat">
          <span className="stat-num">100+</span>
          <span className="stat-label">Projects Completed</span>
        </div>

        <div className="stat">
          <span className="stat-num">3</span>
          <span className="stat-label">Core Specialties</span>
        </div>

        <div className="stat">
          <span className="stat-num">AZ</span>
          <span className="stat-label">Licensed & Insured</span>
        </div>
      </div>

      <section className="services-preview">
        <div className="container">
          <SectionHeader
            tag="What We Do"
            title={
              <>
                Civil Engineering
                <br />
                Built for Complexity
              </>
            }
          >
            <p className="lede">
              From foundation to finish, RJC Contracting brings
              engineering expertise and field experience to every
              project. We specialize in work that demands precision,
              accountability, and deep technical knowledge.
            </p>
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
            <Link className="btn-primary" href="/services">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="projects-preview">
        <div className="container">
          <SectionHeader
            tag="Recent Work"
            title={
              <>
                Projects That Speak
                <br />
                for Themselves
              </>
            }
            light
          />

          <div className="proj-grid">
            {projectPreview.map((project) => (
              <div
                className={`proj-item ${project.tall ? "tall" : ""}`}
                key={project.label}
              >
                <img src={project.image} alt={project.label} />

                <div className="proj-overlay">
                  <span className="proj-label">
                    {project.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="center spaced">
            <Link className="btn-outline" href="/projects">
              See All Projects
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}